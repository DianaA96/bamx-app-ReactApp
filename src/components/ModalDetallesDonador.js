import React from 'react'
import '../styles/general.css';
import '../styles/ModalDetallesRuta.css';
import '../styles/ModalDetallesUsuario.css';
import iconoDonador from '../assets/icons/iconoDonador.png'
import '../styles/glass.css';
import '../styles/botones.css';
import styled, { keyframes } from "styled-components";
import { fadeInDownBig } from 'react-animations'

const BounceInAnimation = keyframes`${fadeInDownBig}`; 
const BounceInDiv = styled.div`
    backdrop-filter: blur( 20px );
    border-radius: 25px;
    -webkit-backdrop-filter: blur( 20px );
    animation: 1 0.5s ${BounceInAnimation};
`;

function ModalDetallesDonador(props) {

    let donador = {
        idDonador: 'DON2456-B',
        nombreDonador: 'Superama Gobernadores',
        direccionDonador: 'Av Vicente Guerrero 760, Lomas de la Selva, 62270',
        correoDonador: 'sucursalmor@walmart.com',
        numeroTelfDonador: '55 1234 5678' 
    }

    function hideModal(){
        props.setModalVisibility(false)
    }

    function showModalConfirmacion(){
        props.setModalConfirmacionVisibility(true)
        props.setModalVisibility(false)
    }

    return (
        <div className="modal-overlay">
            <BounceInDiv>
                <div className="modalDetallesUsuario-container darkGlass">
                    <section className="modalDetallesUsuario-izquierda">
                        <h1 className="bebas1 blanco">Detalle del donador</h1>
                        <img src={iconoDonador} alt="" />
                    </section>
                    <section className="modalDetallesUsuario-derecha">
                        <section className="modalDetallesUsuario-header">
                            <div className="modalTitulo">
                                <p className="manrope5">ID</p>
                                <p className="manrope5">{props.donorId}</p>
                            </div>
                            <button className="btn-cerrar" onClick={hideModal}><i class="fas fa-times-circle colorG100"></i></button>
                        </section>
                        <section className="modalDetallesUsuario-body">
                            <div className="modalTitulo">
                                <p className="manrope4 dosLineasTxt">{donador.nombreDonador}</p>
                                <p className="manrope5">{donador.direccionDonador}</p>
                            </div>
                        </section>
                        <section className="modalDetallesUsuario-body">
                            <div className="modalUsuarioIndividual">
                                <div className="infoUsuarioIndividual">
                                    <p className="manrope5">{donador.correoDonador}</p>
                                    <p className="manrope5">{donador.numeroTelfDonador}</p>
                                </div>
                            </div>
                        </section>
                        <section className="modalDetallesUsuario-acciones">
                            <button className="btnRosa bebas4" onClick={showModalConfirmacion}>Eliminar donador</button>
                            <button className="btnAmarillo bebas4">Editar datos del donador</button>
                        </section>
                    </section>
                </div>
            </BounceInDiv>
        </div>
        
    )
}

export default ModalDetallesDonador
