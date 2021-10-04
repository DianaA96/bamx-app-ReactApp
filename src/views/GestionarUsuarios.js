import React from 'react'
import HeaderBusquedaUsuarios from '../components/HeaderBusquedaUsuarios'
import MenuPrincipal from '../components/MenuPrincipal'
import CardCuadrada from '../components/CardCuadrada'
import '../styles/views.css'

function GestionarUsuarios() {
    return (
        <body>
            <aside>
                <MenuPrincipal></MenuPrincipal>
            </aside>
            <main>
                <header>
                    <HeaderBusquedaUsuarios></HeaderBusquedaUsuarios>
                </header>
                <section className="contenido">
                    <div className="cardsCuadradas-container">
                        <CardCuadrada></CardCuadrada>
                    </div>
                </section>
            </main>
        </body>
    )
}

export default GestionarUsuarios
