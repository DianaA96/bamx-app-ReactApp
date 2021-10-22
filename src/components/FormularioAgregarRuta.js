import React , {useState, useEffect} from 'react'
import CustomLink from './CustomLink';
import ItemDonador from './ItemDonador';
import axios from 'axios';
import '../styles/formularios.css';
import '../styles/general.css';
import '../styles/glass.css';
import '../styles/inputs.css';
import '../styles/botones.css';

function FormularioAgregarRuta() {

    const [ status, setStatus ] = useState('idle');
    const [ formStatus, setFormStatus ] = useState('pristine')
    const [ error, setError ] = useState(null);
    const [ donorValues, setDonorValues ] = useState([1])
    const [ arrIndices, setArrIndices ] = useState([])
    const [ seleccionDonadoresPost, setSeleccionDonadoresPost ] = useState([])
    const [ seleccionDonadoresEliminar, setSeleccionDonadoresEliminar ] = useState([])
    const [ nuevaRuta, setNuevaRuta ] = useState('vacía')
    const [ donadores, setDonadores ] = useState(1);

    let donadoresExtraSeleccion =[]
    const donadorValues = [];
    
    function addInput(){
        setDonadores(donadores + 1);
        setFormStatus('dirty')
    }

    function handleChange(event) {
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
            method: 'post',
            url: 'http://bamxapi-env.eba-wsth22h3.us-east-1.elasticbeanstalk.com/routes/donors',
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
        event.preventDefault()
        if(nuevaRuta === {}) {
            alert("No has ingresado un nombre para esta ruta")
        }
    }

    useEffect(()=>{
        setStatus('loading')
        axios.get(`http://bamxapi-env.eba-wsth22h3.us-east-1.elasticbeanstalk.com/routes/extradonors/vehicles`)
          .then((result)=>{
            setDonorValues(result.data.ordinaryDonors)
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
                    <label htmlFor="nombreRuta" className="input-label bebas4">Nombre de la ruta*</label>
                    <input onChange={handleChange} type="text" className="inputDarkGlass manrope5" required={true} name="nombre" placeholder="Nombre"/>
                </div>
                {[...Array(donadores)].map(() => 
                    <ItemDonador 
                    setDonorValues={setDonorValues} 
                    donadoresExtraSeleccion={donadoresExtraSeleccion} 
                    opcionesSelect={donorValues} 
                    donadorValues={donadorValues} 
                    arrIndices={arrIndices} 
                    defaultValue={{value: 0, label: 'Elija una opción'}}
                    setFormStatus={setFormStatus}
                    seleccionDonadoresPost={seleccionDonadoresPost}
                    seleccionDonadoresEliminar={seleccionDonadoresEliminar}
                    setArrIndices={setArrIndices}></ItemDonador>
                )}
                <div className="agregar-inputDonador espacio-extra">
                    <button className="btnMasGlass" 
                            aria-label="agregar ruta"
                            type="button" 
                            onClick={addInput}><i class="fas fa-plus"></i>
                    </button>
                    <p className="bebas4">Nuevo Donador</p>
                </div>
                <CustomLink 
                            onClick={handleSubmit} 
                            type="submit" 
                            disabled={formStatus === 'pristine' || nuevaRuta === 'vacía' ? true:false}
                            tag='button' 
                            className="btnVerde bebas2 blanco btn-formulario">
                            Guardar
                </CustomLink>
            </form>
        </div>
    )
}

export default FormularioAgregarRuta