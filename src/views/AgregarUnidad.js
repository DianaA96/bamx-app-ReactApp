import React, {useState, useEffect} from 'react'
import HeaderTitulo from '../components/HeaderTitulo'
import FormularioAgregarUnidad from '../components/FormularioAgregarUnidad'
import MenuPrincipal from '../components/MenuPrincipal'
import ModalConfirmacion from '../components/ModalConfirmacion'
import ImagenFormulario from '../components/ImagenFormulario'
import axios from 'axios'
import '../styles/views.css'

function AgregarUnidad() {

    const [modalConfirmacionVisibility, setModalConfirmacionVisibility] = useState(false)
    const [ placaUnidad, setPlacaUnidad ] = useState('');
    const [ vehicle, setVehicle ] = useState('');


    function handleSave(){
        const {modelo, placa, poliza, vencimientoPoliza} = vehicle;
        let unidadBack = {
            vehicle: {
                modelo, 
                placa, 
                poliza, 
                vencimientoPoliza
            }
        }
        axios({
            method: 'post',
            url: 'http://localhost:5000/vehicles',
            data: unidadBack,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then((result)=>{
            alert('Unidad registrada correctamente');
            setModalConfirmacionVisibility(false);

        })
        .catch(error =>{
            console.log(unidadBack)
            alert('No se pudo registrar la unidad:', error);
        })
    
    }

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
                        <FormularioAgregarUnidad vehicle={vehicle} setVehicle={setVehicle} setModalConfirmacionVisibility={setModalConfirmacionVisibility} setPlacaUnidad={setPlacaUnidad}></FormularioAgregarUnidad>
                    </div>
                </section>
                {modalConfirmacionVisibility ? <ModalConfirmacion  handleConfirmation={handleSave} setModalConfirmacionVisibility={setModalConfirmacionVisibility} titulo1="registro" titulo2="unidad" accion="agregar" entidadObjetivo=" la unidad" idEntidad={placaUnidad}></ModalConfirmacion>:null}
            </main>
        </body>
    )
}

export default AgregarUnidad
