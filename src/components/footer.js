import React from "react"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import logoImage from '../assets/logo-aws-white.svg'

export default function Footer() {
  return (
    <div className="flex flex-col md:flex-row h-60 md:h-80 items-center justify-center md:justify-start px-6 py-12 text-sm md:text-base" style={{background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%), #003554'}}>
      <img className="h-8 md:h-12 pr-0 md:pr-12 mb-8 md:mb-0" src={logoImage} alt="AWS logo" />
      <div className="flex flex-col text-white w-full text-center md:text-left md:max-w-3xl opacity-75">
        <div className="pb-4">*Content is for internal AWS use and your personal enjoyment.</div>
        <div className="pb-4">By continuing past this page, you agree to our <a className="underline" href="https://aws.amazon.com/terms/" target="_blank" rel="noreferrer">Terms of Use.</a></div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full pb-4 md:pb-0">©2023 Amazon Web Services, Inc. or its affiliates. All rights reserved.</div>
          <div className="flex justify-between w-1/3">
            <OutboundLink href="https://aws.amazon.com/privacy/" target="_blank" rel="noreferrer">Privacy</OutboundLink>
            <OutboundLink href="https://aws.amazon.com/legal/" target="_blank" rel="noreferrer">Legal</OutboundLink>
          </div>
        </div>
      </div>
    </div>
  )
}
