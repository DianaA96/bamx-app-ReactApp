import React from 'react'
import ImagenFormulario from '../components/ImagenFormulario'
import FormularioAgregarRuta from '../components/FormularioAgregarRuta'
import '../styles/PruebaVista.css';

function PruebaVista() {
    return (
        <div className="body-pagina">
            <FormularioAgregarRuta></FormularioAgregarRuta>
            <ImagenFormulario></ImagenFormulario>
            
        </div>
    )
}

export default PruebaVista
