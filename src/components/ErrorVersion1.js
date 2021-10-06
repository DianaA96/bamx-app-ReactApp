import React from 'react'
import AguacateTriste from '../assets/images/sadAvocado2.png'
import '../styles/views.css'

function ErrorVersion1() {
    return(
        <>
            <img className="aguacateError" src={AguacateTriste} alt="¡Error!"/>
            <p className="manrope4 blanco textoError">¡Vaya!</p>
            <p className="manrope4 blanco textoError">Parece que hemos tenido un problema.</p>
        </>
    )
}

export default ErrorVersion1