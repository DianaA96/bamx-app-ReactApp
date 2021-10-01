import React from 'react'
import '../styles/HeaderBusqueda.css';
import '../styles/general.css';
import '../styles/glass.css';

function HeaderBusqueda() {
    return (
       <div className="headerBusqueda-container darkGlass">
           <div className="headerBusqueda-left">
                <h1 className="titulo-header bebas1 blanco">Titulo</h1>
                <input type="text" className="input-busqueda" />
           </div>
           <div className="headerBusqueda-right">
                <div className="agregar-container">
                    <h3 className="bebas3">Agregar</h3>
                    <button className='btn-agregar'><i class="fas fa-plus"></i></button>
                </div>
                <button className="btn-filtros">Filtros</button>
           </div>
       </div>
    )
}

export default HeaderBusqueda
