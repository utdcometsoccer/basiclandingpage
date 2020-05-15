module.exports = {
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
  ],
};
