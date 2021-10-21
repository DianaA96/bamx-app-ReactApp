import React,{useState} from 'react'
import Select from 'react-select'
import '../styles/formularios.css';
import '../styles/general.css';
import '../styles/glass.css';
import '../styles/inputs.css';
import '../styles/botones.css';

function FormularioEditarUsuario(props) {

    const [selectValue, setSelectValue] = useState('')
    

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
            fontSize: "18px",
            textAlign: "start",
            fontFamily: "Manrope",
        
        }),
        menuList: base => ({
            ...base,
            borderRadius: "25px",
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


    const handleSelectBodegaChange = selectedOption => {
        let { label, value } = selectedOption
        props.setBodega(value);
    }

    function handleChange(event){
        let newUser = {
            ...props.user,
            [event.target.name]: event.target.value,
        };

        props.setUser(newUser)
    }


    function showModal(event){
        event.preventDefault()
        props.setModalConfirmacionVisibility(true)
    }

    return (
        <div className="Formulario-container lightGlass">
            <form action="" className="formulario" onSubmit={showModal}>
                <div className="item-formulario">
                    <label htmlFor="nombre" className="input-label bebas4">Nombre Completo*</label>
                    <input type="text" className="inputDarkGlass manrope5" required name="nombre" placeholder="Nombre(s)" defaultValue ={props.user.nombre} onChange={handleChange}/>
                </div>
                <div className="formulario-col-2">
                    <input type="text" className="inputDarkGlass manrope5" required name="apellidoP" placeholder="Apellido Paterno" defaultValue ={props.user.apellidoP} onChange={handleChange}/>
                    <input type="text" className="inputDarkGlass manrope5" name="apellidoM" placeholder="Apellido Materno" defaultValue ={props.user.apellidoM} onChange={handleChange}/>
                </div>
                <div className="item-formulario">
                    <label htmlFor="telefono" className="input-label bebas4">Número de teléfono*</label>
                    <input type="text" className="inputDarkGlass manrope5" required name="numTelefono" placeholder="Número a 10 dígitos" defaultValue ={props.user.telefono} onChange={handleChange}/>
                </div>
                <div className="item-formulario">
                    <label htmlFor="email" className="input-label bebas4">Correo electrónico*</label>
                    <input type="email" className="inputDarkGlass manrope5" required name="email" placeholder="ejemplo@correo.com" defaultValue ={props.user.email} onChange={handleChange}/>
                </div>
                <div className="item-formulario">
                    <label htmlFor="contrasena" className="input-label bebas4">Contraseña*</label>
                    <input type="password" className="inputDarkGlass manrope5" required name="contrasena" placeholder="Mínimo 7 caracteres. Números y letras."  onChange={handleChange}/>
                </div>
               
                {props.user.idDriver != null ? <div className="item-formulario">
                    <label htmlFor="numLicencia" className="input-label bebas4">Número de licencia de conducir*</label>
                    <input type="text" className="inputDarkGlass manrope5" required name="numLicencia" placeholder="No. de licencia a n caracteres" defaultValue ={props.user.licencia} onChange={handleChange}/>
                </div>: null}

                {props.user.idDriver != null ? <div className="item-formulario espacio-extra">
                    <label htmlFor="vencimientoLicencia" className="input-label bebas4">Fecha de vencimiento de la licencia*</label>
                    <input type="date" className="inputDarkGlass manrope5" required name="vencimientoLicencia" placeholder="Seleccione la fecha" defaultValue={props.user.vencimientoLicencia} onChange={handleChange}/>
                </div>:null}

                {props.user.idReceiver != null? <div className="item-formulario espacio-extra">
                    <label htmlFor="bodega" className="input-label bebas4">Bodega*</label>
                    <Select name="bodega" id="select-bodega" placeholder = "Selecciona una bodega" options={optionsBodega} styles={customSelectStyles} required onChange={handleSelectBodegaChange}/>
                </div> : null }


                <button className="btnVerde bebas2 blanco btn-formulario" onClick={showModal}>Guardar</button>
            </form>
        </div>
    )
}

export default FormularioEditarUsuario
