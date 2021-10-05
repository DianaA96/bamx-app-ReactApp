import React from "react";
import '../styles/general.css';
import '../styles/glass.css';
import '../styles/MenuPrincipal.css';

function TabMenuPrincipal(props) {
    return(
        <a href="">
            <span className="contenedorImagen">
                <img src={props.icono} alt='Icon'/>
            </span>
            <span className="nav-text menuCopy">
                {props.logo}
            </span>
        </a>
    );
}

export default TabMenuPrincipal