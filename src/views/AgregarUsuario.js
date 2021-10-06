import React, {useState, useEffect} from 'react'
import HeaderTitulo from '../components/HeaderTitulo'
import FormularioAgregarUsuario from '../components/FormularioAgregarUsuario'
import MenuPrincipal from '../components/MenuPrincipal'
import ModalConfirmacion from '../components/ModalConfirmacion'
import ImagenFormulario from '../components/ImagenFormulario'

import '../styles/views.css'

function GestionarUsuarios() {

    const [modalConfirmacionVisibility, setModalConfirmacionVisibility] = useState(false)
    const [ userId, setUserId ] = useState('1');

    return (
        <body className="red-gradient">
            <aside>
                <MenuPrincipal idRolLogin={2}></MenuPrincipal>
            </aside>
            <main>
                <header>
                    <HeaderTitulo titulo="Agregar usuario"></HeaderTitulo>
                </header>
                <section className="contenido">
                    <div className="contenidoFormulario-container">
                        <ImagenFormulario></ImagenFormulario>
                        <FormularioAgregarUsuario></FormularioAgregarUsuario>
                    </div>
                </section>
                {modalConfirmacionVisibility ? <ModalConfirmacion  setModalConfirmacionVisibility={setModalConfirmacionVisibility} titulo1="eliminación" titulo2="usuario" accion="eliminar" entidadObjetivo=" el usuario" idEntidad={userId}></ModalConfirmacion>:null}
            </main>
        </body>
    )
}

export default GestionarUsuarios
