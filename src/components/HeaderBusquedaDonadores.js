import React,{useState, useEffect} from 'react'
import FiltroDonantes from './FiltroDonantes';
import '../styles/HeaderBusqueda.css';
import '../styles/general.css';
import '../styles/glass.css';
import '../styles/inputs.css';
import '../styles/botones.css';
import InputBusqueda from './InputBusqueda';

function HeaderBusquedaDonadores() {
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
                <h1 className="titulo-header bebas1 blanco">Gestionar donadores</h1>
                <div className="agregar-container">
                    <h3 className="bebas3 blanco">Agregar donador</h3>
                    <button className='btnMasGlass'><i class="fas fa-plus"></i></button>
                </div>
           </div>
           <div className="headerBusqueda-bottom">
                <InputBusqueda setQueryInput={setQueryInput}></InputBusqueda>
                <div className="headerBusqueda-filtros">
                    <button className="btn-filtros bebas3 blanco" onClick={toggleFiltrosVisibility}>Agregar filtro<i class="fas fa-filter"></i></button>
                    {filtrosVisibility === 'visible' ? <FiltroDonantes filtrosVisibility = {filtrosVisibility} setFiltrosVisibility={setFiltrosVisibility}></FiltroDonantes> : null}
                </div>
           </div>
       </div>
    )
}

export default HeaderBusquedaDonadores