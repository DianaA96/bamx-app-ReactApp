import React, { useState, useEffect } from 'react'
import HeaderBusquedaOperadoresRuta from '../components/HeaderBusquedaOperadoresRuta'
import MenuPrincipal from '../components/MenuPrincipal'
import GridCardsGestionarOperadoresRuta from '../components/GridCardsGestionarOperadoresRuta'
import '../styles/views.css'

function AsignarRutasDeRecoleccion(props) {


    return (
        <body className="orange-gradient">
            <aside>
                <MenuPrincipal idRolLogin={1}></MenuPrincipal>
            </aside>
            <main>
                <header>
                    <HeaderBusquedaOperadoresRuta ></HeaderBusquedaOperadoresRuta>
                </header>
                    <GridCardsGestionarOperadoresRuta></GridCardsGestionarOperadoresRuta>
            </main>
        </body>
    )
}

export default AsignarRutasDeRecoleccion