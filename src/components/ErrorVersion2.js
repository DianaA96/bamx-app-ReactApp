import React from 'react'
import SandiaTriste from '../assets/images/sadWatermelon2.png'
import '../styles/views.css'

function ErrorVersion1() {
    return(
        <>
            <div className="divAguacateError">
                <img className="sandiaError" src={SandiaTriste} alt="¡Error!"/>
                <p className="manrope4 blanco textoError">¡Vaya!</p>
                <p className="manrope4 blanco textoError">Parece que hemos tenido un problema.</p>
            </div>
        </>
    )
}

export default ErrorVersion1