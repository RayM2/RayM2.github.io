import React from 'react';

function Experience() {
    return (
      <section id="experience" className="experience">
        <h2>Experience</h2>
        <ul>
          <li className="experience-item">
            {/* Barclays Logo and Text */}
            <img
              src="/images/barclays_logo.png"
              alt="Barclays Logo"
              className="experience-logo"
            />
            <div className="experience-text">
              <h3>Incoming Software Engineer Intern at Barclays</h3>
              <p>June 2025 - August 2025</p>
              <p>Whippany, NJ</p>
            </div>
          </li>
  
          <li className="experience-item">
            {/* Education Logo and Text */}
            <img
              src="/images/highlander.png"
              alt="Education Logo"
              className="experience-logo"
            />
            <div className="experience-text">
              <h3>Computer Science Major at NJIT</h3>
              <p>Graduating in 2026.</p>
            </div>
          </li>
        </ul>
      </section>
    );
  }
  
  export default Experience;
  
