import React, { useState, useEffect } from 'react'
import HeaderBusquedaRutasRecoleccion from '../components/HeaderBusquedaRutasRecoleccion'
import MenuPrincipal from '../components/MenuPrincipal'
import GridCardsAsignarRutasDeRecoleccion from '../components/GridCardsAsignarRutasDeRecoleccion'
import '../styles/views.css'
import axios from 'axios'

let rutas = []
let donadoresExtraordinarios = []
let unidades = []

function AsignarRutasDeRecoleccion() {

    const [ queryInput, setQueryInput ] = useState('')
    const [ manageFiltroOrden, setmanageFiltroOrden ] = useState('asc')
    const [ modalVisibility, setModalVisibility] = useState(false)
    const [ operadorId, setOperadorId ] = useState()
    const [ status, setStatus ] = useState('')
    const [ error, setError ] = useState('')
    
    useEffect(()=>{
        setStatus('loading')
        axios.get(`http://bamxapi-env.eba-wsth22h3.us-east-1.elasticbeanstalk.com/routes/extradonors/vehicles`)
          .then((result)=>{
            rutas = result.data.rutas;
            donadoresExtraordinarios = result.data.extraDonors;
            unidades = result.data.unidades;
            setStatus('resolved')
          })
          .catch((error)=>{
            setError(error)
            setStatus('error')
          })
    }, [modalVisibility])

    
    return (
        <body className="orange-gradient">
            <aside>
                <MenuPrincipal idRolLogin={1}></MenuPrincipal>
            </aside>
            <main>
                <header>
                    <HeaderBusquedaRutasRecoleccion setQueryInput={setQueryInput} setmanageFiltroOrden={setmanageFiltroOrden}></HeaderBusquedaRutasRecoleccion>
                </header>
                <GridCardsAsignarRutasDeRecoleccion 
                queryInput={queryInput}
                order={manageFiltroOrden} 
                rutas={rutas} 
                setOperadorId = {setOperadorId} 
                unidades={unidades} 
                donadoresExtraordinarios={donadoresExtraordinarios}
                operadorId = {operadorId}
                queryInput={queryInput}/>
            </main>
        </body>
    )
}

export default AsignarRutasDeRecoleccion