import React, { useState } from 'react'
import HeaderBusquedaUnidades from '../components/HeaderBusquedaUnidades'
import MenuPrincipal from '../components/MenuPrincipal'
import GridCardsGestionarUnidades from '../components/GridCardsGestionarUnidades'
import '../styles/views.css'

function GestionarUnidades() {

    const [ queryInput, setQueryInput ] = useState('')
    const [ orden, setOrden ] = useState('asc')

        return (
            <body className="green-gradient">
                <aside>
                    <MenuPrincipal idRolLogin={2}></MenuPrincipal>
                </aside>
                <main>
                    <header>
                        <HeaderBusquedaUnidades setQueryInput={setQueryInput} setOrden={setOrden}></HeaderBusquedaUnidades>
                    </header>
                    <GridCardsGestionarUnidades queryInput={queryInput} orden={orden}></GridCardsGestionarUnidades>
                </main>
            </body>
        )
    
}

export default GestionarUnidades
