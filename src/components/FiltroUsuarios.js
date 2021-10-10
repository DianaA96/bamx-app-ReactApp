import React, { useState } from "react";
import '../styles/general.css';
import '../styles/glass.css';
import '../styles/filtros.css';
import '../styles/FiltroAsignarRutas.css';

function FiltroUsuarios(props) {

    const [ cargo, setCargo ] = useState('')
    const [ orden, setOrden ] = useState('asc')

    function manageFiltroCargo(event) {
        if(event.target.id === "opcion-1"){
            setCargo('')
        }
        else if (event.target.id === "opcion-2"){
            setCargo('idDriver')
        }
        else if (event.target.id === "opcion-3"){
            setCargo('idReceiver')
        }
        else if (event.target.id === "opcion-4"){
            setCargo('idTrafficCoordinator')
        }
    }

    function manageFiltroOrden(event) {
        if(event.target.id === "opcion-5"){
            setOrden('asc')
        }
        else if (event.target.id === "opcion-6"){
            setOrden('desc')
        }
    }

    props.setmanageFiltroOrden(orden)
    props.setmanageFiltroCargo(cargo)

    return(
        <div className="filtros-container darkGlass">
            <h1 className="tituloCardFiltro bebas3 blanco">
                Cargo
            </h1>
            <div className="opcionesFiltro manrope5 blanco">
                <div class="contenedorRadioButtons">
                    <input type="radio" name="selectCargo" id="opcion-1" onChange={manageFiltroCargo} defaultChecked/>
                    <input type="radio" name="selectCargo" id="opcion-2" onChange={manageFiltroCargo}/>
                    <input type="radio" name="selectCargo" id="opcion-3" onChange={manageFiltroCargo}/>
                    <input type="radio" name="selectCargo" id="opcion-4" onChange={manageFiltroCargo}/>
                    <label for="opcion-1" class="opcion opcion-1">
                        <div class="dot"></div>
                        <div className="espacioFiltros"></div>
                        <span>Todos</span>
                    </label>
                    <label for="opcion-2" class="opcion opcion-2">
                        <div class="dot"></div>
                        <div className="espacioFiltros"></div>
                        <span>Operador</span>
                    </label>
                    <label for="opcion-3" class="opcion opcion-3">
                        <div class="dot"></div>
                        <div className="espacioFiltros"></div>
                        <span>Receptor</span>
                    </label>
                    <label for="opcion-4" class="opcion opcion-4">
                        <div class="dot"></div>
                        <div className="espacioFiltros"></div>
                        <span>Coordinador de tráfico</span>
                    </label>
                </div>
            </div>
            <h1 className="tituloCardFiltro bebas3 blanco">
                Orden
            </h1>
            <div className="opcionesFiltro manrope5 blanco">
                <div class="contenedorRadioButtons">
                    <input type="radio" name="selectOrden" id="opcion-5" onChange={manageFiltroOrden} defaultChecked/>
                    <input type="radio" name="selectOrden" id="opcion-6" onChange={manageFiltroOrden}/>
                    <label for="opcion-5" class="opcion opcion-5">
                        <div class="dot"></div>
                        <div className="espacioFiltros"></div>
                        <span>A - Z</span>
                    </label>
                    <label for="opcion-6" class="opcion opcion-6">
                        <div class="dot"></div>
                        <div className="espacioFiltros"></div>
                        <span>Z - A</span>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default FiltroUsuarios;