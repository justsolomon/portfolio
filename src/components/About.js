import React from 'react';

function About() {
  return (
    <section id='about'>
      <header className='major'>
        <h2>About Me</h2>
      </header>
      <p>
        Hi there! I'm Gbolahan, a Full Stack Developer based in Canada. I love building clean, performant and
        intuitive user interfaces for the web. I'm also constantly learning new
        technologies and skills that make modern frontend and backend web development faster
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
