import React from 'react'
import '../styles/general.css';
import '../styles/ModalDetallesRuta.css';
import iconoRuta from '../assets/icons/iconoCRUDRuta.png'
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

function ModalDetallesRuta(props) {

    let donadores = [
        {
            nombreDonador:'Superama Gobernadores',
            ubicacionDonador:'Av Vicente Guerrero 760, Lomas de la Selva, 62270'
        },
        {
            nombreDonador:'Fresko La Comer',
            ubicacionDonador:'Río Balsas 102, Vista Hermosa 62270'
        },
        {
            nombreDonador:'Woolworth Arista',
            ubicacionDonador:'Río Yaqui 28, Vista Hermosa, 62290'
        }
    ]

    function hideModal(){
        props.setModalVisibility(false)
    }

    let nombreRuta = "GOBERNADORES-ARISTA"
    let numPuntosRecoleccion = donadores.length

    return (
        <div className="modal-overlay">
            <BounceInDiv>
                <div className="modalDetallesRuta-container darkGlass">
                    <section className="modalDetallesRuta-izquierda">
                        <h1 className="bebas1 blanco">Detalle de la ruta</h1>
                        <img src={iconoRuta} alt="" />
                    </section>
                    <section className="modalDetallesRuta-derecha">
                        <section className="modalDetallesRuta-header">
                            <div className="modalTitulo">
                                <p className="manrope4">{nombreRuta}</p>
                                <p className="manrope5">{numPuntosRecoleccion} puntos de recolección</p>
                            </div>
                            <button className="btn-cerrar" onClick={hideModal}><i class="fas fa-times-circle colorG100"></i></button>
                        </section>
                        <section className="modalDetallesRuta-body">
                            {donadores.map((donador, index) =>
                                <div className="modalRutaIndividual">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <div className="infoRutaIndividual">
                                        <p className="manrope4">{donador.nombreDonador}</p>
                                        <p className="manrope5">{donador.ubicacionDonador}</p>
                                    </div>
                                </div>
                            )}
                        </section>
                        <section className="modalDetallesRuta-acciones">
                            <button className="btnRosa bebas4">Eliminar Ruta</button>
                            <button className="btnAmarillo bebas4">Editar datos de la ruta</button>
                        </section>
                    </section>
                </div>
            </BounceInDiv>
        </div>
        
    )
}

export default ModalDetallesRuta
