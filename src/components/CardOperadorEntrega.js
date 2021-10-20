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
import CustomLink from './CustomLink';

function CardOperadorEntrega(props) {

    return(
        <div className="cardOperadorEntrega lightGlass">
            <div className="infoOperadorEntrega">
                <div className="nombreOperadorEntrega">
                    <p className="manrope4 bold">{props.user.operador} {props.user.apellidoP} {props.user.apellidoM}</p>
                    <p className="manrope5">Operador {props.user.nombreUsuario}</p>
                </div>
                <div>
                    <p className="manrope5 gris">Última recolección: {props.user.horaUltimaRecoleccion}</p>
                </div>
            </div>
            <div className="infoRecoleccionOperador">
                <div className="cardRecoleccionOperador">
                    <img src={iconoFrutaVerdura} alt="Frutas y verduras" />
                    <p className="manrope4 bold">{props.user.recolecciones.fruta} kg</p>
                </div>
                <div className="cardRecoleccionOperador">
                    <img src={iconoPan} alt="Frutas y verduras" />
                    <p className="manrope4 bold">{props.user.recolecciones.pan} kg</p>
                </div>
                <div className="cardRecoleccionOperador">
                    <img src={iconoAbarrote} alt="Frutas y verduras" />
                    <p className="manrope4 bold">{props.user.recolecciones.abarrote} kg</p>
                </div>
                <div className="cardRecoleccionOperador">
                    <img src={iconoNoComestible} alt="Frutas y verduras" />
                    <p className="manrope4 bold">{props.user.recolecciones.noComestible} kg</p>
                </div>
            </div>
            <div className="botonAsignarRutaOperador">
                <CustomLink tag='button' to={`/asignarEntregaOperador/${props.user.idDriver}`} className="btnVerde bebas2 blanco">Asignar ruta</CustomLink>
            </div>
        </div>
    )
}

export default CardOperadorEntrega;