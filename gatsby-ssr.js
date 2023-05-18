import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/AmazonEmber_Lt.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="interFont"
    />,
  ])
}
