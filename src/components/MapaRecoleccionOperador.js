import React, {useState} from 'react'
import '../styles/general.css';
import '../styles/ModalDetallesRuta.css';
import '../styles/MapaRecoleccionOperador.css';
import '../styles/glass.css';
import '../styles/botones.css';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

import styled, { keyframes } from "styled-components";
import { fadeInDownBig } from 'react-animations'

const BounceInAnimation = keyframes`${fadeInDownBig}`;
const BounceInDiv = styled.div`
    backdrop-filter: blur( 20px );
    border-radius: 25px;
    -webkit-backdrop-filter: blur( 20px );
    animation: 1 0.5s ${BounceInAnimation};
`;

function MapaRecoleccionOperador(props) {

    const center = {
        lat: props.latitud,
        lng: props.longitud
      };

    const [status, setStatus ] = useState('idle');
    const [error, setError] = useState(null);
    const [user, setUser] = useState({})

    function hideMapa(){
        props.setMapaVisibility(false)
    }

   
        return (
            <div className="modal-overlay">
                <BounceInDiv>
                    <div className="modalMapa-container darkGlass">
                        <div className="modalMapa-header">
                            <h2 className="bebas2 blanco">Ubicación de la recolección</h2>
                            
                            <button className="btn-cerrar" onClick={hideMapa}><i class="fas fa-times-circle colorG100"></i></button>
                        </div>
                        <p className="ubicacion">{props.reversedGeocoding}</p>
                        <div className="mapa-container" style={{ height: '30em', width: '100%' }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: 'AIzaSyClyBcaMD2Zv395bn61vMorT5ktmG2zQwc'}}
                                defaultCenter={center}
                                defaultZoom={16}
                                >
                                <Marker lat={props.latitud} lng={props.longitud}/>
                            </GoogleMapReact>
                        </div>
                    </div>
                </BounceInDiv>
            </div>
        )
    
}

export default MapaRecoleccionOperador
