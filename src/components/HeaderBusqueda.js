import React from 'react'
import '../styles/HeaderBusqueda.css';
import '../styles/general.css';
import '../styles/glass.css';
import '../styles/inputs.css';
import '../styles/botones.css';

function HeaderBusqueda() {
    return (
       <div className="headerBusqueda-container darkGlass">
           <div className="headerBusqueda-top">
                <h1 className="titulo-header bebas1 blanco">Gestionar usuarios</h1>
                <div className="agregar-container">
                    <h3 className="bebas3 blanco">Agregar</h3>
                    <button className='btnMasGlass'><i class="fas fa-plus"></i></button>
                </div>
           </div>
           <div className="headerBusqueda-bottom">
                <input type="text" className="input-busqueda inputBusqueda bebas3 blanco" placeholder="Buscar" />
                <button className="btn-filtros bebas3 blanco">Filtros</button>
           </div>
       </div>
    )
}

export default HeaderBusqueda
