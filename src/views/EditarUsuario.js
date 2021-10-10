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

function EditarUsuario() {
    const [status, setStatus ] = useState('idle');
    const [error, setError] = useState(null);
    const [userOriginal, setUserOriginal] = useState({})
    const [modalConfirmacionVisibility, setModalConfirmacionVisibility] = useState(false)
    const [ nombreUsuario, setNombreUsuario ] = useState('');

    useEffect(()=>{
        setStatus('loading')
        axios.get(`http://localhost:5000/users/3`)
        // buscar por props.match.params.[ATRIBUTO]
          .then((result)=>{
            setUserOriginal(result.data.datosUsuario[0])
            console.log(userOriginal)
            setStatus('resolved')
          })
          .catch((error)=>{
            setError(error)
            setStatus('error')
          })
    },[])

    if(status === 'idle' || status === 'loading'){
        return <Loader/>
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
                    <HeaderTitulo titulo="Editar usuario"></HeaderTitulo>
                </header>
                <section className="contenido">
                    <div className="contenidoFormulario-container">
                        <ImagenFormulario></ImagenFormulario>
                        <FormularioEditarUsuario setModalConfirmacionVisibility={setModalConfirmacionVisibility} setNombreUsuario={setNombreUsuario} userOriginal={userOriginal}></FormularioEditarUsuario>
                    </div>
                </section>
                {modalConfirmacionVisibility ? <ModalConfirmacion  setModalConfirmacionVisibility={setModalConfirmacionVisibility} titulo1="edición" titulo2="usuario" accion="editar" entidadObjetivo=" el usuario" idEntidad={nombreUsuario}></ModalConfirmacion>:null}
            </main>
        </body>
    )
}
}

export default EditarUsuario