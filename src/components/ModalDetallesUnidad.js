import React from 'react'
import '../styles/general.css';
import '../styles/ModalDetallesRuta.css';
import '../styles/ModalDetallesUsuario.css';
import iconoUnidad from '../assets/icons/iconoUnidadDetalle.png'
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

function ModalDetallesUnidad(props) {

    let unidad = {
        idUnidad: `${props.vehicleId}`,
        placas: 'CCV7-823-2731',
        descripcionUnidad: 'Nissan NP 300',
        numPoliza: '1829178',
        vencimientoPoliza: '12-08-23'
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
                    <section className="modalDetallesUnidad-izquierda">
                        <h1 className="bebas1 blanco">Detalle de la unidad</h1>
                        <img src={iconoUnidad} alt="" />
                    </section>
                    <section className="modalDetallesUsuario-derecha">
                        <section className="modalDetallesUsuario-header">
                            <div className="modalTitulo">
                                <p className="manrope5"><span className="bold">PLACA</span></p>
                                <p className="manrope5">{unidad.placas}</p>
                            </div>
                            <button className="btn-cerrar" onClick={hideModal}><i class="fas fa-times-circle colorG100"></i></button>
                        </section>
                        <section className="modalDetallesUsuario-body">
                            <div className="modalTitulo">
                                <p className="manrope4"> {unidad.descripcionUnidad}</p>
                            </div>
                        </section>
                        <section className="modalDetallesUsuario-body">
                            <div className="modalUsuarioIndividual">
                                <div className="infoUsuarioIndividual">
                                    <p className="manrope5"><span className="bold">Número de póliza: </span>{unidad.numPoliza}</p>
                                    <p className="manrope5"><span className="bold">Fecha de vencimiento: </span>{unidad.vencimientoPoliza}</p>
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

export default ModalDetallesUnidad
