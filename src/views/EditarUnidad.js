import React, {useState, useEffect} from 'react'
import HeaderTitulo from '../components/HeaderTitulo'
import FormularioEditarUnidad from '../components/FormularioEditarUnidad'
import MenuPrincipal from '../components/MenuPrincipal'
import ModalConfirmacion from '../components/ModalConfirmacion'
import ImagenFormulario from '../components/ImagenFormulario'

import '../styles/views.css'

function EditarUnidad() {

    const [modalConfirmacionVisibility, setModalConfirmacionVisibility] = useState(false)
    const [ placaUnidad, setPlacaUnidad ] = useState('');

    return (
        <body className="green-gradient">
            <aside>
                <MenuPrincipal idRolLogin={2}></MenuPrincipal>
            </aside>
            <main>
                <header>
                    <HeaderTitulo titulo="Editar unidad"></HeaderTitulo>
                </header>
                <section className="contenido">
                    <div className="contenidoFormulario-container">
                        <ImagenFormulario></ImagenFormulario>
                        <FormularioEditarUnidad setModalConfirmacionVisibility={setModalConfirmacionVisibility} setPlacaUnidad={setPlacaUnidad}></FormularioEditarUnidad>
                    </div>
                </section>
                {modalConfirmacionVisibility ? <ModalConfirmacion  setModalConfirmacionVisibility={setModalConfirmacionVisibility} titulo1="edición" titulo2="unidad" accion="editar" entidadObjetivo=" la unidad" idEntidad={placaUnidad}></ModalConfirmacion>:null}
            </main>
        </body>
    )
}

export default EditarUnidad
