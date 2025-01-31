import React, { useState } from 'react';

function Education() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="experience" className="experience">
      <h2>Education</h2>
      <ul>
        <li className="experience-item">
          <img
            src="/images/highlander.png"
            alt="Education Logo"
            className="experience-logo"
          />
          <div
            className={`experience-text rounded-box ${
              isExpanded ? 'expanded' : 'collapsed'
            }`}
            onClick={toggleExpand}
          >
            <h3>Computer Science Major at NJIT's Albert Dorman Honors College</h3>
            {isExpanded && (
              <div className="experience-details">
                <p>Full-Ride Scholarship, Dean's List</p>
                <p>Class of 2026</p>
              </div>
            )}
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Education;
