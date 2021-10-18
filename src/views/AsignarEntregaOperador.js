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
    const [ ruta, setRuta ] = useState({})

    const [modalConfirmacionVisibility, setModalConfirmacionVisibility] = useState(false)

    var [bodegas, setBodegas] = useState(1);

    useEffect(()=>{
        setStatus('loading')
        axios.get(`http://localhost:5000/drivers/${props.match.params.idOperador}`)
          .then((result)=>{
              console.log(result.data)
            setRuta(result.data)
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
                    <HeaderOperadorEntrega></HeaderOperadorEntrega>
                </header>
                <section className="contenido">
                    <div className="agregar-bodega">
                        <button className="btnMasGlass" type="button" onClick={addCard}><i class="fas fa-plus"></i></button>
                        <h3 className="bebas3 blanco">Agregar bodega</h3>
                    </div>
                    <div className="cardsOperadorPendiente-container">
                         {[...Array(bodegas)].map(() => 
                            <FormularioAsignarBodega></FormularioAsignarBodega>
                        )}
                    </div>
                    <div className="guardar-bodegas">
                        <button className="btnVerdeCuadrado bebas2 blanco" type="button" onClick={showModalConfirmacion}>Guardar</button>
                    </div>
                    {modalConfirmacionVisibility ? <ModalConfirmacion  setModalConfirmacionVisibility={setModalConfirmacionVisibility} titulo1="asignación" titulo2="ruta" accion="realizar la" entidadObjetivo=" asignación" idEntidad=" realizada"></ModalConfirmacion>:null}
                </section>
            </main>
        </body>
    )
}

export default AsignarRutasEntrega