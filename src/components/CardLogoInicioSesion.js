import React from 'react';
import '../styles/glass.css';
import '../styles/CardLogoInicioSesion.css';
import LogoBAMX from '../assets/images/logo_bamx.png';

function CardLogoInicioSesion(){
    return(
        <div className="cardPrincipal darkGlass">
            <img src={LogoBAMX} alt='Banco de Alimentos de Morelos'/>
        </div>
    )
}

export default CardLogoInicioSesion