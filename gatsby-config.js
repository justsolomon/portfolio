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
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-plugin-robots-txt',
  ],
};
