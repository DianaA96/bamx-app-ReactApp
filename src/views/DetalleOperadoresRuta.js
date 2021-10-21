import React, { useState, useEffect } from 'react'
import HeaderOperadorRuta from '../components/HeaderOperadorRuta'
import MenuPrincipal from '../components/MenuPrincipal'
import CardOperadorDetalles from '../components/CardOperadorDetalles'
import '../styles/views.css'
import '../styles/botones.css'
import CustomLink from '../components/CustomLink'
import ErrorVersion1 from '../components/ErrorVersion1'
import Loader from '../components/Loader'
import axios from 'axios'

function DetalleOperadoresRuta(props) {

    const [ status, setStatus ] = useState('')
    const [ error, setError ] = useState('')
    const [ driver, setDriver ] = useState([])
    const [ notasRecoleccion, setNotasRecoleccion ] = useState([]) 

    useEffect(()=>{
        setStatus('loading')
        axios.get(`http://localhost:5000/drivers/enroutedriver/${props.match.params.idDriver}`)
        .then((result)=>{
            console.log(result)
            setDriver(result.data.chofer[0])
            setNotasRecoleccion(result.data.recoleccionesRealizadas)
            setStatus('resolved')
        })
        .catch((error)=>{
            setError(error)
            setStatus('error')
        })
    },[])

    return (
        <body className="orange-gradient">
            <aside>
                <MenuPrincipal idRolLogin={1}></MenuPrincipal>
            </aside>
            <main>
                <header className="header-operador-ruta">
                    <HeaderOperadorRuta driver={driver}></HeaderOperadorRuta>
                </header>
                {status === 'idle' || status === 'loading'? <Loader/>:status === 'error'?<ErrorVersion1 nombreError={error.message}></ErrorVersion1>:null}
                <section className="contenido">
                    <div className="cardsOperadorPendiente-container">
                        {notasRecoleccion.map((nota,i)=>
                            <CardOperadorDetalles nota={nota}></CardOperadorDetalles>
                        )}
                    </div>
                </section>
                <CustomLink tag='button' to={`/gestionDeOperadoresEnRuta`} className="btnVerdeCuadrado bebas2 blanco">Regresar</CustomLink>
            </main>
        </body>
    )
}

export default DetalleOperadoresRuta