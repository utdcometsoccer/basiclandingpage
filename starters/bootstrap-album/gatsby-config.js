module.exports = {
  siteMetadata: {
    title: `Album`,
    description: `Gatsby Starter based on Bootstrap 4 album`,
    footerText:`Bootstrap Album Gatsby Theme is &copy; Idaho Edokpayi, but please
    download and customize it for yourself!`,
    github:'https://github.com/utdcometsoccer/basiclandingpage',
    headerText:`This album theme is a great starting point for building your own custom portfolio, or a personal picture album. The author is available for consulting if you need further help building your site.`,
    linkedinURL:`https://www.linkedin.com/in/whoisidaho/`,
    twitter:`https://twitter.com/whoisidaho`,
    linkToTopText:`Link to Top`,
    jumboTronHeadline:`Bootstrap Album Gatsby Theme`,
    footerLinkText:`Get the source for this theme and more at: `
  },
  plugins: [
    `gatsby-plugin-typescript`,
    "gatsby-plugin-eslint",
    `gatsby-plugin-sass`,
    `gatsby-plugin-mdx`,
    `gatsby-remark-copy-linked-files`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "album",
        path: `${__dirname}/content/album/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/content/images/`,
      },
    },
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        prettier: true, // use prettier to format JS code output (default)
        svgo: true, // use svgo to optimize SVGs (default)
        svgoConfig: {
          removeViewBox: true, // remove viewBox when possible (default)
          cleanupIDs: true, // remove unused IDs and minify remaining IDs (default)
        },
      },
    },
  ],
};
