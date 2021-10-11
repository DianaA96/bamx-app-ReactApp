import React, {useState, useEffect} from 'react'
import HeaderTitulo from '../components/HeaderTitulo'
import FormularioEditarDonador from '../components/FormularioEditarDonador'
import MenuPrincipal from '../components/MenuPrincipal'
import ModalConfirmacion from '../components/ModalConfirmacion'
import ImagenFormulario from '../components/ImagenFormulario'
import '../styles/views.css'
import Loader from '../components/Loader'
import ErrorVersion1 from '../components/ErrorVersion1'
import axios from 'axios'

function EditarDonador() {
    const [status, setStatus ] = useState('idle');
    const [error, setError] = useState(null);
    const [tipoDonador, setTipoDonador] = useState('')
    const [donor, setDonor] = useState({})
    const [modalConfirmacionVisibility, setModalConfirmacionVisibility] = useState(false)
    const [ nombreDonador, setNombreDonador ] = useState('');
    let idDonor=1;

    useEffect(()=>{
        setStatus('loading')
        axios.get(`http://localhost:5000/donors/${idDonor}`)
          .then((result)=>{
            setDonor(result.data.donador[0])
            setStatus('resolved')
          })
          .catch((error)=>{
            setError(error)
            setStatus('error')
          })
    },[])

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
            method: 'patch',
            url: `http://localhost:5000/donors/${idDonor}`,
            data: donadorBack,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then((result)=>{
            alert('Donador actualizado correctamente');
            console.log(donadorBack)
            setModalConfirmacionVisibility(false);
        })
        .catch(error =>{
            console.log(donadorBack)
            alert('No se pudo actualizar el donador:', error);
        })
        
    }

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
            <body className="green-gradient">
                <aside>
                    <MenuPrincipal idRolLogin={2}></MenuPrincipal>
                </aside>
                <main>
                    <header>
                        <HeaderTitulo titulo="Editar donador"></HeaderTitulo>
                    </header>
                    <section className="contenido">
                        <div className="contenidoFormulario-container">
                            <ImagenFormulario></ImagenFormulario>
                            <FormularioEditarDonador setModalConfirmacionVisibility={setModalConfirmacionVisibility} setNombreDonador={setNombreDonador} donor={donor} setDonor={setDonor} setTipoDonador={setTipoDonador}></FormularioEditarDonador>
                        </div>
                    </section>
                    {modalConfirmacionVisibility ? <ModalConfirmacion  handleConfirmation={handleSave} setModalConfirmacionVisibility={setModalConfirmacionVisibility} titulo1="edición" titulo2="donador" accion="editar" entidadObjetivo=" el donador" idEntidad={nombreDonador}></ModalConfirmacion>:null}
                </main>
            </body>
        )
    }
}

export default EditarDonador
