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
              <h3>Computer Science Major at NJIT's Albert Dorman Honors College</h3>
              <p>Full-Ride Scholarship, Dean's List</p>
              <p>Class of 2026</p>
            </div>
          </li>
          <li className="experience-item">
            {/* Education Logo and Text */}
            <img
              src="/images/beats.png"
              alt="Science Logo"
              className="experience-logo"
            />
            <div className="experience-text">
              <h3>Data Analytics Extern at Beats by Dre</h3>
              <p>Utilized the OxyLabs API to scrape over 1000 customer reviews of speakers. Used pandas and numpy to conduct exploratory data analysis of review
                data. I then used NLTK to conduct sentiment analysis to gain further insights from the reviews. Afterwards I created a final report demonstrating
                my findings and tailored recommendations entailing potential future areas of emphasis for Beats by Dre.
              </p>
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
              <h3>Research at NJIT</h3>
              <p>Building a web application which uses the lab's deep learning model to allow users to input telescope images and output transformed images. Python's Gradio framework is being used to build.
                Options being explored for a future public launch include HuggingFace and AWS. Stay tuned!</p>
            </div>
          </li>
          <li className="experience-item">
            {/* Education Logo and Text */}
            <img
              src="/images/science.png"
              alt="Science Logo"
              className="experience-logo"
            />
            <div className="experience-text">
              <h3>3x Elementary School Science Fair Winner</h3>
              <p>I won twice at my first elementary school and once again at my second, proving an ability to succeed across different eras of the game.</p>
            </div>
          </li>
          
        </ul>
      </section>
    );
  }
  
  export default Experience;
  
