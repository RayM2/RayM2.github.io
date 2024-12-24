import React from 'react';

function Header() {
  return (
    <header className="header">
      <h1>My Portfolio</h1>
      <nav>
        <a href="#bio">Bio</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
      </nav>
    </header>
  );
}

export default Header;
