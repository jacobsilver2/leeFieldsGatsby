require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Lee Fields`,
    description: `Lee Fields & The Expressions homepage`,
    author: `Jacob Silver`,
    siteUrl: `https://www.leefieldsandtheexpressions.com`,
  },
  plugins: [
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GATSBY_GOOGLE_ANALYTICS_ID, // Google Analytics / GA
        ],
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["FormaDJRBanner", "FormaDJRText"],
          urls: ["/fonts/fonts.css"],
        },
      },
      timeout: 2000,
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: process.env.GATSBY_MAILCHIMP_URL,
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `${process.env.GATSBY_AIRTABLE_API}`,
        concurrency: 5,
        tables: [
          {
            baseId: `app9H2woW0pkX1sAp`,
            tableName: `Music`,
            mapping: { Image: `fileNode` },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `${process.env.GATSBY_AIRTABLE_API}`,
        concurrency: 5,
        tables: [
          {
            baseId: `app6qEeLArKEzLqYs`,
            tableName: `Contact`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `${process.env.GATSBY_AIRTABLE_API}`,
        concurrency: 5,
        tables: [
          {
            baseId: `app6qEeLArKEzLqYs`,
            tableName: `About`,
            mapping: { AboutPic: `fileNode` },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `${process.env.GATSBY_AIRTABLE_API}`,
        concurrency: 5,
        tables: [
          {
            baseId: `appYs2klR189DEnJM`,
            tableName: `Videos`,
            mapping: { Video_Still: `fileNode` },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `${process.env.GATSBY_AIRTABLE_API}`,
        concurrency: 5,
        tables: [
          {
            baseId: `app8mx3RXq0g2M7EF`,
            tableName: `News`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: `${__dirname}/src/assets/svgs`,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `albums`,
        path: `${__dirname}/src/assets/albums`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lee Fields & The Expressions`,
        short_name: `Lee Fields`,
        start_url: `/`,

        // background_color: `#663399`,
        // theme_color: `#663399`,
        // display: `minimal-ui`,
        icon: `src/assets/images/leeRoseLogo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
