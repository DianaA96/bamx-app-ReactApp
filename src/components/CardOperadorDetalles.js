import React from 'react'
import '../styles/general.css';
import '../styles/glass.css';
import '../styles/CardOperadorDetalles.css';
import iconoFrutaVerdura from '../assets/icons/iconoFrutaVerdura.png'
import iconoPan from '../assets/icons/iconoPan.png'
import iconoAbarrote from '../assets/icons/iconoAbarrote.png'
import iconoNoComestible from '../assets/icons/iconoNoComestible.png'

function CardOperadorDetalles() {
    return (
       <div className="cardOperadorDetalles-container darkGlass">
           <section className="cardOperadorDetalles-1">
               <p className="manrope4 folio-recoleccion bold">Folio  RE2456-B</p>
                <p className="manrope5 bold">Rodrigo Hernandez B.</p>
                <p className="manrope5">Operador #32123</p>
           </section>
           <section className="cardOperadorDetalles-2">
                <p className="manrope5">Recibió de <span className="bold">Javier Almazán</span> en <span className="bold">Walmart Circunvalación</span>  Av. Circunvalación No. 4</p>
                <div className="cantidades-lista">
                    <div className="cantidad-elemento">
                        <img src={iconoFrutaVerdura} alt="" className="icono-cantidad" />
                        <p className="manrope5 bold">15 kg</p>
                    </div>
                    <div className="cantidad-elemento">
                        <img src={iconoPan} alt="" className="icono-cantidad" />
                        <p className="manrope5 bold">15 kg</p>
                    </div>
                    <div className="cantidad-elemento">
                        <img src={iconoAbarrote} alt="" className="icono-cantidad" />
                        <p className="manrope5 bold">15 kg</p>
                    </div>
                    <div className="cantidad-elemento">
                        <img src={iconoNoComestible} alt="" className="icono-cantidad" />
                        <p className="manrope5 bold">15 kg</p>
                    </div>
                </div>
           </section>
           <section className="cardOperadorDetalles-3">
               <p className="manrope5">12 de septiembre del 2021</p>
               <p className="manrope5 bold hora-recoleccion">14:35 Hrs.</p>
               <p className="manrope5">NO recibió nota del donador.</p>
           </section>
       </div>
    )
}

export default CardOperadorDetalles
