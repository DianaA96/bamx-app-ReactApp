import React, {useState, useEffect} from 'react'
import CardOperadorPendiente from './CardOperadorPendiente'
import ModalAsignacionRuta from './ModalAsignacionRuta'
import ModalConfirmacion from './ModalConfirmacion'
import ErrorVersion1 from './ErrorVersion1'
import Loader from './Loader'
import '../styles/views.css'
import axios from 'axios'

function GridCardsGestionarUsuarios(props) {
 
    const [ modalVisibility, setModalVisibility ] = useState(false)
    const [ modalConfirmacionVisibility, setModalConfirmacionVisibility ] = useState(false)
    const [ operadorId, setOperadorId ] = useState('1');
    const [ operadorNombre, setOperadorNombre ] = useState('');
    const [ operadorNUsuario, setOperadorNUsuario ] = useState('');

    const [status, setStatus ] = useState('idle');
    const [error, setError] = useState(null);
    const [users, setUsers] = useState([]);

    let queryString = ''

    let queryStringOrden = '';
    let strOrden = '';
    let strInput = '';

    if (props.queryInput !== '') {
            queryString = '?name=';
            queryStringOrden = '';
            strOrden = '';
            strInput = props.queryInput
    }

    else if (props.order !== 'asc') {
        queryString = ''
        queryStringOrden = '?order=';
        strOrden = props.order;
        strInput = '';
    }

    useEffect(()=>{
        setStatus('loading')
        axios.get(`http://bamxapi-env.eba-wsth22h3.us-east-1.elasticbeanstalk.com/drivers${queryString}${strInput}${queryStringOrden}${strOrden}`)
          .then((result)=>{
            setUsers(result.data.listaUsuarios)
            setStatus('resolved')
          })
          .catch((error)=>{
            setError(error)
            setStatus('error')
          })
    }, [props.queryInput || props.order])

    function handleDelete(){
        axios.delete(`http://bamxapi-env.eba-wsth22h3.us-east-1.elasticbeanstalk.com/users/${operadorId}`)
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
                    <div className="cardsOperadorPendiente-container">
                        {users.map((user,i)=>
                            <CardOperadorPendiente user={user} 
                            setOperadorNombre = {setOperadorNombre}
                            setOperadorNUsuario ={setOperadorNUsuario}
                            setOperadorId = {props.setOperadorId} 
                            setModalVisibility={setModalVisibility} 
                            unidades={props.unidades}></CardOperadorPendiente>
                        )}
                    </div>
                </section>
                {modalVisibility ? <ModalAsignacionRuta operadorNombre={operadorNombre} operadorNUsuario={operadorNUsuario} operadorId={props.operadorId} setModalVisibility={setModalVisibility} rutas={props.rutas} donadoresExtraordinarios={props.donadoresExtraordinarios} unidades={props.unidades}></ModalAsignacionRuta>  : null}
                {modalConfirmacionVisibility ? <ModalConfirmacion  setModalConfirmacionVisibility={setModalConfirmacionVisibility} titulo1="eliminación" titulo2="usuario" accion="eliminar" entidadObjetivo=" el usuario" idEntidad={operadorId} handleConfirmation={handleDelete}></ModalConfirmacion>:null}
            </>
        )
    }
}

export default GridCardsGestionarUsuarios