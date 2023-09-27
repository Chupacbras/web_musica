import React from 'react';
import './Estilos/Toolbar.css';
import './Estilos/Toolbar-button.css';
import './Estilos/Button-style.css';
import './Estilos/Toolbar-nombre.css';
import './Estilos/Toolbar-nombre2.css';


const Toolbar = () => {
    return (
        <div className="Toolbar">
            <div className='Toolbar-nombre'>
                <h1 className='Toolbar-nombre2'>
                    Albert Formatger
                </h1>
            </div>
            <div className='Toolbar-button'>
                <button className='Button-style'>Home</button>
                <button className='Button-style'>About me</button>
                <button className='Button-style'>Media</button>
                <button >Contact</button>
            </div>
        </div>
    );
}

export default Toolbar;