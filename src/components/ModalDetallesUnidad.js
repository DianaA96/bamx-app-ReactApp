import React, {useState, useEffect} from 'react'
import '../styles/general.css';
import '../styles/ModalDetallesRuta.css';
import '../styles/ModalDetallesUsuario.css';
import iconoUnidad from '../assets/icons/iconoUnidadDetalle.png'
import '../styles/glass.css';
import '../styles/botones.css';
import styled, { keyframes } from "styled-components";
import { fadeInDownBig } from 'react-animations'
import CustomLink from './CustomLink';
import axios from 'axios'

const BounceInAnimation = keyframes`${fadeInDownBig}`;
const BounceInDiv = styled.div`
    backdrop-filter: blur( 20px );
    border-radius: 25px;
    -webkit-backdrop-filter: blur( 20px );
    animation: 1 0.5s ${BounceInAnimation};
`;

function ModalDetallesUnidad(props) {
    const [status, setStatus ] = useState('idle');
    const [error, setError] = useState(null);
    const [vehicle, setVehicle] = useState({})

    function hideModal(){
        props.setModalVisibility(false)
    }

    function showModalConfirmacion(){
        props.setModalConfirmacionVisibility(true)
        props.setModalVisibility(false)
    }

    useEffect(()=>{
        setStatus('loading')
        axios.get(`http://bamxapi-env.eba-wsth22h3.us-east-1.elasticbeanstalk.com/vehicles/${props.vehicleId}`)
          .then((result)=>{
            setVehicle(result.data.datosVehiculo)
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
            <div className="modal-overlay">
                <BounceInDiv>
                    <div className="modalDetallesUsuario-container darkGlass">
                        <section className="modalDetallesUnidad-izquierda">
                            <h1 className="bebas1 blanco">Detalle de la unidad</h1>
                            <img src={iconoUnidad} alt="" />
                        </section>
                        <section className="modalDetallesUsuario-derecha">
                            <section className="modalDetallesUsuario-header">
                                <div className="modalTitulo">
                                    <p className="manrope5"><span className="bold">PLACA</span></p>
                                    <p className="manrope5">{vehicle.placa}</p>
                                </div>
                                <button className="btn-cerrar" onClick={hideModal}><i class="fas fa-times-circle colorG100"></i></button>
                            </section>
                            <section className="modalDetallesUsuario-body">
                                <div className="modalTitulo">
                                    <p className="manrope4"> {vehicle.modelo}</p>
                                </div>
                            </section>
                            <section className="modalDetallesUsuario-body">
                                <div className="modalUsuarioIndividual">
                                    <div className="infoUsuarioIndividual">
                                        <p className="manrope5"><span className="bold">Número de póliza: </span>{vehicle.poliza}</p>
                                        <p className="manrope5"><span className="bold">Fecha de vencimiento: </span>{vehicle.vencimientoPoliza}</p>
                                    </div>
                                </div>
                            </section>
                            <section className="modalDetallesUsuario-acciones">
                                <button className="btnRosa bebas4" onClick={showModalConfirmacion}>Eliminar usuario</button>
                                <CustomLink tag='button' to={`/editarUnidad/${vehicle.idVehicle}`} className="btnAmarillo bebas4">Editar datos de la unidad</CustomLink>
                            </section>
                        </section>
                    </div>
                </BounceInDiv>
            </div>
        )
    }
}

export default ModalDetallesUnidad
