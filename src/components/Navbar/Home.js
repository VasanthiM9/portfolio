import React from 'react'
import './Home.css';
import resume from '../../assets/resume.png';
import myimg from '../../assets/myimg.png';

const Home = () => {
  return (
    <section className='home-section'>

<img src={myimg} alt='img' className='image'></img>
    <div className='home-container'>
      <div className='text-container'>
      <h1 className='heading1'>Hello,</h1>
      <h2 className='heading2'>I'm Vasanthi</h2>
      <h2 className='title'>Full Stack Developer</h2>
      <p className='description'>I design and build scalable, high-performance web applications using Python, React, and modern cloud technologies.
      </p>
      <button className='resume-button'>
        <img src={resume} alt='icon' className='button-icon'></img>Resume</button>
    </div>
    
    </div>
   
    
    
    </section>

  )
}

export default Home;
