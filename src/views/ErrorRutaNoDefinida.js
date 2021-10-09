import React from 'react'

import '../styles/views.css'
import '../styles/ErrorRutaNoDefinida.css'

function ErrorRutaNoDefinida() {
    return(
        <>
        <body className="errorRouter">
            <div className="bowl">
                <div className="spdline"></div>
                <div className="spider">
                    <div className="leg left-1"></div>
                    <div className="leg left-2"></div>
                    <div className="leg left-3"></div>
                    <div className="leg right-1"></div>
                    <div className="leg right-2"></div>
                    <div className="leg right-3"></div>
                </div>
                </div>
                <div className="ghost">
                <div className="eye eye-left"></div>
                <div className="eye eye-right"></div>
                <div className="chocolate"></div>
                <div className="mouth"></div>
                </div>

                <div className="signwood"></div>
                <div className="signtext">
                <p>404<br/>No hay nada aquí<br/><a href="/login">¡Vuelve al inicio!</a></p>
                </div>
                <div className="pin"></div>
                <div className="line"></div>
            </body>
        </>
    )
}

export default ErrorRutaNoDefinida