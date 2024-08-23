import React from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Contact from './components/Contact';
import Projects from './components/Projects'
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Education />
      <Skills />
      <Languages />
      <Projects/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
