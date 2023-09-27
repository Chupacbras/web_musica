import React, { useEffect, useState, useRef } from 'react';
import './Estilos/Toolbar.css';
import './Estilos/Toolbar-button.css';
import './Estilos/Button-style.css';
import './Estilos/Toolbar-nombre.css';
import './Estilos/Toolbar-nombre2.css';
import { Link } from 'react-router-dom';


const Toolbar = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', function () {
            var toolbar = document.querySelector('.Toolbar');

            if (window.scrollY > 0) {
                toolbar.style.backgroundColor = 'rgba(0, 128, 0, 0.4)'; // Cambia 'aqua' al color de fondo deseado
                toolbar.style.borderBottom = '3px solid black'; // Cambia 'black' al color del borde deseado
            } else {
                toolbar.style.backgroundColor = 'transparent';
                toolbar.style.borderBottom = 'none';
            }
        });
    }, []); // Asegúrate de que este efecto solo se ejecute una vez al montar el componente


    const homeRef = useRef(null);
    const aboutMeRef = useRef(null);
    const mediaRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <div className="Toolbar">
            <div className='Toolbar-nombre'>
                <h1 className='Toolbar-nombre2'>
                    Albert Formatger
                </h1>
            </div>
            <div className='Toolbar-button'>
                <a ref={homeRef} className='Button-style' onClick={() => scrollToSection(homeRef)}>Home</a>
                <a ref={aboutMeRef} className='Button-style' onClick={() => scrollToSection(aboutMeRef)}>About me</a>
                <a ref={mediaRef} className='Button-style' onClick={() => scrollToSection(mediaRef)}>Media</a>
                <a ref={contactRef} className='Button-style' onClick={() => scrollToSection(contactRef)}>Contact</a>
            </div>
        </div>
    )
}

export default Toolbar;