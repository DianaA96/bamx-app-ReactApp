import React , {useState, useEffect} from 'react'

import '../styles/formularios.css';
import '../styles/general.css';
import '../styles/glass.css';
import '../styles/inputs.css';
import '../styles/botones.css';
import ItemDonador from './ItemDonador';


function FormularioAgregarRuta() {
    var n=1;
    var [donadores, setDonadores] = useState(1);
    var [donadorVisibility, setDonadorVisibility] = useState("visible")

    function addInput(){
         setDonadores(donadores=donadores+1);
    }


    return (
        <div className="Formulario-container lightGlass">
            <form action="" className="formulario">
                <div className="item-formulario">
                    <label htmlFor="nombreRuta" className="input-label bebas4">Nombre de la ruta*</label>
                    <input type="text" className="inputDarkGlass manrope5" required name="nombreRuta" placeholder="Nombre"/>
                </div>
                {[...Array(donadores)].map((donador, i) => 
                    <ItemDonador id={i} setDonadorVisibility={setDonadorVisibility}></ItemDonador>
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
