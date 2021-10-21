import React from "react";
import '../styles/general.css';
import '../styles/glass.css';
import '../styles/MenuPrincipal.css';

import {
    BrowserRouter as Router,
    Link,
  } from 'react-router-dom';

function camelize(str) {
return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
}).replace(/\s+/g, '');
}

function TabMenuPrincipal(props) {
    let destinoTab
    props.logo === "Cerrar sesión" ? destinoTab = "login" : destinoTab = props.logo
    
    return(
        <Link to={`/${camelize(destinoTab.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}`}>
            <span className="contenedorImagen">
                <img src={props.icono} alt='Icon'/>
            </span>
            <span className="nav-text menuCopy bebas3">
                {props.logo}
            </span>
        </Link>
    );
}

export default TabMenuPrincipal