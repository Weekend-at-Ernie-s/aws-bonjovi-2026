import React from "react"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import liveNationLogo from '../assets/logo-live-nation.svg'

export default function Footer() {
  return (
    <div className="flex flex-col md:flex-row bg-vintage h-60 md:h-80 items-center justify-center md:justify-start px-6 py-12 text-sm md:text-base">
      <img className="h-8 md:h-12 pr-0 md:pr-12 mb-8 md:mb-0" src={liveNationLogo} alt="Live Nation logo" />
      <div className="flex flex-col text-stonehouse w-full text-center md:text-left md:max-w-2xl">
        <div className="pb-4">By continuing past this page, you agree to our <a className="underline" href="https://help.livenation.com/hc/en-us/articles/10468828916113-Terms-of-Use" target="_blank" rel="noreferrer">Terms of Use.</a></div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full pb-4 md:pb-0">©2023 LIVE NATION WORLDWIDE, INC.</div>
          <div className="flex w-full justify-between">
            <OutboundLink href="https://help.livenation.com/hc/en-us/articles/10464047306641-Live-Nation-Entertainment-Privacy-Policy" target="_blank" rel="noreferrer">PRIVACY POLICY</OutboundLink>
            <a href="https://help.livenation.com/hc/en-us/articles/9816003352593-AdChoices" target="_blank" rel="noreferrer">AD CHOICES</a>
            <a href="https://www.livenation.com/canada-accessibility-for-ontarians-with-disabilities/" target="_blank" rel="noreferrer">AODA</a>
          </div>
        </div>
      </div>
    </div>
  )
}
