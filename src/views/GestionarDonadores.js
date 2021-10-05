import React, {useState, useEffect} from 'react'
import HeaderBusquedaDonadores from '../components/HeaderBusquedaDonadores'
import MenuPrincipal from '../components/MenuPrincipal'
import CardCuadrada from '../components/CardCuadrada'
import ModalDetallesDonador from '../components/ModalDetallesDonador'
import ModalConfirmacion from '../components/ModalConfirmacion'

import '../styles/views.css'

function GestionarDonadores() {

    const [modalVisibility, setModalVisibility] = useState(false)
    const [modalConfirmacionVisibility, setModalConfirmacionVisibility] = useState(false)
    const [ donorId, setDonorId ] = useState('');
    const cardType = "donador"

    const donors = [
        {
            idDonor:'1',
            nombre:'Superama Gobernadores',
            ubicacion:'Av Vicente Guerrero 760, Lomas de la Selva, 62270'
        },
        {
            idDonor:'2',
            nombre:'Fresko La Comer',
            ubicacion:'Río Balsas 102, Vista Hermosa 62270'
        },
        {
            idDonor:'3',
            nombre:'Súper Chedraui',
            ubicacion:'Blvd. Gustavo Díaz Ordaz, Cantarranas, 62448'
        },
        {
            idDonor:'4',
            nombre:'Súper Chedraui',
            ubicacion:'Blvd. Gustavo Díaz Ordaz, Cantarranas, 62448'
        },
        {
            idDonor:'5',
            nombre:'Súper Chedraui',
            ubicacion:'Blvd. Gustavo Díaz Ordaz, Cantarranas, 62448'
        },
        {
            idDonor:'6',
            nombre:'Súper Chedraui',
            ubicacion:'Blvd. Gustavo Díaz Ordaz, Cantarranas, 62448'
        }
    ]

    return (
        <body className="green-gradient">
            <aside>
                <MenuPrincipal></MenuPrincipal>
            </aside>
            <main>
                <header>
                    <HeaderBusquedaDonadores></HeaderBusquedaDonadores>
                </header>
                <section className="contenido">
                    <div className="cardsCuadradas-container">
                        {donors.map((data,i)=>
                            <CardCuadrada cardType={cardType} data = {data} setModalVisibility={setModalVisibility} setModalConfirmacionVisibility={setModalConfirmacionVisibility} setDonorId={setDonorId}></CardCuadrada>
                        )}
                    </div>
                </section>
                {modalVisibility ? <ModalDetallesDonador donorId={donorId} setModalConfirmacionVisibility={setModalConfirmacionVisibility} setModalVisibility={setModalVisibility}></ModalDetallesDonador>  : null}
                {modalConfirmacionVisibility ? <ModalConfirmacion  setModalConfirmacionVisibility={setModalConfirmacionVisibility} titulo1="eliminación" titulo2="donador" accion="eliminar" entidadObjetivo=" el donador" idEntidad={donorId}></ModalConfirmacion>:null}
            </main>
        </body>
    )
}

export default GestionarDonadores
