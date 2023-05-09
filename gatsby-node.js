const { documentToHtmlString } = require("@contentful/rich-text-html-renderer")
const { getGatsbyImageResolver } = require("gatsby-plugin-image/graphql-utils")

exports.createSchemaCustomization = async ({ actions }) => {
  actions.createFieldExtension({
    name: "blocktype",
    extend(options) {
      return {
        resolve(source) {
          return source.internal.type.replace("Contentful", "")
        },
      }
    },
  })

  actions.createFieldExtension({
    name: "imagePassthroughArgs",
    extend(options) {
      const { args } = getGatsbyImageResolver()
      return {
        args,
      }
    },
  })

  actions.createFieldExtension({
    name: "imageUrl",
    extend(options) {
      const schemaRE = /^\/\//
      const addURLSchema = (str) => {
        if (schemaRE.test(str)) return `https:${str}`
        return str
      }
      return {
        resolve(source) {
          return addURLSchema(source.file.url)
        },
      }
    },
  })

  actions.createFieldExtension({
    name: "richText",
    extend(options) {
      return {
        resolve(source, args, context, info) {
          const body = source.body
          const doc = JSON.parse(body.raw)
          const html = documentToHtmlString(doc)
          return html
        },
      }
    },
  })

  // abstract interfaces
  actions.createTypes(/* GraphQL */ `
    interface AlbumDescription {
      albumDescription: String
    }

    interface Album {
      id: ID!
      albumName: String
      albumDescription: AlbumDescription
      photos: [ContentfulAsset]
    }

    interface Day implements Node {
      id: ID!
      dayName: String
      albums: [Album]
    }
  `)

  // CMS-specific types for Homepage
  actions.createTypes(/* GraphQL */ `
    type ContentfulDay implements Node & Day @dontInfer {
      id: ID!
      dayName: String
      albums: [Album] @link(from: "albums___NODE")
      blocktype: String @blocktype
    }

    type ContentfulAlbum implements Node & Album @dontInfer {
      id: ID!
      albumName: String
      albumDescription: AlbumDescription
      photos: [ContentfulAsset] @link(from: "photos___NODE")
    }

    type ContentfulAsset implements Node {
      id: ID!
      alt: String @proxy(from: "title")
      gatsbyImageData: GatsbyImageData
      url: String @imageUrl
      file: JSON
      title: String
    }
  `)

  // Page types
  // actions.createTypes(/* GraphQL */ `
  //   type ContentfulPage implements Node & Page {
  //     id: ID!
  //     slug: String!
  //     title: String
  //     description: String
  //     html: String! @richText
  //   }
  // `)
}

exports.createPages = ({ actions }) => {
  const { createSlice } = actions
  createSlice({
    id: "header",
    component: require.resolve("./src/components/header.js"),
  })
  createSlice({
    id: "footer",
    component: require.resolve("./src/components/footer.js"),
  })
}
