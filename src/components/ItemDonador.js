import React, {useState, useEffect} from 'react'
import Select from 'react-select'
import '../styles/general.css';
import '../styles/botones.css';
import '../styles/formularios.css';

function ItemDonador(props) {

    const [ thisItemValue, setThisItemValue ] = useState(0)
    var [donadorVisibility, setDonadorVisibility] = useState("visible")
    const [selectValue, setSelectValue] = useState('')
    const indiceSelect = props.indiceSelect //Este useState almacena el índice del valor que se almacenará
    let indiceInmutable = indiceSelect
    const [ arrIndices, setArrIndices ] = useState(props.donadoresExtraSeleccion)
    const [ indiceItem, setIndiceItem ] = useState(indiceInmutable)
    
    const options = props.opcionesSelect

    useEffect(() => {
        setArrIndices(donadores => [indiceSelect])
        props.donadoresExtraSeleccion.push([indiceSelect])
        setThisItemValue(props.defaultValue.value)
    }, [])

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

    function hideDonador(event){
        setDonadorVisibility("hidden");
        props.seleccionDonadoresEliminar.push(thisItemValue)
        console.log(props.seleccionDonadoresEliminar)
        props.setFormStatus('dirty')
    }

    const handleSelectChange = selectedOption => {
        props.seleccionDonadoresPost.push(selectedOption.value)
        props.seleccionDonadoresEliminar.push(thisItemValue)
        console.log("ELIMINAR")
        console.log(props.seleccionDonadoresEliminar)
        setThisItemValue(selectedOption.value)
        console.log("POST")
        console.log(props.seleccionDonadoresPost)
        let { label, value } = selectedOption
        if(props.donadorValues.indexOf(value) == -1){
            props.donadorValues.push(value);
        }
        setSelectValue(value);
        for(let a = 0; a < props.donadoresExtraSeleccion.length; a++){
            if(props.donadoresExtraSeleccion[a][0] === indiceSelect) {
                props.donadoresExtraSeleccion[a].push(value)
            } 
        }
        props.setFormStatus('dirty')
    }
    
    if (donadorVisibility === "visible") {
    return (
        <div className="item-formulario">
            <label htmlFor="donador" className="input-label bebas4">Punto de recolección / Donador*</label> 
            <div className="item-donador"> 
                <Select name="donador" id="select-donador" placeholder ="Seleccione un donador*" options={options} styles={customSelectStyles} defaultValue={props.defaultValue} required onChange={handleSelectChange}/> 
                <button className="btnMasGlass" type="button" onClick={hideDonador}><i class="fas fa-minus"></i></button> 
            </div>
        </div>
    )
    } else {
        return (null)
    }
}

export default ItemDonador