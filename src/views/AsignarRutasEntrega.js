import React from 'react'
import HeaderBusquedaRutasEntrega from '../components/HeaderBusquedaRutasEntrega'
import MenuPrincipal from '../components/MenuPrincipal'
import '../styles/views.css'
import GridCardsAsignarRutasDeEntrega from '../components/GridCardsAsignarRutasDeEntrega'

function AsignarRutasEntrega() {

    return (
        <body className="orange-gradient">
            <aside>
                <MenuPrincipal idRolLogin={1}></MenuPrincipal>
            </aside>
            <main>
                <header>
                    <HeaderBusquedaRutasEntrega></HeaderBusquedaRutasEntrega>
                </header>
                <GridCardsAsignarRutasDeEntrega/>
            </main>
        </body>
    )
}

export default AsignarRutasEntrega