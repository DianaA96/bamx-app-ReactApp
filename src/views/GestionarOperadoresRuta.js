import React from 'react'
import HeaderBusquedaOperadoresRuta from '../components/HeaderBusquedaOperadoresRuta'
import MenuPrincipal from '../components/MenuPrincipal'
import CardOperadorActual from '../components/CardOperadorActual'
import '../styles/views.css'

function AsignarRutasDeRecoleccion() {

    const users = [
        {
            nombre:'Daniel',
            apellidoP:'Sanchez',
            apellidoM:'Cornejo',
            numOperador: 32345,
            ruta: 'Cuernavaca-Jiutepec',
            recolCompletadas: 3,
            recolTotales: 7
        },
        {
            nombre:'Daniel',
            apellidoP:'Sanchez',
            apellidoM:'Cornejo',
            numOperador: 32345,
            ruta: 'Cuernavaca-Jiutepec',
            recolCompletadas: 0,
            recolTotales: 7
        },
        {
            nombre:'Daniel',
            apellidoP:'Sanchez',
            apellidoM:'Cornejo',
            numOperador: 32345,
            ruta: 'Cuernavaca-Jiutepec',
            recolCompletadas: 1,
            recolTotales: 7
        },
        {
            nombre:'Daniel',
            apellidoP:'Sanchez',
            apellidoM:'Cornejo',
            numOperador: 32345,
            ruta: 'Cuernavaca-Jiutepec',
            recolCompletadas: 7,
            recolTotales: 7
        },
        {
            nombre:'Daniel',
            apellidoP:'Sanchez',
            apellidoM:'Cornejo',
            numOperador: 32345,
            ruta: 'Cuernavaca-Jiutepec',
            recolCompletadas: 5,
            recolTotales: 7
        },
        {
            nombre:'Daniel',
            apellidoP:'Sanchez',
            apellidoM:'Cornejo',
            numOperador: 32345,
            ruta: 'Cuernavaca-Jiutepec',
            recolCompletadas: 2,
            recolTotales: 7
        },
    ]

    return (
        <body className="orange-gradient">
            <aside>
                <MenuPrincipal></MenuPrincipal>
            </aside>
            <main>
                <header>
                    <HeaderBusquedaOperadoresRuta></HeaderBusquedaOperadoresRuta>
                </header>
                <section className="contenido">
                    <div className="cardsOperadorPendiente-container">
                        {users.map((user,i)=>
                            <CardOperadorActual user = {user}></CardOperadorActual>
                        )}
                    </div>
                </section>
            </main>
        </body>
    )
}

export default AsignarRutasDeRecoleccion