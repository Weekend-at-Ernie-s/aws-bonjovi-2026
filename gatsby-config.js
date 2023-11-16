// support for .env, .env.development, and .env.production
require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const { ImgixSourceType } = require('@imgix/gatsby');

module.exports = {
  siteMetadata: {
    siteUrl: "https://gatsbycontentfulhomepage.gatsbyjs.io/",
    title: "AWS Coldplay Music of the Spheres: Perth",
    author: `lbkinson`,
    description: "Web page for AWS Coldplay Music of the Spheres: Perth",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        downloadLocal: false,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-vanilla-extract",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gatsby Starter Contentful Homepage",
        short_name: "Gatsby",
        start_url: "/",
        // These can be imported once ESM support lands
        background_color: "rgba(236, 205, 148, 0.25)",
        theme_color: "#232F3E",
        icon: "src/assets/favicon.png",
      },
    },
    'gatsby-plugin-postcss',
    {
     resolve: `gatsby-plugin-google-gtag`,
     options: {
       // You can add multiple tracking ids and a pageview event will be fired for all of them.
       trackingIds: [
         "G-JP1V5BJMK9", // Google Analytics / GA
       ],
       gtagConfig: {
         // Anonymizes the last digits of the user’s IP.
         // To comply with policies and legal regulations.
         anonymize_ip: true,
         cookie_expires: 0,
       },
       // This object is used for configuration specific to this plugin.
       pluginConfig: {
         // As false it puts the tracking script in the body instead of the head.
         head: false,
         // Optional parameter to honor the Do Not Track feature.
         respectDNT: true,
       },
     },
   },
  ],
  pathPrefix: '/' + process.env.SITE_SUBDIR,
  // assetPrefix: '/' + process.env.SITE_SUBDIR
}
