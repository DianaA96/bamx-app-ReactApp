import React from "react";
import '../styles/HeaderTitulo.css'
import '../styles/general.css';
import '../styles/glass.css';

function HeaderTitulo(props) {
    return (
        <div className="headerTituloContainer lightGlass">
            <h1 className="bebas1 blanco">
                {props.titulo}
            </h1>
        </div>
    );
}

export default HeaderTitulo;