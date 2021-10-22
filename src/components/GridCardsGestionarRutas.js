import React, {useState, useEffect} from 'react'
import CardCuadrada from '../components/CardCuadrada'
import ModalDetallesRuta from '../components/ModalDetallesRuta'
import ModalConfirmacion from '../components/ModalConfirmacion'
import ErrorVersion1 from './ErrorVersion1'
import Loader from './Loader'
import '../styles/views.css'
import axios from 'axios'

let queryString = ''
let query = ''

function GridCardsGestionarRutas(props) {
    const [ modalVisibility, setModalVisibility ] = useState(false)
    const [ modalConfirmacionVisibility, setModalConfirmacionVisibility ] = useState(false)
    const [ routeId, setRouteId ] = useState('1');
    const [ routes, setRoutes ] = useState([]);
    const cardType = "ruta";

    const [status, setStatus ] = useState('idle');
    const [error, setError] = useState(null); 

    function handleDelete(){
        axios.delete(`http://localhost:5000/vehicles/${routeId}`)
        .then((result)=>{
            setStatus('resolved')
            alert("Unidad " + result.data.usuarioEliminado.nombreUsuario + " deshabilitada")
            setModalConfirmacionVisibility(false);
        })
        .catch((error)=>{
            setError(error)
            setStatus('error')
        })
    }

    queryString = ''
    query = ''

    if(props.queryInput !== '' || props.fiPtosRecolec !== '' || props.orden !== ''){
        if(props.queryInput !== ''){
            queryString = '?name='
            query = props.queryInput
        }
     
        else if (props.queryInput === ''){
            queryString = ''
            query = ''
        } 
        
        if (props.orden === 'Donasc') {
            queryString = '?donors='
            query = 'asc'
        }

        else if (props.orden === 'Dondesc') {
            queryString = '?donors='
            query = 'desc'
        }

        if (parseInt(props.fiPtosRecolec, 10) > 0) {
            queryString = '?numberDonors='
            query = props.fiPtosRecolec
        }
       
    } else {
        queryString = ''
        query = ''
    }

    function handleDelete(){
        axios.delete(`http://localhost:5000/routes/${props.idRuta}`)
        .then((result)=>{
            setStatus('resolved')
            alert("Ruta " + props.nombreRuta + " deshabilitada correctamente.")
            setModalConfirmacionVisibility(false);
        })
        .catch((error)=>{
            setError(error)
            setStatus('error')
        })
    }

    useEffect(()=>{
        setStatus('loading')
        axios.get(`http://localhost:5000/routes${queryString}${query}`)
          .then((result)=>{
            setRoutes(result.data.rutas)
            setStatus('resolved')
          })
          .catch((error)=>{
            setError(error)
            setStatus('error')
          })
    },[props.queryInput , props.fiPtosRecolec , props.orden])

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
                            <CardCuadrada 
                            setIdRuta={props.setIdRuta}
                            setNombreRuta={props.setNombreRuta}
                            setPtosRecolec={props.setPtosRecolec}
                            setArrPtosRecolec={props.setArrPtosRecolec}
                            data = {data} 
                            cardType={cardType} 
                            setModalVisibility={setModalVisibility} 
                            setRouteId={setRouteId}/>
                        )}
                    </div>
                </section>
                {modalVisibility ? <ModalDetallesRuta 
                                    idRuta={props.idRuta} 
                                    setModalVisibility={setModalVisibility}  
                                    setModalConfirmacionVisibility={setModalConfirmacionVisibility}
                                    nombreRuta={props.nombreRuta}
                                    ptosRecolec={props.ptosRecolec}
                                    arrPtosRecolec={props.arrPtosRecolec}></ModalDetallesRuta>  : null}
                {modalConfirmacionVisibility ? <ModalConfirmacion  setModalConfirmacionVisibility={setModalConfirmacionVisibility} titulo1="eliminación" titulo2="ruta" accion="eliminar" entidadObjetivo=" la ruta" idEntidad={routeId} handleConfirmation={handleDelete}></ModalConfirmacion>:null}
            </>
        )
    }
}

export default GridCardsGestionarRutas
