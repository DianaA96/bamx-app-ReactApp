import React from 'react'
import Select from 'react-select'
import '../styles/formularios.css';
import '../styles/general.css';
import '../styles/glass.css';
import '../styles/inputs.css';
import '../styles/botones.css';

function FormularioUnidad() {
    return (
        <div className="Formulario-container lightGlass">
            <form action="" className="formulario">
                <div className="item-formulario">
                    <label htmlFor="descripcionUnidad" className="input-label bebas4">Descripcion de la unidad*</label>
                    <input type="text" className="inputDarkGlass manrope5" required name="descripcionUnidad" placeholder="Ej. Camioneta 500 Kg. Ford F312"/>
                </div>
                <div className="item-formulario">
                    <label htmlFor="placas" className="input-label bebas4">Placas*</label>
                    <input type="text" className="inputDarkGlass manrope5" required name="placas" placeholder="Ej. PYS-752-A"/>
                </div>
                <div className="item-formulario">
                    <label htmlFor="numPoliza" className="input-label bebas4">Número de póliza*</label>
                    <input type="text" className="inputDarkGlass manrope5" required name="numPoliza" placeholder="Escriba el número de póliza"/>
                </div>
                <div className="item-formulario espacio-extra">
                    <label htmlFor="fechaVencimiento" className="input-label bebas4">Fecha de vencimiento de póliza*</label>
                    <input type="date" className="inputDarkGlass manrope5" required name="fechaVenicmiento" placeholder="Número a 10 dígitos"/>
                </div>
                
                <button className="btnNaranja bebas2 blanco btn-formulario">Guardar</button>
            </form>
        </div>
    )
}

export default FormularioUnidad
