import React, {useState, useEffect} from 'react'
import HeaderTitulo from '../components/HeaderTitulo'
import FormularioEditarUnidad from '../components/FormularioEditarUnidad'
import MenuPrincipal from '../components/MenuPrincipal'
import ModalConfirmacion from '../components/ModalConfirmacion'
import ImagenFormulario from '../components/ImagenFormulario'
import Loader from '../components/Loader'
import ErrorVersion1 from '../components/ErrorVersion1'
import '../styles/views.css'
import axios from 'axios'

function EditarUnidad(props) {
    const [status, setStatus ] = useState('idle');
    const [error, setError] = useState(null);
    const [vehicle, setVehicle] = useState({})
    const [modalConfirmacionVisibility, setModalConfirmacionVisibility] = useState(false)
    const [ placaUnidad, setPlacaUnidad ] = useState('');

    useEffect(()=>{
        setStatus('loading')
        axios.get(`http://localhost:5000/vehicles/${props.match.params.idUnidad}`)
          .then((result)=>{
            setVehicle(result.data.datosVehiculo)
            setStatus('resolved')
          })
          .catch((error)=>{
            setError(error)
            setStatus('error')
          })
    },[])

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
            method: 'patch',
            url: `http://localhost:5000/vehicles/${props.match.params.idUnidad}`,
            data: unidadBack,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then((result)=>{
            alert('Unidad actualizada correctamente');
            setModalConfirmacionVisibility(false);
        })
        .catch(error =>{
            alert('No se pudo actualizar la unidad:', error);
        })
        
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
                            <FormularioEditarUnidad setModalConfirmacionVisibility={setModalConfirmacionVisibility} setPlacaUnidad={setPlacaUnidad} vehicle={vehicle} setVehicle={setVehicle}></FormularioEditarUnidad>
                        </div>
                    </section>
                    {modalConfirmacionVisibility ? <ModalConfirmacion  handleConfirmation={handleSave} setModalConfirmacionVisibility={setModalConfirmacionVisibility} titulo1="edición" titulo2="unidad" accion="editar" entidadObjetivo=" la unidad" idEntidad={placaUnidad}></ModalConfirmacion>:null}
                </main>
            </body>
        )
    }
}

export default EditarUnidad
