import React, {useState, useEffect} from 'react'
import HeaderTitulo from '../components/HeaderTitulo'
import FormularioAgregarDonador from '../components/FormularioAgregarDonador'
import MenuPrincipal from '../components/MenuPrincipal'
import ModalConfirmacion from '../components/ModalConfirmacion'
import ImagenFormulario from '../components/ImagenFormulario'

import '../styles/views.css'

function AgregarDonador() {

    const [modalConfirmacionVisibility, setModalConfirmacionVisibility] = useState(false)
    const [ nombreDonador, setNombreDonador ] = useState('');

    return (
        <body className="green-gradient">
            <aside>
                <MenuPrincipal idRolLogin={2}></MenuPrincipal>
            </aside>
            <main>
                <header>
                    <HeaderTitulo titulo="Agregar donador"></HeaderTitulo>
                </header>
                <section className="contenido">
                    <div className="contenidoFormulario-container">
                        <ImagenFormulario></ImagenFormulario>
                        <FormularioAgregarDonador setModalConfirmacionVisibility={setModalConfirmacionVisibility} setNombreDonador={setNombreDonador}></FormularioAgregarDonador>
                    </div>
                </section>
                {modalConfirmacionVisibility ? <ModalConfirmacion  setModalConfirmacionVisibility={setModalConfirmacionVisibility} titulo1="registro" titulo2="donador" accion="agregar" entidadObjetivo=" el donador" idEntidad={nombreDonador}></ModalConfirmacion>:null}
            </main>
        </body>
    )
}

export default AgregarDonador
