import React, {useState, useEffect} from 'react'
import CardCuadrada from './CardCuadrada'
import ModalDetallesUsuario from './ModalDetallesUsuario'
import ModalConfirmacion from './ModalConfirmacion'
import ErrorVersion1 from './ErrorVersion1'
import EmptyState1 from './EmptyState1'
import Loader from './Loader'
import '../styles/views.css'
import axios from 'axios'

function GridCardsGestionarUsuarios(props) {
 
    const cardType = "usuario";
    const [ modalVisibility, setModalVisibility ] = useState(false)
    const [ modalConfirmacionVisibility, setModalConfirmacionVisibility] = useState(false)
    const [ userId, setUserId ] = useState('1');
    const [ nombreRuta, setNombreRuta ] = useState()
    const [ idRuta, setIdRuta ] = useState()
    const [ ptosRecolect, setPtosRecolec ] = useState()

    const [ status, setStatus ] = useState('idle');
    const [ error, setError ] = useState(null);
    const [ users, setUsers ] = useState([]);
    const [ cargo, setCargo ] = useState();

    let queryString = ''

    let queryStringCargo = '';
    let strCargo = '';
    let queryStringOrden = '';
    let strOrden = '';
    let strInput = '';

    if (props.queryInput !== '') {
            queryString = '?name=';
            queryStringOrden = '';
            queryStringCargo = '';
            strCargo = '';
            strOrden = '';
            strInput = props.queryInput
    }

    else if (props.cargo !== '' || props.orden !== '') {
        queryString = ''
        queryStringOrden = '&order=';
        strCargo = props.cargo;
        queryStringCargo = '?role=';
        strOrden = props.orden;
        strInput = '';
    }

    useEffect(()=>{
        setStatus('loading')
        axios.get(`http://localhost:5000/users${queryString}${strInput}${queryStringCargo}${strCargo}${queryStringOrden}${strOrden}`)
          .then((result)=>{
            setUsers(result.data.listaUsuarios)
            setStatus('resolved')
          })
          .catch((error)=>{
            setError(error)
            setStatus('error')
          })
    }, [props.queryInput, props.orden, props.cargo])

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
        return <Loader/>
    }
    
    if(status === 'error'){
        return (
            <ErrorVersion1 nombreError={error.message}></ErrorVersion1>
        )
    }
    
    if(status === 'resolved'){
        return (
            <>
                <section className="contenido">
                    <div className="cardsCuadradas-container">
                        {users.length !== 0 ? users.map((data,i)=> 
                            <CardCuadrada cargo={cargo}  setIdRuta={setIdRuta} setPtosRecolec={setPtosRecolec} setCargo={setCargo} data = {data} setNombreRuta={setNombreRuta} cardType={cardType} setModalVisibility={setModalVisibility} setUserId={setUserId}></CardCuadrada>) 
                            : 
                            <EmptyState1 message="Tu búsqueda no arrojó resultados... :("/>}
                    </div>
                </section>
                {modalVisibility ? <ModalDetallesUsuario userId={userId} cargo={cargo} setModalVisibility={setModalVisibility}  setModalConfirmacionVisibility={setModalConfirmacionVisibility}></ModalDetallesUsuario>  : null}
                {modalConfirmacionVisibility ? <ModalConfirmacion  setModalConfirmacionVisibility={setModalConfirmacionVisibility} titulo1="eliminación" titulo2="usuario" accion="eliminar" entidadObjetivo=" el usuario" idEntidad={userId} handleConfirmation={handleDelete}></ModalConfirmacion>:null}
            </>
        )
    }
}

export default GridCardsGestionarUsuarios