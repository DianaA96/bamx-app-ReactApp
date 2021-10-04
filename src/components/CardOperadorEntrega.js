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


let operador = {
    nombre: "Rodrigo",
    apellidos: "Hernández B.",
    numeroOperador: 21231,
    ultimaRecoleccion: "14:32"
}

let recoleccion = {
    frutaYVerdura: 23,
    pan: 8,
    abarrote: 14,
    noComestible: 0
}

function CardOperadorEntrega() {
    return(
        <div className="cardOperadorEntrega lightGlass">
            <div className="infoOperadorEntrega">
                <div className="nombreOperadorEntrega">
                    <p className="manrope4 bold">{operador.nombre} {operador.apellidos}</p>
                    <p className="manrope5">Operador #{operador.numeroOperador}</p>
                </div>
                <div>
                    <p className="manrope5 gris">Última recolección: {operador.ultimaRecoleccion}</p>
                </div>
            </div>
            <div className="infoRecoleccionOperador">
                <div className="cardRecoleccionOperador">
                    <img src={iconoFrutaVerdura} alt="Frutas y verduras" />
                    <p className="manrope4 bold">{recoleccion.frutaYVerdura} kg</p>
                </div>
                <div className="cardRecoleccionOperador">
                    <img src={iconoPan} alt="Frutas y verduras" />
                    <p className="manrope4 bold">{recoleccion.pan} kg</p>
                </div>
                <div className="cardRecoleccionOperador">
                    <img src={iconoAbarrote} alt="Frutas y verduras" />
                    <p className="manrope4 bold">{recoleccion.abarrote} kg</p>
                </div>
                <div className="cardRecoleccionOperador">
                    <img src={iconoNoComestible} alt="Frutas y verduras" />
                    <p className="manrope4 bold">{recoleccion.noComestible} kg</p>
                </div>
            </div>
            <div className="botonAsignarRutaOperador">
                <button className="btnVerde bebas2 blanco">Asignar ruta</button>
            </div>
        </div>
    )
}

export default CardOperadorEntrega;