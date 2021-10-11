import React, {useState, useEffect} from 'react'
import CardCuadrada from '../components/CardCuadrada'
import '../styles/views.css'
import axios from 'axios'
import ModalConfirmacion from './ModalConfirmacion'
import ModalDetallesUnidad from './ModalDetallesUnidad'
import ErrorVersion1 from './ErrorVersion1'
import EmptyState1 from './EmptyState1'
import Loader from './Loader'

function GridCardsGestionarUnidades() {

    const [modalVisibility, setModalVisibility] = useState(false)
    const [modalConfirmacionVisibility, setModalConfirmacionVisibility] = useState(false)
    const [ vehicleId, setVehicleId ] = useState('');
    const cardType = "unidad";


    const [status, setStatus ] = useState('idle');
    const [error, setError] = useState(null);
    const [vehicles, setVehicles] = useState([]);
    
    function handleDelete(){
        axios.delete(`http://localhost:5000/vehicles/${vehicleId}`)
        .then((result)=>{
            setStatus('resolved')
            alert("Usnidad " + result.data.usuarioEliminado.nombreUsuario + " deshabilitada")
            setModalConfirmacionVisibility(false);
        })
        .catch((error)=>{
            setError(error)
            setStatus('error')
        })
    }


    useEffect(()=>{
        setStatus('loading')
        axios.get(`http://localhost:5000/vehicles`)
          .then((result)=>{
              console.log(result)
            setVehicles(result.data.listaVehicles)
            setStatus('resolved')
          })
          .catch((error)=>{
            setError(error)
            setStatus('error')
          })
    },[])

    if(status === 'idle' || status === 'loading'){ 
        return <Loader/>
    }
    
    
    if(status === 'error'){
        return (
            <ErrorVersion1 nombreError={error.message}></ErrorVersion1>
        ) 
    }
    
    if(status === 'resolved'){
    return (
        <>
            <section className="contenido">
                <div className="cardsCuadradas-container">
                    {vehicles.map((data,i)=>
                        <CardCuadrada data = {data} cardType={cardType} setModalVisibility={setModalVisibility} setVehicleId={setVehicleId}></CardCuadrada>
                    )}
                </div>
            </section>
            {modalVisibility ? <ModalDetallesUnidad vehicleId={vehicleId} setModalVisibility={setModalVisibility}  setModalConfirmacionVisibility={setModalConfirmacionVisibility}></ModalDetallesUnidad>  : null}
            {modalConfirmacionVisibility ? <ModalConfirmacion  handleConfirmation={handleDelete} setModalConfirmacionVisibility={setModalConfirmacionVisibility} titulo1="eliminación" titulo2="unidad" accion="eliminar" entidadObjetivo=" la unidad" idEntidad={vehicleId}></ModalConfirmacion>:null}
        </>
    )
}
}
export default GridCardsGestionarUnidades
