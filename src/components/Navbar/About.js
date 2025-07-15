import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-heading">About Me</h2>
        <p className="about-text">
          I'm a passionate Full Stack Developer with 6+ years of experience, specializing in building scalable web applications using Python, React, and Kubernetes—crafting clean code and elegant solutions that solve real-world problems.
        </p>
        <p className="about-text">
        I've contributed to technology solutions across banking, finance, and insurance domains—building scalable, full-stack applications for organizations like Fifth Third Bank, Standard Chartered, FinLender, and Manomay Innsurtech.
        </p>
        <p className="about-text">
          Outside of work, I’m passionate about chess, art, and mentoring young learners — bringing creativity, strategy, and empathy into both my professional and personal life.
        </p>

        <h3 className="about-subheading">Education</h3>
        <div className="education-container">
          <div className="education-item">
            
            <div className="edu-content">
              <h4 className="edu-degree">Bachelor's in Commerce and Computer Applications</h4>
              <p className="edu-institution">The Sri Venkateswara University &nbsp;|&nbsp; 2016 – 2018</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
