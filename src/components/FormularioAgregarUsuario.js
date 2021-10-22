import React, {useState} from 'react'
import Select from 'react-select'
import '../styles/formularios.css';
import '../styles/general.css';
import '../styles/glass.css';
import '../styles/inputs.css';
import '../styles/botones.css';

function FormularioAgregarUsuario(props) {

    const [selectValue, setSelectValue] = useState('')
   
    const options = [
        { value: 'Operador', label: 'Operador' },
        { value: 'Coordinador de tráfico', label: 'Coordinador de tráfico' },
        { value: 'Receptor', label: 'Receptor' },
        { value: 'Administrador', label: 'Administrador' }
    ]

    const optionsBodega = [
        { value: '1', label: 'Banco de Alimentos de Cuernavaca' },
        { value: '2', label: 'Banco de Alimentos de Temixco' },
        { value: '3', label: 'Banco de Alimentos de Jiutepec' },
        { value: '4', label: 'Banco de Alimentos Zapata' },
        { value: '5', label: 'Bodega Tlahuapan' },
        { value: '6', label: 'Bodega refrigerados' },
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

    function handleChange(event){
        let newUser = {
            ...props.user,
            [event.target.name]: event.target.value,
        };

        props.setUser(newUser)
    }

    const handleSelectChange = selectedOption => {
        let { label, value } = selectedOption
        setSelectValue(value);
        props.setCargo(value);
    }

    const handleSelectBodegaChange = selectedOption => {
        let { label, value } = selectedOption
        props.setBodega(value);
    }

    function showModal(event){
        event.preventDefault();
        props.setModalConfirmacionVisibility(true)
    }

    return (
        <div className="Formulario-container lightGlass">
            <form action="" className="formulario" onSubmit={showModal}>
                <div className="item-formulario">
                    <label htmlFor="nombre" className="input-label bebas4">Nombre Completo*</label>
                    <input type="text" className="inputDarkGlass manrope5" required name="nombre" placeholder="Nombre(s)" onChange={handleChange}/>
                </div>
                <div className="formulario-col-2">
                    <input type="text" className="inputDarkGlass manrope5" required name="apellidoP" placeholder="Apellido Paterno" onChange={handleChange}/>
                    <input type="text" className="inputDarkGlass manrope5" name="apellidoM" placeholder="Apellido Materno" onChange={handleChange}/>
                </div>
                <div className="item-formulario">
                    <label htmlFor="nombreUsuario" className="input-label bebas4">Nombre de usuario*</label>
                    <input type="text" className="inputDarkGlass manrope5" required name="nombreUsuario" placeholder="Ej. SJHD782731" onChange={handleChange}/>
                </div>
                <div className="item-formulario">
                    <label htmlFor="telefono" className="input-label bebas4">Número de teléfono*</label>
                    <input type="text" className="inputDarkGlass manrope5" minLength="10" maxLength='10' required name="telefono" placeholder="Número a 10 dígitos" onChange={handleChange}/>
                </div>
                <div className="item-formulario">
                    <label htmlFor="email" className="input-label bebas4">Correo electrónico*</label>
                    <input type="email" className="inputDarkGlass manrope5" required name="email" placeholder="ejemplo@correo.com" onChange={handleChange}/>
                </div>
                <div className="item-formulario">
                    <label htmlFor="contrasena" className="input-label bebas4">Contraseña*</label>
                    <input type="password" className="inputDarkGlass manrope5" minLength="7" required name="contrasena" placeholder="Mínimo 7 caracteres. Números y letras." onChange={handleChange}/>
                </div>
                <div className="item-formulario espacio-extra">
                    <label htmlFor="rolUsuario" className="input-label bebas4">Cargo en la organización*</label>
                    <Select name="rolUsuario" id="select-rol" placeholder = "Selecciona una opción" options={options} styles={customSelectStyles} required  onChange = {handleSelectChange}/>
                </div>


                {selectValue ==='Operador' ? <div className="item-formulario">
                    <label htmlFor="numLicencia" className="input-label bebas4">Número de licencia de conducir*</label>
                    <input type="text" className="inputDarkGlass manrope5" required name="licencia" placeholder="No. de licencia a n caracteres" onChange={handleChange}/>
                </div>: null}

                {selectValue ==='Operador' ? <div className="item-formulario espacio-extra">
                    <label htmlFor="vencimientoLicencia" className="input-label bebas4">Fecha de vencimiento de la licencia*</label>
                    <input type="date" className="inputDarkGlass manrope5" required name="vencimientoLicencia" placeholder="Seleccione la fecha" onChange={handleChange}/>
                </div>:null}

                {selectValue === 'Receptor'? <div className="item-formulario espacio-extra">
                    <label htmlFor="bodega" className="input-label bebas4">Bodega*</label>
                    <Select name="bodega" id="select-bodega" placeholder = "Selecciona una bodega" options={optionsBodega} styles={customSelectStyles} required onChange={handleSelectBodegaChange}/>
                </div> : null }

                <button className="btnVerde bebas2 blanco btn-formulario" type="submit">Guardar</button>
            </form>
        </div>
    )
}

export default FormularioAgregarUsuario