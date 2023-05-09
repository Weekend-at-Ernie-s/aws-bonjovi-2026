import * as React from "react"

import SEOHead from "../components/head"

export default function NotFound() {
  return (
    <div>
                Sorry! We couldn’t find the page you were looking for.
              </div>
  )
}
export const Head = () => {
  return <SEOHead title="404: Page not found" />
}
