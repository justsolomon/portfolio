import React from 'react';

function About() {
  return (
    <section id='about'>
      <header className='major'>
        <h2>About Me</h2>
      </header>
      <p>
        I'm a Web Developer based in Lagos, Nigeria. I love building clean and
        intuitive user interfaces for the web. I'm also constantly learning new
        technologies and skills that make modern frontend web development faster
        and easier. Whenever I'm not coding, you can find me watching anime,
        football or playing mobile FPS games like Call Of Duty: Mobile.
      </p>
      <ul className='actions'>
        <li>
          <a href='#projects' className='button'>
            View Projects
          </a>
        </li>
      </ul>
    </section>
  );
}

export default About;
