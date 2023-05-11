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
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
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
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={8}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {photos.map((photo) => (
          <SwiperSlide>
            <GatsbyImage alt={photo.alt} image={getImage(photo.gatsbyImageData)} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
