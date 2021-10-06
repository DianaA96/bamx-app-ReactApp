import React from 'react'
import HeaderBusquedaRutasRecoleccion from '../components/HeaderBusquedaRutasRecoleccion'
import MenuPrincipal from '../components/MenuPrincipal'
import CardOperadorPendiente from '../components/CardOperadorPendiente'
import '../styles/views.css'

function AsignarRutasDeRecoleccion() {

    const users = [
        {
            nombre:'Daniel',
            apellidoP:'Sanchez',
            apellidoM:'Cornejo',
            puesto:'Operador',
        },
        {
            nombre:'Daniel',
            apellidoP:'Sanchez',
            apellidoM:'Cornejo',
            puesto:'Operador',
        },
        {
            nombre:'Daniel',
            apellidoP:'Sanchez',
            apellidoM:'Cornejo',
            puesto:'Receptor',
        },
        {
            nombre:'Daniel',
            apellidoP:'Sanchez',
            apellidoM:'Cornejo',
            puesto:'Operador',
        },
        {
            nombre:'Daniel',
            apellidoP:'Sanchez',
            apellidoM:'Cornejo',
            puesto:'Receptor',
        },
        {
            nombre:'Daniel',
            apellidoP:'Sanchez',
            apellidoM:'Cornejo',
            puesto:'Coordinador de tráfico',
        }
    ]

    return (
        <body className="orange-gradient">
            <aside>
                <MenuPrincipal></MenuPrincipal>
            </aside>
            <main>
                <header>
                    <HeaderBusquedaRutasRecoleccion></HeaderBusquedaRutasRecoleccion>
                </header>
                <section className="contenido">
                    <div className="cardsOperadorPendiente-container">
                        {users.map((user,i)=>
                            <CardOperadorPendiente user = {user}></CardOperadorPendiente>
                        )}
                    </div>
                </section>
            </main>
        </body>
    )
}

export default AsignarRutasDeRecoleccion