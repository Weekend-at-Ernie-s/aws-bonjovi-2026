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

        {days && (
          <div className="bg-swiper-gray flex flex-col items-center">
            <div className="text-center text-3xl md:text-5xl lg:text-6xl pb-6 font-light text-squid-ink pt-18 md:pt-32 lg:pt-40 xl:pt-48" >Photo Gallery</div>
            <div className="flex flex-row items-center pb-14">
              {days?.map((day, idx) => (
                <div key={day.id}>
                  <button
                    className={`rounded-lg py-3 px-4 leading-4 font-bold uppercase ${days.length !== 1 ? 'mr-6' : ''} ${visibleDay === day.id ? 'bg-squid-ink text-white' : 'bg-button-gray text-squid-ink'}`}
                    onClick={() => {setIsVisibleDay(day.id)}}
                  >
                    {day.dayName}
                  </button>
                </div>
              ))}
              {days.length < 4 && (<div className="text-abajo uppercase font-medium">Check back soon for day {days.length + 1}</div>)}
            </div>
            {days?.map((day) => (
              <div key={day.id} className={`${visibleDay === day.id ? 'block' : 'hidden'}`}>
                <div className="flex flex-row justify-center">
                  {day.albums?.map((album, idx) => (
                    <div className="flex flex-row ">
                      <button
                        key={album.id}
                        className={`font-bold pb-2 ${visibleAlbum === album.id ? 'text-springwood border-b-2' : 'text-vintage'}`}
                        onClick={() => {setIsVisibleAlbum(album.id)}}
                      >
                        {album.albumName}
                      </button>
                      {day.albums?.length > 1 && idx !== day.albums?.length - 1 && (<div className="border-r-2 border-button-gray h-6 mr-3 pl-3 mb-2" />)}
                    </div>
                  ))}
                </div>
                <div className="border-b-2 border-button-gray w-full mb-6" />
                {day.albums?.map((album) => (
                  <div key={album.id} className={`${visibleAlbum === album.id ? 'block' : 'hidden'} max-w-xs md:max-w-3xl lg:max-w-6xl xl:max-w-8xl m-auto pb-48`}>
                    <div className="text-abajo pb-12">{album?.albumDescription?.albumDescription}</div>
                    {album.photos && (<Album photos={album.photos} />)}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

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
