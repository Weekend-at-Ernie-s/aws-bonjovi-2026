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
          <div key={item.id} className={`flex flex-col items-center ${lightTheme ? 'bg-center bg-cover': 'bg-squid-ink'}`} style={{ backgroundImage: lightTheme ? `url(${lightBackgroundImage})` : null }}>
            <div className="flex flex-col items-center px-6 py-8 md:py-18 max-w-8xl">
              <div className={`leading-none text-center text-3xl md:text-5xl lg:text-6xl pb-6 font-light ${lightTheme ? 'text-squid-ink' : 'text-white'}`} >{item.heading?.heading}</div>
              <div className={`leading-snug text-center text-base ${(item.photos || item.youTubeUrl) && 'pb-6'} ${lightTheme ? 'text-abajo' : 'text-pueblo'}`} >{item.description?.description}</div>

              {item.photos && (
                <div className="flex flex-col md:flex-row">
                  {item.photos.map((photo, idx) => (
                    <div key={photo.id} className={`w-full md:w-1/3 my-6 md:my-0 ${idx + 1 !== item.photos.length ? 'md:mr-6' : ''}`}>
                      <GatsbyImage className="rounded-xl" alt={photo.description || photo.filename || ''} image={getImage(photo.gatsbyImageData)} />
                    </div>
                  ))}
                </div>
              )}

              {item.youTubeUrl && (
                <iframe
                  className="w-85.25 h-48 md:w-192 md:h-108 lg:w-296 lg:h-166.5 xl:w-348 xl:h-196 rounded-xl"
                  src={item?.youTubeUrl}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen>
                </iframe>
              )}
            </div>
          </div>
        )
      })}
    </>
  )
}
