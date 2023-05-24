import React from "react";
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


  const buttonClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', { event_category: 'album', event_label: 'photo view' });
    }
  }
  React.useEffect(() => {
    const prevButtons = document.querySelectorAll('.swiper-button-prev')
    const nextButtons = document.querySelectorAll('.swiper-button-next')
    const buttons = [...prevButtons, ...nextButtons]
    buttons.forEach((el) => {
      el.addEventListener('click', buttonClick);
    })
  }, [photos])

  const downloadImage = (photo) => {
    saveAs(photo.url, photo.filename)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', { event_category: 'download', event_label: photo.filename });
    }
  }

  return (
    <div className="">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 bg-photo-gray rounded-lg h-44 md:h-96 lg:h-148 xl:h-174"
        style={{ marginBottom: '28px' }}
      >
        {photos.map((photo) => (
          <SwiperSlide key={photo.id} className="">
            <GatsbyImage className="h-full rounded-lg" imgStyle={{ borderRadius: '8px' }} objectFit="contain" alt={photo.description || photo.filename || ''} image={getImage(photo.gatsbyImageData)} />
            <button onClick={() => {downloadImage(photo)}} className="absolute top-3 right-3 md:top-7 md:right-11 bg-white opacity-50 rounded-md p-1 z-50"><img alt="download button" className="h-5 w-5 text-squid-ink-50 fill-current" src={downloadButton} /></button>
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
          <SwiperSlide className="">
            <GatsbyImage className="h-full rounded-lg" alt={photo.description || photo.filename || ''} image={getImage(photo.gatsbyImageData)} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
