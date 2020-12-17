import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <section id='contact'>
      <h2>Get In Touch</h2>
      <p>Have an idea or interested in working together? Send a message!</p>
      <div className='row'>
        <div className='8u 12u$(small)'>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = `mailto:gbolahanbalogun5@gmail.com?subject=Message from ${name}&body=${message}`;
              setEmail('');
              setName('');
              setMessage('');
            }}
          >
            <div className='row uniform 50%'>
              <div className='6u 12u$(xsmall)'>
                <input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Name'
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='6u 12u$(xsmall)'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='12u'>
                <textarea
                  name='message'
                  id='message'
                  placeholder='Message'
                  rows='4'
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
            </div>
            <ul className='actions' style={{ marginTop: 30 }}>
              <li>
                <input type='submit' value='Send Message' />
              </li>
            </ul>
          </form>
        </div>
        <div className='4u 12u$(small)'>
          <ul className='labeled-icons'>
            <li>
              <h3 className='icon fa-envelope-o'>
                <span className='label'>Email</span>
              </h3>
              <a href='mailto:gbolahanbalogun5@gmail.com'>
                gbolahanbalogun5@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
