import React, {useState, useEffect} from 'react'
import HeaderTitulo from '../components/HeaderTitulo'
import FormularioAgregarRuta from '../components/FormularioAgregarRuta'
import MenuPrincipal from '../components/MenuPrincipal'
import ModalConfirmacion from '../components/ModalConfirmacion'
import ImagenFormulario from '../components/ImagenFormulario'

import '../styles/views.css'

function AgregarRuta() {

    const [modalConfirmacionVisibility, setModalConfirmacionVisibility] = useState(false)
    const [ placaRuta, setPlacaRuta ] = useState('');

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
                        <FormularioAgregarRuta setModalConfirmacionVisibility={setModalConfirmacionVisibility} setPlacaRuta={setPlacaRuta}></FormularioAgregarRuta>
                    </div>
                </section>
                {modalConfirmacionVisibility ? <ModalConfirmacion  setModalConfirmacionVisibility={setModalConfirmacionVisibility} titulo1="registro" titulo2="unidad" accion="agregar" entidadObjetivo=" la unidad" idEntidad={placaRuta}></ModalConfirmacion>:null}
            </main>
        </body>
    )
}

export default AgregarRuta
