import React, { useRef, useState } from "react";
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Footer from "../components/footer"
import SEOHead from "../components/head"
import Header from "../components/header"
import Album from "../components/album"


export default function Homepage(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  console.log('thumbsSwiper', thumbsSwiper)
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
            <div className="text-3xl font-bold underline">{day.dayName}</div>

            {day.albums?.map((album) => (
              <div key={album.id}>
                {album.albumName}
                <div className="" style={{ height: '400px'}}>
                {album.photos && (<Album photos={album.photos} />)}
                </div>
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
