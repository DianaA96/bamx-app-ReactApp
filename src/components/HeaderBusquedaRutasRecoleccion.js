import React,{useState, useEffect} from 'react'
import Moment from 'react-moment';
import 'moment/locale/es-mx';
import FiltroOperadoresPendientes from './FiltroOperadoresPendientes';
import '../styles/HeaderBusqueda.css';
import '../styles/general.css';
import '../styles/glass.css';
import '../styles/inputs.css';
import '../styles/botones.css';
import InputBusqueda from './InputBusqueda';

function HeaderBusquedaRutasRecoleccion(props) {
    
    const [ filtrosVisibility, setFiltrosVisibility] = useState('hidden');
    const [ manageFiltroOrden, setmanageFiltroOrden ] = useState('asc')
    
    function toggleFiltrosVisibility(){
        if(filtrosVisibility=='hidden'){
            setFiltrosVisibility('visible')
        }
        else(
            setFiltrosVisibility('hidden')
        )
       
    }

    props.setmanageFiltroOrden(manageFiltroOrden)

    return (
       <div className="headerBusqueda-container darkGlass">
           <div className="headerBusqueda-top">
                <h1 className="titulo-header bebas1 blanco">Asignar rutas de recolección</h1>
                <p className="manrope5 blanco"><Moment format="LLL" locale="es-mx"></Moment></p>
           </div>
           <div className="headerBusqueda-bottom">
                <InputBusqueda setQueryInput={props.setQueryInput}></InputBusqueda>
                <div className="headerBusqueda-filtros">
                    <button className="btn-filtros bebas3 blanco" onClick={toggleFiltrosVisibility}>Agregar filtro<i class="fas fa-filter"></i></button>
                    {filtrosVisibility === 'visible' ? <FiltroOperadoresPendientes filtrosVisibility = {filtrosVisibility} setFiltrosVisibility={setFiltrosVisibility} setmanageFiltroOrden={setmanageFiltroOrden}></FiltroOperadoresPendientes> : null}
                </div>
           </div>
       </div>
    )
}

export default HeaderBusquedaRutasRecoleccion
