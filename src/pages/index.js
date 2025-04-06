import React from "react";
import { graphql } from "gatsby"
import Album from "../components/album"
import Content from "../components/content"
import Footer from "../components/footer"
import SEOHead from "../components/head"
import Header from "../components/header"

export default function Homepage(props) {
  const { allContentfulEvent: { nodes: events } } = props.data
  let galleries = []
  let contents = []
  events[0].content.map((c) => c.albums ? galleries.push(c) : contents.push(c))

  const orderedGalleries = galleries?.sort((a, b) => a?.galleryName.localeCompare(b?.galleryName))

  const [visibleAlbum, setIsVisibleAlbum] = React.useState(orderedGalleries?.[0]?.albums?.[0]?.id)
  const hasOneAlbum = orderedGalleries?.[0]?.albums?.length === 1;

  const aboveAlbumContents = contents.filter((c) => c.contentPlacement === 'above')
  const belowAlbumContents = contents.filter((c) => c.contentPlacement === 'below')

  return (
      <div>
        <Header content={aboveAlbumContents} />
        <div className="bg-white h-2 md:h-3 lg:h-4" />

        <Content content={aboveAlbumContents} />

        {orderedGalleries.length ? (
          <div className="bg-photo-gray flex flex-col items-center xs:w-screen">
            <div className="text-center text-3xl md:text-5xl lg:text-6xl pb-6 font-light text-squid-ink pt-6 md:pt-18 leading-none" >{orderedGalleries?.[0]?.galleryName}</div>
            {orderedGalleries?.map((day) => (
              <div key={day.id} className='block w-full'>
              {!hasOneAlbum && (
                <>
                  <div className="flex flex-row flex-wrap justify-center">
                    {day.albums?.map((album, idx) => (
                      <div className={`flex flex-row w-max items-center`} key={album.id}>
                        <button
                          key={album.id}
                          className={`font-bold pb-2 leading-none hover:text-springwood-dark border-transparent border-2 ${visibleAlbum === album.id ? 'text-springwood-dark border-b-springwood-dark' : 'text-vintage'}`}
                          onClick={() => {setIsVisibleAlbum(album.id)}}
                        >
                          {album.albumName}
                        </button>
                        {day.albums?.length > 1 && idx !== day.albums?.length - 1 && (<div className="border-r-2 border-button-gray h-6 mr-3 pl-3 mb-2" />)}
                      </div>
                    ))}
                  </div>
                  <div className="border-b-2 border-button-gray w-full mb-6" />
                </>
              )}

                {day.albums?.map((album) => (
                  <div key={album.id} className={`${visibleAlbum === album.id ? 'block' : 'hidden'} mx-6 md:mx-36 m-auto pb-6 md:pb-18`}>
                    {album.albumDescription?.albumDescription && (<div className="text-springwood-dark pb-12 leading-snug text-center">{album?.albumDescription?.albumDescription}</div>)}
                    {album.photos && (<Album photos={album.photos} />)}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ) : null}

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
    allContentfulEvent(filter: {contentful_id: {eq: "7rfrLDvvclMkUIApDMJBkK"}}) {
      nodes {
        contentful_id
        eventName
        content {
          ... on ContentfulGalleries {
            id
            galleryName
            albums {
              id
              albumName
              albumDescription {
                albumDescription
              }
              photos {
                description
                filename
                file
                gatsbyImageData
                id
                url
              }
            }
          }
          ... on ContentfulInfoBlock {
            id
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
            youTubeUrl
          }
        }
      }
    }
}
`
