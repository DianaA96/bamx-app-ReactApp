import React, { useState, useEffect}from 'react'
import CardOperadorActual from '../components/CardOperadorActual'
import ErrorVersion1 from './ErrorVersion1'
import '../styles/views.css'
import Loader from './Loader'
import axios from 'axios'

function GridCardsGestionarOperadoresRuta(props) {

    const [ status, setStatus ] = useState('')
    const [ error, setError ] = useState('')
    const [ drivers, setDrivers ] = useState([])

    useEffect(()=>{
        setStatus('loading')
        axios.get(`http://bamxapi-env.eba-wsth22h3.us-east-1.elasticbeanstalk.com/drivers/enroutedrivers`)
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
                        <CardOperadorActual user = {driver}></CardOperadorActual>
                    )}
                </div>
            </section>
        )
    }
}

export default GridCardsGestionarOperadoresRuta;