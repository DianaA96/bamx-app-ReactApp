import React from 'react'
import HeaderBusquedaRutasEntrega from '../components/HeaderBusquedaRutasEntrega'
import MenuPrincipal from '../components/MenuPrincipal'
import CardOperadorEntrega from '../components/CardOperadorEntrega'
import '../styles/views.css'

function AsignarRutasEntrega() {

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
                <MenuPrincipal idRolLogin={1}></MenuPrincipal>
            </aside>
            <main>
                <header>
                    <HeaderBusquedaRutasEntrega></HeaderBusquedaRutasEntrega>
                </header>
                <section className="contenido">
                    <div className="cardsOperadorPendiente-container">
                        {users.map((user,i)=>
                            <CardOperadorEntrega user = {user}></CardOperadorEntrega>
                        )}
                    </div>
                </section>
            </main>
        </body>
    )
}

export default AsignarRutasEntrega