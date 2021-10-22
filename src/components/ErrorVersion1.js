import React from 'react'
import Zanahorias from '../assets/images/searchingCarrots22.png'
import AguacateTriste from '../assets/images/sadAvocado2.png'
import '../styles/views.css'

function ErrorVersion1(props) {

    let error = props.nombreError
    let code = 0

    if(props.nombreError === "Request failed with status code 404") {
        error = "404: No hay nada por aquí 🙁."
        code = 400
    }

    else if(props.nombreError === "Request failed with status code 400") {
        error = "404: No hay nada por aquí 🙁."
        code = 400
    }

    else if(props.nombreError === "Network Error") {
        error = "Error de conexión 🙁."
    }

    return(
        <>
            <div className="divAguacateError">
                {code === 400 ?<img className="zanahoriaVacia" src={Zanahorias} alt="¡Error!"/>:<img className="aguacateError" src={AguacateTriste} alt="¡Error!"/>}
                <p className="manrope4 blanco textoError">¡Vaya!</p>
                {code === 400 ?null:<p className="manrope4 blanco textoError">Parece que hemos tenido un problema:</p>}
                <p className="manrope4 blanco textoError">⚠️ {error}</p>
            </div>
        </>
    )
}

export default ErrorVersion1