import React , {useState, useEffect} from 'react'

import '../styles/formularios.css';
import '../styles/general.css';
import '../styles/glass.css';
import '../styles/inputs.css';
import '../styles/botones.css';
import ItemDonador from './ItemDonador';

function FormularioAgregarRuta(props) {

    const [donorValues, setDonorValues] = useState([1])

    const donadorValues = [];
    var [donadores, setDonadores] = useState(1);

    function addInput(){
        setDonadores(donadores=donadores+1);
    }

    function handleSubmit(){
        props.setNombreRuta()
    }

    return (
        <div className="Formulario-container lightGlass">
            <form action="" className="formulario">
                <div className="item-formulario">
                    <label htmlFor="nombreRuta" className="input-label bebas4">Nombre de la ruta*</label>
                    <input type="text" className="inputDarkGlass manrope5" required name="nombreRuta" placeholder="Nombre"/>
                </div>
                {[...Array(donadores)].map(() => 
                    <ItemDonador setDonorValues={setDonorValues} donadorValues={donadorValues}></ItemDonador>
                )}
                <div className="agregar-inputDonador espacio-extra">
                    <button className="btnMasGlass" type="button" onClick={addInput}><i class="fas fa-plus"></i></button>
                    <p className="bebas4">Nuevo Donador</p>
                </div>
                <button className="btnVerde bebas2 blanco btn-formulario" onClick={handleSubmit}>Guardar</button>
            </form>
        </div>
    )
}

export default FormularioAgregarRuta