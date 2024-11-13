import React from "react"
import backgroundImage from '../assets/bkg-hero.jpeg'
import logoImage from '../assets/logo-aws-white.svg'

export default function Header() {
  return (
    <div className="h-96 md:h-166.5 lg:h-225 bg-left bg-contain bg-black flex flex-col items-center bg-no-repeat" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div><img className="mt-6 mb-10 w-28 md:w-40 lg:w-52 xl:w-56" src={logoImage} alt="AWS logo" /></div>
      <div className="text-white font-light text-4xl md:text-6xl leading-none text-center pt-40 md:pt-80 lg:pt-120">MELBOURNE</div>
    </div>
  )
}
