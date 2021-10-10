import React from 'react'
import Limon from '../assets/images/waitingLemon22.png'
import '../styles/views.css'

function Espera1() {
    return(
        <>
            <div className="divAguacateError">
                <img className="limonCorredor" src={Limon} alt="¡Error!"/>
                <p className="manrope4 blanco textoError">Espera un momento...</p>
            </div>
        </>
    )
}

export default Espera1