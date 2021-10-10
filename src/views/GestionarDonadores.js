import React, {useState, useEffect} from 'react'
import HeaderBusquedaDonadores from '../components/HeaderBusquedaDonadores'
import MenuPrincipal from '../components/MenuPrincipal'
import CardCuadrada from '../components/CardCuadrada'
import ModalDetallesDonador from '../components/ModalDetallesDonador'
import ModalConfirmacion from '../components/ModalConfirmacion'
import '../styles/views.css'
import axios from 'axios' 

function GestionarDonadores() {

    const [modalVisibility, setModalVisibility] = useState(false)
    const [modalConfirmacionVisibility, setModalConfirmacionVisibility] = useState(false)
    const [ donorId, setDonorId ] = useState('');
    const cardType = "donador"
    const [status, setStatus ] = useState('idle');
    const [error, setError] = useState(null);
    const [donors, setDonors] = useState([]);

    useEffect(()=>{
        setStatus('loading')
        axios.get(`http://localhost:5000/donors`)
          .then((result)=>{
              console.log(result)
            setDonors(result.data.listaDonadores)
            setStatus('resolved')
          })
          .catch((error)=>{
            setError(error)
            setStatus('error')
          })
    },[])

    
    function handleDelete(){
        axios.delete(`http://localhost:5000/donors/${donorId}`)
        .then((result)=>{
            setStatus('resolved')
            alert("Donador " + result.data.donadorEliminado.nombre + " deshabilitado")
            setModalConfirmacionVisibility(false);
        })
        .catch((error)=>{
            setError(error)
            setStatus('error')
        })
    }

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
                    <MenuPrincipal></MenuPrincipal>
                </aside>
                <main>
                    <header>
                        <HeaderBusquedaDonadores></HeaderBusquedaDonadores>
                    </header>
                    <section className="contenido">
                        <div className="cardsCuadradas-container">
                            {donors.map((data,i)=>
                                <CardCuadrada cardType={cardType} data = {data} setModalVisibility={setModalVisibility} setModalConfirmacionVisibility={setModalConfirmacionVisibility} setDonorId={setDonorId}></CardCuadrada>
                            )}
                        </div>
                    </section>
                    {modalVisibility ? <ModalDetallesDonador donorId={donorId} setModalConfirmacionVisibility={setModalConfirmacionVisibility} setModalVisibility={setModalVisibility}></ModalDetallesDonador>  : null}
                    {modalConfirmacionVisibility ? <ModalConfirmacion  handleConfirmation={handleDelete} setModalConfirmacionVisibility={setModalConfirmacionVisibility} titulo1="eliminación" titulo2="donador" accion="eliminar" entidadObjetivo=" el donador" idEntidad={donorId}></ModalConfirmacion>:null}
                </main>
            </body>
        )
    }
}

export default GestionarDonadores
