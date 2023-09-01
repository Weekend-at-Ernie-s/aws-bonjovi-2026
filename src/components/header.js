import React from "react"
import backgroundImage from '../assets/bkg-hero.jpg'
import logoImage from '../assets/logo-aws.svg'

export default function Header() {
  return (
    <div className="h-96 md:h-166.5 lg:h-225 bg-bottom sm:bg-cover xl:bg-static-wide  flex flex-col items-center xl:bg-antique-white" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div><img className="mt-6 mb-10 w-28 md:w-40 lg:w-52 xl:w-56" src={logoImage} alt="AWS logo" /></div>
      <div className="text-squid-ink font-light text-4xl md:text-7xl lg:text-8xl leading-none">DIVIRTA-SE NA</div>
      <div className="text-squid-ink font-light text-4xl md:text-7xl lg:text-8xl leading-none">CIDADE DA MÚSICA</div>
    </div>
  )
}
