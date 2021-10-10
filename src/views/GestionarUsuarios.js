import React, { useState } from 'react'
import HeaderBusquedaUsuarios from '../components/HeaderBusquedaUsuarios'
import MenuPrincipal from '../components/MenuPrincipal'
import GridCardsGestionarUsuarios from '../components/GridCardsGestionarUsuarios'
import '../styles/views.css'

function GestionarUsuarios() {

    const [ queryInput, setQueryInput ] = useState('')
    const [ manageFiltroOrden, setmanageFiltroOrden ] = useState('asc')
    const [ manageFiltroCargo, setmanageFiltroCargo ] = useState('')
    const [ filtrosVisibility, setFiltrosVisibility ] = useState('')

    return (
        <body className="red-gradient">
            <aside>
                <MenuPrincipal idRolLogin={2}></MenuPrincipal>
            </aside>
            <main>
                <header>
                    <HeaderBusquedaUsuarios setQueryInput={setQueryInput} setFiltrosVisibility={setFiltrosVisibility} setmanageFiltroCargo={setmanageFiltroCargo} setmanageFiltroOrden={setmanageFiltroOrden}></HeaderBusquedaUsuarios>
                </header>
                <GridCardsGestionarUsuarios queryInput={queryInput} cargo={manageFiltroCargo} orden={manageFiltroOrden}/>
            </main>
        </body>
    )
}

export default GestionarUsuarios