import React from 'react'
import HeaderBusquedaUsuarios from '../components/HeaderBusquedaUsuarios'
import MenuPrincipal from '../components/MenuPrincipal'
import CardCuadrada from '../components/CardCuadrada'
import '../styles/views.css'

function GestionarUsuarios() {
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
        <body className="red-gradient">
            <aside>
                <MenuPrincipal></MenuPrincipal>
            </aside>
            <main>
                <header>
                    <HeaderBusquedaUsuarios></HeaderBusquedaUsuarios>
                </header>
                <section className="contenido">
                    <div className="cardsCuadradas-container">
                        {users.map((user,i)=>
                            <CardCuadrada user = {user}></CardCuadrada>
                        )}
                    </div>
                </section>
            </main>
        </body>
    )
}

export default GestionarUsuarios
