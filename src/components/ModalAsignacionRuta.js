import React , { useState } from 'react'
import Select from 'react-select'
import ItemDonador from './ItemDonador';
import styled, { keyframes } from "styled-components";
import { fadeInDownBig } from 'react-animations'
import axios from 'axios';
import CustomLink from './CustomLink';
import '../styles/formularios.css';
import '../styles/general.css';
import '../styles/glass.css';
import '../styles/inputs.css';
import '../styles/botones.css';
import '../styles/ModalAsignacionRuta.css';
import '../styles/ModalDetallesRuta.css';

    const BounceInAnimation = keyframes`${fadeInDownBig}`;
    const BounceInDiv = styled.div`
        backdrop-filter: blur( 20px );
        border-radius: 25px;
        -webkit-backdrop-filter: blur( 20px );
        animation: 1 0.5s ${BounceInAnimation};
    `;

    //Variable que almacena los valores de los inputs seleccionados mediante item donador
    let donadoresExtraSeleccion = []

    function ModalAsignacionRuta(props) {

    const [donorValues, setDonorValues] = useState([1])
    const [ status, setStatus ] = useState('idle')
    const [ formStatus, setFormStatus ] = useState('pristine')
    const [ selectRutaValue, setSelectRutaValue ] = useState('')
    const [ selectUnidadValue, setSelectUnidadValue ] = useState('')
    const [ seleccionDonadoresPost, setSeleccionDonadoresPost ] = useState([])
    const [ seleccionDonadoresEliminar, setSeleccionDonadoresEliminar ] = useState([])

    function enviarDatosAsignacion(event) {
        
        event.preventDefault()
        setStatus('loading')

        let pr = seleccionDonadoresPost
        event.preventDefault()
        for(let b = 0; b < seleccionDonadoresEliminar.length; b++) {
            if(pr.indexOf(seleccionDonadoresEliminar[b]) === -1) {
                pr.splice(pr.indexOf(seleccionDonadoresEliminar[b]), 0)
            } else {
                pr.splice(pr.indexOf(seleccionDonadoresEliminar[b]), 1)
            }
        }

        let idDriver = props.operadorId
        let idRoute = selectRutaValue
        let idVehicle = selectUnidadValue
        let donors = pr

        axios({
            method: 'post',
            url: 'http://localhost:5000/routes/assignroute',
            data: {body:{idDriver, idRoute, idVehicle, donors}},
            headers: {'Content-Type': 'application/json'}
            }
        )
        .then((result)=>{
            alert('Ruta registrada correctamente');
            props.setModalVisibility(false)
        })
        .catch((err) => {
            alert(err)
        })
    }

    const optionsRutas = [
        ...props.rutas 
    ]

    const optionsUnidades = [
        ...props.unidades
    ]

    const donadorValues = [];
    
    var [donadores, setDonadores] = useState(1);

    function addInput(){
        setDonadores(donadores=donadores+1);
    }

    function hideModal(){
        props.setModalVisibility(false)
    }

    const handleSelectRutaChange = selectedOption => {
        let { label, value } = selectedOption
        setSelectRutaValue(value);
        console.log(selectRutaValue)
    }

    const handleSelectUnidadChange = selectedOption => {
        let { label, value } = selectedOption
        setSelectUnidadValue(value);
        console.log(selectUnidadValue)
    }

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

    return (
        <div className="modal-overlay">
            <BounceInDiv>
                <div className="Formulario-container  darkGlass">
                    <button className="btn-cerrar" onClick={hideModal}><i class="fas fa-times-circle colorG100"></i></button>
                    <div className="modal-asig-header">
                        <h1 className="bebas3">Asignar ruta de recolección</h1>
                        <p className="manrope4 bold blanco">{props.operadorNombre}</p>
                        <p className="manrope4 blanco">{props.operadorNUsuario}</p>
                    </div>
                    <form action="" className="formulario">
                        <div className="item-formulario espacio-extra">
                            <label htmlFor="ruta" className="input-label bebas4">Seleccione una ruta de recolección</label>
                            <Select name="ruta" id="select-ruta" placeholder = "Seleccione una opción*" options={optionsRutas} styles={customSelectStyles} onChange={handleSelectRutaChange}/>
                        </div>
                        <h3 className="bebas3 blanco">Recolecciones extraordinarias</h3>
                        {[...Array(donadores)].map((donador, idx) => 
                            <ItemDonador 
                            setDonorValues={setDonorValues} 
                            donadorValues={donadorValues} 
                            opcionesSelect={props.donadoresExtraordinarios} 
                            donadoresExtraSeleccion ={donadoresExtraSeleccion} 
                            indiceSelect ={idx}
                            seleccionDonadoresPost={seleccionDonadoresPost}
                            defaultValue={{value: 0, label: 'Elija una opción'}}
                            setFormStatus={setFormStatus}
                            seleccionDonadoresEliminar={seleccionDonadoresEliminar}
                            ></ItemDonador>
                        )}
                        <div className="agregar-inputDonador espacio-extra">
                            <button className="btnMasGlass" type="button" onClick={addInput}><i class="fas fa-plus"></i></button>
                            <p className="bebas4">Nuevo Donador</p>
                        </div>
                        <div className="item-formulario espacio-extra">
                            <label htmlFor="unidad" className="input-label bebas4">Unidad</label>
                            <Select name="unidad" id="select-unidad" placeholder = "Unidades" options={optionsUnidades} styles={customSelectStyles} onChange={handleSelectUnidadChange}/>
                        </div>
                        <CustomLink 
                            onClick={enviarDatosAsignacion} 
                            tag='button' 
                            className="btnVerde bebas2 blanco btn-formulario">
                            Guardar
                        </CustomLink>
                    </form>
                </div>
            </BounceInDiv>
        </div>
    )
}

export default ModalAsignacionRuta