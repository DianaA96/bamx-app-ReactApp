import React,{ useState, useEffect } from 'react'
import Select from 'react-select'
import '../styles/formularios.css';
import '../styles/general.css';
import '../styles/glass.css';
import '../styles/inputs.css';
import '../styles/botones.css';
import '../styles/FormularioAsignarBodega.css';

function FormularioAsignarBodega(props) {

    var [bodegaVisibility, setBodegaVisibility] = useState("visible")
    const [ formStatus, setFormStatus ] = useState('pristine')
    const [ submitted, setSubmitted ] = useState(false)
    const [ thisFruta, setThisFruta ] = useState(0)
    const [ thisAbarrote, setThisAbarrote ] = useState(0)
    const [ thisPan, setThisPan ] = useState(0)
    const [ thisNoComestible, setThisNoComestible ] = useState(0)
    const [ thisBodega, setThisBodega ] = useState(0)
    const [ thisIsVisible, setThisIsVisible ] = useState(true)
    const [ estiloAlertaInputPan, setEstiloAlertaInputPan ] = useState('')
    const [ estiloAlertaInputAbarrote, setEstiloAlertaInputAbarrote ] = useState('')
    const [ estiloAlertaInputFruta, setEstiloAlertaInputFruta ] = useState('')
    const [ estiloAlertaInputNoComestible, setEstiloAlertaInputNoComestible ] = useState('')

    const options = [
        { value: '1', label: 'Banco de Alimentos de Cuernavaca', isDisabled: (props.itemsBodegasEnabled.indexOf(1) === -1 || submitted === true? true: false) },
        { value: '2', label: 'Banco de Alimentos de Temixco', isDisabled: (props.itemsBodegasEnabled.indexOf(2) === -1 || submitted === true? true: false) },
        { value: '3', label: 'Banco de Alimentos de Jiutepec', isDisabled: (props.itemsBodegasEnabled.indexOf(3) === -1 || submitted === true? true: false) },
        { value: '4', label: 'Banco de Alimentos Zapata', isDisabled: (props.itemsBodegasEnabled.indexOf(4) === -1 || submitted === true? true: false) },
        { value: '5', label: 'Bodega Tlahuapan', isDisabled: (props.itemsBodegasEnabled.indexOf(5) === -1 || submitted === true? true: false) },
        { value: '6', label: 'Bodega Refrigerados', isDisabled: (props.itemsBodegasEnabled.indexOf(6) === -1 || submitted === true? true: false) },
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
        dropdownIndicator: base => ({
            ...base,
            color: "#F7F7F7"
        }),
        singleValue: base => ({
            ...base,
            color: "#F7F7F7",
        }),
        input: base => ({
            ...base,
            color: "#F7F7F7",
        }),
        option: (base,{data, isDisabled, isFocused,isSelected}) => ({
            ...base,
            cursor: isDisabled ? "not-allowed": undefined,
            color: isDisabled ? "gray": "#1A1A1A",
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
        setThisBodega(selectedOption.value)
    }

    function hideBodega(){
        setBodegaVisibility("hidden")
        props.setFruta((props.fruta) + thisFruta)
        props.setPan((props.pan) + thisPan)
        props.setAbarrote((props.abarrote) + thisAbarrote)
        props.setNoComestible((props.noComestible) + thisNoComestible)
        props.entregasEliminar.push({
            "idWarehouse": parseInt(thisBodega),
            "c1": {
                "idCategoria": 1,
                "cantidad": thisPan
            },
            "c2": {
                "idCategoria": 2,
                "cantidad": thisAbarrote
            },
            "c3": {
                "idCategoria": 3,
                "cantidad": thisFruta
            },
            "c4": {
                "idCategoria": 4,
                "cantidad": thisNoComestible
            }
        })
        props.itemsBodegasEnabled.push(parseInt(thisBodega))
        setThisIsVisible(false)
    }

    useEffect(()=>{
       if(thisIsVisible &&props.submitAttempt) {
            props.entregas.push({
                "idWarehouse": parseInt(thisBodega),
                "c1": {
                    "idCategoria": 1,
                    "cantidad": thisPan
                },
                "c2": {
                    "idCategoria": 2,
                    "cantidad": thisAbarrote
                },
                "c3": {
                    "idCategoria": 3,
                    "cantidad": thisFruta
                },
                "c4": {
                    "idCategoria": 4,
                    "cantidad": thisNoComestible
                }
            }
        )}
    },[thisIsVisible && props.submitAttempt])

    function handleSubmitCard(event) {
        event.preventDefault()
        if(props.pan < 0 || props.fruta < 0 || props.abarrote < 0 || props.noComestible < 0) {
            alert('Las cantidades exceden la carga. Verifique la asignación.')
        }
        else if(submitted === false){
            props.setFruta((props.fruta) - (event.target.elements.fruta.value))
            props.setPan((props.pan) - (event.target.elements.pan.value))
            props.setAbarrote((props.abarrote) - (event.target.elements.abarrote.value))
            props.setNoComestible((props.noComestible) - (event.target.noComestible.value))
            setThisFruta(parseInt(event.target.elements.fruta.value))
            setThisPan(parseInt(event.target.elements.pan.value))
            setThisAbarrote(parseInt(event.target.elements.abarrote.value))
            setThisNoComestible(parseInt(event.target.noComestible.value))
            setSubmitted(true)
            props.itemsBodegasEnabled.splice(props.itemsBodegasEnabled.indexOf(parseInt(thisBodega)), 1)
            console.log(props.entregas)
            alert('Asignación de bodega a operador completa. No se podrá editar.')
        }
    }

    function handleChange(event){
        setFormStatus('dirty')
        if(event.target.name === 'pan'){
            if(props.pan - event.target.value < 0 || event.target.value === '' || event.target.value < 0) {
                setEstiloAlertaInputPan('alertaInput')
            }
            else{
                setEstiloAlertaInputPan('')
            }
        }
        else if(event.target.name === 'abarrote'){
            if(props.abarrote - event.target.value < 0 || event.target.value === '' || event.target.value < 0) {
                setEstiloAlertaInputAbarrote('alertaInput')
            }
            else{
                setEstiloAlertaInputAbarrote('')
            }
        }
        else if(event.target.name === 'fruta'){
            if(props.fruta - event.target.value < 0 || event.target.value === '' || event.target.value < 0) {
                setEstiloAlertaInputFruta('alertaInput')
            }
            else{
                setEstiloAlertaInputFruta('')
            }
        }
        else if(event.target.name === 'noComestible'){
            if(props.noComestible - event.target.value < 0 || event.target.value === '' || event.target.value < 0) {
                setEstiloAlertaInputNoComestible('alertaInput')
            }
            else{
                setEstiloAlertaInputNoComestible('')
            }
        }
    }

    if (bodegaVisibility === "visible") {
    return (
        <div className="Formulario-containerBodega lightGlass">
            <div className="container-eliminar">
                <button className="btnMenosGlass" type="button" onClick={hideBodega}><i class="fas fa-minus"></i></button>
            </div>
            <form action="" className="formulario" onSubmit={handleSubmitCard}>
                <div className="item-formulario">
                <label htmlFor="bodegaDestino" className="input-label bebas4">Bodega de destino*</label>
                    <Select name="tipoDonador" id="select-tipoDonador" placeholder = "Seleccione la bodega*" options={options} styles={customSelectStyles} required onChange={handleSelectChange}/>
                </div>
                <div className="tituloFormulario">
                    <h3 className="bebas2">Categorías</h3>
                    <hr className="separadorFormulario" />
                </div>
                <div className="item-formularioBodega">
                    <label htmlFor="fruta" className="input-label bebas4">Fruta y verdura</label>
                    <div className="inputsBodegaEspecial">
                        <input type="number" readOnly={props.fruta===0||submitted?true:false} className={`inputDarkGlass manrope5 ${estiloAlertaInputFruta}`} name="fruta" placeholder="Ingrese la cantidad" defaultValue={0} onChange={handleChange}/>
                        <p className="bebas4">KG.</p>
                    </div>
                </div>
                <div className="item-formularioBodega">
                    <label htmlFor="pan" className="input-label bebas4">Pan</label>
                    <div className="inputsBodegaEspecial">
                        <input type="number" readOnly={props.pan===0||submitted?true:false} className={`inputDarkGlass manrope5 ${estiloAlertaInputPan}`} name="pan" placeholder="Ingrese la cantidad" defaultValue={0} onChange={handleChange}/>
                        <p className="bebas4">KG.</p>
                    </div>
                </div>
                <div className="item-formularioBodega">
                    <label htmlFor="abarrote" className="input-label bebas4">Abarrote</label>
                    <div className="inputsBodegaEspecial">
                        <input type="number" readOnly={props.abarrote===0||submitted?true:false} className={`inputDarkGlass manrope5 ${estiloAlertaInputAbarrote}`} name="abarrote" placeholder="Ingrese la cantidad" defaultValue={0} onChange={handleChange}/>
                        <p className="bebas4">KG.</p>
                    </div>
                </div>
                <div className="item-formularioBodega">
                    <label htmlFor="noComestible" className="input-label bebas4">No comestible</label>
                    <div className="inputsBodegaEspecial">
                        <input type="number" readOnly={props.noComestible===0||submitted?true:false} className={`inputDarkGlass manrope5 ${estiloAlertaInputNoComestible}`} name="noComestible" placeholder="Ingrese la cantidad" defaultValue={0} onChange={handleChange}/>
                        <p className="bebas4">KG.</p>
                    </div>
                </div>            
                {submitted?null:<button type='submit' disabled={formStatus==='pristine'||estiloAlertaInputPan==='alertaInput'||estiloAlertaInputAbarrote==='alertaInput'||estiloAlertaInputNoComestible==='alertaInput'||estiloAlertaInputFruta==='alertaInput'||thisBodega===0?true:false} className="btnVerde bebas2 blanco btn-formularioBodega">{submitted?'Editar':'Guardar'}</button>}
            </form>
        </div>
    )} 
    else {
        return (null)
    }
}

export default FormularioAsignarBodega