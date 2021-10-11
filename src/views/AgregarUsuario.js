import React, {useState, useEffect} from 'react'
import HeaderTitulo from '../components/HeaderTitulo'
import FormularioAgregarUsuario from '../components/FormularioAgregarUsuario'
import MenuPrincipal from '../components/MenuPrincipal'
import ModalConfirmacion from '../components/ModalConfirmacion'
import ImagenFormulario from '../components/ImagenFormulario'
import axios from 'axios'

import '../styles/views.css'

function AgregarUsuario() {
    const [modalConfirmacionVisibility, setModalConfirmacionVisibility] = useState(false)
    const [ nombreUsuario, setNombreUsuario ] = useState('');
    const [user, setUser] = useState({})
    const [bodega, setBodega] = useState('')
    const [cargo, setCargo] = useState('')

    function handleSave(){
        const {nombre, apellidoP, apellidoM, nombreUsuario, telefono, email, contrasena, licencia, vencimientoLicencia} = user;

        if(cargo ==='Operador'){
            let operadorBack = {
                user: {
                    nombre,
                    apellidoP,
                    apellidoM,
                    nombreUsuario,
                    telefono,
                    email,
                    contrasena
                },
                driver: {
                    licencia,
                    vencimientoLicencia
                }
            }
            axios({
                method: 'post',
                url: 'http://localhost:5000/users/drivers',
                data: operadorBack,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
            .then((result)=>{
                // props.onSave(result.data);
                alert('Operador registrado correctamente');
                setModalConfirmacionVisibility(false);

            })
            .catch(error =>{
                console.log(operadorBack)
                alert('No se pudo registrar el operador:', error);
            })
        }

        else if(cargo ==='Receptor'){
            let idWarehouse = bodega;
            let receptorBack = {
                user: {
                    nombreUsuario,
                    nombre,
                    apellidoP,
                    apellidoM,
                    telefono,
                    email,
                    contrasena
                },
                receiver: {
                    idWarehouse
                }
            }

            axios({
                method: 'post',
                url: 'http://localhost:5000/users/receivers',
                data: receptorBack,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
            .then((result)=>{
                alert('Receptor registrado correctamente');
            })
            .catch(error =>{
                console.log(receptorBack)
                alert('No se pudo registrar el receptor:', error);
            })
        }
        else if(cargo ==='Coordinador de tráfico'){
            let coordinadorBack = {
                user: {
                    nombreUsuario,
                    contrasena,
                    nombre,
                    telefono,
                    email,
                    apellidoP,
                    apellidoM,
                },
                coordinator: {
                }
            }

            axios({
                method: 'post',
                url: 'http://localhost:5000/users/trafficCoordinators',
                data: coordinadorBack,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
            .then((result)=>{
                alert('Coordinador de tráfico registrado correctamente');
            })
            .catch(error =>{
                console.log(coordinadorBack)
                alert('No se pudo registrar el coordinador de tráfico:', error);
            })
        }
    }

    

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
                        <FormularioAgregarUsuario setModalConfirmacionVisibility={setModalConfirmacionVisibility} setUser={setUser}  user={user} setCargo={setCargo} setBodega={setBodega} handleSave={handleSave}></FormularioAgregarUsuario>
                    </div>
                </section>
                {modalConfirmacionVisibility ? <ModalConfirmacion  handleConfirmation ={handleSave} setModalConfirmacionVisibility={setModalConfirmacionVisibility} titulo1="registro" titulo2="usuario" accion="agregar" entidadObjetivo=" el usuario" idEntidad={user.nombreUsuario}></ModalConfirmacion>:null}
            </main>
        </body>
    )
}

export default AgregarUsuario
