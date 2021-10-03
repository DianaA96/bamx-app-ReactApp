import React from 'react'
import Select from 'react-select'
import '../styles/filtros.css';
import '../styles/general.css'

function FiltroRutas() {

    const options = [
        { value: 'Recurrente', label: 'Recurrente' },
        { value: 'Extraordinario', label: 'Extraordinario' },
        { value: 'Único', label: 'Único' }
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
                <div className="filtros-item">
                    <p className="bebas3 blanco">Orden</p>
                    <div className="radioBtn-item">
                        <input type="radio" name="ordenFiltroRutas" id="alfAsc" checked/>
                        <label htmlFor="alfAsc" className="manrope5 blanco">A-Z</label>
                    </div>
                    <div className="radioBtn-item">
                        <input type="radio" name="ordenFiltroRutas" id="alfDesc" />
                        <label htmlFor="alfDesc" className="manrope5 blanco">Z-A</label>
                    </div>
                    <div className="radioBtn-item">
                        <input type="radio" name="ordenFiltroRutas" id="puntosDesc" />
                        <label htmlFor="puntosDesc" className="manrope5 blanco">Número de puntos (Desc.)</label>
                    </div>
                    <div className="radioBtn-item">
                        <input type="radio" name="ordenFiltroRutas" id="puntosAsc" />
                        <label htmlFor="puntosAsc" className="manrope5 blanco">Número de puntos (Asc.)</label>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FiltroRutas
