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
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-plugin-robots-txt',
  ],
};
