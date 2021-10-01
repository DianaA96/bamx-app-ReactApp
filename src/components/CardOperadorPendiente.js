import React from 'react'
import '../styles/CardOperadorPendiente.css';
import '../styles/general.css';
import '../styles/botones.css';
import iconoEspera from '../assets/icons/iconoEspera.png'
import '../styles/glass.css';

function CardOperadorPendiente(props) {
    return (
        <div className="cardOperadorPendiente-container lightGlass">
            <img src={iconoEspera} alt="" className="icono-cardOperadorPendiente" />
            <div className="detalles-OperadorPendiente">
                <p className="manrope4">Rodrigo Hernandez Barajas</p>
                <p className="manrope5">Operador #29321</p>
            </div>
            <button className="btn-asignarRutaRecoleccion btnVerde bebas3 blanco">Asignar</button>
        </div>
    )
}

export default CardOperadorPendiente
