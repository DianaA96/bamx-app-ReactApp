import React, {useState, useEffect} from 'react'
import HeaderBusquedaUsuarios from '../components/HeaderBusquedaUsuarios'
import MenuPrincipal from '../components/MenuPrincipal'
import CardCuadrada from '../components/CardCuadrada'
import ModalDetallesUsuario from '../components/ModalDetallesUsuario'
import ModalConfirmacion from '../components/ModalConfirmacion'

import '../styles/views.css'

function GestionarUsuarios() {

    const [modalVisibility, setModalVisibility] = useState(false)
    const [modalConfirmacionVisibility, setModalConfirmacionVisibility] = useState(false)
    const [ userId, setUserId ] = useState('1');
    const cardType = "usuario";


    const users = [
        {
            idUser:'1',
            nombre:'Daniel',
            apellidoP:'Sanchez',
            apellidoM:'Cornejo',
            puesto:'Operador',
        },
        {
            idUser:'2',
            nombre:'Daniel',
            apellidoP:'Sanchez',
            apellidoM:'Cornejo',
            puesto:'Operador',
        },
        {
            idUser:'3',
            nombre:'Daniel',
            apellidoP:'Sanchez',
            apellidoM:'Cornejo',
            puesto:'Receptor',
        },
        {
            idUser:'4',
            nombre:'Daniel',
            apellidoP:'Sanchez',
            apellidoM:'Cornejo',
            puesto:'Operador',
        },
        {
            idUser:'5',
            nombre:'Daniel',
            apellidoP:'Sanchez',
            apellidoM:'Cornejo',
            puesto:'Receptor',
        },
        {
            idUser:'6',
            nombre:'Daniel',
            apellidoP:'Sanchez',
            apellidoM:'Cornejo',
            puesto:'Coordinador de tráfico',
        }
    ]

    return (
        <body className="red-gradient">
            <aside>
                <MenuPrincipal idRolLogin={2}></MenuPrincipal>
            </aside>
            <main>
                <header>
                    <HeaderBusquedaUsuarios></HeaderBusquedaUsuarios>
                </header>
                <section className="contenido">
                    <div className="cardsCuadradas-container">
                        {users.map((data,i)=>
                            <CardCuadrada data = {data} cardType={cardType} setModalVisibility={setModalVisibility} setUserId={setUserId}></CardCuadrada>
                        )}
                    </div>
                </section>
                {modalVisibility ? <ModalDetallesUsuario userId={userId} setModalVisibility={setModalVisibility}  setModalConfirmacionVisibility={setModalConfirmacionVisibility}></ModalDetallesUsuario>  : null}
                {modalConfirmacionVisibility ? <ModalConfirmacion  setModalConfirmacionVisibility={setModalConfirmacionVisibility} titulo1="eliminación" titulo2="usuario" accion="eliminar" entidadObjetivo=" el usuario" idEntidad={userId}></ModalConfirmacion>:null}
            </main>
        </body>
    )
}

export default GestionarUsuarios
