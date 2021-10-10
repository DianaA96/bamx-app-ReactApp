import React from 'react'
import Brocoli from '../assets/images/loaderBroccoli.png'
import '../styles/views.css'

function EmptyState2() {
    return(
        <>
            <div className="aguacateError">
                <img className="brocoliVacio" src={Brocoli} alt="¡Error!"/>
                <p className="manrope4 blanco textoError">Ups.</p>
                <p className="manrope4 blanco textoError">Aún no hay nada por aquí.</p>
            </div>
        </>
    )
}

export default EmptyState2