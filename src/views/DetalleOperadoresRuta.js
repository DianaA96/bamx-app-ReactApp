import React from 'react'
import HeaderOperadorRuta from '../components/HeaderOperadorRuta'
import MenuPrincipal from '../components/MenuPrincipal'
import CardOperadorDetalles from '../components/CardOperadorDetalles'
import '../styles/views.css'
import '../styles/botones.css'

function DetalleOperadoresRuta() {

    const users = [
        {
            nombre:'Rodrigo',
            apellidoP:'Hernández',
            apellidoM:'B.',
            puesto:'Operador',
            numOperador: 32123,
            folio: 'RE2456-B',
            personaDonador: 'Javier Almazán',
            tiendaDonador: 'Walmart Circunvalación',
            direccionDonador: 'Av. Circunvalación No. 4',
            fechaRecepcionDonativo: '12 de septiembre del 2021',
            horaRecepcionDonativo: '14:35 hrs.',
            notaFrutaYVerdura: 15,
            notaPan: 15,
            notaAbarrote: 15,
            notaNoComestible: 15,
            notaDelOperadorRecibida: true
        },
        {
            nombre:'Rodrigo',
            apellidoP:'Hernández',
            apellidoM:'B.',
            puesto:'Operador',
            numOperador: 32123,
            folio: 'RE2456-B',
            personaDonador: 'Javier Almazán',
            tiendaDonador: 'Walmart Circunvalación',
            direccionDonador: 'Av. Circunvalación No. 4',
            fechaRecepcionDonativo: '12 de septiembre del 2021',
            horaRecepcionDonativo: '14:35 hrs.',
            notaFrutaYVerdura: 15,
            notaPan: 15,
            notaAbarrote: 15,
            notaNoComestible: 15,
            notaDelOperadorRecibida: false
        },
        {
            nombre:'Rodrigo',
            apellidoP:'Hernández',
            apellidoM:'B.',
            puesto:'Operador',
            numOperador: 32123,
            folio: 'RE2456-B',
            personaDonador: 'Javier Almazán',
            tiendaDonador: 'Walmart Circunvalación',
            direccionDonador: 'Av. Circunvalación No. 4',
            fechaRecepcionDonativo: '12 de septiembre del 2021',
            horaRecepcionDonativo: '14:35 hrs.',
            notaFrutaYVerdura: 15,
            notaPan: 15,
            notaAbarrote: 15,
            notaNoComestible: 15,
            notaDelOperadorRecibida: false
        },
        {
            nombre:'Rodrigo',
            apellidoP:'Hernández',
            apellidoM:'B.',
            puesto:'Operador',
            numOperador: 32123,
            folio: 'RE2456-B',
            personaDonador: 'Javier Almazán',
            tiendaDonador: 'Walmart Circunvalación',
            direccionDonador: 'Av. Circunvalación No. 4',
            fechaRecepcionDonativo: '12 de septiembre del 2021',
            horaRecepcionDonativo: '14:35 hrs.',
            notaFrutaYVerdura: 15,
            notaPan: 15,
            notaAbarrote: 15,
            notaNoComestible: 15,
            notaDelOperadorRecibida: false
        }
    ]

    return (
        <body className="orange-gradient">
            <aside>
                <MenuPrincipal></MenuPrincipal>
            </aside>
            <main>
                <header>
                    <HeaderOperadorRuta user = {users[0]}></HeaderOperadorRuta>
                </header>
                <section className="contenido">
                    <div className="cardsOperadorPendiente-container">
                        {users.map((user,i)=>
                            <CardOperadorDetalles user = {user}></CardOperadorDetalles>
                        )}
                    </div>
                </section>
                <button className="btnVerdeCuadrado bebas2 blanco">Regresar</button>
            </main>
        </body>
    )
}

export default DetalleOperadoresRuta