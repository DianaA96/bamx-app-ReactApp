import React from 'react';
import '../styles/general.css';
import '../styles/glass.css';
import '../styles/botones.css';
import '../styles/inputs.css';
import '../styles/CardCuadrada.css';
import iconoUnidad from '../assets/icons/iconoUnidad.png'
import Operador from '../assets/icons/iconoOperador.png'
import Receptor from '../assets/icons/iconoReceptor.png'
import Trafico from '../assets/icons/iconoTrafico.png'


function CardCuadrada(props) {
    const {user} = props
    const iconos = [Operador, Receptor, Trafico]

    function checkIcon(){
        if(user.puesto=='Operador'){
            return 0
        }
        if(user.puesto=='Receptor'){
            return 1
        }
        if(user.puesto=='Coordinador de tráfico'){
            return 2
        }
    }
    
    return(
        <div className="cardCuadrada lightGlass">
            <p className="manrope4 bold">{user.nombre}</p>
            <p className="manrope4 bold">{`${user.apellidoP} ${user.apellidoM}`}</p>
            <p className="manrope5">{user.puesto}</p>
            <img src={iconos[checkIcon()]} alt="icon"/>
        </div>
    )
}

export default CardCuadrada;