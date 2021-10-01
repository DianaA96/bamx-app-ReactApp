import React from 'react'
import '../styles/HeaderBusqueda.css';
import '../styles/general.css';
import '../styles/inputs.css';
import '../styles/glass.css';
import '../styles/botones.css';

function HeaderBusqueda() {
    return (
       <div className="headerBusqueda-container lightGlass">
           <div className="header-left">
                <h1 className="titulo-header">Titulo</h1>
                <input type="text" className="input-busqueda inputDarkGlass" />
           </div>
           <div className="header-right">
                <div className="agregar-container">
                    <h3>Agregar</h3>
                    <button className='btnMasGlass'><i class="fas fa-plus"></i></button>
                </div>
                <button className="btn-filtros">Filtros</button>
           </div>
       </div>
    )
}

export default HeaderBusqueda
