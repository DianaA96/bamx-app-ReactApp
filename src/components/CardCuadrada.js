import React from 'react';
import '../styles/general.css';
import '../styles/glass.css';
import '../styles/botones.css';
import '../styles/inputs.css';
import '../styles/CardCuadrada.css';
import iconoUnidad from '../assets/icons/iconoUnidadDetalle.png'
import Operador from '../assets/icons/iconoOperador.png'
import Receptor from '../assets/icons/iconoReceptor.png'
import Trafico from '../assets/icons/iconoTrafico.png'
import Admin from '../assets/icons/iconoAdmin.png'
import iconoRuta from '../assets/icons/iconoRuta.png'
import iconoDonador from '../assets/icons/iconoDonador.png'

function CardCuadrada(props) {
    const iconos = [Operador, Receptor, Trafico, Admin, iconoDonador, iconoUnidad, iconoRuta]
    let detalles={}

    switch(props.cardType){
        case "usuario":{

            if(props.data.apellidoM==null){
                props.data.apellidoM=''
            }
            let descripcion;
            if(props.data.idDriver!=null){ 
                 descripcion = "Operador" 
            }
            else if(props.data.idReceiver!=null){ 
                descripcion = "Receptor" 
           }
           else if(props.data.idTrafficCoordinator!=null){ 
                descripcion = "Trafico" 
            }
            else if(props.data.idAdmin!=null){
                descripcion="Admin"
            }
           else { 
                descripcion = "Sin Cargo" 
           }
            detalles = {
                cardHeader: `${props.data.nombre} ${props.data.apellidoP} ${props.data.apellidoM}`,
                cardDescription: descripcion,
                cardIcon: descripcion
            };
            break;
        }
        case "donador":{
            detalles = {
                cardHeader: props.data.nombre,
                cardDescription: `${props.data.colonia != null ? props.data.colonia : ''}`,
                cardDescription1: `${props.data.municipio != null ? props.data.municipio: ''}`,
                cardIcon: "Donador"
            };
            break;
        }
        case "unidad":{
            detalles = {
                cardHeader: props.data.modelo,
                cardDescription: props.data.placa,
                cardIcon: "iconoUnidad"
            };
            break;
        }
        case "ruta":{
            detalles = {
                cardHeader: props.data.nombre,
                cardDescription: `${props.data.puntosRecoleccion} puntos de recolección`,
                cardIcon: "iconoRuta"
            };
            break;
        }
            
        default:
            console.log('No hay detalles para mostrar')
    }


    function mostrarDetalles(){
        props.setIdRuta(props.data.idRoute)
        props.setNombreRuta(props.data.nombre)
        props.setPtosRecolec(props.data.puntosRecoleccion)
        /* props.setArrPtosRecolec(props.data.) */
        switch(props.cardType){
            case "usuario":
                props.setUserId(props.data.idUser)
                props.setCargo(detalles.cardDescription)
                break;
            case "donador":
                props.setDonorId(props.data.idDonor);
                break;
            case "unidad":
                props.setVehicleId(props.data.idVehicle);
                break;
            case "ruta":
                props.setRouteId(props.data.idRoute);
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
                if(detalles.cardDescription=='Trafico'){
                    return 2
                }
                if(detalles.cardDescription=='Admin'){
                    return 3
                }
                break;
            case "donador":
                return 4
            case "unidad":
                return 5
            case "ruta":
                return 6
    }
    }
    
    return(
        <div className="cardCuadrada lightGlass" onClick={mostrarDetalles}>
            <p className="manrope4 bold">{detalles.cardHeader}</p>
            <p className="manrope5">{detalles.cardDescription}<br/>{detalles.cardDescription1}</p>
            <div className="cardCuadrada-cont-img">
                <img src={iconos[checkIcon()]} alt="icon"/>
            </div>
            
        </div>
    )
}

export default CardCuadrada;