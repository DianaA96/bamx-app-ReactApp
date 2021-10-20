import React, { useState, useEffect } from "react";
import '../styles/HeaderOperadorEntrega.css'
import '../styles/general.css';
import '../styles/glass.css';
import IconoFrutasVerduras from '../assets/icons/iconoFrutaVerdura.png';
import IconoPan from '../assets/icons/iconoPan.png';
import IconoAbarrote from '../assets/icons/iconoAbarrote.png';
import IconoNoComestibles from '../assets/icons/iconoNoComestible.png';

function HeaderOperadorEntrega(props) {

    return (
        <div className="headerTituloContainer lightGlass">
            <div className="bebas1 blanco">
                Asignar ruta de entrega al operador
            </div>
            <div className="datosOperadorRecolecciones">
                <div className="datosOperador">
                    <div className="datosPersonalesOperador">
                        <p className="manrope4 bold">{props.info.nombreOperador}</p>
                        <p className="manrope4">Operador {props.info.numOperador}</p>
                        <p className="manrope4">Unidad {props.info.numUnidad}</p>
                    </div>
                    <div className="datosRecoleccionesOperador">
                        <p className="manrope4 bold">{props.info.recoleccionesHechas} recolecciones hechas.</p>
                        <p className="manrope4 bold">Última recolección hecha: {props.info.horaUltimaRecoleccion} hrs.</p>
                    </div>
                </div>
                <div className="datosRecolecciones">
                    <ul className="listaRestantes">
                        <li className="manrope4 bold">
                            <img src={IconoFrutasVerduras} alt='Frutas y verduras'/>
                                 {props.fruta} kg. restantes
                        </li>
                        <li className="manrope4 bold">
                            <img src={IconoPan} alt='Frutas y verduras'/>  
                              {props.pan} kg. restantes
                        </li>
                        <li className="manrope4 bold">
                        <img src={IconoAbarrote} alt='Frutas y verduras'/>
                              {props.abarrote} kg. restantes
                        </li>
                        <li className="manrope4 bold">
                        <img src={IconoNoComestibles} alt='Frutas y verduras'/>
                              {props.noComestible} kg. restantes
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HeaderOperadorEntrega;