import React, {useState, useEffect} from 'react'
import HeaderBusquedaRutas from '../components/HeaderBusquedaRutas'
import MenuPrincipal from '../components/MenuPrincipal'

import '../styles/views.css'
import GridCardsGestionarRutas from '../components/GridCardsGestionarRutas'

function GestionarRutas() {

    const [ idRuta, setIdRuta ] = useState(0)
    const [ nombreRuta, setNombreRuta ] = useState('')
    const [ ptosRecolec, setPtosRecolec ] = useState(0)
    const [ arrPtosRecolec, setArrPtosRecolec ] = useState([])
    const [ queryInput, setQueryInput ] = useState('')

    const [ fiPtosRecolec, setFiPtosRecolec ] = useState('')
    const [ orden, setOrden ] = useState('asc')

    return (
        <body className="orange-gradient">
            <aside>
                <MenuPrincipal idRolLogin={1}></MenuPrincipal>
            </aside>
            <main>
                <header>
                    <HeaderBusquedaRutas 
                    setQueryInput={setQueryInput}
                    setPtosRecolec={setPtosRecolec}
                    setFiPtosRecolec={setFiPtosRecolec}
                    setArrPtosRecolec={setArrPtosRecolec}
                    setOrden={setOrden}/>
                </header>
                <GridCardsGestionarRutas 
                idRuta={idRuta} 
                setIdRuta={setIdRuta}
                nombreRuta={nombreRuta}
                setNombreRuta={setNombreRuta}
                fiPtosRecolec={fiPtosRecolec}
                ptosRecolec={ptosRecolec}
                orden={orden}
                setPtosRecolec={setPtosRecolec}
                arrPtosRecolec={arrPtosRecolec}
                setArrPtosRecolec={setArrPtosRecolec}
                queryInput={queryInput}/>
            </main>
        </body>
    )
}

export default GestionarRutas