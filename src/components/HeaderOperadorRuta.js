import React from 'react'
import '../styles/HeaderOperadorRuta.css';
import '../styles/general.css';
import '../styles/glass.css';

function HeaderOperadorRuta(props) {
    return (
        <div className="headerOperador-container darkGlass ">
            <h1 className="titulo-header bebas1 blanco">Gestión de operadores en ruta</h1>
            <p className="manrope2 bold">{`${props.user.nombre} ${props.user.apellidoP} ${props.user.apellidoM}`}</p>
            <p className="manrope4">{`Operador #${props.user.numOperador}`}</p>
       </div>
    )
}

export default HeaderOperadorRuta
