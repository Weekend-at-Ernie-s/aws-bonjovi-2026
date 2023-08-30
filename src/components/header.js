import React from "react"
import backgroundImage from '../assets/bkg-hero.jpg'
import logoImage from '../assets/logo-aws.svg'

export default function Header() {
  return ( // 40 64 96 112
    <div className="h-96 md:h-166.5 lg:h-270 bg-bottom bg-cover flex flex-col items-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div><img className="mt-6 mb-10 w-28 md:w-40 lg:w-52 xl:w-56" src={logoImage} alt="AWS logo" /></div>
      <div className="text-squid-ink font-light text-4xl md:text-7xl lg:text-8xl xl:text-9xl leading-none">DIVIRTA-SE NA</div>
      <div className="text-squid-ink font-light text-4xl md:text-7xl lg:text-8xl xl:text-9xl leading-none">CIDADE DA MÚSICA</div>
    </div>
  )
}
