import React, {useState, useEffect} from 'react'
import CardCuadrada from '../components/CardCuadrada'
import '../styles/views.css'
import axios from 'axios'
import ModalConfirmacion from './ModalConfirmacion'
import Loader from './Loader'
import ModalDetallesDonador from './ModalDetallesDonador'
import ErrorVersion1 from './ErrorVersion1'

function GridCardsGestionarDonadores(props) {
    const [ modalVisibility, setModalVisibility ] = useState(false)
    const [ modalConfirmacionVisibility, setModalConfirmacionVisibility] = useState(false)
    const [ donorId, setDonorId ] = useState('');
    const cardType = "donador"
    const [ status, setStatus ] = useState('idle');
    const [ error, setError ] = useState(null);
    const [ donors, setDonors ] = useState([]);
    const [ nombreRuta, setNombreRuta ] = useState()
    const [ idRuta, setIdRuta ] = useState()
    const [ ptosRecolect, setPtosRecolec ] = useState()

    let queryString = ''

    let queryStringTipo = '';
    let strTipo = '';
    let queryStringOrden = '';
    let strOrden = '';
    let strInput = '';

    if (props.queryInput !== '') {
            queryString = '?name=';
            queryStringOrden = '';
            queryStringTipo = '';
            strTipo = '';
            strOrden = '';
            strInput = props.queryInput
    }

    else if (props.tipo !== '' || props.orden !== '') {
        queryString = ''
        queryStringOrden = '&order=';
        strTipo = props.tipo;
        queryStringTipo = '?type=';
        strOrden = props.orden;
        strInput = '';
    }

    useEffect(()=>{
        setStatus('loading')
        axios.get(`http://bamxapi-env.eba-wsth22h3.us-east-1.elasticbeanstalk.com/donors${queryString}${strInput}${queryStringTipo}${strTipo}${queryStringOrden}${strOrden}`)
          .then((result)=>{
            setDonors(result.data.listaDonadores)
            setStatus('resolved')
          })
          .catch((error)=>{
            setError(error)
            setStatus('error')
          })
    },[props.queryInput, props.orden, props.tipo])

    
    function handleDelete(){
        axios.delete(`http://bamxapi-env.eba-wsth22h3.us-east-1.elasticbeanstalk.com/donors/${donorId}`)
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
                        {donors.map((data,i)=>
                            <CardCuadrada setIdRuta={setIdRuta} setPtosRecolec={setPtosRecolec} setNombreRuta={setNombreRuta} cardType={cardType} data = {data} setModalVisibility={setModalVisibility} setModalConfirmacionVisibility={setModalConfirmacionVisibility} setDonorId={setDonorId}></CardCuadrada>
                        )}
                    </div>
                </section> 
                {modalVisibility ? <ModalDetallesDonador donorId={donorId} setModalConfirmacionVisibility={setModalConfirmacionVisibility} setModalVisibility={setModalVisibility}></ModalDetallesDonador>  : null}
                {modalConfirmacionVisibility ? <ModalConfirmacion  handleConfirmation={handleDelete} setModalConfirmacionVisibility={setModalConfirmacionVisibility} titulo1="eliminación" titulo2="donador" accion="eliminar" entidadObjetivo=" el donador" idEntidad={donorId}></ModalConfirmacion>:null}
            </>
        )
    }
}

export default GridCardsGestionarDonadores
