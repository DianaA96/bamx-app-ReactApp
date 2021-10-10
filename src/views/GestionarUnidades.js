import React, {useState, useEffect} from 'react'
import HeaderBusquedaUnidades from '../components/HeaderBusquedaUnidades'
import MenuPrincipal from '../components/MenuPrincipal'
import CardCuadrada from '../components/CardCuadrada'
import ModalDetallesUnidad from '../components/ModalDetallesUnidad'
import ModalConfirmacion from '../components/ModalConfirmacion'
import '../styles/views.css'
import axios from 'axios'

function GestionarUnidades() {

    const [modalVisibility, setModalVisibility] = useState(false)
    const [modalConfirmacionVisibility, setModalConfirmacionVisibility] = useState(false)
    const [ vehicleId, setVehicleId ] = useState('1');
    const cardType = "unidad";


    const [status, setStatus ] = useState('idle');
    const [error, setError] = useState(null);
    const [vehicles, setVehicles] = useState([]);


    useEffect(()=>{
        setStatus('loading')
        axios.get(`http://localhost:5000/vehicles`)
          .then((result)=>{
              console.log(result)
            setVehicles(result.data.listaVehicles)
            setStatus('resolved')
          })
          .catch((error)=>{
            setError(error)
            setStatus('error')
          })
    },[])

    if(status === 'idle' || status === 'loading'){ 
        return <p>Cargando</p>
    }
    
    
    if(status === 'error'){
        return (
            <p>{`${error.message} ${error.name}`}</p>
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
                        <HeaderBusquedaUnidades></HeaderBusquedaUnidades>
                    </header>
                    <section className="contenido">
                        <div className="cardsCuadradas-container">
                            {vehicles.map((data,i)=>
                                <CardCuadrada data = {data} cardType={cardType} setModalVisibility={setModalVisibility} setVehicleId={setVehicleId}></CardCuadrada>
                            )}
                        </div>
                    </section>
                    {modalVisibility ? <ModalDetallesUnidad vehicleId={vehicleId} setModalVisibility={setModalVisibility}  setModalConfirmacionVisibility={setModalConfirmacionVisibility}></ModalDetallesUnidad>  : null}
                    {modalConfirmacionVisibility ? <ModalConfirmacion  setModalConfirmacionVisibility={setModalConfirmacionVisibility} titulo1="eliminación" titulo2="unidad" accion="eliminar" entidadObjetivo=" la unidad" idEntidad={vehicleId}></ModalConfirmacion>:null}
                </main>
            </body>
        )
    }
}

export default GestionarUnidades
