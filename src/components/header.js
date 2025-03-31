import React from "react"
import backgroundImage from '../assets/coldplay_stars_dark.png'
import logoImage from '../assets/logo-aws-white.svg'
import coldplayImage from '../assets/hero-lockup.png'

export default function Header() {
  return (
    <div className="h-96 md:h-166.5 lg:h-225 bg-top bg-cover xl:bg-static-wide  flex flex-col items-center xl:bg-antique-white xl:bg-repeat-y" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div><img className="mt-6 mb-10 w-28 md:w-40 lg:w-52 xl:w-56" src={logoImage} alt="AWS logo" /></div>
      <div><img className="px-14 md:px-24 lg:px-32 my-20 md:my-24 lg:my-28" src={coldplayImage} alt="Coldplay displayed in rainbow-colored letters" /></div>
    </div>
  )
}
