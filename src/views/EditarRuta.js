import React, {useState, useEffect} from 'react'
import HeaderTitulo from '../components/HeaderTitulo'
import FormularioEditarRuta from '../components/FormularioEditarRuta'
import MenuPrincipal from '../components/MenuPrincipal'
import ModalConfirmacion from '../components/ModalConfirmacion'
import ImagenFormulario from '../components/ImagenFormulario'
import '../styles/views.css'
import Loader from '../components/Loader'
import ErrorVersion1 from '../components/ErrorVersion1'
import axios from 'axios'

function EditarRuta(props) {
    const [ status, setStatus ] = useState('idle');
    const [ error, setError ] = useState(null);
    const [ tipoDonador, setTipoDonador] = useState('')
    const [ ruta, setRuta ] = useState({})
    const [ modalConfirmacionVisibility, setModalConfirmacionVisibility] = useState(false)
    const [ nombreDonador, setNombreDonador ] = useState('');

    useEffect(()=>{
        setStatus('loading')
        axios.get(`http://localhost:5000/routes/${props.match.params.idRuta}`)
          .then((result)=>{
            setRuta(result.data.ruta)
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
            <ErrorVersion1 nombreError={error.message}></ErrorVersion1>
        )
    }
    
    if(status === 'resolved'){
        return (
            <body className="orange-gradient">
                <aside>
                    <MenuPrincipal idRolLogin={1}></MenuPrincipal>
                </aside>
                <main>
                    <header>
                        <HeaderTitulo titulo="Editar ruta"></HeaderTitulo>
                    </header>
                    <section className="contenido">
                        <div className="contenidoFormulario-container">
                            <ImagenFormulario></ImagenFormulario>
                            {<FormularioEditarRuta idRuta={props.match.params.idRuta}
                                                   setModalConfirmacionVisibility={setModalConfirmacionVisibility} 
                                                   setNombreDonador={setNombreDonador} 
                                                   ruta={ruta} 
                                                   setRuta={setRuta} 
                                                   setTipoDonador={setTipoDonador}></FormularioEditarRuta>}                        </div>
                    </section>
                    {modalConfirmacionVisibility ? <ModalConfirmacion  /* handleConfirmation={handleSave} */ setModalConfirmacionVisibility={setModalConfirmacionVisibility} titulo1="edición" titulo2="donador" accion="editar" entidadObjetivo=" el donador" idEntidad={nombreDonador}></ModalConfirmacion>:null}
                </main>
            </body>
        )
    }
}

export default EditarRuta
