import React from 'react'
import '../styles/HeaderBusqueda.css';
import '../styles/general.css';

function HeaderBusqueda() {
    return (
       <div className="headerBusqueda-container">
           <div className="header-left">
                <h1 className="titulo-header">Titulo</h1>
                <input type="text" className="input-busqueda" />
           </div>
           <div className="header-right">
                <div className="agregar-container">
                    <h3>Agregar</h3>
                    <button className='btn-agregar'><i class="fas fa-plus"></i></button>
                </div>
                <button className="btn-filtros">Filtros</button>
           </div>
       </div>
    )
}

export default HeaderBusqueda
