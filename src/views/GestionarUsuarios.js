import React, {useState, useEffect} from 'react'
import HeaderBusquedaUsuarios from '../components/HeaderBusquedaUsuarios'
import MenuPrincipal from '../components/MenuPrincipal'
import CardCuadrada from '../components/CardCuadrada'
import ModalDetallesUsuario from '../components/ModalDetallesUsuario'
import ModalConfirmacion from '../components/ModalConfirmacion'
import '../styles/views.css'
import axios from 'axios'

function GestionarUsuarios() {

    const [modalVisibility, setModalVisibility] = useState(false)
    const [modalConfirmacionVisibility, setModalConfirmacionVisibility] = useState(false)
    const [ userId, setUserId ] = useState('1');
    const cardType = "usuario";


    const [status, setStatus ] = useState('idle');
    const [error, setError] = useState(null);
    const [users, setUsers] = useState([]);
    const [cargo, setCargo] = useState();


    useEffect(()=>{
        setStatus('loading')
        axios.get(`http://localhost:5000/users`)
          .then((result)=>{
              console.log(result)
            setUsers(result.data.listaUsuarios)
            setStatus('resolved')
          })
          .catch((error)=>{
            setError(error)
            setStatus('error')
          })
    },modalConfirmacionVisibility)

    function handleDelete(){
        axios.delete(`http://localhost:5000/users/${userId}`)
        .then((result)=>{
            setStatus('resolved')
            alert("Usuario " + result.data.usuarioEliminado.nombreUsuario + " deshabilitado")
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
            <body className="red-gradient">
                <aside>
                    <MenuPrincipal idRolLogin={2}></MenuPrincipal>
                </aside>
                <main>
                    <header>
                        <HeaderBusquedaUsuarios></HeaderBusquedaUsuarios>
                    </header>
                    <section className="contenido">
                        <div className="cardsCuadradas-container">
                            {users.map((data,i)=>
                                <CardCuadrada cargo={cargo}  setCargo={setCargo} data = {data} cardType={cardType} setModalVisibility={setModalVisibility} setUserId={setUserId}></CardCuadrada>
                            )}
                        </div>
                    </section>
                    {modalVisibility ? <ModalDetallesUsuario userId={userId} cargo={cargo} setModalVisibility={setModalVisibility}  setModalConfirmacionVisibility={setModalConfirmacionVisibility}></ModalDetallesUsuario>  : null}
                    {modalConfirmacionVisibility ? <ModalConfirmacion  setModalConfirmacionVisibility={setModalConfirmacionVisibility} titulo1="eliminación" titulo2="usuario" accion="eliminar" entidadObjetivo=" el usuario" idEntidad={userId} handleConfirmation={handleDelete}></ModalConfirmacion>:null}
                </main>
            </body>
        )
    }
}

export default GestionarUsuarios
