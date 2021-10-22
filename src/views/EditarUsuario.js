import React, {useState, useEffect} from 'react'
import HeaderTitulo from '../components/HeaderTitulo'
import FormularioEditarUsuario from '../components/FormularioEditarUsuario'
import MenuPrincipal from '../components/MenuPrincipal'
import ModalConfirmacion from '../components/ModalConfirmacion'
import ImagenFormulario from '../components/ImagenFormulario'
import Loader from '../components/Loader'
import ErrorVersion1 from '../components/ErrorVersion1'
import '../styles/views.css'
import axios from 'axios'

function EditarUsuario(props) {
    const [status, setStatus ] = useState('idle');
    const [error, setError] = useState(null);
    const [user, setUser] = useState({})
    const [bodega, setBodega] = useState('')
    const [modalConfirmacionVisibility, setModalConfirmacionVisibility] = useState(false)
    const [ nombreUsuario, setNombreUsuario ] = useState('');

    useEffect(()=>{
        setStatus('loading')
        axios.get(`http://localhost:5000/users/${props.match.params.idUsuario}`)
          .then((result)=>{
            setUser(result.data.datosUsuario[0])
            setStatus('resolved')
          })
          .catch((error)=>{
            setError(error)
            setStatus('error')
          })
    },[])


    function handleSave(){
        const {nombre, apellidoP, apellidoM, nombreUsuario, telefono, email, contrasena, licencia, vencimientoLicencia} = user;

        if(user.idDriver != null){
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
                method: 'patch',
                url: `http://localhost:5000/users/${props.match.params.idUsuario}/drivers`,
                data: operadorBack,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
            .then((result)=>{
                alert('Operador actualizado correctamente');
                setModalConfirmacionVisibility(false);

            })
            .catch(error =>{
                alert('No se pudo actualizar el operador:', error);
            })
        }

        else if(user.idReceiver != null){
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
                method: 'patch',
                url: `http://localhost:5000/users/${props.match.params.idUsuario}/receivers`,
                data: receptorBack,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
            .then((result)=>{
                alert('Receptor actualizado correctamente');
                setModalConfirmacionVisibility(false);
            })
            .catch(error =>{
                alert('No se pudo actualizar el receptor:', error);
            })
        }
        else if(user.idTrafficCoordinator != null){
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
                method: 'patch',
                url: `http://localhost:5000/users/${props.match.params.idUsuario}/trafficCoordinators`,
                data: coordinadorBack,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
            .then((result)=>{
                alert('Coordinador actualizado correctamente');
                setModalConfirmacionVisibility(false);
            })
            .catch(error =>{
                alert('No se pudo actualizar el receptor:', error);
            })
        }
    }

    if(status === 'idle' || status === 'loading'){
        return <Loader/>
    }
    
    
    if(status === 'error'){
        return (
            <ErrorVersion1 nombreError={error.message}></ErrorVersion1>
        )
    }
    
    if(status === 'resolved'){

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
                        <FormularioEditarUsuario setBodega={setBodega}  setModalConfirmacionVisibility={setModalConfirmacionVisibility} setNombreUsuario={setNombreUsuario} user={user}  setUser={setUser} handleSave={handleSave}></FormularioEditarUsuario>
                    </div>
                </section>
                {modalConfirmacionVisibility ? <ModalConfirmacion  handleConfirmation={handleSave} setModalConfirmacionVisibility={setModalConfirmacionVisibility} titulo1="edición" titulo2="usuario" accion="editar" entidadObjetivo=" el usuario" idEntidad={nombreUsuario}></ModalConfirmacion>:null}
            </main>
        </body>
    )
}
}

export default EditarUsuario