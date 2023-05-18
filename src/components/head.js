import * as React from "react"
import facebookImage from '../assets/open-graph-logo-1200x1200.jpg'
import twitterImage from '../assets/twitter-card-logo-1024x512.jpg'
import safariImage from '../assets/safari-pinned-tab.svg'

export default function Head() {
  return (
    <>
      <meta charSet="utf-8" />

      {/* Standard search meta */}
      <title>AWS &#64; BottleRock Experience</title>
      <meta name="description" content="Web page for the AWS &#64; BottleRock Experience." />
      <meta name="robots" content="noindex, noimageindex, nofollow" />

      {/* Facebook + Open Graph */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="AWS &#64; BottleRock Experience" />
      <meta property="og:description" content="Web page for the AWS &#64; BottleRock Experience." />
      <meta property="og:url" content="https://www.awsbottlerock.com" />
      <meta property="og:image" content={facebookImage} />
      <meta property="og:image:alt" content="Blue AWS and Live Nation logos on beige background." />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@AWS" />
      <meta name="twitter:title" content="AWS &#64; BottleRock Experience" />
      <meta name="twitter:description" content="Web page for the AWS &#64; BottleRock Experience." />
      <meta name="twitter:image" content={twitterImage} />
      <meta name="twitter:image:alt" content="Blue AWS and Live Nation logos on beige background." />

      {/* Favorite icons not addressed by gatsby-plugin-manifest */}
      <meta name="msapplication-TileColor" content="#232F3E" />
      <meta name="msapplication-TileImage" content={safariImage} />
      <meta name="theme-color" content="#ffffff" />
      <link rel="mask-icon" href="safari-pinned-tab.svg" color="#e21836" />
    </>
  )
}
