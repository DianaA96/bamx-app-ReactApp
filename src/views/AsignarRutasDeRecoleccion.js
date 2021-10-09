import React, { useState } from 'react'
import HeaderBusquedaRutasRecoleccion from '../components/HeaderBusquedaRutasRecoleccion'
import MenuPrincipal from '../components/MenuPrincipal'
import CardOperadorPendiente from '../components/CardOperadorPendiente'
import ModalAsignacionRuta from '../components/ModalAsignacionRuta'
import '../styles/views.css'

function AsignarRutasDeRecoleccion() {

    const [modalVisibility, setModalVisibility] = useState(false)

    const [operadorId, setOperadorId ] = useState()

    const users = [
        {
            idUser: 1,
            nombre:'Daniel',
            apellidoP:'Sanchez',
            apellidoM:'Cornejo',
            puesto:'Operador',
        },
        {
            idUser: 2,
            nombre:'Ernesto',
            apellidoP:'Sanchez',
            apellidoM:'Trejo',
            puesto:'Operador',
        },
        {
            idUser: 3,
            nombre:'Roberto',
            apellidoP:'Bravo',
            apellidoM:'Rodriguez',
            puesto:'Operador',
        },
        {
            idUser: 4,
            nombre:'Ramiro',
            apellidoP:'Manzo',
            apellidoM:'Ramírez',
            puesto:'Operador',
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
                            <CardOperadorPendiente user = {user} setOperadorId = {setOperadorId} setModalVisibility={setModalVisibility}></CardOperadorPendiente>
                        )}
                    </div>
                </section>
                {modalVisibility ? <ModalAsignacionRuta operadorId={operadorId} setModalVisibility={setModalVisibility}  ></ModalAsignacionRuta>  : null}
            </main>
        </body>
    )
}

export default AsignarRutasDeRecoleccion