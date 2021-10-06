import React, {useState, useEffect} from 'react'
import HeaderTitulo from '../components/HeaderTitulo'
import FormularioAgregarUnidad from '../components/FormularioAgregarUnidad'
import MenuPrincipal from '../components/MenuPrincipal'
import ModalConfirmacion from '../components/ModalConfirmacion'
import ImagenFormulario from '../components/ImagenFormulario'

import '../styles/views.css'

function AgregarUnidad() {

    const [modalConfirmacionVisibility, setModalConfirmacionVisibility] = useState(false)
    const [ placaUnidad, setPlacaUnidad ] = useState('');

    return (
        <body className="green-gradient">
            <aside>
                <MenuPrincipal idRolLogin={2}></MenuPrincipal>
            </aside>
            <main>
                <header>
                    <HeaderTitulo titulo="Agregar unidad"></HeaderTitulo>
                </header>
                <section className="contenido">
                    <div className="contenidoFormulario-container">
                        <ImagenFormulario></ImagenFormulario>
                        <FormularioAgregarUnidad setModalConfirmacionVisibility={setModalConfirmacionVisibility} setPlacaUnidad={setPlacaUnidad}></FormularioAgregarUnidad>
                    </div>
                </section>
                {modalConfirmacionVisibility ? <ModalConfirmacion  setModalConfirmacionVisibility={setModalConfirmacionVisibility} titulo1="registro" titulo2="unidad" accion="agregar" entidadObjetivo=" la unidad" idEntidad={placaUnidad}></ModalConfirmacion>:null}
            </main>
        </body>
    )
}

export default AgregarUnidad
