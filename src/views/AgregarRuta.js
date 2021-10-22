import React, { useState } from 'react'
import HeaderTitulo from '../components/HeaderTitulo'
import FormularioAgregarRuta from '../components/FormularioAgregarRuta'
import MenuPrincipal from '../components/MenuPrincipal'
import ModalConfirmacion from '../components/ModalConfirmacion'
import ImagenFormulario from '../components/ImagenFormulario'

import '../styles/views.css'

function AgregarRuta() {
    const [modalConfirmacionVisibility, setModalConfirmacionVisibility] = useState(false)
    const [ nombreRuta, setNombreRuta ] = useState('');

    return (
        <body className="orange-gradient">
            <aside>
                <MenuPrincipal idRolLogin={1}></MenuPrincipal>
            </aside>
            <main>
                <header>
                    <HeaderTitulo titulo="Agregar Ruta"></HeaderTitulo>
                </header>
                <section className="contenido">
                    <div className="contenidoFormulario-container">
                        <ImagenFormulario></ImagenFormulario>
                        <FormularioAgregarRuta setModalConfirmacionVisibility={setModalConfirmacionVisibility} setNombreRuta={setNombreRuta}></FormularioAgregarRuta>
                    </div>
                </section>
                {modalConfirmacionVisibility ? <ModalConfirmacion  setModalConfirmacionVisibility={setModalConfirmacionVisibility} titulo1="registro" titulo2="unidad" accion="agregar" entidadObjetivo=" la unidad" idEntidad={nombreRuta}></ModalConfirmacion>:null}
            </main>
        </body>
    )
}

export default AgregarRuta
