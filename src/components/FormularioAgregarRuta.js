import React , {useState, useEffect} from 'react'
import Select from 'react-select'
import '../styles/formularios.css';
import '../styles/general.css';
import '../styles/glass.css';
import '../styles/inputs.css';
import '../styles/botones.css';

function FormularioAgregarRuta() {

    var [numDonadores, setNumDonadores] = useState(1);

    function addInput(){
        setNumDonadores(numDonadores+1)
    }

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
            background: "rgba(205, 205, 205, 0.41)",
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
            color: "#F7F7F7",
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
        <div className="Formulario-container lightGlass">
            <form action="" className="formulario">
                <div className="item-formulario">
                    <label htmlFor="nombreRuta" className="input-label bebas4">Nombre de la ruta*</label>
                    <input type="text" className="inputDarkGlass manrope5" required name="nombreRuta" placeholder="Nombre"/>
                </div>
                {[...Array(numDonadores)].map((e, i) => 
                    <div className="item-formulario">
                        <label htmlFor="donador" className="input-label bebas4">Punto de recolección / Donador*</label>
                        <Select name="donador" id="select-donador" placeholder = "Seleccione un donador*" options={options} styles={customSelectStyles} required/>
                    </div>
                )}
                <div className="agregar-inputDonador espacio-extra">
                    <button className="btnMasGlass" type="button" onClick={addInput}><i class="fas fa-plus"></i></button>
                    <p className="bebas4">Nuevo Donador</p>
                </div>
                
                <button className="btnVerde bebas2 blanco btn-formulario">Guardar</button>
            </form>
        </div>
    )
}

export default FormularioAgregarRuta
