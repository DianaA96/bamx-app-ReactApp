import React from 'react'
import Select from 'react-select'
import '../styles/filtros.css';
import '../styles/general.css';
import '../styles/FiltroAsignarRutas.css'

function FiltroRutas() {

    const options = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
        { value: '6', label: '6' }
      ]

    const customSelectStyles = {
        control: (base, state) => ({
            ...base,
            background: "rgba(49, 48, 48, 0.46)",
            backdropFilter: "blur( 30px )",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: state.isFocused ? null : null,
            padding: "0.4em 1em",
            borderRadius: "25em",
            fontSize: "18px",
            color: "#F7F7F7",
            fontFamily: "Manrope",
            textAlign: "start"
          }),
        placeholder: base =>({
            ...base,
            color: "#F7F7F7",
            opacity: "0.5"
        }),
        menu: base => ({
            ...base,
            borderRadius: "25px",
            background: "#F7F7F7",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            backdropFilter: "blur( 80px )",
            color: "#1A1A1A",
            fontSize: "18px",
            textAlign: "start",
            fontFamily: "Manrope",
        
        }),
        menuList: base => ({
            ...base,
            borderRadius: "25px",
        }),
        dropdownIndicator: base => ({
            ...base,
            color: "#F7F7F7"
        }),
        option: (base,{data, isDisabled, isFocused,isSelected}) => ({
            ...base,
            color: "#1A1A1A",
            backgroundColor: isDisabled ? undefined: isSelected,
            "&:hover ": {
                background: "rgba(49, 48, 48, 0.46)",
                backdropFilter: "blur(80px)"
              },
        }),
        container: base => ({
            ...base,
            "@media only screen and (max-width: 576px)": {
                ...base["@media only screen and (max-width: 576px)"],
                width:"100%",
        },
        })
    }

    return (
        <div className="filtros-container darkGlass">
            <form action="" className="formFiltro">
                <div className="filtros-item">
                    <p className="bebas3 blanco">Número de puntos de recolección</p>
                    <Select name="numPuntosRecoleccion" id="select-puntosRecoleccion" placeholder = "Seleccione una opción*" options={options} styles={customSelectStyles}/>
                </div>
                <div className="opcionesFiltro manrope5 blanco">
                    <p className="bebas3 blanco">Orden</p>
                    <div class="contenedorRadioButtons">
                        <input type="radio" name="select" id="opcion-1" checked/>
                        <input type="radio" name="select" id="opcion-2"/>
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
                            <span>No. de donadores (Asc.)</span>
                        </label>
                        <label for="opcion-4" class="opcion opcion-4">
                            <div class="dot"></div>
                            <div className="espacioFiltros"></div>
                            <span>No. de donadores (Desc.)</span>
                        </label>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FiltroRutas
