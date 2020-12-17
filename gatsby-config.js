module.exports = {
  flags: {
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PRESERVE_WEBPACK_CACHE: true,
  },
  siteMetadata: {
    title: 'Gbolahan Balogun - Portfolio',
    author: 'Gbolahan Balogun',
    siteUrl: 'https://justsolomon.netlify.app',
    description: 'Front-End Web Developer',
    twitterUsername: '@gbsolomon1',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gbolahan Balogun - Portfolio',
        short_name: 'Gbolahan Balogun',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'standalone',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: true,
      },
    },
    'gatsby-plugin-robots-txt',
  ],
};
