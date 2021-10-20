import React,{useState} from 'react'
import Select from 'react-select'
import '../styles/formularios.css';
import '../styles/general.css';
import '../styles/glass.css';
import '../styles/inputs.css';
import '../styles/botones.css';

function FormularioAgregarDonador(props) {

    

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
        singleValue: base =>({
            ...base,
            color: "#F7F7F7"
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
        singleValue: base => ({
            ...base,
            color: "#F7F7F7",
        }),
        input: base => ({
            ...base,
            color: "#F7F7F7",
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


    const handleSelectChange = selectedOption => {
        let { label, value } = selectedOption
        props.setTipoDonador(label);
    }

    function handleChange(event){
        let newDonor = {
            ...props.donor,
            [event.target.name]: event.target.value,
        };

        props.setDonor(newDonor)
    }


    function showModal(event){
        event.preventDefault();
        props.setModalConfirmacionVisibility(true)
    }


    return (
        <div className="Formulario-container lightGlass">
            <form action="" className="formulario">
                <div className="item-formulario">
                    <label htmlFor="nombre" className="input-label bebas4">Denominación del establecimiento*</label>
                    <input type="text" className="inputDarkGlass manrope5" required name="nombre" placeholder="Nombre" onChange={handleChange}/>
                </div>
                <div className="item-formulario">
                    <label htmlFor="determinante" className="input-label bebas4">Determinante*</label>
                    <input type="text" className="inputDarkGlass manrope5" required name="determinante" placeholder="Ej.7827" onChange={handleChange}/>
                </div>
               
                <div className="item-formulario">
                    <label htmlFor="calle" className="input-label bebas4">Dirección*</label>
                    <input type="text" className="inputDarkGlass manrope5" required name="calle" placeholder="Calle" onChange={handleChange}/>
                </div>

                <div className="formulario-col-2">
                    <input type="text" className="inputDarkGlass manrope5" required name="numExterior" placeholder="Num. Exterior" onChange={handleChange}/>
                    <input type="text" className="inputDarkGlass manrope5" required name="colonia" placeholder="Colonia" onChange={handleChange}/>
                </div>

                <div className="formulario-col-2">
                    <input type="text" className="inputDarkGlass manrope5" required name="municipio" placeholder="Municipio" onChange={handleChange}/>
                    <input type="text" className="inputDarkGlass manrope5" required name="cp" placeholder="Código Postal" onChange={handleChange}/>
                </div>

                <div className="item-formulario">
                    <input type="text" className="inputDarkGlass manrope5" required name="estado" placeholder="Estado" onChange={handleChange}/>
                </div>

                <div className="item-formulario">
                    <label htmlFor="telefono" className="input-label bebas4">Teléfono de contacto*</label>
                    <input type="text" className="inputDarkGlass manrope5"  name="telefono" placeholder="Número a 10 dígitos" onChange={handleChange}/>
                </div>
                <div className="item-formulario">
                    <label htmlFor="correo" className="input-label bebas4">Correo electrónico*</label>
                    <input type="text" className="inputDarkGlass manrope5" name="correo" placeholder="Ingrese el correo electrónico" onChange={handleChange}/>
                </div>
                <div className="item-formulario espacio-extra">
                    <label htmlFor="tipo" className="input-label bebas4">Tipo*</label>
                    <Select name="tipo" id="select-tipoDonador" placeholder = "Seleccione el tipo de donador*" options={options} styles={customSelectStyles} required onChange={handleSelectChange}/>
                </div>
                <button className="btnNaranja bebas2 blanco btn-formulario" onClick={showModal}>Guardar</button>
            </form>
        </div>
    )
}

export default FormularioAgregarDonador
