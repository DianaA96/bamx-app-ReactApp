import React from 'react'
import '../styles/CardOperadorActual.css';
import '../styles/general.css';
import iconoOperadorRuta from '../assets/icons/iconoOperadorRuta.png'


function CardOperadorActual() {

    const progreso = (2/4 * 100)

    const barraStyle = {
        width: progreso + `%`
    }

    return (
        <div className="cardOperadorActual-container">
            <div className="cardOperadorActual-top">
                <img src={iconoOperadorRuta} alt="" className="icono-card-operadorActual" />
                <div className="detalles-OperadorActual">
                    <p className="p4">Rodrigo Hernandez B.</p>
                    <p className="p5">Operador #29321</p>
                    <p className="p5 nombreRuta">Ruta Cuautepec-Yolotlan</p>
                </div>
                <button className="btn-verDetalle">Asignar</button>
            </div>
            <div className="cardOperadorActual-bottom">
                <p className="p5">2/4 recolecciones completas</p>
                <div className="barra-progresoRecolecciones" style={barraStyle}></div>
            </div>
        </div>
    )
}

export default CardOperadorActual
