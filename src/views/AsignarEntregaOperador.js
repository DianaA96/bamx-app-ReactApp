import React,{useState} from 'react'
import HeaderOperadorEntrega from '../components/HeaderOperadorEntrega'
import MenuPrincipal from '../components/MenuPrincipal'
import ModalConfirmacion from '../components/ModalConfirmacion'
import FormularioAsignarBodega from '../components/FormularioAsignarBodega'
import '../styles/views.css'


function AsignarRutasEntrega() {

    const [modalConfirmacionVisibility, setModalConfirmacionVisibility] = useState(false)

    const users = [
        {
            nombre:'Daniel',
            apellidoP:'Sanchez',
            apellidoM:'Cornejo',
            puesto:'Operador',
        },
        {
            nombre:'Daniel',
            apellidoP:'Sanchez',
            apellidoM:'Cornejo',
            puesto:'Operador',
        }
     
    ]

    var [bodegas, setBodegas] = useState(1);


    function addCard(){
        setBodegas(bodegas=bodegas+1);
    }

    function showModalConfirmacion(){
        setModalConfirmacionVisibility(true)
    }

    return (
        <body className="orange-gradient">
            <aside>
                <MenuPrincipal></MenuPrincipal>
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