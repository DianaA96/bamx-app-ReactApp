import React from 'react'
import Apio from '../assets/images/runningCelery.png'
import '../styles/views.css'

function Espera2() {
    return(
        <>
            <div className="divAguacateError">
                <img className="apioCorredor" src={Apio} alt="¡Error!"/>
                <p className="manrope4 blanco textoError">Espera un momento...</p>
            </div>
        </>
    )
}

export default Espera2