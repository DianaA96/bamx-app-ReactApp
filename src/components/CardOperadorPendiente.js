import React from 'react'
import '../styles/CardOperadorPendiente.css';
import '../styles/general.css';
import iconoEspera from '../assets/icons/iconoEspera.png'
import '../styles/glass.css';

function CardOperadorPendiente(props) {
    return (
        <div className="cardOperadorPendiente-container lightGlass">
            <img src={iconoEspera} alt="" className="icono-card-operadorPendiente" />
            <div className="detalles-OperadorPendiente">
                <p className="manrope4">Rodrigo Hernandez B.</p>
                <p className="manrope5">Operador #29321</p>
            </div>
            <button className="btn-asignarRutaRecoleccion">Asignar</button>
        </div>
    )
}

export default CardOperadorPendiente
