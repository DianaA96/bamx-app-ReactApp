import React from 'react';
import '../styles/general.css';
import '../styles/glass.css';
import '../styles/botones.css';
import '../styles/inputs.css';
import '../styles/CardOperadorEntrega.css';
import iconoFrutaVerdura from '../assets/icons/iconoFrutaVerdura.png'
import iconoPan from '../assets/icons/iconoPan.png'
import iconoAbarrote from '../assets/icons/iconoAbarrote.png'
import iconoNoComestible from '../assets/icons/iconoNoComestible.png'

function CardOperadorEntrega(props) {
    
    let fruta
    let pan 
    let abarrote
    let noComestible
    let ultimaHora = props.user.recolecciones[0].hora === null ? new Date() : props.user.recolecciones[0].hora

    console.log(ultimaHora)

    for(let b = 0; b < props.user.recolecciones.length; b++) {
        if(props.user.recolecciones[b].categoria === 'Pan') {
            pan = props.user.recolecciones[b].cantidadRecolectada
            console.log(props.user.recolecciones[b].cantidadRecolectada) 
        }

        else if(props.user.recolecciones[b].categoria === 'Abarrote') {
            abarrote = props.user.recolecciones[b].cantidadRecolectada
            console.log(props.user.recolecciones[b].cantidadRecolectada) 
        }

        else if(props.user.recolecciones[b].categoria === 'Frutas y verduras') {
            fruta = props.user.recolecciones[b].cantidadRecolectada
            console.log(props.user.recolecciones[b].cantidadRecolectada) 
        }

        else if(props.user.recolecciones[b].categoria === 'No comestible') {
            noComestible = props.user.recolecciones[b].cantidadRecolectada
            console.log(props.user.recolecciones[b].cantidadRecolectada) 
        }
    }

    return(
        <div className="cardOperadorEntrega lightGlass">
            <div className="infoOperadorEntrega">
                <div className="nombreOperadorEntrega">
                    <p className="manrope4 bold">{props.user.operador} {props.user.apellidoP} {props.user.apellidoM}</p>
                    <p className="manrope5">Operador {props.user.nombreUsuario}</p>
                </div>
                <div>
                    <p className="manrope5 gris">Última recolección: {props.user.hora}</p>
                </div>
            </div>
            <div className="infoRecoleccionOperador">
                <div className="cardRecoleccionOperador">
                    <img src={iconoFrutaVerdura} alt="Frutas y verduras" />
                    <p className="manrope4 bold">{fruta} kg</p>
                </div>
                <div className="cardRecoleccionOperador">
                    <img src={iconoPan} alt="Frutas y verduras" />
                    <p className="manrope4 bold">{pan} kg</p>
                </div>
                <div className="cardRecoleccionOperador">
                    <img src={iconoAbarrote} alt="Frutas y verduras" />
                    <p className="manrope4 bold">{abarrote} kg</p>
                </div>
                <div className="cardRecoleccionOperador">
                    <img src={iconoNoComestible} alt="Frutas y verduras" />
                    <p className="manrope4 bold">{noComestible} kg</p>
                </div>
            </div>
            <div className="botonAsignarRutaOperador">
                <button className="btnVerde bebas2 blanco">Asignar ruta</button>
            </div>
        </div>
    )
}

export default CardOperadorEntrega;