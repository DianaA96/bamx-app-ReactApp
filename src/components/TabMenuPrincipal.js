import React from "react";
import '../styles/general.css';
import '../styles/glass.css';
import '../styles/MenuPrincipal.css';

function TabMenuPrincipal(props) {
    return(
        <button className="tabMenuPrincipal">
            <img src={props.icono} alt='Icon'/>
            <span className="espacioMenuPrincipal">     </span>
            <p className="tabMenuPrincipal bebas4 blanco delgada">{props.logo}</p>
        </button>
    );
}

export default TabMenuPrincipal