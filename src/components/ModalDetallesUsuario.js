import React, {useState, useEffect} from 'react'
import iconoUsuario from '../assets/icons/iconoUnidadDetalle.png'
import '../styles/general.css';
import '../styles/ModalDetallesRuta.css';
import '../styles/ModalDetallesUsuario.css';
import '../styles/glass.css';
import '../styles/botones.css';
import axios from 'axios'
import styled, { keyframes } from "styled-components";
import { fadeInDownBig } from 'react-animations'

const BounceInAnimation = keyframes`${fadeInDownBig}`;
const BounceInDiv = styled.div`
    backdrop-filter: blur( 20px );
    border-radius: 25px;
    -webkit-backdrop-filter: blur( 20px );
    animation: 1 0.5s ${BounceInAnimation};
`;

function ModalDetallesUsuario(props) {
    const [status, setStatus ] = useState('idle');
    const [error, setError] = useState(null);
    const [user, setUser] = useState({})

    function hideModal(){
        props.setModalVisibility(false)
    }

    function showModalConfirmacion(){
        props.setModalConfirmacionVisibility(true)
        props.setModalVisibility(false)
    }

    useEffect(()=>{
        setStatus('loading')
        axios.get(`http://localhost:5000/users/${props.userId}`)
          .then((result)=>{
            setUser(result.data.datosUsuario[0])
            console.log(user)
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
                        <section className="modalDetallesUsuario-izquierda">
                            <h1 className="bebas1 blanco">Detalle del usuario</h1>
                            <img src={iconoUsuario} alt="" />
                        </section>
                        <section className="modalDetallesUsuario-derecha">
                            <section className="modalDetallesUsuario-header">
                                <div className="modalTitulo">
                                    <p className="manrope4">ID</p>
                                    <p className="manrope5 bold">{user.nombreUsuario}</p>
                                </div>
                                <button className="btn-cerrar" onClick={hideModal}><i class="fas fa-times-circle colorG100"></i></button>
                            </section>
                            <section className="modalDetallesUsuario-body">
                                <div className="modalTitulo">
                                    <p className="manrope4">{user.nombre}</p>
                                    <p className="manrope4">{`${user.apellidoP} ${user.apellidoM}`}</p>
                                    <p className="manrope5">{props.cargo}</p>
                                </div>
                            </section>
                            <section className="modalDetallesUsuario-body">
                                <div className="modalUsuarioIndividual">
                                    <div className="infoUsuarioIndividual">
                                        <p className="manrope5">{user.email}</p>
                                        <p className="manrope5">{user.telefono}</p>
                                    </div>
                                </div>
                            </section>
                            <section className="modalDetallesUsuario-acciones">
                                <button className="btnRosa bebas4" onClick={showModalConfirmacion}>Eliminar usuario</button>
                                <button className="btnAmarillo bebas4">Editar datos del usuario</button>
                            </section>
                        </section>
                    </div>
                </BounceInDiv>
            </div>
        )
    }
}

export default ModalDetallesUsuario
