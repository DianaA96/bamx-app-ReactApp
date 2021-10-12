import React, {useState, useEffect} from 'react'
import CardCuadrada from '../components/CardCuadrada'
import ModalDetallesRuta from '../components/ModalDetallesRuta'
import ModalConfirmacion from '../components/ModalConfirmacion'
import ErrorVersion1 from './ErrorVersion1'
import EmptyState1 from './EmptyState1'
import Loader from './Loader'
import '../styles/views.css'
import axios from 'axios'

function GridCardsGestionarRutas() {
    const [modalVisibility, setModalVisibility] = useState(false)
    const [modalConfirmacionVisibility, setModalConfirmacionVisibility] = useState(false)
    const [ routeId, setRouteId ] = useState('1');
    const [routes, setRoutes] = useState([]);
    const cardType = "ruta";

    const [status, setStatus ] = useState('idle');
    const [error, setError] = useState(null);

    function handleDelete(){
        axios.delete(`http://localhost:5000/vehicles/${routeId}`)
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
        axios.get(`http://localhost:5000/routes`)
          .then((result)=>{
              console.log(result)
            setRoutes(result.data.rutas)
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
                        {routes.map((data,i)=>
                            <CardCuadrada data = {data} cardType={cardType} setModalVisibility={setModalVisibility} setRouteId={setRouteId}></CardCuadrada>
                        )}
                    </div>
                </section>
                {modalVisibility ? <ModalDetallesRuta routeId={routeId} setModalVisibility={setModalVisibility}  setModalConfirmacionVisibility={setModalConfirmacionVisibility}></ModalDetallesRuta>  : null}
                {modalConfirmacionVisibility ? <ModalConfirmacion  setModalConfirmacionVisibility={setModalConfirmacionVisibility} titulo1="eliminación" titulo2="ruta" accion="eliminar" entidadObjetivo=" la ruta" idEntidad={routeId}></ModalConfirmacion>:null}
            </>
        )
    }
}

export default GridCardsGestionarRutas
