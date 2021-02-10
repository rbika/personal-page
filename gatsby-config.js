module.exports = {
  siteMetadata: {
    title: `Rafael Bicalho - Bika(s)`,
    description: `Frontend Developer at Inter.`,
    author: `@rbika`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
