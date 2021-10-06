import React from 'react'
import Select from 'react-select'
import '../styles/formularios.css';
import '../styles/general.css';
import '../styles/glass.css';
import '../styles/inputs.css';
import '../styles/botones.css';
import '../styles/FormularioAsignarBodega.css';

function FormularioAsignarBodega() {

    const options = [
        { value: '1', label: 'Banco de Alimentos de Cuernavaca' },
        { value: '2', label: 'Banco de Alimentos de Temixco' },
        { value: '3', label: 'Banco de Alimentos de Jiutepec' },
        { value: '4', label: 'Banco de Alimentos Zapata' },
        { value: '5', label: 'Bodega Tlahuapan' },
        { value: '6', label: 'Bodega Refrigerados' },
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
            color: "#F7F7F7",
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
        <div className="Formulario-containerBodega lightGlass">
            <form action="" className="formulario">
                <div className="item-formulario">
                <label htmlFor="bodegaDestino" className="input-label bebas4">Bodega de destino*</label>
                    <Select name="tipoDonador" id="select-tipoDonador" placeholder = "Seleccione la bodega*" options={options} styles={customSelectStyles} required/>
                </div>
                <div className="tituloFormulario">
                    <h3 className="bebas2">Categorías</h3>
                    <hr className="separadorFormulario" />
                </div>
                <div className="item-formularioBodega">
                    <label htmlFor="frutaverdura" className="input-label bebas4">Fruta y verdura</label>
                    <div className="inputsBodegaEspecial">
                        <input type="number" className="inputDarkGlass manrope5" name="frutaVerdura" placeholder="Ingrese la cantidad"/>
                        <p className="bebas4">KG.</p>
                    </div>
                </div>
                <div className="item-formularioBodega">
                    <label htmlFor="pan" className="input-label bebas4">Pan</label>
                    <div className="inputsBodegaEspecial">
                        <input type="number" className="inputDarkGlass manrope5" name="pan" placeholder="Ingrese la cantidad"/>
                        <p className="bebas4">KG.</p>
                    </div>
                </div>
                <div className="item-formularioBodega">
                    <label htmlFor="determinante" className="input-label bebas4">Abarrote</label>
                    <div className="inputsBodegaEspecial">
                        <input type="number" className="inputDarkGlass manrope5" name="abarrote" placeholder="Ingrese la cantidad"/>
                        <p className="bebas4">KG.</p>
                    </div>
                </div>
                <div className="item-formularioBodega">
                    <label htmlFor="calle" className="input-label bebas4">No comestible</label>
                    <div className="inputsBodegaEspecial">
                        <input type="number" className="inputDarkGlass manrope5" name="noComestible" placeholder="Ingrese la cantidad"/>
                        <p className="bebas4">KG.</p>
                    </div>
                </div>            
                <button className="btnVerde bebas2 blanco btn-formularioBodega">Editar</button>
            </form>
        </div>
    )
}

export default FormularioAsignarBodega