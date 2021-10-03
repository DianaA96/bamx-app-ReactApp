import React from "react";
import '../styles/HeaderOperadorEntrega.css'
import '../styles/general.css';
import '../styles/glass.css';
import IconoFrutasVerduras from '../assets/icons/iconoFrutaVerdura.png';
import IconoPan from '../assets/icons/iconoPan.png';
import IconoAbarrote from '../assets/icons/iconoAbarrote.png';
import IconoNoComestibles from '../assets/icons/iconoNoComestible.png';

function HeaderOperadorEntrega() {

    let nombreOperador = "Rodrigo Hernández B.";
    let numOperador = 21231
    let numUnidad = 21231

    let recoleccionesHechas = 7
    let horaUltRecoleccion = "12:54"

    let frutasVerdurasRestantes = 20
    let panRestante = 20
    let abarroteRestante = 20
    let noComestiblesRestantes = 20

    return (
        <div className="headerTituloContainer lightGlass">
            <div className="bebas1 blanco">
                Asignar ruta de entrega al operador
            </div>
            <div className="datosOperadorRecolecciones">
                <div className="datosOperador">
                    <div className="datosPersonalesOperador">
                        <p className="manrope4 bold">{nombreOperador}</p>
                        <p className="manrope4">Operador #{numOperador}</p>
                        <p className="manrope4">Unidad #{numUnidad}</p>
                    </div>
                    <div className="datosRecoleccionesOperador">
                        <p className="manrope4 bold">{recoleccionesHechas} recolecciones hechas.</p>
                        <p className="manrope4 bold">Última recolección hecha: {horaUltRecoleccion} hrs.</p>
                    </div>
                </div>
                <div className="datosRecolecciones">
                    <ul className="listaRestantes">
                        <li className="manrope4 bold">
                            <img src={IconoFrutasVerduras} alt='Frutas y verduras'/>
                                 {frutasVerdurasRestantes} kg. restantes
                        </li>
                        <li className="manrope4 bold">
                            <img src={IconoPan} alt='Frutas y verduras'/>  
                              {panRestante} kg. restantes
                        </li>
                        <li className="manrope4 bold">
                        <img src={IconoAbarrote} alt='Frutas y verduras'/>
                              {abarroteRestante} kg. restantes
                        </li>
                        <li className="manrope4 bold">
                        <img src={IconoNoComestibles} alt='Frutas y verduras'/>
                              {noComestiblesRestantes} kg. restantes
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HeaderOperadorEntrega;