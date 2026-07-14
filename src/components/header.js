import React from "react"
import backgroundImage from '../assets/backgroundImageShort.jpg'
import logoImage from '../assets/logo-amazon.png'

export default function Header() {
  return (
    <div className="h-64 md:h-108 lg:h-[36rem] xl:h-[44rem] bg-cover bg-squid-ink block overflow-hidden">
        <div><img src={backgroundImage} className="opacity-10" alt="concert goer hands in the air"/></div>
        <div className="flex flex-col items-center relative -top-2/4 lg:-top-3/4">
          <div className=""><img className="mt-6 mb-10 md:mb-24 w-28 md:w-40 lg:w-52 xl:w-56" src={logoImage} alt="AWS logo" /></div>
          <div className="text-white font-bold text-4xl md:text-7xl lg:text-8xl leading-none text-center">Bon Jovi 2026</div>
        </div>
    </div>
  )
}



/*
<div className="h-64 md:h-108 lg:h-[36rem] bg-cover flex flex-col items-center bg-squid-ink" style={{ backgroundImage: `url(${backgroundImage})` }}>
  <div><img className="mt-6 mb-10 md:mb-24 w-28 md:w-40 lg:w-52 xl:w-56" src={logoImage} alt="AWS logo" /></div>
  <div className="text-white font-bold text-4xl md:text-7xl lg:text-8xl leading-none text-center">Bon Jovi 2026</div>
  <div className="text-white font-light text-4xl md:text-7xl lg:text-8xl leading-none text-center">CIDADE DA MÚSICA</div>
</div>
*/
