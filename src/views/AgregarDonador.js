import React, { useState } from 'react'
import HeaderTitulo from '../components/HeaderTitulo'
import FormularioAgregarDonador from '../components/FormularioAgregarDonador'
import MenuPrincipal from '../components/MenuPrincipal'
import ModalConfirmacion from '../components/ModalConfirmacion'
import ImagenFormulario from '../components/ImagenFormulario'
import '../styles/views.css'
import axios from 'axios'

function AgregarDonador() {
    const [tipoDonador, setTipoDonador] = useState('')
    const [modalConfirmacionVisibility, setModalConfirmacionVisibility] = useState(false)
    const [ donor, setDonor ] = useState('');


    function handleSave(){
        const {nombre, determinante, cp, estado, municipio, colonia, calle, numExterior, telefono, correo} = donor;
        let tipo = tipoDonador
        let donadorBack = {
            donor: {
                nombre,
                determinante,
                tipo,
                cp, 
                estado,
                municipio, 
                colonia, 
                calle,
                numExterior,
                correo, 
                telefono
            }
        }
        axios({
            method: 'post',
            url: 'http://bamxapi-env.eba-wsth22h3.us-east-1.elasticbeanstalk.com/donors',
            data: donadorBack,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then((result)=>{
            alert('Donador registrado correctamente');
            setModalConfirmacionVisibility(false);

        })
        .catch(error =>{
            alert('No se pudo registrar el Donador:', error);
        })
    
    }

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
                        <FormularioAgregarDonador setModalConfirmacionVisibility={setModalConfirmacionVisibility} setTipoDonador ={setTipoDonador} setDonor={setDonor}  donor={donor}  handleSave={handleSave}></FormularioAgregarDonador>
                    </div>
                </section>
                {modalConfirmacionVisibility ? <ModalConfirmacion  handleConfirmation={handleSave} setModalConfirmacionVisibility={setModalConfirmacionVisibility} titulo1="registro" titulo2="donador" accion="agregar" entidadObjetivo=" el donador" idEntidad={donor.determinante}></ModalConfirmacion>:null}
            </main>
        </body>
    )
}

export default AgregarDonador
