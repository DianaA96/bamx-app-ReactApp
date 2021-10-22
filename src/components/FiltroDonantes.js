import React, { useState } from "react";
import '../styles/general.css';
import '../styles/glass.css';
import '../styles/filtros.css';
import '../styles/FiltroAsignarRutas.css';

function FiltroDonantes(props) {

    const [ tipo, setTipo ] = useState('')
    const [ orden, setOrden ] = useState('asc')

    function manageFiltroTipo(event) {
        if(event.target.id === "opcion-1"){
            setTipo('')
        }
        else if (event.target.id === "opcion-2"){
            setTipo('recurrente')
        }
        else if (event.target.id === "opcion-3"){
            setTipo('extraordinario')
        }
        else if (event.target.id === "opcion-4"){
            setTipo('unico')
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

    props.setManageFiltroTipo(tipo)
    props.setManageFiltroOrden(orden)

    return(
        <div className="filtros-container darkGlass">
            <h1 className="tituloCardFiltro bebas3 blanco">
                Tipo
            </h1>
            <div className="opcionesFiltro manrope5 blanco">
                <div class="contenedorRadioButtons">
                    <input type="radio" name="selectTipo" id="opcion-1" onChange={manageFiltroTipo} defaultChecked/>
                    <input type="radio" name="selectTipo" id="opcion-2" onChange={manageFiltroTipo}/>
                    <input type="radio" name="selectTipo" id="opcion-3" onChange={manageFiltroTipo}/>
                    <input type="radio" name="selectTipo" id="opcion-4" onChange={manageFiltroTipo}/>
                    <label for="opcion-1" class="opcion opcion-1">
                        <div class="dot"></div>
                        <div className="espacioMenuPrincipal"></div>
                        <span>Todos</span>
                    </label>
                    <label for="opcion-2" class="opcion opcion-2">
                        <div class="dot"></div>
                        <div className="espacioMenuPrincipal"></div>
                        <span>Recurrente</span>
                    </label>
                    <label for="opcion-3" class="opcion opcion-3">
                        <div class="dot"></div>
                        <div className="espacioMenuPrincipal"></div>
                        <span>Extraordinario</span>
                    </label>
                    <label for="opcion-4" class="opcion opcion-4">
                        <div class="dot"></div>
                        <div className="espacioMenuPrincipal"></div>
                        <span>Único</span>
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
                        <div className="espacioMenuPrincipal"></div>
                        <span>A - Z</span>
                    </label>
                    <label for="opcion-6" class="opcion opcion-6">
                        <div class="dot"></div>
                        <div className="espacioMenuPrincipal"></div>
                        <span>Z - A</span>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default FiltroDonantes;