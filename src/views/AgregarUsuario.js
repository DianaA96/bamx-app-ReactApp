import React, {useState, useEffect} from 'react'
import HeaderTitulo from '../components/HeaderTitulo'
import FormularioAgregarUsuario from '../components/FormularioAgregarUsuario'
import MenuPrincipal from '../components/MenuPrincipal'
import ModalConfirmacion from '../components/ModalConfirmacion'
import ImagenFormulario from '../components/ImagenFormulario'

import '../styles/views.css'

function AgregarUsuario() {

    const [modalConfirmacionVisibility, setModalConfirmacionVisibility] = useState(false)
    const [ nombreUsuario, setNombreUsuario ] = useState('');

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
                        <FormularioAgregarUsuario setModalConfirmacionVisibility={setModalConfirmacionVisibility} setNombreUsuario={setNombreUsuario}></FormularioAgregarUsuario>
                    </div>
                </section>
                {modalConfirmacionVisibility ? <ModalConfirmacion  setModalConfirmacionVisibility={setModalConfirmacionVisibility} titulo1="registro" titulo2="usuario" accion="agregar" entidadObjetivo=" el usuario" idEntidad={nombreUsuario}></ModalConfirmacion>:null}
            </main>
        </body>
    )
}

export default AgregarUsuario
