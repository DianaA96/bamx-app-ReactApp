import React from "react";
import '../styles/general.css';
import '../styles/glass.css';
import '../styles/filtros.css';
import '../styles/FiltroAsignarRutas.css';

function FiltroUsuarios() {
    return(
        <div className="filtros-container darkGlass">
            <h1 className="tituloCardFiltro bebas3 blanco">
                Cargo
            </h1>
            <div className="opcionesFiltro manrope5 blanco">
                <div class="contenedorRadioButtons">
                    <input type="radio" name="select" id="opcion-1"/>
                    <input type="radio" name="select" id="opcion-2"/>
                    <input type="radio" name="select" id="opcion-3"/>
                    <input type="radio" name="select" id="opcion-4"/>
                    <label for="opcion-1" class="opcion opcion-1">
                        <div class="dot"></div>
                        <div className="espacioMenuPrincipal"></div>
                        <span>Todos</span>
                    </label>
                    <label for="opcion-2" class="opcion opcion-2">
                        <div class="dot"></div>
                        <div className="espacioMenuPrincipal"></div>
                        <span>Operador</span>
                    </label>
                    <label for="opcion-3" class="opcion opcion-3">
                        <div class="dot"></div>
                        <div className="espacioMenuPrincipal"></div>
                        <span>Receptor</span>
                    </label>
                    <label for="opcion-4" class="opcion opcion-4">
                        <div class="dot"></div>
                        <div className="espacioMenuPrincipal"></div>
                        <span>Coordinador de tráfico</span>
                    </label>
                </div>
            </div>
            <h1 className="tituloCardFiltro bebas3 blanco">
                Orden
            </h1>
            <div className="opcionesFiltro manrope5 blanco">
                <div class="contenedorRadioButtons">
                    <input type="radio" name="select" id="opcion-1"/>
                    <input type="radio" name="select" id="opcion-2"/>
                    <label for="opcion-1" class="opcion opcion-1">
                        <div class="dot"></div>
                        <div className="espacioMenuPrincipal"></div>
                        <span>A - Z</span>
                    </label>
                    <label for="opcion-2" class="opcion opcion-2">
                        <div class="dot"></div>
                        <div className="espacioMenuPrincipal"></div>
                        <span>Z - A</span>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default FiltroUsuarios;