import React, { useState, useEffect}from 'react'
import '../styles/views.css'
import CardOperadorEntrega from '../components/CardOperadorEntrega'
import ErrorVersion1 from './ErrorVersion1'
import Loader from './Loader'
import axios from 'axios'

function GridCardsAsignarRutasDeEntrega(props) {

    const [ status, setStatus ] = useState('')
    const [ error, setError ] = useState('')
    const [ drivers, setDrivers ] = useState([])

    useEffect(()=>{
        setStatus('loading')
        axios.get(`http://bamxapi-env.eba-wsth22h3.us-east-1.elasticbeanstalk.com/drivers/assigndeliveries`)
        .then((result)=>{
            setDrivers(result.data.choferes)
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