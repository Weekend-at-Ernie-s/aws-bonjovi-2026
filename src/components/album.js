import React from "react"
import { graphql } from "gatsby"
import Footer from "../components/footer"
import SEOHead from "../components/head"
import Header from "../components/header"


export default function Album(dayId, props) {
  const { allContentfulAlbum } = props.data
  const { edges: albums } = allContentfulAlbum;
  // const { edges: days } = allContentfulDay;
  console.log('allContentfulAlbum', allContentfulAlbum)
  // console.log('allContentfulDay', allContentfulDay)

  return (
      <div>
      {albums.map((album) => (
        <div key={album.id}>{album.albumName}</div>
      ))}
      </div>
  )
}
/*
export const query = graphql(dayId)`
  {
    allContentfulAlbum(
    filter: {day: {elemMatch: {id: {eq: $dayId}}}}
    ) {
      nodes {
        albumName
      }
    }
  }
`
*/
// allContentfulAlbum {
//   nodes {
//     id
//     albumName
//     albumDescription {
//       albumDescription
//     }
//     photos {
//       id
//       gatsbyImageData
//     }
//   }
// }
