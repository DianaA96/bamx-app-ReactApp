import React from 'react'
import '../styles/CardOperadorPendiente.css';
import '../styles/general.css';
import iconoEspera from '../assets/icons/iconoEspera.png'

function CardOperadorPendiente(props) {
    return (
        <div className="cardOperadorPendiente-container">
            <img src={iconoEspera} alt="" className="icono-card-operadorPendiente" />
            <div className="detalles-OperadorPendiente">
                <p className="p4">Rodrigo Hernandez B.</p>
                <p className="p5">Operador #29321</p>
            </div>
            <button className="btn-asignarRutaRecoleccion">Asignar</button>
        </div>
    )
}

export default CardOperadorPendiente
