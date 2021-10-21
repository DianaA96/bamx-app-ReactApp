import React, { useState } from 'react'
import HeaderBusquedaDonadores from '../components/HeaderBusquedaDonadores'
import MenuPrincipal from '../components/MenuPrincipal'
import GridCardsGestionarDonadores from '../components/GridCardsGestionarDonadores'

import '../styles/views.css'

function GestionarDonadores() {
    
    const [ queryInput, setQueryInput ] = useState('')
    const [ manageFiltroOrden, setmanageFiltroOrden ] = useState('asc')
    const [ manageFiltroTipo, setmanageFiltroTipo ] = useState('')

    return (
        <body className="green-gradient">
            <aside>
                <MenuPrincipal></MenuPrincipal>
            </aside>
            <main>
                <header>
                    <HeaderBusquedaDonadores setQueryInput={setQueryInput} setmanageFiltroTipo={setmanageFiltroTipo} setmanageFiltroOrden={setmanageFiltroOrden}></HeaderBusquedaDonadores>
                </header>
                <GridCardsGestionarDonadores queryInput={queryInput} tipo={manageFiltroTipo} orden={manageFiltroOrden}></GridCardsGestionarDonadores>
            </main>
        </body>
    )
}


export default GestionarDonadores
