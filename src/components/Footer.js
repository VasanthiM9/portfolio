import React from 'react';
import './Footer.css';
import { FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-note'>
      <p>&copy; {new Date().getFullYear()} Vasanthi. All Rights Reserved.</p>
      </div>
      <div className='social-links'>
        <a href='https://www.linkedin.com/in/mvasanthi07'
        target='_blank'
        rel='noopener noreferrer'>
          <FaLinkedin className='icon'/>LinkedIn</a>
      </div>
      
    </footer>
  )
}

export default Footer
