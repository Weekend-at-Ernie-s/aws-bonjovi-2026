import React from "react"
import liveNationLogo from '../assets/logo-live-nation.svg'

export default function Footer() {
  return (
    <div className="flex flex-col md:flex-row bg-vintage h-60 md:h-80 items-center justify-center md:justify-start px-6 py-12">
      <img className="h-8 md:h-12 pr-0 md:pr-12 mb-8 md:mb-0" src={liveNationLogo} />
      <div className="flex flex-col text-stonehouse w-full text-center md:text-left md:max-w-2xl">
        <div className="pb-4">By continuing past this page, you agree to our Terms of Use.</div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full pb-4 md:pb-0">©2023 LIVE NATION WORLDWIDE, INC.</div>
          <div className="flex w-full justify-between"><a href="">PRIVACY POLICY</a><a href="">AD CHOICES</a><a href="">AODA</a></div>
        </div>
      </div>
    </div>
  )
}
