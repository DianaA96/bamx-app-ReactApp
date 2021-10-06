import React, {useState, useEffect} from 'react'
import HeaderBusquedaRutas from '../components/HeaderBusquedaRutas'
import MenuPrincipal from '../components/MenuPrincipal'
import CardCuadrada from '../components/CardCuadrada'
import ModalDetallesRuta from '../components/ModalDetallesRuta'
import ModalConfirmacion from '../components/ModalConfirmacion'

import '../styles/views.css'

function GestionarRutas() {

    const [modalVisibility, setModalVisibility] = useState(false)
    const [modalConfirmacionVisibility, setModalConfirmacionVisibility] = useState(false)
    const [ routeId, setRouteId ] = useState('1');
    const cardType = "ruta";


    const routes = [
        {
            idRoute:'1',
            nombreRuta:'Ruta 1',
            numPuntosRecoleccion: '3'
        },
        {
            idRoute:'2',
            nombreRuta:'Ruta 2',
            numPuntosRecoleccion: '3'
        },
        {
            idRoute:'3',
            nombreRuta:'Ruta 3',
            numPuntosRecoleccion: '1'
        },
        {
            idRoute:'4',
            nombreRuta:'Ruta 4',
            numPuntosRecoleccion: '3'
        },
        {
            idRoute:'5',
            nombreRuta:'Ruta 5',
            numPuntosRecoleccion: '2'
        },
        {
            idRoute:'6',
            nombreRuta:'Ruta 6',
            numPuntosRecoleccion: '3'
        },
        {
            idRoute:'7',
            nombreRuta:'Ruta 7',
            numPuntosRecoleccion: '1'
        },
        {
            idRoute:'8',
            nombreRuta:'Ruta 8',
            numPuntosRecoleccion: '3'
        },
        {
            idRoute:'9',
            nombreRuta:'Ruta 9',
            numPuntosRecoleccion: '5'
        },
        
       
    ]

    return (
        <body className="orange-gradient">
            <aside>
                <MenuPrincipal idRolLogin={2}></MenuPrincipal>
            </aside>
            <main>
                <header>
                    <HeaderBusquedaRutas></HeaderBusquedaRutas>
                </header>
                <section className="contenido">
                    <div className="cardsCuadradas-container">
                        {routes.map((data,i)=>
                            <CardCuadrada data = {data} cardType={cardType} setModalVisibility={setModalVisibility} setRouteId={setRouteId}></CardCuadrada>
                        )}
                    </div>
                </section>
                {modalVisibility ? <ModalDetallesRuta routeId={routeId} setModalVisibility={setModalVisibility}  setModalConfirmacionVisibility={setModalConfirmacionVisibility}></ModalDetallesRuta>  : null}
                {modalConfirmacionVisibility ? <ModalConfirmacion  setModalConfirmacionVisibility={setModalConfirmacionVisibility} titulo1="eliminación" titulo2="ruta" accion="eliminar" entidadObjetivo=" la ruta" idEntidad={routeId}></ModalConfirmacion>:null}
            </main>
        </body>
    )
}

export default GestionarRutas
