import {React, useState} from 'react'
import Select from 'react-select'
import '../styles/general.css';
import '../styles/glass.css';
import '../styles/filtros.css';
import '../styles/FiltroAsignarRutas.css';

function FiltroOperadoresPendientes(props) {

    const [ orden, setOrden ] = useState('asc')

    function manageFiltroOrden(event) {
        if(event.target.id === "opcion-1"){
            setOrden('asc')
        }
        else if (event.target.id === "opcion-2"){
            setOrden('desc')
        }
    }

    props.setmanageFiltroOrden(orden)

    return (
        <div className="filtros-container darkGlass">
            <form action="" className="formFiltro">
                <div className="opcionesFiltro manrope5 blanco">
                    <p className="bebas3 blanco">Orden</p>
                    <div class="contenedorRadioButtons">
                        <input type="radio" name="select" id="opcion-1" onChange={manageFiltroOrden} defaultChecked/>
                        <input type="radio" name="select" id="opcion-2" onChange={manageFiltroOrden}/>
                        <label for="opcion-1" class="opcion opcion-1">
                            <div class="dot"></div>
                            <div className="espacioFiltros"></div>
                            <span>A -Z</span>
                        </label>
                        <label for="opcion-2" class="opcion opcion-2">
                            <div class="dot"></div>
                            <div className="espacioFiltros"></div>
                            <span>Z - A</span>
                        </label>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FiltroOperadoresPendientes
