import React from "react"
import thanksDark from '../assets/thanks_dark.png'
import thanksLight from '../assets/thanks_light.png'
import logoImage from '../assets/logo-aws.svg'

import "../styles/acl_clipPath.css";

export default function Header() {
  return (
    <div className="bg-bottom bg-cover flex flex-col items-center bg-photo-gray">
      <div className="acl_clipPathTop bg-acl-dark-pink h-32 md:h-40 lg:h-72" />
      <div><img className="-mt-12 mb-10 md:mb-24 w-28 md:w-40" src={logoImage} alt="AWS logo" /></div>
      <div className="flex justify-center mb-10 md:mb-24">
        <div className="max-w-192 absolute mt-1.5 ml-1.5"><img src={thanksDark} alt="Thanks y'all text" /></div>
        <div className="max-w-192 absolute "><img src={thanksLight} alt="Thanks y'all text" /></div>
      </div>
      <div className="acl_clipPathBottom bg-acl-dark-pink h-32 md:h-40 lg:h-72"/>
    </div>
  )
}
