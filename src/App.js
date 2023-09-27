import './Estilos/App.css';
import './Estilos/Toolbar.css';
import './Estilos/Fondo.css';
import Toolbar from './Toolbar';
import About from './About';
import React, { useEffect, useState, useRef } from 'react';

function App() {
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const mediaRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <div className='Fondo'>
        <Toolbar
        />
      </div>
      <div ref={aboutMeRef}>
        <About />
      </div>
    </div>

  );
}

export default App;
