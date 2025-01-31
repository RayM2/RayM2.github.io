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
              alt="project"
              className="experience-logo"
            />
          
          <p>This desktop app allows its users to make predictions on the stock market. The user gets a starting portfolio amount and then 
            is allowed to invest it at current market prices using yfinance. Then an LSTM model simulates the performance of their
            portfolio to a chosen future date, detalining gains and losses at the end.
          </p>
        </li>
        <li>
          <h3>Bank Website</h3>
          <img
            src="/images/bank.png"
            alt="bank"
            className="experience-logo"
            />
          <p>A full-stack website for a fictional bank, with features implemented allowing users to create and manage accounts, make transactions
            , and view account balances. An business-side view was also developed, allowing the user to view employee and asset data for each branch. 
            An SQL database was used for storing, updating, and retrieving data, PHP was used for connecting the website to the database, and Javascript, 
            HTML and CSS were used for the front-end.</p>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
