import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image"
import { getGatsbyImageData } from '@imgix/gatsby';
import { saveAs } from 'file-saver'
import downloadButton from '../assets/download-button.svg'
import closeButton from '../assets/close-button.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required Swiper modules
import { Grid, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/grid';
import 'swiper/css/pagination';

import "../styles/swiper.css";

export default function Album({photos}) {
  // const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
  const [lightboxedImage, setLightboxedImage] = React.useState(null);

  const imgixUrl = (photo) => {
    var url = photo.url;
    url = url.replace("images.ctfassets.net", "awsimages.imgix.net");
    url = url.replace("downloads.ctfassets.net", "awsimages.imgix.net")
    return url;
  }


  const photoView = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', { event_category: 'album', event_label: 'photo view' });
    }
  }

  const lightboxImage = (photo) => {
    console.log(photo)
    photoView();

    setLightboxedImage(photo);
  }

  const downloadImage = (photo) => {
    saveAs(photo.url, photo.filename)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', { event_category: 'download', event_label: photo.filename });
    }
  }

  return (
    <div>
    <div className="album h-96 md:h-174">
      <Swiper
        loop={true}
        slidesPerView={6}
        slidesPerGroup={6}
        breakpoints={{
          425: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            grid: {
              rows: 3,
              fill: "row",
            }
          },
          650: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            grid: {
              rows: 4,
              fill: "row",
            }
          },
          1440: {
            slidesPerView: 6,
            slidesPerGroup: 6,
            grid: {
              rows: 4,
              fill: "row",
            }
          }
        }}
        grid={{
          rows: 4,
          fill: "row",
        }}
        spaceBetween={10}
        navigation={true}
        modules={[Grid, Navigation, Pagination]}
        className="mySwiper"
        style={{ marginBottom: '28px' }}
        onSlideChange={photoView}
      >
        {photos.map((photo) => (
          <SwiperSlide key={photo.id} onClick={() => {lightboxImage(photo)}}>
            <GatsbyImage
              className="h-full"
              imgStyle={{ borderRadius: '8px' }}
              objectFit="cover"
              alt={photo.description || photo.filename || ''}
              loading="eager"
              image={getGatsbyImageData({
                src: imgixUrl(photo),
                imgixParams: {
                  auto: 'compress,format',
                  fit: "fillmax",
                 fill: "blur",
                },
                layout: 'constrained',
                width:1400, //fill out the whole slider in the aspect ratio that it is on smaller screens
                height:642,
                outputPixelDensities: [1],
                breakpoints: [750, 1080, 1200]
              })}
            />
            <button onClick={() => {downloadImage(photo)}} className="download-button absolute top-1 right-1 bg-white opacity-50 rounded-md p-1 z-50">
              <img alt="download button" className="h-4 w-4 text-squid-ink-50 fill-current" src={downloadButton} />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
      {lightboxedImage ? (
        <div onClick={() => {lightboxImage(null)}} className="lightbox flex h-full w-full top-0 left-0 fixed z-10">
          <div className="relative w-11/12 md:w-4/5 items-center justify-center m-auto">
            <button onClick={() => {downloadImage(lightboxedImage)}} className="absolute top-2 right-2 mr-12 bg-white opacity-50 rounded-md p-1 z-50">
              <img alt="download button" className="h-6 w-6 text-squid-ink-50 fill-current" src={downloadButton} />
            </button>
            <button onClick={() => {lightboxImage(null)}} className="absolute top-2 right-2 mr-2 bg-white opacity-50 rounded-md p-1 z-50">
              <img alt="close button" className="h-6 w-6 text-squid-ink-50 fill-current" src={closeButton} />
            </button>
            <GatsbyImage
              className="h-full w-full"
              imgStyle={{ borderRadius: '8px' }}
              objectFit="cover"
              alt={lightboxedImage.description || lightboxedImage.filename || ''}
              loading="eager"
              image={getGatsbyImageData({
                src: imgixUrl(lightboxedImage),
                imgixParams: {
                  auto: 'compress,format',
                  fit: "fillmax",
                  fill: "blur",
                },
                layout: 'constrained',
                width:1400, //fill out the whole slider in the aspect ratio that it is on smaller screens
                // height:642,
                aspectRatio: 16/9,
                outputPixelDensities: [1],
              })}
            />
            <div className="absolute top-0 flex items-center justify-center w-full h-full bg-black rounded-lg" style={{ zIndex: -1 }}>
              <img className="h-10 md:h-20" src="https://cdn.pixabay.com/animation/2023/08/11/21/18/21-18-05-265_512.gif" alt="spinner" />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
