import React from 'react';
import Header from './components/header';
import Bio from './components/bio';
import Projects from './components/projects';
import Experience from './components/experience';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Bio />
      <Experience />
      <Projects />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
