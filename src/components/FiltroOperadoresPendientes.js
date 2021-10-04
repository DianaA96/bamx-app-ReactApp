import React from 'react'
import Select from 'react-select'
import '../styles/filtros.css';
import '../styles/general.css';
import '../styles/FiltroAsignarRutas.css'

function FiltroOperadoresPendientes() {
    return (
        <div className="filtros-container darkGlass">
            <form action="" className="formFiltro">
                <div className="opcionesFiltro manrope5 blanco">
                    <p className="bebas3 blanco">Orden</p>
                    <div class="contenedorRadioButtons">
                        <input type="radio" name="select" id="opcion-1" checked/>
                        <input type="radio" name="select" id="opcion-2"/>
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
