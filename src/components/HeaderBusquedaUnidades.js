import React,{useState, useEffect} from 'react'
import FiltroUnidades from './FiltroUnidades';
import '../styles/HeaderBusqueda.css';
import '../styles/general.css';
import '../styles/glass.css';
import '../styles/inputs.css';
import '../styles/botones.css';
import CustomLink from './CustomLink';
import InputBusqueda from './InputBusqueda';

function HeaderBusquedaUnidades() {
    const [ filtrosVisibility, setFiltrosVisibility] = useState('hidden');
    const [ queryInput, setQueryInput ] = useState('')

    function toggleFiltrosVisibility(){
        if(filtrosVisibility=='hidden'){
            setFiltrosVisibility('visible')
        }
        else(
            setFiltrosVisibility('hidden')
        )
       
    }

    return (
       <div className="headerBusqueda-container darkGlass">
           <div className="headerBusqueda-top">
                <h1 className="titulo-header bebas1 blanco">Gestionar unidades</h1>
                <div className="agregar-container">
                    <h3 className="bebas3 blanco">Agregar unidad</h3>
                    <CustomLink tag='button' className='btnMasGlass' to='/agregarUnidad'><i class="fas fa-plus"></i></CustomLink>
                </div>
           </div>
           <div className="headerBusqueda-bottom">
                <InputBusqueda setQueryInput={setQueryInput}></InputBusqueda>
                <div className="headerBusqueda-filtros">
                    <button className="btn-filtros bebas3 blanco" onClick={toggleFiltrosVisibility}>Agregar filtro<i class="fas fa-filter"></i></button>
                    {filtrosVisibility === 'visible' ? <FiltroUnidades filtrosVisibility = {filtrosVisibility} setFiltrosVisibility={setFiltrosVisibility}></FiltroUnidades> : null}
                </div>
           </div>
       </div>
    )
}

export default HeaderBusquedaUnidades
