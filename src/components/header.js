import React from "react"
import backgroundImage from '../assets/the-town-line-up-2.png'
import logoImage from '../assets/logo-aws-white.svg'

export default function Header() {
  return (
    <div className="h-64 md:h-90 lg:h-160 bg-bottom bg-cover xl:bg-static-wide  flex flex-col items-center bg-black xl:bg-repeat-y" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div><img className="mt-6 mb-10 md:mb-24 w-28 md:w-40 lg:w-52 xl:w-56" src={logoImage} alt="AWS logo" /></div>
      <div className="text-white font-light text-4xl md:text-7xl lg:text-8xl leading-none text-center">DIVIRTA-SE NA</div>
      <div className="text-white font-light text-4xl md:text-7xl lg:text-8xl leading-none text-center">CIDADE DA MÚSICA</div>
    </div>
  )
}
