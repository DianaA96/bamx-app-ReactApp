import React, { useState, useEffect}from 'react'
import CardOperadorActual from '../components/CardOperadorActual'
import '../styles/views.css'
import CardOperadorEntrega from '../components/CardOperadorEntrega'
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
            setDrivers(result.data.chofer)
            console.log(drivers)
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
                    <CardOperadorEntrega user = {driver}></CardOperadorEntrega>
                )}
            </div>
        </section>
    )
}

export default GridCardsAsignarRutasDeEntrega;