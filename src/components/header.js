import React from "react"
import backgroundImage from '../assets/bkg-hero.jpg'
import logoImage from '../assets/logo-aws-live-nation.svg'

export default function Header() {
  return (
    <div className="h-96 md:max-h-screen md:h-screen bg-bottom bg-cover flex flex-col items-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div><img className="mt-6 mb-10 md:mt-8 md:mb-10 lg:mt-12 lg:mb-19 xl:mb-27 w-52 md:w-80 lg:w-96" src={logoImage} alt="AWS and Live Nation logos" /></div>
      <div className="text-squid-ink font-light text-5xl md:text-8xl lg:text-9xl leading-none">WINE DOWN.</div>
      <div className="text-squid-ink font-light text-5xl md:text-8xl lg:text-9xl leading-none">VOLUME UP.</div>
    </div>
  )
}
