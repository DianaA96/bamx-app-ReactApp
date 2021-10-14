import React from 'react'
import HeaderBusquedaOperadoresRuta from '../components/HeaderBusquedaOperadoresRuta'
import MenuPrincipal from '../components/MenuPrincipal'
import CardOperadorActual from '../components/CardOperadorActual'
import GridCardsGestionarOperadoresRuta from '../components/GridCardsGestionarOperadoresRuta'
import '../styles/views.css'

function AsignarRutasDeRecoleccion() {

    return (
        <body className="orange-gradient">
            <aside>
                <MenuPrincipal idRolLogin={1}></MenuPrincipal>
            </aside>
            <main>
                <header>
                    <HeaderBusquedaOperadoresRuta></HeaderBusquedaOperadoresRuta>
                </header>
                    <GridCardsGestionarOperadoresRuta></GridCardsGestionarOperadoresRuta>
            </main>
        </body>
    )
}

export default AsignarRutasDeRecoleccion