import React from 'react'
import Select from 'react-select'
import '../styles/FormularioAgregarUsuario.css';
import '../styles/general.css';
import '../styles/glass.css';
import '../styles/inputs.css';
import '../styles/botones.css';

function FormularioAgregarUsuario() {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
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
        <div className="FormularioAgregarUsuario-container lightGlass">
            <form action="" className="formulario">
                <div className="item-formulario">
                    <label htmlFor="nombreUsuario" className="input-label bebas4">Nombre Completo</label>
                    <input type="text" className="inputDarkGlass manrope5" name="nombreUsuario" placeholder="Nombre(s)"/>
                </div>
                <div className="formulario-col-2">
                    <input type="text" className="inputDarkGlass manrope5" name="apellidoPaterno" placeholder="Apellido Paterno"/>
                    <input type="text" className="inputDarkGlass manrope5" name="apellidoMaterno" placeholder="Apellido Materno"/>
                </div>
                <div className="item-formulario">
                    <label htmlFor="idUsuario" className="input-label bebas4">Número de usuario</label>
                    <input type="text" className="inputDarkGlass manrope5" name="idUsuario" placeholder="Ej. SJHD782731"/>
                </div>
                <div className="item-formulario">
                    <label htmlFor="numTelefono" className="input-label bebas4">Número de teléfono</label>
                    <input type="text" className="inputDarkGlass manrope5" name="numTelefono" placeholder="Número a 10 dígitos"/>
                </div>
                <div className="item-formulario">
                    <label htmlFor="correoElectronico" className="input-label bebas4">Correo electrónico</label>
                    <input type="text" className="inputDarkGlass manrope5" name="correoElectronico" placeholder="ejemplo@correo.com"/>
                </div>
                <div className="item-formulario">
                    <label htmlFor="idUsuario" className="input-label bebas4">Contraseña</label>
                    <input type="password" className="inputDarkGlass manrope5" name="idUsuario" placeholder="Mínimo 7 caracteres. Números y letras."/>
                </div>
                <div className="item-formulario espacio-extra">
                    <label htmlFor="rolUsuario" className="input-label bebas4">Cargo en la organización</label>
                    <Select name="rolUsuario" id="select-rol" placeholder = "Tienda*" options={options} styles={customSelectStyles} required/>
                </div>
                <button className="btnVerde bebas2 blanco btn-formulario">Guardar</button>
            </form>
        </div>
    )
}

export default FormularioAgregarUsuario
