import React from 'react';
import './Projects.css';
import portfolio from '../../assets/portfolio.png'

const Projects = () => {
  return (
    <div className='project-container'>
      <h2>My Projects</h2>
      <div className='project-grid'>
        <div className='project-card'>
          <img src={portfolio} alt='Portfolio-screenshot' className='project-image' />
          <div className='project-card-content'>
            <h3>Portfolio Website</h3>
            <p>A personal portfolio built with React and styled-components.</p>
            <a href='http://localhost:3000/' target='_blank' rel='noreferrer'>View Project</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
