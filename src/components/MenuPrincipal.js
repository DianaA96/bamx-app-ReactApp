import React from "react";
import '../styles/general.css';
import '../styles/glass.css';
import '../styles/MenuPrincipal.css';
import Tomapple from '../assets/images/tomato_apple.png';
import LogoGestionarUsuarios from '../assets/icons/iconoUsuarios.png';
import LogoGestionarDonadores from '../assets/icons/iconoDonadores.png';
import LogoGestionarUnidades from '../assets/icons/iconoUnidades.png';
import LogoCierreSesion from '../assets/icons/iconoLogout.png';
import LogoGestionarRutas from '../assets/icons/iconoRutas.png';
import LogoAsignarRutasRec from '../assets/icons/iconoRecoleccion.png';
import LogoGestionOperEnRut from '../assets/icons/iconoOperadorRuta.png';
import LogoAsignarRutEnt from '../assets/icons/iconoBodega.png';
import TabMenuPrincipal from "./TabMenuPrincipal";
import styled, { keyframes } from "styled-components";
import { fadeInDownBig } from 'react-animations'

const BounceInAnimation = keyframes`${fadeInDownBig}`;
const BounceInDiv = styled.div`
    backdrop-filter: blur( 20px );
    border-radius: 25px;
    -webkit-backdrop-filter: blur( 20px );
    animation: 1 0.5s ${BounceInAnimation};
`;

function MenuPrincipal(props) {

    let tabs, iconosTabs
    let tabs1 = ["Gestionar rutas", "Asignar rutas de recolección", "Gestión de operadores en ruta", "Asignar ruta de entrega", "Cerrar sesión"]
    let iconosTabs1 = [LogoGestionarRutas, LogoAsignarRutasRec, LogoGestionOperEnRut, LogoAsignarRutEnt, LogoCierreSesion]
    let tabs2 = ["Gestionar usuarios", "Gestionar donadores", "Gestionar unidades", "Cerrar sesión"]
    let iconosTabs2 = [LogoGestionarUsuarios, LogoGestionarDonadores, LogoGestionarUnidades, LogoCierreSesion]


    if (props.idRolLogin === 1) {
        tabs = tabs1
        iconosTabs = iconosTabs1
    } else {
        tabs = tabs2
        iconosTabs = iconosTabs2
    }

    return(
        <> 
            <div className="area"></div>
            <nav className="main-menu">
                <ul>
                    <li>
                        <span className="contenedorImagenTomapple">
                        <img src={Tomapple} alt='Icon'/>
                        </span>
                        <span className="bebas2 negro nav-text menuCopy">
                            Banco de Alimentos de Morelos
                        </span>
                    </li> 

                    {tabs.map((logo, index) =>
                        <li>
                            <TabMenuPrincipal icono={iconosTabs[index]} logo={logo}/>
                        </li>
                    )}
                </ul>
                <ul className="logout">
                    <li>
                        <span className="manrope7 negro menuCopy menuFraseFinal">
                            Banco de Alimentos de Morelos, 2021.
                        </span>
                    </li>  
                </ul>
            </nav>
        </>
    );
}

export default MenuPrincipal