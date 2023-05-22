exports.createSchemaCustomization = async ({ actions }) => {
  // actions.printTypeDefinitions({path: './typeDefs.txt'});

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

  actions.createTypes(`
    interface AlbumDescription {
      albumDescription: String
    }
    interface Description {
      description: String
    }
    interface Heading {
      heading: String
    }
  `)

  actions.createTypes(`
    type ContentfulAsset implements Node {
      id: ID!
      alt: String @proxy(from: "title")
      gatsbyImageData: GatsbyImageData
      url: String @imageUrl
      file: JSON
      title: String
    }

    type ContentfulAlbum implements Node {
      id: ID!
      albumName: String
      albumDescription: AlbumDescription
      photos: [ContentfulAsset] @link(from: "photos___NODE")
    }

    type ContentfulDay implements Node {
      id: ID!
      dayName: String
      albums: [ContentfulAlbum] @link(by: "id", from: "albums___NODE")
    }

    type ContentfulInfoBlock implements Node {
      id: ID!
      backgroundColor: String
      contentPlacement: String
      photos: [ContentfulAsset] @link(from: "photos___NODE")
      youTubeUrl: String
    }
  `)

}

exports.createPages = ({ actions }) => {
  const { createSlice, createPage } = actions
  createSlice({
    id: "header",
    component: require.resolve("./src/components/header.js"),
  })
  createSlice({
    id: "footer",
    component: require.resolve("./src/components/footer.js"),
  })

}
