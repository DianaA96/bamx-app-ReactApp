import React from 'react'
import '../styles/CardOperadorActual.css';
import '../styles/general.css';
import '../styles/glass.css';
import iconoOperadorRuta from '../assets/icons/iconoOperadorRuta.png'


function CardOperadorActual() {

    const progreso = (3/4 * 100)

    const barraStyle = {
        width: progreso + `%`
    }

    return (
        <div className="cardOperadorActual-container lightGlass">
            <div className="cardOperadorActual-top">
                <img src={iconoOperadorRuta} alt="" className="icono-card-operadorActual" />
                <div className="detalles-OperadorActual">
                    <p className="manrope4">Rodrigo Hernandez B.</p>
                    <p className="manrope5">Operador #29321</p>
                    <p className="manrope5 nombreRuta">Ruta Cuautepec-Yolotlan</p>
                </div>
                <button className="btnConfirmar bebas4 blanco">Asignar</button>
            </div>
            <div className="cardOperadorActual-bottom">
                <p className="manrope5">2/4 recolecciones completas</p>
                <div className="barra-progresoRecolecciones" style={barraStyle}></div>
            </div>
        </div>
    )
}

export default CardOperadorActual
