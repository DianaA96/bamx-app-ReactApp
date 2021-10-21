import React, { useState, useEffect}from 'react'
import '../styles/views.css'
import CardOperadorEntrega from '../components/CardOperadorEntrega'
import ErrorVersion1 from './ErrorVersion1'
import Loader from './Loader'
import axios from 'axios'

let drivers = []

function GridCardsAsignarRutasDeEntrega(props) {

    const [ status, setStatus ] = useState('')
    const [ error, setError ] = useState('')
    const [ drivers, setDrivers ] = useState([])

    useEffect(()=>{
        setStatus('loading')
        axios.get(`http://localhost:5000/drivers/assigndeliveries`)
        .then((result)=>{
            //console.log(result.data.chofer)
            setDrivers(result.data.choferes)
            console.log(drivers)
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
    
    else {
        return(
            <section className="contenido">
                <div className="cardsOperadorPendiente-container">
                    {drivers.map((driver,i)=>
                        <CardOperadorEntrega user = {driver}></CardOperadorEntrega>
                    )}
                </div>
            </section>
        )
    }
}

export default GridCardsAsignarRutasDeEntrega;