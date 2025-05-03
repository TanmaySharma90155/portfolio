import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Work from './components/work/Work';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <>
    <Sidebar />
    <main className='main'>
      <Home />
      <About />
      <Projects />
      <Work />
      <Skills />
      <Contact />
    </main>
    </>
  );
};

export default App