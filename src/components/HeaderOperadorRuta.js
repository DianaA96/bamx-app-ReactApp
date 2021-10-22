import React from 'react'
import '../styles/HeaderOperadorRuta.css';
import '../styles/general.css';
import '../styles/glass.css';

function HeaderOperadorRuta(props) {
    return (
        <div className="headerOperador-container darkGlass ">
            <h1 className="titulo-header bebas1 blanco">Gestión de operadores en ruta</h1>
            <p className="manrope2 bold">{props.driver.nombre === undefined? null:`${props.driver.nombre} ${props.driver.apellidoP} ${props.driver.apellidoM}`}</p>
            <p className="manrope4">{`Operador ${props.driver.nombreUsuario === undefined? '': props.driver.nombreUsuario}`}</p>
       </div>
    )
}

export default HeaderOperadorRuta
