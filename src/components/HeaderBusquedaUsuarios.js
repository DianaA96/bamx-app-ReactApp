import React,{useState} from 'react'
import FiltroUsuarios from './FiltroUsuarios';
import '../styles/HeaderBusqueda.css';
import '../styles/general.css';
import '../styles/glass.css';
import '../styles/inputs.css';
import '../styles/botones.css';
import InputBusqueda from './InputBusqueda';
import CustomLink from './CustomLink';

function HeaderBusquedaUsuarios(props) {
    const [ filtrosVisibility, setFiltrosVisibility] = useState('hidden');
    const [ queryInput, setQueryInput ] = useState('')
    const [ manageFiltroOrden, setmanageFiltroOrden ] = useState('asc')
    const [ manageFiltroCargo, setmanageFiltroCargo ] = useState('')

    function toggleFiltrosVisibility(){
        if(filtrosVisibility=='hidden'){
            setFiltrosVisibility('visible')
        }
        else(
            setFiltrosVisibility('hidden')
        )
       
    }

    props.setQueryInput(queryInput)
    props.setmanageFiltroOrden(manageFiltroOrden)
    props.setmanageFiltroCargo(manageFiltroCargo)

    return (
       <div className="headerBusqueda-container darkGlass">
           <div className="headerBusqueda-top">
                <h1 className="titulo-header bebas1 blanco">Gestionar usuarios</h1>
                <div className="agregar-container">
                    <h3 className="bebas3 blanco">Agregar usuario</h3>
                    <CustomLink tag='button' className='btnMasGlass' to='/agregarUsuario' aria-label="agregar usuario"><i class="fas fa-plus"></i></CustomLink>
                </div>
           </div>
           <div className="headerBusqueda-bottom">
                <InputBusqueda setQueryInput={setQueryInput}></InputBusqueda>
                <div className="headerBusqueda-filtros">
                    <button className="btn-filtros bebas3 blanco" onClick={toggleFiltrosVisibility}>Agregar filtro<i class="fas fa-filter"></i></button>
                    {filtrosVisibility === 'visible' ? <FiltroUsuarios filtrosVisibility = {filtrosVisibility} setFiltrosVisibility={setFiltrosVisibility} setmanageFiltroCargo={setmanageFiltroCargo} setmanageFiltroOrden={setmanageFiltroOrden}></FiltroUsuarios> : null}
                </div>
           </div>
       </div>
    )
}

export default HeaderBusquedaUsuarios