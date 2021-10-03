import React,{useState} from 'react'
import '../styles/general.css';
import '../styles/inputs.css';
import '../styles/botones.css';
import '../styles/InputBusqueda.css';

function InputBusqueda(props) {

    const [ querying, setQuerying ] = useState('');

    function handleChange(event) {
        setQuerying(event.target.value)
    }

    function handleQuery(event) {
        event.preventDefault();
        props.setQueryInput(querying)
    }

    return (
        <div className="inputBusqueda-container inputBusqueda ">
            <form onSubmit={handleQuery}>
                <input type="text" className="input-busqueda bebas3 blanco" placeholder="Buscar" onChange={handleChange}/>
                <button type= 'submit' className="buttonInputSearch" onClick={handleQuery}><i class="fas fa-search blanco"></i></button>
            </form>
        </div>
    )
}

export default InputBusqueda
