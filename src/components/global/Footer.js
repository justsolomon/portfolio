import React from 'react';

const Footer = () => (
  <div id='footer'>
    <div className='inner'>
      <ul className='icons'>
        <li>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://twitter.com/gbsolomon1'
            className='icon fa-twitter'
          >
            <span className='label'>Twitter</span>
          </a>
        </li>
        <li>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://github.com/justsolomon'
            className='icon fa-github'
          >
            <span className='label'>Github</span>
          </a>
        </li>
        <li>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://www.linkedin.com/in/gbolahan-balogun-71357b1b9/'
            className='icon fa-linkedin'
          >
            <span className='label'>LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            target='_blank'
            rel='noreferrer'
            href='mailto:gbolahanbalogun5@gmail.com'
            className='icon fa-envelope-o'
          >
            <span className='label'>Email</span>
          </a>
        </li>
      </ul>
      <ul className='copyright'>
        <li>Copyright &copy; 2020 Gbolahan Balogun</li>
        <li>
          Design:{' '}
          <a target='_blank' rel='noreferrer' href='http://html5up.net'>
            HTML5 UP
          </a>
        </li>
      </ul>
      <a href='#about' className='icon about-link fa-angle-down'>
        <span className='label'>About Me</span>
      </a>
    </div>
  </div>
);

export default Footer;
