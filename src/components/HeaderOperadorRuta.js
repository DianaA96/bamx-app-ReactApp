import React from 'react'
import '../styles/HeaderOperadorRuta.css';
import '../styles/general.css';
import '../styles/glass.css';

function HeaderOperadorRuta() {
    return (
        <div className="headerOperador-container darkGlass ">
            <h1 className="titulo-header bebas1 blanco">Titulo</h1>
            <p className="manrope2 bold">Nombre Operador</p>
            <p className="manrope4">ID Operador</p>
       </div>
    )
}

export default HeaderOperadorRuta
