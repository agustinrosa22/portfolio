import React from 'react';
import './App.css';
import NavBar from './Components/navBar/navBar';
import Presentation from './views/iAm/iAm.jsx'
import About from './views/About/About.jsx'
import Skills from './views/Skills/Skills.jsx'
import Work from './views/Work/Work.jsx';
import Footer from './Components/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="iAm">
        <Presentation />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="work">
        <Work />
      </div>
      <Footer />
    </div>
  );
}

export default App;
