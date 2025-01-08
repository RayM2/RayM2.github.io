import React from 'react';
import Header from './components/header';
import Bio from './components/bio';
import Projects from './components/projects';
import Experience from './components/experience';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Bio />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
