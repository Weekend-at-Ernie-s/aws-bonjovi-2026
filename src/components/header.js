import React from "react"
import backgroundImage from '../assets/bkg-hero.jpg'
import logoImage from '../assets/logo-aws-live-nation.svg'

export default function Header() {
  return (
    <div className="h-96 md:h-166.5 bg-bottom bg-cover flex flex-col items-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div><img className="mt-6 mb-10 w-52 md:w-80" src={logoImage} alt="AWS and Live Nation logos" /></div>
      <div className="text-squid-ink font-light text-5xl md:text-8xl leading-none">WINE DOWN.</div>
      <div className="text-squid-ink font-light text-5xl md:text-8xl leading-none">VOLUME UP.</div>
    </div>
  )
}
