import { Link } from 'gatsby';
import React from 'react';
import SEO from '../components/global/SEO';
import Layout from '../components/global/Layout';

const NotFoundPage = () => (
  <Layout>
    <SEO title='Page Not Found'></SEO>
    <div id='main'>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <ul className='actions'>
        <li>
          <Link to='/' className='button'>
            Go to Homepage
          </Link>
        </li>
      </ul>
    </div>
  </Layout>
);

export default NotFoundPage;
