import React from 'react'
import HeaderOperadorEntrega from '../components/HeaderOperadorEntrega'
import MenuPrincipal from '../components/MenuPrincipal'
import FormularioAsignarBodega from '../components/FormularioAsignarBodega'
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
                <MenuPrincipal></MenuPrincipal>
            </aside>
            <main>
                <header>
                    <HeaderOperadorEntrega></HeaderOperadorEntrega>
                </header>
                <section className="contenido">
                    <div className="cardsOperadorPendiente-container">
                        {users.map((user,i)=>
                            <FormularioAsignarBodega user = {user}></FormularioAsignarBodega>
                        )}
                    </div>
                </section>
            </main>
        </body>
    )
}

export default AsignarRutasEntrega