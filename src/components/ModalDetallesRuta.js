import React from 'react'
import '../styles/general.css';
import '../styles/ModalDetallesRuta.css';
import iconoRuta from '../assets/icons/iconoCRUDRuta.png'

function ModalDetallesRuta(props) {



    let donadores = [
        {
            nombreDonador:'Superama Gobernadores',
            ubicacionDonador:'Av Vicente Guerrero 760, Lomas de la Selva, 62270'
        },
        {
            nombreDonador:'Fresko La Comer',
            ubicacionDonador:'Río Balsas 102, Vista Hermosa 62270'
        },
        {
            nombreDonador:'Woolworth Arista',
            ubicacionDonador:'Río Yaqui 28, Vista Hermosa, 62290'
        }
    ]

    let nombreRuta = "GOBERNADORES-ARISTA"
    let numPuntosRecoleccion = donadores.length

    return (
        <div className="modalDetallesRuta-container cristalOscuro">
            <section className="modalDetallesRuta-izquierda">
                <h1 className="colorG900">Detalle de la ruta</h1>
                <img src={iconoRuta} alt="" />
            </section>
            <section className="modalDetallesRuta-derecha">
                <section className="modalDetallesRuta-header">
                    <div className="modalTitulo">
                        <p className="p4">{nombreRuta}</p>
                        <p className="p5">{numPuntosRecoleccion} puntos de recolección</p>
                    </div>
                    <button className="btn-cerrar"><i class="fas fa-times-circle colorG100"></i></button>
                </section>
                <section className="modalDetallesRuta-body">
                    {donadores.map((donador, index) =>
                        <div className="modalRutaIndividual">
                            <i class="fas fa-map-marker-alt"></i>
                            <div className="infoRutaIndividual">
                                <p className="p4">{donador.nombreDonador}</p>
                                <p className="p5">{donador.ubicacionDonador}</p>
                            </div>
                        </div>
                    )}
                </section>
                <section className="modalDetallesRuta-acciones">
                    <button>Eliminar Ruta</button>
                    <button>Editar datos de la ruta</button>
                </section>
            </section>
        </div>
    )
}

export default ModalDetallesRuta
