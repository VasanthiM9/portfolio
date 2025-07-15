import React from 'react';
import './Skills.css';
import Django from '../../assets/Django.png';
import Flask from '../../assets/Flask.png';
import Terraform from '../../assets/Terraform.png';
import python from '../../assets/python.png';
import react from '../../assets/react.png';
import node from '../../assets/node-js.png';
import npm from '../../assets/npm.png';
import git from '../../assets/git.png';
import api from '../../assets/api.png';

const Skills = () => {
  return (
    <div className='skill-container'>
      <div className='skills-grid'>
        <div className='skill-card'>
          <img src={Django} alt='Django' className='icon' />
          <label>Django</label>
        </div>
        <div className='skill-card'>
          <img src={Flask} alt='Flask' className='icon' />
          <label>Flask</label>
        </div>
        <div className='skill-card'>
          <img src={Terraform} alt='Terraform' className='icon' />
          <label>Terraform</label>
        </div>
        <div className='skill-card'>
          <img src={python} alt='Python' className='icon' />
          <label>Python</label>
        </div>
        <div className='skill-card'>
          <img src={react} alt='React' className='icon' />
          <label>React</label>
        </div>
        <div className='skill-card'>
          <img src={node} alt='Node.js' className='icon' />
          <label>Node.js</label>
        </div>
        <div className='skill-card'>
          <img src={npm} alt='NPM' className='icon' />
          <label>NPM</label>
        </div>
        <div className='skill-card'>
          <img src={git} alt='Git' className='icon' />
          <label>GIT</label>
        </div>
        <div className='skill-card'>
          <img src={api} alt='API' className='icon' />
          <label>API</label>
        </div>
      </div>
    </div>
  );
};

export default Skills;
