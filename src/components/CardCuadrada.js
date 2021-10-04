import React from 'react';
import '../styles/general.css';
import '../styles/glass.css';
import '../styles/botones.css';
import '../styles/inputs.css';
import '../styles/CardCuadrada.css';
import iconoUnidad from '../assets/icons/iconoUnidad.png'

let operador = {
    nombre: "Daniel",
    apellidos: "Sanchez Cornejo",
    puesto: "Operador"
}

function CardCuadrada() {
    return(
        <div className="cardCuadrada lightGlass">
            <p className="manrope4 bold">{operador.nombre}</p>
            <p className="manrope4 bold">{operador.apellidos}</p>
            <p className="manrope5">{operador.puesto}</p>
            <img src={iconoUnidad} alt="icon" />
        </div>
    )
}

export default CardCuadrada;