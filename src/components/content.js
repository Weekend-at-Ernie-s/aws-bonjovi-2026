import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import border from '../assets/border.png'

export default function Content({ content }) {
  if (!content) return null;

  return (
    <>
      {content?.map((item) => {
        const lightTheme = item.backgroundColor === 'light';
        return (
          <div key={item.id} className={`flex flex-col items-center ${lightTheme ? 'bg-acl-pink': 'bg-acl-pink'}`}>
            <div className="w-full h-8 my-10 bg-center bg-repeat-x" style={{ backgroundSize: 'contain', backgroundImage: lightTheme ? `url(${border})` : null}} />
            <div className="flex flex-col items-center px-6 py-8 md:py-16 max-w-8xl w-11/12">
              <div className='leading-none text-center text-3xl md:text-5xl lg:text-6xl pb-6 font-light text-acl-red drop-shadow-md'>{item.heading?.heading}</div>
              <div className={`leading-snug text-center text-base text-acl-red drop-shadow-md ${(item.photos || item.youTubeUrl) && 'pb-6'}`} >{item.description?.description}</div>

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
                  className="w-full aspect-video  md:max-w-192 lg:w-296  xl:w-348 rounded-xl"
                  src={item?.youTubeUrl}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen>
                </iframe>
              )}
            </div>
            <div className="w-full h-8 my-10 bg-center bg-repeat-x" style={{ backgroundSize: 'contain', backgroundImage: lightTheme ? `url(${border})` : null}} />
          </div>
        )
      })}
    </>
  )
}
