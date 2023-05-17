import React from "react";
import { graphql } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Album from "../components/album"
import Content from "../components/content"
import Footer from "../components/footer"
import SEOHead from "../components/head"
import Header from "../components/header"

export default function Homepage(props) {
  const { allContentfulDay, allContentfulInfoBlock } = props.data
  const { nodes: days } = allContentfulDay;
  const { nodes: contents } = allContentfulInfoBlock

  const [visibleDay, setIsVisibleDay] = React.useState(days?.[0].id)
  const [visibleAlbum, setIsVisibleAlbum] = React.useState(days?.[0].albums?.[0].id)

  const aboveAlbumContents = contents.filter((c) => c.contentPlacement === 'above')
  const belowAlbumContents = contents.filter((c) => c.contentPlacement === 'below')
  console.log('contents', contents)
  console.log('days', days)
  // debugger;
  console.log('visible', visibleAlbum)
  return (
      <div>
        <Header />

        <Content content={aboveAlbumContents} />

        {days?.map((day) => (
          <div key={day.id}>
            <button className="text-3xl font-bold underline" onClick={() => {setIsVisibleDay(day.id)}}>{day.dayName}</button>
          </div>
        ))}
        {days?.map((day) => (
          <div key={day.id} className={`${visibleDay === day.id ? 'block' : 'hidden'}`}>
            {day.albums?.map((album) => (
              <div id={album.id} key={album.id}>
                <button onClick={() => {setIsVisibleAlbum(album.id)}}>{album.albumName}</button>
              </div>
            ))}
            {day.albums?.map((album) => (
              <div id={album.id} key={album.id}>
                <div className={`${visibleAlbum === album.id ? 'block' : 'hidden'}`} style={{ height: '400px'}}>
                  {album.photos && (<Album photos={album.photos} />)}
                </div>
              </div>
            ))}
          </div>
        ))}

        <Content content={belowAlbumContents} />

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
    allContentfulDay(sort: {dayName: ASC}) {
      nodes {
        albums {
          id
          albumName
          albumDescription {
            albumDescription
          }
          photos {
            description
            filename
            gatsbyImageData
            id
          }
        }
        dayName
        id
      }
    }

    allContentfulInfoBlock {
      nodes {
        backgroundColor
        contentPlacement
        description {
          description
        }
        heading {
          heading
        }
        photos {
          description
          filename
          gatsbyImageData
          id
        }
        video {
          description
          filename
          file {
            url
          }
          url
        }
      }
    }
  }
`
