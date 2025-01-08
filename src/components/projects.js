import React from 'react';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <ul>
        <li>
        <h3>Desktop Stock Market Simulator</h3>
        <img
              src="/images/stockApp.png"
              alt="project image"
              className="experience-logo"
            />
          
          <p>This desktop app allows its users to make predictions on the stock market. The user gets a starting portfolio amount and then 
            is allowed to invest it at current market prices using yfinance. Then an LSTM model simulates the performance of their
            portfolio to a chosen future date, detalining gains and losses at the end.
          </p>
        </li>
        <li>
          <h3>Project 2</h3>
          <p>Description of your project.</p>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
