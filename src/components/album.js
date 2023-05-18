import React from "react";
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
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);

  // thumbnail slider height 32 64 88
  return (
    <div className="">
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
        className="mySwiper2 h-40 md:h-96 lg:h-148 xl:h-174 mb-2 md:mb-4 lg:mb-6 xl:mb-8"
      >
        {photos.map((photo) => (
          <SwiperSlide className="">
            <GatsbyImage className="h-full" imgStyle={{ borderRadius: '8px' }} objectFit="contain" alt={photo.description || photo.filename || ''} image={getImage(photo.gatsbyImageData)} />
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
        slidesPerView={photos.length < 9 ? photos.length : 9}
        navigation={true}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper h-8 md:h-16 lg:h-22 w-full"
      >
        {photos.map((photo) => (
          <SwiperSlide className="" >
            <GatsbyImage className="h-full rounded-lg" alt={photo.description || photo.filename || ''} image={getImage(photo.gatsbyImageData)} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
