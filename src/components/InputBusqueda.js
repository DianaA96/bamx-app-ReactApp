import React from 'react'
import '../styles/general.css';
import '../styles/inputs.css';
import '../styles/botones.css';
import '../styles/InputBusqueda.css';

function InputBusqueda(props) {

    function handleChange(event) {
        let stringQuery = `${event.target.value}`
        props.setQueryInput(stringQuery)
    }

    return (
        <div className="inputBusqueda-container inputBusqueda ">
            <form>
                <input type="text" className="input-busqueda bebas3 blanco" placeholder="Buscar" onChange={handleChange}/>
                <button type= 'submit' className="buttonInputSearch" aria-label="buscar"><i class="fas fa-search blanco"></i></button>
            </form>
        </div>
    )
}

export default InputBusqueda