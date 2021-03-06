import React from 'react'
import Zanahorias from '../assets/images/searchingCarrots22.png'
import '../styles/views.css'

function EmptyState1(props) {
    return(
        <>
            <div className="aguacateError">
                <img className="zanahoriaVacia" src={Zanahorias} alt="¡Error!"/>
                <p className="manrope4 blanco textoError">Ups.</p>
                <p className="manrope4 blanco textoError">{props.message}</p>
            </div>
        </>
    )
}

export default EmptyState1