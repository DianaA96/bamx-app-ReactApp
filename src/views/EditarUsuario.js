import React, {useState, useEffect} from 'react'
import HeaderTitulo from '../components/HeaderTitulo'
import FormularioEditarUsuario from '../components/FormularioEditarUsuario'
import MenuPrincipal from '../components/MenuPrincipal'
import ModalConfirmacion from '../components/ModalConfirmacion'
import ImagenFormulario from '../components/ImagenFormulario'

import '../styles/views.css'

function EditarUsuario() {

    const [modalConfirmacionVisibility, setModalConfirmacionVisibility] = useState(false)
    const [ nombreUsuario, setNombreUsuario ] = useState('');

    return (
        <body className="red-gradient">
            <aside>
                <MenuPrincipal idRolLogin={2}></MenuPrincipal>
            </aside>
            <main>
                <header>
                    <HeaderTitulo titulo="Editar usuario"></HeaderTitulo>
                </header>
                <section className="contenido">
                    <div className="contenidoFormulario-container">
                        <ImagenFormulario></ImagenFormulario>
                        <FormularioEditarUsuario setModalConfirmacionVisibility={setModalConfirmacionVisibility} setNombreUsuario={setNombreUsuario}></FormularioEditarUsuario>
                    </div>
                </section>
                {modalConfirmacionVisibility ? <ModalConfirmacion  setModalConfirmacionVisibility={setModalConfirmacionVisibility} titulo1="edición" titulo2="usuario" accion="editar" entidadObjetivo=" el usuario" idEntidad={nombreUsuario}></ModalConfirmacion>:null}
            </main>
        </body>
    )
}

export default EditarUsuario
