import React, {useState, useEffect} from 'react'
import HeaderBusquedaUnidades from '../components/HeaderBusquedaUnidades'
import MenuPrincipal from '../components/MenuPrincipal'
import GridCardsGestionarUnidades from '../components/GridCardsGestionarUnidades'
import '../styles/views.css'

function GestionarUnidades() {

        return (
            <body className="green-gradient">
                <aside>
                    <MenuPrincipal idRolLogin={2}></MenuPrincipal>
                </aside>
                <main>
                    <header>
                        <HeaderBusquedaUnidades></HeaderBusquedaUnidades>
                    </header>
                    <GridCardsGestionarUnidades></GridCardsGestionarUnidades>
                </main>
            </body>
        )
    
}

export default GestionarUnidades
