import React from "react";
import { trackCustomEvent } from "gatsby-plugin-google-analytics"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { saveAs } from 'file-saver'
import downloadButton from '../assets/download-button.svg'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "../styles/swiper.css";

// import required Swiper modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function Album({photos}) {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);

  const downloadImage = (photo) => {
    saveAs(photo.url, photo.filename)
  }

  return (
    <div className="">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 h-40 md:h-96 lg:h-174 mb-2 md:mb-4 lg:mb-6 xl:mb-8"
        style={{ paddingBottom: '28px' }}
      >
        {photos.map((photo) => (
          <SwiperSlide key={photo.id} className="" onClick={(e) => { e.preventDefault(); trackCustomEvent({ category: 'Album', action: 'Photo Click', label: `${photo.description || photo.filename || ''}` })}}>
            <GatsbyImage className="h-full rounded-lg" imgStyle={{ borderRadius: '8px' }} objectFit="contain" alt={photo.description || photo.filename || ''} image={getImage(photo.gatsbyImageData)} />
            <button onClick={() => {downloadImage(photo)}} className="absolute bottom-0 right-1/2 bg-white opacity-50 rounded-md p-1 z-50" style={{ marginBottom: '-32px' }}><img className="h-5 w-5 text-squid-ink-50 fill-current" src={downloadButton} /></button>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        loop={true}
        onSwiper={setThumbsSwiper}
        spaceBetween={12}
        slidesPerView={7}
        navigation={true}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper h-10 md:h-16 lg:h-22 w-full"
      >
        {photos.map((photo) => (
          <SwiperSlide className="" onClick={(e) => { e.preventDefault(); trackCustomEvent({ category: 'Album', action: 'Photo Click', label: `${photo.description || photo.filename || ''}` })}}>
            <GatsbyImage className="h-full rounded-lg" alt={photo.description || photo.filename || ''} image={getImage(photo.gatsbyImageData)} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
