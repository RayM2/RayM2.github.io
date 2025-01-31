import React, { useState } from 'react';

function Experience() {
  // Use an object to track the expanded state for each item
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (index) => {
    setExpandedItems((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the state for the clicked item
    }));
  };

  const experiences = [
    {
      logo: '/images/barclays_logo.png',
      title: 'Incoming Software Engineer Intern at Barclays',
      details: [
        'June 2025 - August 2025',
        'Whippany, NJ',
      ],
    },
    {
      logo: '/images/beats.png',
      title: 'Data Analytics Extern at Beats by Dre',
      details: [
        'Utilized the OxyLabs API to scrape over 1000 customer reviews of speakers.',
        'Conducted exploratory data analysis using pandas and numpy.',
        'Performed sentiment analysis using NLTK and created a final report with recommendations.',
      ],
    },
    {
      logo: '/images/highlander.png',
      title: 'Research at NJIT',
      details: [
        'Built a web application using a lab\'s deep learning model to transform telescope images.',
        'Explored options like HuggingFace and AWS for public deployment.',
      ],
    },
    {
      logo: '/images/science.png',
      title: '3x Elementary School Science Fair Winner',
      details: [
        'Won twice at the first school and once at the second, showcasing adaptability and skill.',
      ],
    },
  ];

  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <ul>
        {experiences.map((experience, index) => (
          <li key={index} className="experience-item">
            <img
              src={experience.logo}
              alt={`${experience.title} Logo`}
              className="experience-logo"
            />
            <div
              className={`experience-text rounded-box ${
                expandedItems[index] ? 'expanded' : 'collapsed'
              }`}
              onClick={() => toggleExpand(index)}
            >
              <h3>{experience.title}</h3>
              {expandedItems[index] && (
                <div className="experience-details">
                  {experience.details.map((detail, detailIndex) => (
                    <p key={detailIndex}>{detail}</p>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Experience;
