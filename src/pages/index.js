import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Gallery from '../components/Gallery';
import SEO from '../components/global/SEO';
import Layout from '../components/global/Layout';

const HomeIndex = () => {
  return (
    <Layout>
      <SEO />
      <div id='main'>
        <About />

        <section id='projects'>
          <h2>Recent Work</h2>
          <Gallery />
        </section>

        <Contact />
      </div>
    </Layout>
  );
};

export default HomeIndex;
