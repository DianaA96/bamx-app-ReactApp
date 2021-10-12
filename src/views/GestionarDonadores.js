import React, {useState, useEffect} from 'react'
import HeaderBusquedaDonadores from '../components/HeaderBusquedaDonadores'
import MenuPrincipal from '../components/MenuPrincipal'
import GridCardsGestionarDonadores from '../components/GridCardsGestionarDonadores'

import '../styles/views.css'

function GestionarDonadores() {

    return (
        <body className="green-gradient">
            <aside>
                <MenuPrincipal></MenuPrincipal>
            </aside>
            <main>
                <header>
                    <HeaderBusquedaDonadores></HeaderBusquedaDonadores>
                </header>
                <GridCardsGestionarDonadores></GridCardsGestionarDonadores>
                
            </main>
        </body>
    )
}


export default GestionarDonadores
