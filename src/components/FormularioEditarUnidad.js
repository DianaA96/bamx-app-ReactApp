import React, {useState} from 'react'
import Select from 'react-select'
import '../styles/formularios.css';
import '../styles/general.css';
import '../styles/glass.css';
import '../styles/inputs.css';
import '../styles/botones.css';

function FormularioEditarUnidad(props) {


    function showModal(event){
        event.preventDefault()
        props.setModalConfirmacionVisibility(true)
    }

    function handleChange(event){
        let newVehicle = {
            ...props.vehicle,
            [event.target.name]: event.target.value,
        };

        props.setVehicle(newVehicle)
    }

    return (
        <div className="Formulario-container lightGlass">
            <form action="" className="formulario" onSubmit={showModal}>
                <div className="item-formulario">
                    <label htmlFor="modelo" className="input-label bebas4">Descripcion de la unidad*</label>
                    <input type="text" className="inputDarkGlass manrope5" required name="modelo" defaultValue={props.vehicle.modelo} placeholder="Ej. Camioneta 500 Kg. Ford F312" onChange={handleChange}/>
                </div>
                <div className="item-formulario">
                    <label htmlFor="placa" className="input-label bebas4">Placas*</label>
                    <input type="text" className="inputDarkGlass manrope5" required name="placa" defaultValue={props.vehicle.placa} placeholder="Ej. PYS-752-A" onChange={handleChange}/>
                </div>
                <div className="item-formulario">
                    <label htmlFor="poliza" className="input-label bebas4">Número de póliza*</label>
                    <input type="text" className="inputDarkGlass manrope5" required name="poliza" defaultValue={props.vehicle.poliza} placeholder="Escriba el número de póliza" onChange={handleChange}/>
                </div>
                <div className="item-formulario espacio-extra">
                    <label htmlFor="vencimientoPoliza" className="input-label bebas4">Fecha de vencimiento de póliza*</label>
                    <input type="date" className="inputDarkGlass manrope5" required name="vencimientoPoliza" defaultValue={props.vehicle.vencimientoPoliza} placeholder="Número a 10 dígitos" onChange={handleChange}/>
                </div>
                
                <button className="btnNaranja bebas2 blanco btn-formulario" type="submit">Guardar</button>
            </form>
        </div>
    )
}

export default FormularioEditarUnidad
