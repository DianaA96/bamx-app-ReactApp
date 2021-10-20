import React,{ useState, useEffect } from 'react'
import HeaderOperadorEntrega from '../components/HeaderOperadorEntrega'
import MenuPrincipal from '../components/MenuPrincipal'
import ModalConfirmacion from '../components/ModalConfirmacion'
import FormularioAsignarBodega from '../components/FormularioAsignarBodega'
import '../styles/views.css'
import axios from 'axios'


function AsignarRutasEntrega(props) {

    const [ status, setStatus ] = useState('idle');
    const [ error, setError ] = useState(null);
    const [modalConfirmacionVisibility, setModalConfirmacionVisibility] = useState(false)
    var [bodegas, setBodegas] = useState(1);
    const [ info, setInfo ] = useState({})
    const [ fruta, setFruta ] = useState(0)
    const [ pan, setPan ] = useState(0)
    const [ abarrote, setAbarrote ] = useState(0)
    const [ noComestible, setNoComestible ] = useState(0)
    const [ cardsSubmitted, setCardsSubmitted ] = useState(false)
    const [ submitAttempt, setSubmitAttempt ] = useState(false)
    const [ entregas, setEntregasPost ] = useState([])
    const [ entregasEliminar, setEntregasPostEliminar ] = useState([])
    const [ itemsBodegasEnabled, setItemsBodegasEnabled ] = useState([1,2,3,4,5,6])

    function submitCards() {
        
        setModalConfirmacionVisibility(true)
        
        if(fruta !== 0 || pan !== 0 || abarrote !== 0 || noComestible !== 0){
            alert('No ha asignado el destino de todo el cargamento. Verifique e intente de nuevo.')
        }
        else {
            setSubmitAttempt(true)      
        }
    }

    useEffect(()=>{
        setStatus('loading')
        axios.get(`http://localhost:5000/drivers/assignspecificdeliveries/${props.match.params.idOperador}`)
          .then((result)=>{

            let info = {
                nombreOperador: '',
                numOperador: '',
                numUnidad: '',
                recoleccionesHechas: '',
                horaUltRecoleccion: ''
            }

            info.nombreOperador = `${result.data.choferes[0].operador} ${result.data.choferes[0].apellidoP} ${result.data.choferes[0].apellidoM}`
            info.numOperador = result.data.choferes[0].nombreUsuario
            info.numUnidad = result.data.choferes[0].numUnidad
            info.recoleccionesHechas = result.data.choferes[0].recoleccionesHechas
            info.horaUltRecoleccion = result.data.choferes[0].horaUltimaRecoleccion
            setInfo(info)
            setFruta(parseInt(result.data.choferes[0].recolecciones.fruta))
            setAbarrote(parseInt(result.data.choferes[0].recolecciones.pan))
            setPan(parseInt(result.data.choferes[0].recolecciones.abarrote))
            setNoComestible(parseInt(result.data.choferes[0].recolecciones.noComestible))

            setStatus('resolved')
          })
          .catch((error)=>{
            setError(error)
            setStatus('error')
          })
    },[])


    function addCard(){
        setBodegas(bodegas=bodegas+1);
    }

    function showModalConfirmacion(){
        setModalConfirmacionVisibility(true)
    }

    return (
        <body className="orange-gradient">
            <aside>
                <MenuPrincipal idRolLogin={1}></MenuPrincipal>
            </aside>
            <main>
                <header>
                    <HeaderOperadorEntrega info={info} fruta={fruta} abarrote={abarrote} pan={pan} noComestible={noComestible}></HeaderOperadorEntrega>
                </header>
                <section className="contenido">
                    <div className="agregar-bodega">
                        <button className="btnMasGlass" type="button" onClick={addCard}><i class="fas fa-plus"></i></button>
                        <h3 className="bebas3 blanco">Agregar bodega</h3>
                    </div>
                    <div className="cardsOperadorPendiente-container">
                         {[...Array(bodegas)].map(() => 
                            <FormularioAsignarBodega
                            setFruta={setFruta}
                            setAbarrote={setAbarrote}
                            setPan={setPan}
                            setNoComestible={setNoComestible}
                            fruta={fruta}
                            pan={pan}
                            abarrote={abarrote}
                            noComestible={noComestible}
                            id={props.match.params.idOperador}
                            cardsSubmitted={cardsSubmitted}
                            setCardsSubmitted={setCardsSubmitted}
                            submitAttempt={submitAttempt}
                            setSubmitAttempt={setSubmitAttempt}
                            entregas={entregas}
                            setEntregasPost={setEntregasPost}
                            entregasEliminar={entregasEliminar}
                            setEntregasPostEliminar={setEntregasPostEliminar}
                            itemsBodegasEnabled={itemsBodegasEnabled}
                            setItemsBodegasEnabled={setItemsBodegasEnabled}
                            setModalConfirmacionVisibility={setModalConfirmacionVisibility}
                            ></FormularioAsignarBodega>
                        )}
                    </div>
                    <div className="guardar-bodegas">
                        <button disabled={cardsSubmitted?true:false} className="btnVerdeCuadrado bebas2 blanco" type="button" onClick={showModalConfirmacion}>{cardsSubmitted?'Guardado':'Guardar'}</button>
                    </div>
                    {modalConfirmacionVisibility ? <ModalConfirmacion  setModalConfirmacionVisibility={setModalConfirmacionVisibility} titulo1="asignación" titulo2="ruta" accion="realizar la" entidadObjetivo=" asignación" idEntidad=" realizada" handleConfirmation={submitCards}></ModalConfirmacion>:null}
                </section>
            </main>
        </body>
    )
}

export default AsignarRutasEntrega