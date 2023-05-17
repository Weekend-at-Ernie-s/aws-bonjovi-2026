import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import lightBackgroundImage from '../assets/bkg-intro.jpg'

export default function Content({ content }) {
  if (!content) return null;

  return (
    <>
      {content?.map((item) => {
        const lightTheme = item.backgroundColor === 'light';
        return (
          <div className={`flex flex-col items-center ${lightTheme ? 'bg-center bg-cover': 'bg-squid-ink'}`} style={{ backgroundImage: lightTheme ? `url(${lightBackgroundImage})` : null }}>
            <div className="flex flex-col items-center px-16 py-18 md:py-32 lg:py-40 xl:py-48 max-w-7xl">
              <div className={`text-center text-3xl md:text-5xl lg:text-6xl pb-6 ${lightTheme ? 'text-squid-ink' : 'text-white'}`} >{item.heading.heading}</div>
              <div className={`text-center text-base ${(item.photos || item.video) && 'pb-6'} ${lightTheme ? 'text-abajo' : 'text-pueblo'}`} >{item.description?.description}</div>

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
                    <video className="h-48 md:h-108 lg:h-168 xl:h-196" controls src={item.video.url}/>
                </div>
              )}
            </div>
          </div>
        )
      })}
    </>
  )
}
