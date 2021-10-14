import React from 'react'
import '../styles/CardOperadorActual.css';
import '../styles/general.css';
import '../styles/botones.css';
import '../styles/glass.css';
import iconoOperadorRuta from '../assets/icons/iconoOperadorRuta.png'
import CustomLink from './CustomLink';
// props.match.params


function CardOperadorActual(props) {

    let totalesRecolectadas = parseInt(props.user.recolectadas, 10) + parseInt(props.user.norecolectadas, 10)
    let recolectadas = parseInt(props.user.recolectadas)
    let norecolectadas = parseInt(props.user.norecolectadas)

    let progreso = (recolectadas/totalesRecolectadas * 100)

    const barraStyle = {
        width: progreso + `%`
    }

    return (
        <div className="cardOperadorActual-container lightGlass">
            <div className="cardOperadorActual-top">
                <img src={iconoOperadorRuta} alt="" className="icono-card-operadorActual" />
                <div className="detalles-OperadorActual">
                    <p className="manrope4">{`${props.user.nombre} ${props.user.apellidoP} ${props.user.apellidoM}`}</p>
                    <p className="manrope5">{`Operador ${props.user.nombreUsuario}`}</p>
                    <p className="manrope5 nombreRuta">{props.user.ruta}</p>
                </div>
                <CustomLink tag='button' to={`/editarUsuario/${props.user.numOperador}`} className="btnConfirmar bebas3 blanco btnVerde">Ver detalle</CustomLink>
            </div>
            <div className="cardOperadorActual-bottom">
                <p className="manrope5">{`${props.user.recolectadas}/${totalesRecolectadas} recolecciones completas`}</p>
                <div className="barra-progresoRecolecciones" style={barraStyle}></div>
            </div>
        </div>
    )
}

export default CardOperadorActual
