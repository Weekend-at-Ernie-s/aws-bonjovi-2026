import React from "react"
import logoImage from '../assets/logo-aws-white.svg'
import coldplayImage from '../assets/coldplay-perth-lockup.svg'

export default function Header() {
  return (
    <div className="flex flex-col items-center" style={{ background: "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.83) 17.46%, rgba(0, 0, 0, 0.80) 35.23%, rgba(0, 0, 0, 0.66) 52.89%, rgba(0, 0, 0, 0.33) 70.17%, rgba(0, 0, 0, 0.00) 86.62%), #25367C" }}>
      <div><img className="mt-6 mb-10 pt-12 w-28 md:w-40 lg:w-52 xl:w-56" src={logoImage} alt="AWS logo" /></div>
      <div><img className="px-14 md:px-24 lg:px-32 my-20 md:my-24 lg:my-28" src={coldplayImage} alt="Coldplay displayed in rainbow-colored letters" /></div>
    </div>
  )
}
