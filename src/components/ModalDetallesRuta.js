import React, { useState, useEffect } from 'react'
import '../styles/general.css';
import '../styles/ModalDetallesRuta.css';
import iconoRuta from '../assets/icons/iconoCRUDRuta.png'
import '../styles/glass.css';
import '../styles/botones.css';
import styled, { keyframes } from "styled-components";
import { fadeInDownBig } from 'react-animations'
import axios from 'axios';
import CustomLink from './CustomLink';

const BounceInAnimation = keyframes`${fadeInDownBig}`;
const BounceInDiv = styled.div`
    backdrop-filter: blur( 20px );
    border-radius: 25px;
    -webkit-backdrop-filter: blur( 20px );
    animation: 1 0.5s ${BounceInAnimation};
`;

let donadores = []

function ModalDetallesRuta(props) {

    const [ status, setStatus ] = useState();
    const [ error, setError ] = useState();
    

    useEffect(()=>{
        setStatus('loading')
        axios.get(`http://localhost:5000/donors?route=${props.idRuta}`)
          .then((result)=>{
            donadores = result.data.listaDonadores
            donadores.map((donador)=>{
                console.log(donador.nombre)
            })
            setStatus('resolved')
          })
          .catch((error)=>{
            setError(error)
            setStatus('error')
          })
    },[])

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
                <div className="modalDetallesRuta-container darkGlass">
                    <section className="modalDetallesRuta-izquierda">
                        <h1 className="bebas1 blanco">Detalle de la ruta</h1>
                        <img src={iconoRuta} alt="" />
                    </section>
                    <section className="modalDetallesRuta-derecha">
                        <section className="modalDetallesRuta-header">
                            <div className="modalTitulo">
                                <p className="manrope4">{props.nombreRuta}</p>
                                <p className="manrope5">{props.ptosRecolec} puntos de recolección</p>
                            </div>
                            <button className="btn-cerrar" onClick={hideModal}><i class="fas fa-times-circle colorG100"></i></button>
                        </section>
                        <section className="modalDetallesRuta-body">
                            {donadores.map((donador, idx) => 
                                <div className="modalRutaIndividual">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <div className="infoRutaIndividual">
                                        <p className="manrope4">{donador.nombre}</p>
                                        <p className="manrope5">{donador.calle} {donador.numExterior}</p>
                                        <p className="manrope5">{donador.colonia} {donador.municipio}</p>
                                    </div>
                                </div>
                            )}
                        </section>
                        <section className="modalDetallesRuta-acciones">
                            <button className="btnRosa bebas4" onClick={showModalConfirmacion}>Eliminar Ruta</button>
                            <CustomLink tag='button' to={`/editarRuta/${props.idRuta}`} className="btnAmarillo bebas4">Editar datos de la ruta</CustomLink>
                        </section>
                    </section>
                </div>
            </BounceInDiv>
        </div>
    )
}

export default ModalDetallesRuta
