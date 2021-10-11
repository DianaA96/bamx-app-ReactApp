import React, {useState, useEffect} from 'react'
import '../styles/general.css';
import '../styles/ModalDetallesRuta.css';
import '../styles/ModalDetallesUsuario.css';
import iconoDonador from '../assets/icons/iconoDonadorDetalle.png'
import '../styles/glass.css';
import '../styles/botones.css';
import CustomLink from './CustomLink';
import styled, { keyframes } from "styled-components";
import { fadeInDownBig } from 'react-animations'
import axios from 'axios' 

const BounceInAnimation = keyframes`${fadeInDownBig}`; 
const BounceInDiv = styled.div`
    backdrop-filter: blur( 20px );
    border-radius: 25px;
    -webkit-backdrop-filter: blur( 20px );
    animation: 1 0.5s ${BounceInAnimation};
`;

function ModalDetallesDonador(props) {
    const [status, setStatus ] = useState('idle');
    const [error, setError] = useState(null);
    const [donor, setDonor] = useState({})
    function hideModal(){
        props.setModalVisibility(false)
    }

    function showModalConfirmacion(){
        props.setModalConfirmacionVisibility(true)
        props.setModalVisibility(false)
    }

    useEffect(()=>{
        setStatus('loading')
        axios.get(`http://localhost:5000/donors/${props.donorId}`)
          .then((result)=>{
            setDonor(result.data.donador[0])
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
                    <section className="modalDetallesDonador-izquierda">
                        <h1 className="bebas1 blanco">Detalle del donador</h1>
                        <img src={iconoDonador} alt="" />
                    </section>
                    <section className="modalDetallesUsuario-derecha">
                        <section className="modalDetallesUsuario-header">
                            <div className="modalTitulo">
                                <p className="manrope5"><span className="bold">Determinante</span></p>
                                <p className="manrope5">{donor.determinante}</p>
                            </div>
                            <button className="btn-cerrar" onClick={hideModal}><i class="fas fa-times-circle colorG100"></i></button>
                        </section>
                        <section className="modalDetallesUsuario-body">
                            <div className="modalTitulo">
                                <p className="manrope4 dosLineasTxt">{donor.nombre}</p>
                                <p className="manrope5">{`${donor.calle}, ${donor.numExterior}, ${donor.colonia}, ${donor.municipio}, ${donor.estado !=null ? donor.estado : ''}`}</p>
                            </div>
                        </section>
                        <section className="modalDetallesUsuario-body">
                            <div className="modalUsuarioIndividual">
                                <div className="infoUsuarioIndividual">
                                    <p className="manrope5"><span className="bold">Correo electrónico: </span>{donor.correo}</p>
                                    <p className="manrope5"><span className="bold">Teléfono de contacto: </span>{donor.telefono}</p>
                                </div>
                            </div>
                        </section>
                        <section className="modalDetallesUsuario-acciones">
                            <button className="btnRosa bebas4" onClick={showModalConfirmacion}>Eliminar donador</button>
                            <CustomLink tag='button' to={`/editarDonador/${donor.idDonor}`} className="btnAmarillo bebas4">Editar datos del donador</CustomLink>
                        </section>
                    </section>
                </div>
            </BounceInDiv>
        </div>
        
    )
    }
}

export default ModalDetallesDonador
