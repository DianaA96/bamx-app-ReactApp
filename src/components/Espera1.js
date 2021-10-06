import React from 'react'
import Limon from '../assets/images/waitingLemon22.png'
import '../styles/views.css'

function Espera1() {
    return(
        <>
            <img className="limonCorredor" src={Limon} alt="¡Error!"/>
            <p className="manrope4 blanco textoError">Espera un momento...</p>
        </>
    )
}

export default Espera1