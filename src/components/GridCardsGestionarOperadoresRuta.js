import React, { useState, useEffect}from 'react'
import CardOperadorActual from '../components/CardOperadorActual'
import '../styles/views.css'
import axios from 'axios'

function GridCardsGestionarOperadoresRuta(props) {

    const [ status, setStatus ] = useState('')
    const [ error, setError ] = useState('')
    const [ drivers, setDrivers ] = useState([])

    useEffect(()=>{
        setStatus('loading')
        axios.get(`http://localhost:5000/drivers/enroutedrivers`)
        .then((result)=>{
            console.log(result)
            setDrivers(result.data.choferes)
            setStatus('resolved')
        })
        .catch((error)=>{
            setError(error)
            setStatus('error')
        })
    },[])

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

export default GridCardsGestionarOperadoresRuta;