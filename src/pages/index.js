import React from "react";
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Footer from "../components/footer"
import SEOHead from "../components/head"
import Header from "../components/header"
import Album from "../components/album"

export default function Homepage(props) {
  const { allContentfulDay, allContentfulInfoBlock } = props.data
  const { nodes: days } = allContentfulDay;
  const { nodes: contents } = allContentfulInfoBlock

  const aboveAlbumContents = contents.filter((c) => c.contentPlacement === 'above')
  const belowAlbumContents = contents.filter((c) => c.contentPlacement === 'below')
  console.log('contents', contents)
  // debugger;

  const renderContent = (content) => {


    return (
    <>
      {content.map((item) => {
        const lightTheme = item.backgroundColor === 'light';
        return (
        <div className={`flex flex-col items-center ${lightTheme ? 'bg-pueblo-25': 'bg-squid-ink'}`}>
          <div className="flex flex-col items-center px-22 py-48 max-w-7xl">
            <div className={`text-5xl pb-6 ${lightTheme ? 'text-squid-ink' : 'text-white'}`} >{item.heading.heading}</div>
            <div className={`text-center text-base pb-6 ${lightTheme ? 'text-abajo' : 'text-pueblo'}`} >{item.description?.description}</div>

            {item.photos && (
              <div className="flex flex-row">
                {item.photos.map((photo) => (
                  <div className="w-1/3 mx-6">
                    <GatsbyImage alt={photo.description || photo.filename || ''} image={getImage(photo.gatsbyImageData)} />
                  </div>
                ))}
              </div>
            )}

            {item.video && (
              <div>
                  <video width="320" height="240" controls src={item.video.url}/>
              </div>
            )}
          </div>
        </div>
      )})}
    </>
  )}

  return (
      <div>
        <Header />

        {renderContent(aboveAlbumContents)}

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

        {renderContent(belowAlbumContents)}

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
