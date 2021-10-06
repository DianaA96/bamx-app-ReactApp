import React from 'react'
import '../styles/CardOperadorActual.css';
import '../styles/general.css';
import '../styles/botones.css';
import '../styles/glass.css';
import iconoOperadorRuta from '../assets/icons/iconoOperadorRuta.png'


function CardOperadorActual(props) {

    const progreso = (props.user.recolCompletadas/props.user.recolTotales * 100)

    const barraStyle = {
        width: progreso + `%`
    }

    return (
        <div className="cardOperadorActual-container lightGlass">
            <div className="cardOperadorActual-top">
                <img src={iconoOperadorRuta} alt="" className="icono-card-operadorActual" />
                <div className="detalles-OperadorActual">
                    <p className="manrope4">{`${props.user.nombre} ${props.user.apellidoP} ${props.user.apellidoM}`}</p>
                    <p className="manrope5">{`Operador #${props.user.numOperador}`}</p>
                    <p className="manrope5 nombreRuta">{props.user.ruta}</p>
                </div>
                <button className="btnConfirmar bebas3 blanco btnVerde">Ver detalle</button>
            </div>
            <div className="cardOperadorActual-bottom">
                <p className="manrope5">{`${props.user.recolCompletadas}/${props.user.recolTotales} recolecciones completas`}</p>
                <div className="barra-progresoRecolecciones" style={barraStyle}></div>
            </div>
        </div>
    )
}

export default CardOperadorActual
