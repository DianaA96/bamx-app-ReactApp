import React from 'react'
import '../styles/ImagenFormulario.css';
import imgVerduras from '../assets/images/verduras.png'

function ImagenFormulario() {
    return (
        <div className="ImagenFormulario-container">
            <img src={imgVerduras} alt="" className="img-formulario"/>
        </div>
    )
}

export default ImagenFormulario
