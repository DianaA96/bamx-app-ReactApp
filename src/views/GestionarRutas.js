import React, {useState, useEffect} from 'react'
import HeaderBusquedaRutas from '../components/HeaderBusquedaRutas'
import MenuPrincipal from '../components/MenuPrincipal'

import axios from 'axios'
import '../styles/views.css'
import GridCardsGestionarRutas from '../components/GridCardsGestionarRutas'

function GestionarRutas() {

   

    return (
        <body className="orange-gradient">
            <aside>
                <MenuPrincipal idRolLogin={1}></MenuPrincipal>
            </aside>
            <main>
                <header>
                    <HeaderBusquedaRutas></HeaderBusquedaRutas>
                </header>
                <GridCardsGestionarRutas></GridCardsGestionarRutas>
            </main>
        </body>
    )
}

export default GestionarRutas
