import './Estilos/App.css';
import './Estilos/Toolbar.css';
import './Estilos/Cover.css';
import Toolbar from './Toolbar';
import Home from './Home';
import About from './About';
import React, { useEffect, useState, useRef } from 'react';

function App() {
  const ref = {
    homeRef: useRef(null),
    aboutMeRef: useRef(null),
    mediaRef: useRef(null),
    contactRef: useRef(null),
  }

  return (
    <div>
      <Toolbar references = {ref}/>
      <div ref={ref.homeRef}>
        <Home/>
      </div>
      <div ref={ref.aboutMeRef}>
        <About />
      </div>
    </div>

  );
}

export default App;
