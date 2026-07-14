import * as React from "react"
import facebookImage from '../assets/open-graph-logo-1200x1200.png'
import twitterImage from '../assets/twitter-card-logo-1024x512.png'
import safariImage from '../assets/safari-pinned-tab.svg'

export default function Head() {
  return (
    <>
      <meta charSet="utf-8" />

      {/* Standard search meta */}
      <title>AWS Bon Jovi 2026</title>
      <meta name="description" content="Web page for AWS Bon Jovi 2026." />
      <meta name="robots" content="noindex, noimageindex, nofollow" />

      {/* Facebook + Open Graph */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="AWS Bon Jovi 2026" />
      <meta property="og:description" content="Web page for the AWS Bon Jovi 2026" />
      <meta property="og:url" content="https://awsrockshere.com/BonJovi26" />
      <meta property="og:image" content={facebookImage} />
      <meta property="og:image:alt" content="White AWS logo on blue background image with stars." />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@AWS" />
      <meta name="twitter:title" content="AWS Bon Jovi 2026" />
      <meta name="twitter:description" content="Web page for AWS Bon Jovi 2026" />
      <meta name="twitter:image" content={twitterImage} />
      <meta name="twitter:image:alt" content="White AWS logo on blue background image with stars." />

      {/* Favorite icons not addressed by gatsby-plugin-manifest */}
      <meta name="msapplication-TileColor" content="#232F3E" />
      <meta name="msapplication-TileImage" content={safariImage} />
      <meta name="theme-color" content="#ffffff" />
      <link rel="mask-icon" href="safari-pinned-tab.svg" color="#e21836" />
    </>
  )
}
