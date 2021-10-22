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
    const [ formStatus, setFormStatus ] = useState('pristine')
    const [ error, setError ] = useState(null);
    const [ donorValues, setDonorValues ] = useState({})
    const donadorValues = [];
    var [ donadores, setDonadores ] = useState(props.ruta.puntosRecoleccion.length);
    const [ seleccionDonadoresPost, setSeleccionDonadoresPost ] = useState([])
    const [ seleccionDonadoresEliminar, setSeleccionDonadoresEliminar ] = useState([])
    const [ nuevaRuta, setNuevaRuta ] = useState({})
    const [ arrIndices, setArrIndices ] = useState([])
    const [ inputValue, setInputValue ] = useState(props.ruta.nombreRuta)

    function addInput(){
        setDonadores(donadores = donadores + 1);
        props.ruta.puntosRecoleccion.push({})
        setFormStatus('dirty')
    }

    function handleChange(event) {
        setInputValue(event.target.value)
        let route = {
            [event.target.name]: event.target.value,
        }
        setNuevaRuta(route)
        setFormStatus('dirty')
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
        axios({
            method: 'patch',
            url: `http://bamxapi-env.eba-wsth22h3.us-east-1.elasticbeanstalk.com/routes/${props.idRuta}/donors/`,
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
        setNuevaRuta({nombre: props.ruta.nombreRuta})
        let arrDonadoresPorDefecto = []
        for (let m = 0; m < props.ruta.puntosRecoleccion.length; m++) {
            arrDonadoresPorDefecto.push(props.ruta.puntosRecoleccion[m].idDonor)
        }
        setSeleccionDonadoresPost(arrDonadoresPorDefecto)
        axios.get(`http://bamxapi-env.eba-wsth22h3.us-east-1.elasticbeanstalk.com/donors/donorsselect`)
          .then((result)=>{
            setDonorValues(result.data.donadores)
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
                        value={inputValue}/>
                </div>
                {props.ruta.puntosRecoleccion.map((item, idx) => 
                    <ItemDonador 
                    setDonorValues={setDonorValues} 
                    opcionesSelect={donorValues} 
                    donadorValues={donadorValues}
                    defaultValue={{value: item.idDonor, label: item.nombre}}
                    seleccionDonadoresPost={seleccionDonadoresPost}
                    seleccionDonadoresEliminar={seleccionDonadoresEliminar}
                    arrIndices={arrIndices} 
                    setArrIndices={setArrIndices}
                    setFormStatus={setFormStatus}
                    donadoresExtraSeleccion={[]}></ItemDonador>
                )}
                <div className="agregar-inputDonador espacio-extra">
                    <button className="btnMasGlass" aria-label="agregar donador" type="button" onClick={addInput}><i class="fas fa-plus"></i></button>
                    <p className="bebas4">Nuevo Donador</p>
                </div>
                <CustomLink 
                            onClick={handleSubmit}
                            disabled={formStatus === 'pristine'? true:false} 
                            type="submit" 
                            tag='button' 
                            className="btnVerde bebas2 blanco btn-formulario">
                            Guardar
                </CustomLink>
            </form>
        </div>
    )
}

export default FormularioEditarRuta