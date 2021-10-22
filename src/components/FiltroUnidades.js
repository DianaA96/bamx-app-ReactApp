import React from 'react'
import '../styles/general.css';
import '../styles/glass.css';
import '../styles/filtros.css';
import '../styles/FiltroAsignarRutas.css';

function FiltroRutas(props) {

    function manageFiltroOrden(event) {
        if(event.target.id === "opcion-1"){
            props.setOrden('asc')
        }
        else if (event.target.id === "opcion-2"){
            props.setOrden('desc')
        }
    }

    return (
        <div className="filtros-container darkGlass">
            <form action="" className="formFiltro">
                <div className="opcionesFiltro manrope5 blanco">
                    <p className="bebas3 blanco">Orden</p>
                    <div class="contenedorRadioButtons">
                        <input type="radio" name="select" id="opcion-1" onChange={manageFiltroOrden} defaultChecked/>
                        <input type="radio" name="select" id="opcion-2" onChange={manageFiltroOrden} />
                        <input type="radio" name="select" id="opcion-3"/>
                        <input type="radio" name="select" id="opcion-4"/>
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
                        <label for="opcion-3" class="opcion opcion-3">
                            <div class="dot"></div>
                            <div className="espacioFiltros"></div>
                            <span>Vencimiento de póliza (Asc.)</span>
                        </label>
                        <label for="opcion-4" class="opcion opcion-4">
                            <div class="dot"></div>
                            <div className="espacioFiltros"></div>
                            <span>Vencimiento de póliza (Desc.)</span>
                        </label>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FiltroRutas
