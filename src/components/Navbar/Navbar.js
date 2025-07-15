import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';
import contact from '../../assets/contact.png';


const Navbar = () => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate('/contact');
    };
  return (
   <nav className='navbar'>
    <h1>MyPortfolio
    <img src={logo} alt='logo' className='logo'></img>
    </h1>
    <ul>
    <li><Link to='/portfolio'>HOME</Link></li>
    <li><Link to='/about'>ABOUT ME</Link></li>
    <li><Link to='/experience'>EXPERIENCE</Link></li>
    <li><Link to='/projects'>PROJECTS</Link></li>
    <li><Link to='/skills'>SKILLS</Link></li>
    </ul>

    <button className='contact-button' onClick={handleOnClick}>
        <img src={contact} alt='contact' className='contact-icon'></img>
        Contact me</button>
   </nav>
  )
}

export default Navbar;
