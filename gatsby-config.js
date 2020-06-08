module.exports = {
  siteMetadata: {
    title: `Lee Fields and The Expressions`,
    description: `Lee Fields & The Expressions homepage`,
    author: `Jacob Silver`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`cambay\:400,700`, `arvo\:400, 700,`, `ubuntu mono\:400, 700,`],
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `keyY11TcpoTR646Fh`,
        concurrency: 5,
        tables: [
          {
            baseId: `appF7yJr2igkrU9jh`,
            tableName: `Shows`,
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
