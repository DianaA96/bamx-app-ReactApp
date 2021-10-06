import React from 'react';
import '../styles/CardFormularioInicioSesion.css';
import '../styles/general.css';
import '../styles/glass.css';
import '../styles/botones.css';
import '../styles/inputs.css';

function CardFormularioInicioSesion(){
    return(
        <div className="cardPrincipal formularioInicioSesion darkGlass">
            <div className='formularioCard'>
                <h2 className="bebas3 blanco delgada">Inicie sesión para comenzar</h2>
                <input type="text" className="inputInicioSesion manrope5" placeholder='Escriba su usuario'/>
                <input type="password" className="inputInicioSesion manrope5" placeholder='Escriba su contraseña'/>
                <button className="btnVerde bebas4 blanco delgada">Iniciar sesión</button>
                <button className="btnRecContrasena manrope5 subrayada blanco">Olvidé mi contraseña</button>
            </div>
            <p className="manrope7 blanco">Banco de Alimentos de Morelos, 2021.</p>
        </div>
    )
}

export default CardFormularioInicioSesion