import React from 'react'
import CardFormularioInicioSesion from '../components/CardFormularioInicioSesion'
import CardLogoInicioSesion from '../components/CardLogoInicioSesion'
import '../styles/views.css'
import '../styles/botones.css'
import '../styles/Login.css'

function Login() {
    return (
        <body className="fondoTomates">
            <main className="pantallaLogin">
                <div className="cardLogin">
                    <CardLogoInicioSesion/>
                </div>
                <div className="cardLogin">
                    <CardFormularioInicioSesion/>
                </div>
            </main>
        </body>
    )
}

export default Login