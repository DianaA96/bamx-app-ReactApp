import React from 'react'
import '../styles/CardOperadorPendiente.css';
import '../styles/general.css';
import '../styles/botones.css';
import iconoEspera from '../assets/icons/iconoEspera.png'
import '../styles/glass.css';

function CardOperadorPendiente(props) {
    function showModal(){
        props.setModalVisibility(true)
        props.setOperadorId(props.user.idUser)
    }

    return (
        <div className="cardOperadorPendiente-container lightGlass">
            <img src={iconoEspera} alt="" className="icono-cardOperadorPendiente" />
            <div className="detalles-OperadorPendiente">
                <p className="manrope4">{`${props.user.nombre} ${props.user.apellidoP} ${props.user.apellidoM}`}</p>
                <p className="manrope5">Operador {props.user.idUser}</p>
            </div>
            <button className="btn-asignarRutaRecoleccion btnVerde bebas3 blanco" onClick={showModal}>Asignar</button>
        </div>
    )
}

export default CardOperadorPendiente
