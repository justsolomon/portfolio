import React from 'react';
import Footer from './Footer';
import avatar from '../../assets/images/avatar.png';

const Header = () => (
  <header id='header'>
    <div className='inner'>
      <a href='#about' className='image avatar'>
        <img src={avatar} alt='Gbolahan Balogun avatar illustration' />
      </a>
      <h1>
        Hi, my name is Gbolahan Balogun. I develop intuitive user interfaces for
        the web.
      </h1>
    </div>
    <Footer />
  </header>
);

export default Header;
