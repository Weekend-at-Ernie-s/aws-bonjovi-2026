import React, { useRef, useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "../styles/swiper.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function Album({photos}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "rgba(35, 47, 62, 0.1)",
          "--swiper-pagination-color": "rgba(35, 47, 62, 0.1)",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {photos.map((photo) => (
          <SwiperSlide>
            <GatsbyImage alt={photo.alt} image={getImage(photo.gatsbyImageData)} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        style={{
          "--swiper-navigation-color": "rgba(35, 47, 62, 0.1)",
          "--swiper-pagination-color": "rgba(35, 47, 62, 0.1)",
        }}
        loop={true}
        onSwiper={setThumbsSwiper}
        spaceBetween={16}
        slidesPerView={8}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {photos.map((photo) => (
          <SwiperSlide style={{borderRadius: '8px'}}>
            <GatsbyImage alt={photo.alt} image={getImage(photo.gatsbyImageData)} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
