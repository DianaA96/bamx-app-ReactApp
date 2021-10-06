import React, {useState, useEffect} from 'react'
import HeaderBusquedaUnidades from '../components/HeaderBusquedaUnidades'
import MenuPrincipal from '../components/MenuPrincipal'
import CardCuadrada from '../components/CardCuadrada'
import ModalDetallesUnidad from '../components/ModalDetallesUnidad'
import ModalConfirmacion from '../components/ModalConfirmacion'

import '../styles/views.css'

function GestionarUnidades() {

    const [modalVisibility, setModalVisibility] = useState(false)
    const [modalConfirmacionVisibility, setModalConfirmacionVisibility] = useState(false)
    const [ vehicleId, setVehicleId ] = useState('1');
    const cardType = "unidad";


    const vehicles = [
        {
            idVehicle:'1',
            placas:'CCV27-321',
            descripcionUnidad: 'Nissan NP 300'
        },
        {
            idVehicle:'2',
            placas:'CCV27-3421',
            descripcionUnidad: 'Volkswagen Crafter Chasis'
        },
        {
            idVehicle:'3',
            placas:'CCV127-331',
            descripcionUnidad: 'Ford F 450'
        },
        {
            idVehicle:'4',
            placas:'CCV67-323',
            descripcionUnidad: 'Isuzu ELF 100'
        },
        {
            idVehicle:'5',
            placas:'CCV27-321',
            descripcionUnidad: 'Volkswagen Crafter Chasis'
        },
        {
            idVehicle:'6',
            placas:'CCV22-3254',
            descripcionUnidad: 'Ford Transit Chasis'
        }
    ]

    return (
        <body className="green-gradient">
            <aside>
                <MenuPrincipal idRolLogin={2}></MenuPrincipal>
            </aside>
            <main>
                <header>
                    <HeaderBusquedaUnidades></HeaderBusquedaUnidades>
                </header>
                <section className="contenido">
                    <div className="cardsCuadradas-container">
                        {vehicles.map((data,i)=>
                            <CardCuadrada data = {data} cardType={cardType} setModalVisibility={setModalVisibility} setVehicleId={setVehicleId}></CardCuadrada>
                        )}
                    </div>
                </section>
                {modalVisibility ? <ModalDetallesUnidad vehicleId={vehicleId} setModalVisibility={setModalVisibility}  setModalConfirmacionVisibility={setModalConfirmacionVisibility}></ModalDetallesUnidad>  : null}
                {modalConfirmacionVisibility ? <ModalConfirmacion  setModalConfirmacionVisibility={setModalConfirmacionVisibility} titulo1="eliminación" titulo2="unidad" accion="eliminar" entidadObjetivo=" la unidad" idEntidad={vehicleId}></ModalConfirmacion>:null}
            </main>
        </body>
    )
}

export default GestionarUnidades
