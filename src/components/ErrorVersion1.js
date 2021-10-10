import React from 'react'
import AguacateTriste from '../assets/images/sadAvocado2.png'
import '../styles/views.css'

function ErrorVersion1(props) {
    return(
        <>
            <div className="divAguacateError">
                <img className="aguacateError" src={AguacateTriste} alt="¡Error!"/>
                <p className="manrope4 blanco textoError">¡Vaya!</p>
                <p className="manrope4 blanco textoError">Parece que hemos tenido un problema:</p>
                <p className="manrope4 blanco textoError">⚠️ {props.nombreError}</p>
            </div>
        </>
    )
}

export default ErrorVersion1