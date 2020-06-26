require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Lee Fields and The Expressions`,
    description: `Lee Fields & The Expressions homepage`,
    author: `Jacob Silver`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `keyY11TcpoTR646Fh`,
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
        apiKey: `keyY11TcpoTR646Fh`,
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
        apiKey: `keyY11TcpoTR646Fh`,
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
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: `${__dirname}/src/assets/svgs`,
        },
      },
    },
    `gatsby-plugin-styled-components`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/leeRoseLogo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
