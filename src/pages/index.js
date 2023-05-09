import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Footer from "../components/footer"
import SEOHead from "../components/head"
import Header from "../components/header"
import Album from "../components/album"


export default function Homepage(props) {
  const { allContentfulDay } = props.data
  // debugger;
  // const { edges: albums } = allContentfulAlbum;
  const { nodes: days } = allContentfulDay;
  // console.log('allContentfulAlbum', allContentfulAlbum)
  console.log('allContentfulDay', allContentfulDay)

  return (
      <div>
      <Header />
        {days.map((day) => (
          <div key={day.id}>
            {day.dayName}
            {day.albums?.map((album) => (
              <div key={album.id}>
                {album.albumName}
                {album.photos?.map((photo) => (
                  <div key={photo.id}>
                    <GatsbyImage alt={photo.alt} image={getImage(photo.gatsbyImageData)} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      <Footer />
      </div>
  )
}
export const Head = (props) => {
  const homepage = {title: 'Homepage', description: '', image: ''}
  return <SEOHead {...homepage} />
}
export const query = graphql`
  {
    allContentfulDay {
      nodes {
        albums {
          id
          albumName
          albumDescription {
            albumDescription
          }
          photos {
            id
            gatsbyImageData
            alt
          }
        }
        dayName
      }
    }
  }
`

// allContentfulDay(sort: {dayName: ASC}) {
//   nodes {
//     id
//     dayName
//   }
// }
// allContentfulAlbum {
//   edges {
//     node {
//       id
//       albumName
//       albumDescription {
//         albumDescription
//       }
//       photos {
//         id
//         gatsbyImageData
//       }
//     }
//   }
// }
