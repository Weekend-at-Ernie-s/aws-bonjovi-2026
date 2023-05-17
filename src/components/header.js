import React from "react"
import backgroundImage from '../assets/bkg-hero.jpg'
import logoImage from '../assets/logo-aws-live-nation.svg'

export default function Header() {
  return (
    <div className="h-96 md:max-h-screen md:h-screen bg-bottom bg-cover flex flex-col items-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div><img className="mt-6 mb-10 md:mt-8 md:mb-10 lg:mt-12 lg:mb-19 xl:mb-27 w-52 md:w-80 lg:w-96" src={logoImage} /></div>
      <div className="text-squid-ink text-5xl md:text-6xl lg:text-8xl xl:text-9xl">WINE DOWN.</div>
      <div className="text-squid-ink text-5xl md:text-6xl lg:text-8xl xl:text-9xl">VOLUME UP.</div>
    </div>
  )
}
