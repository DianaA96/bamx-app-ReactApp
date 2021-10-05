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
import iconoDonador from '../assets/icons/iconoDonador.png'

function CardCuadrada(props) {
    const iconos = [Operador, Receptor, Trafico, iconoDonador]
    let detalles={}

    switch(props.cardType){
        case "usuario":{
            detalles = {
                cardHeader: `${props.data.nombre} ${props.data.apellidoP} ${props.data.apellidoM}`,
                cardDescription: props.data.puesto,
                cardIcon: props.data.puesto
            };
            break;
        }
        case "donador":{
            detalles = {
                cardHeader: props.data.nombre,
                cardDescription: props.data.ubicacion,
                cardIcon: "Donador"
            };
            break;
        }
            
        default:
            console.log('No hay detalles para mostrar')
    }


    function mostrarDetalles(){
        switch(props.cardType){
            case "usuario":
                props.setUserId(props.data.idUser)
                break;
            case "donador":
                props.setDonorId(props.data.idDonor);
                break;
            default:
                console.log('No hay id por asignar')
        }
        props.setModalVisibility(true)
    }

    function checkIcon(){
        switch(props.cardType){
            case "usuario":
                if(detalles.cardDescription=='Operador'){
                    return 0
                }
                if(detalles.cardDescription=='Receptor'){
                    return 1
                }
                if(detalles.cardDescription=='Coordinador de tráfico'){
                    return 2
                }
                break;
            case "donador":
                return 3
                break;
    }
    }
    
    return(
        <div className="cardCuadrada lightGlass" onClick={mostrarDetalles}>
            <p className="manrope4 bold">{detalles.cardHeader}</p>
            <p className="manrope5">{detalles.cardDescription}</p>
            <img src={iconos[checkIcon()]} alt="icon"/>
        </div>
    )
}

export default CardCuadrada;