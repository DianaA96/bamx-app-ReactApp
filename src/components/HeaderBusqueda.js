import React from 'react'
import '../styles/HeaderBusqueda.css';
import '../styles/general.css';
<<<<<<< HEAD
import '../styles/inputs.css';
import '../styles/glass.css';
import '../styles/botones.css';

function HeaderBusqueda() {
    return (
       <div className="headerBusqueda-container lightGlass">
           <div className="header-left">
                <h1 className="titulo-header">Titulo</h1>
                <input type="text" className="input-busqueda inputDarkGlass" />
=======
import '../styles/glass.css';

function HeaderBusqueda() {
    return (
       <div className="headerBusqueda-container darkGlass">
           <div className="headerBusqueda-left">
                <h1 className="titulo-header bebas1 blanco">Titulo</h1>
                <input type="text" className="input-busqueda" />
>>>>>>> 3403532819cffa06a680dbee0e69538b13eab3b4
           </div>
           <div className="headerBusqueda-right">
                <div className="agregar-container">
<<<<<<< HEAD
                    <h3>Agregar</h3>
                    <button className='btnMasGlass'><i class="fas fa-plus"></i></button>
=======
                    <h3 className="bebas3">Agregar</h3>
                    <button className='btn-agregar'><i class="fas fa-plus"></i></button>
>>>>>>> 3403532819cffa06a680dbee0e69538b13eab3b4
                </div>
                <button className="btn-filtros">Filtros</button>
           </div>
       </div>
    )
}

export default HeaderBusqueda
