import React, {useState, useEffect} from 'react'
import HeaderTitulo from '../components/HeaderTitulo'
import FormularioEditarDonador from '../components/FormularioEditarDonador'
import MenuPrincipal from '../components/MenuPrincipal'
import ModalConfirmacion from '../components/ModalConfirmacion'
import ImagenFormulario from '../components/ImagenFormulario'

import '../styles/views.css'

function EditarDonador() {

    const [modalConfirmacionVisibility, setModalConfirmacionVisibility] = useState(false)
    const [ nombreDonador, setNombreDonador ] = useState('');

    return (
        <body className="green-gradient">
            <aside>
                <MenuPrincipal idRolLogin={2}></MenuPrincipal>
            </aside>
            <main>
                <header>
                    <HeaderTitulo titulo="Editar donador"></HeaderTitulo>
                </header>
                <section className="contenido">
                    <div className="contenidoFormulario-container">
                        <ImagenFormulario></ImagenFormulario>
                        <FormularioEditarDonador setModalConfirmacionVisibility={setModalConfirmacionVisibility} setNombreDonador={setNombreDonador}></FormularioEditarDonador>
                    </div>
                </section>
                {modalConfirmacionVisibility ? <ModalConfirmacion  setModalConfirmacionVisibility={setModalConfirmacionVisibility} titulo1="edición" titulo2="donador" accion="editar" entidadObjetivo=" el donador" idEntidad={nombreDonador}></ModalConfirmacion>:null}
            </main>
        </body>
    )
}

export default EditarDonador
