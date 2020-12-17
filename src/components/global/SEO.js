import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        description
        siteUrl
        twitterUsername
      }
    }
  }
`;

const SEO = ({ title }) => {
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    description,
    siteUrl,
    twitterUsername,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description,
    siteUrl,
  };

  return (
    <Helmet title={seo.title}>
      <meta name='description' content={seo.description} />

      {seo.siteUrl && <meta property='og:url' content={seo.siteUrl} />}

      {seo.title && <meta property='og:title' content={seo.title} />}

      {seo.description && (
        <meta property='og:description' content={seo.description} />
      )}

      <meta name='twitter:card' content='summary_large_image' />

      {twitterUsername && (
        <meta name='twitter:creator' content={twitterUsername} />
      )}

      {seo.title && <meta name='twitter:title' content={seo.title} />}

      {seo.description && (
        <meta name='twitter:description' content={seo.description} />
      )}
    </Helmet>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
};
