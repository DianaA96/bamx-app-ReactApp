import React from 'react'
import '../styles/general.css';
import '../styles/ModalConfirmacion.css';
import '../styles/glass.css';
import '../styles/botones.css';
import styled, { keyframes } from "styled-components";
import { shake } from 'react-animations'

const ShakeAnimation = keyframes`${shake}`; 
const ShakeDiv = styled.div`
    backdrop-filter: blur( 20px );
    border-radius: 25px;
    -webkit-backdrop-filter: blur( 20px );
    animation: 1 0.5s ${ShakeAnimation};
`;

function ModalConfirmacion(props) {

    function hideModal(){
        props.setModalConfirmacionVisibility(false)
    }

    return (
        <div className="modal-overlay">
            <ShakeDiv> 
                <div className="modalConfirmacion-container darkGlass">
                    <section className="modalConfirmacion-header">
                        <i class="fas fa-exclamation-triangle blanco"></i>
                        <h2 className="bebas2 blanco">Confirmar {props.titulo1} de {props.titulo2}</h2>
                        <button className="btn-cerrar" onClick={hideModal}><i class="fas fa-times-circle colorG100"></i></button>
                    </section>
                    <section className="modalConfirmacion-body">
                        <p className="manrope4">¿Está seguro que desea {props.accion} {props.entidadObjetivo} <b>{props.idEntidad}</b> ?</p>    
                    </section>
                    <section className="modalConfirmacion-acciones">
                        <button className="btnVerde bebas3 blanco" onClick={props.handleConfirmation}>Confirmar</button>
                        <button className="btnRojo bebas3 blanco">Cancelar</button>
                    </section>
                </div>
            </ShakeDiv>
        </div>
        
    )
}

export default ModalConfirmacion
