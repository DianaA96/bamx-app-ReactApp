import React, {useState} from 'react'
import Select from 'react-select'
import '../styles/general.css';
import '../styles/botones.css';
import '../styles/formularios.css';

function ItemDonador() {
    
    var [donadorVisibility, setDonadorVisibility] = useState("visible")

    const options = [
        { value: '321', label: 'Walmart' },
        { value: '3412', label: 'Superama' },
        { value: '9482', label: 'Soriana' }
    ]

    const customSelectStyles = {
        control: (base, state) => ({
            ...base,
            width:"100%",
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
            width:"85%",
        })
    }

    function hideDonador(){
        setDonadorVisibility("hidden");
    }
    if (donadorVisibility === "visible") {
    return (
        <div className="item-formulario">
            <label htmlFor="donador" className="input-label bebas4">Punto de recolección / Donador*</label> 
            <div className="item-donador"> 
                <Select name="donador" id="select-donador" placeholder ="Seleccione un donador*" options={options} styles={customSelectStyles} required/> 
                <button className="btnMasGlass" type="button" onClick={hideDonador}><i class="fas fa-minus"></i></button> 
            </div>
        </div>
    )
    } else {
        return (null)
    }
}

export default ItemDonador
