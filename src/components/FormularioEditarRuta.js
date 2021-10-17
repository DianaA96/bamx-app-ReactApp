import React , {useState, useEffect} from 'react'
import '../styles/formularios.css';
import '../styles/general.css';
import '../styles/glass.css';
import '../styles/inputs.css';
import '../styles/botones.css';
import ItemDonador from './ItemDonador';
import axios from 'axios'
import CustomLink from './CustomLink';

function FormularioEditarRuta(props) {

    const [ status, setStatus ] = useState('idle');
    const [ error, setError ] = useState(null);
    const [ donorValues, setDonorValues ] = useState({})
    const [ ruta, setRuta ] = useState()
    const donadorValues = [];
    var [donadores, setDonadores] = useState(props.ruta.puntosRecoleccion.length);
    const [ seleccionDonadoresPost, setSeleccionDonadoresPost ] = useState([])
    const [ seleccionDonadoresEliminar, setSeleccionDonadoresEliminar ] = useState([])
    const [ nuevaRuta, setNuevaRuta ] = useState({})
    const [ arrIndices, setArrIndices ] = useState([])

    function addInput(){
        setDonadores(donadores = donadores + 1);
        props.ruta.puntosRecoleccion.push({})
    }

    function handleChange(event) {
        let route = {
            [event.target.name]: event.target.value,
        }
        // Hacer que el valor del input cambie aquí
        // Checar endpoint
        setNuevaRuta(route)
    }

    function handleSubmit(event){
        let pr = seleccionDonadoresPost
        event.preventDefault()
        for(let b = 0; b < seleccionDonadoresEliminar.length; b++) {
            if(pr.indexOf(seleccionDonadoresEliminar[b]) === -1) {
                pr.splice(pr.indexOf(seleccionDonadoresEliminar[b]), 0)
            } else {
                pr.splice(pr.indexOf(seleccionDonadoresEliminar[b]), 1)
            }
        }
        console.log(pr)
        axios({
            method: 'patch',
            url: `http://localhost:5000/routes/${props.idRuta}/donors/`,
            data: {route: {...nuevaRuta, pr}},
            headers: {'Content-Type': 'application/json'}
            }
        )
        .then((result)=>{
            alert('Ruta registrada correctamente');
        })
        .catch((err) => {
            alert(err)
        })
        //props.setNombreRuta()
    }

    useEffect(()=>{
        setStatus('loading')
        axios.get(`http://localhost:5000/donors/donorsselect`)
          .then((result)=>{
            setDonorValues(result.data.donadores)
            console.log(donorValues)
            setStatus('resolved')
          })
          .catch((error)=>{
            setError(error)
            setStatus('error')
          })
    },[])

    return (
        <div className="Formulario-container lightGlass">
            <form action="" className="formulario">
                <div className="item-formulario">
                    <label htmlFor="nombreRuta" className="input-label bebas4">Nombre de la ruta</label>
                    <input 
                        type="text" 
                        className="inputDarkGlass manrope5" 
                        required 
                        name="nombre" 
                        placeholder='' 
                        onChange={handleChange} 
                        value={props.ruta.nombreRuta}/>
                </div>
                {props.ruta.puntosRecoleccion.map((item, idx) => 
                    <ItemDonador 
                    setDonorValues={setDonorValues} 
                    opcionesSelect={donorValues} 
                    donadorValues={donadorValues}
                    defaultValue={{value: item.nombre, label: item.nombre}}
                    seleccionDonadoresPost={seleccionDonadoresPost}
                    seleccionDonadoresEliminar={seleccionDonadoresEliminar}
                    arrIndices={arrIndices} 
                    setArrIndices={setArrIndices}
                    donadoresExtraSeleccion={[]}></ItemDonador>
                )}
                <div className="agregar-inputDonador espacio-extra">
                    <button className="btnMasGlass" type="button" onClick={addInput}><i class="fas fa-plus"></i></button>
                    <p className="bebas4">Nuevo Donador</p>
                </div>
                <CustomLink 
                            onClick={handleSubmit} 
                            type="submit" 
                            tag='button' 
                            to={`/gestionarRutas`} 
                            className="btnVerde bebas2 blanco btn-formulario">
                            Guardar
                </CustomLink>
            </form>
        </div>
    )
}

export default FormularioEditarRuta