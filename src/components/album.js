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

// import required Swiper modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function Album({photos}) {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);

  return (
    <div className="">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 h-40 md:h-96 lg:h-148 xl:h-174 mb-2 md:mb-4 lg:mb-6 xl:mb-8"
      >
        {photos.map((photo) => (
          <SwiperSlide className="">
            <GatsbyImage className="h-full rounded-lg" imgStyle={{ borderRadius: '8px' }} objectFit="contain" alt={photo.description || photo.filename || ''} image={getImage(photo.gatsbyImageData)} />
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
          <SwiperSlide className="" >
            <GatsbyImage className="h-full rounded-lg" alt={photo.description || photo.filename || ''} image={getImage(photo.gatsbyImageData)} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
