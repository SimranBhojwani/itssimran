import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact';
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Work/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
