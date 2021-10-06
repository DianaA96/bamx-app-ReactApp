import React from 'react'
import '../styles/general.css';
import '../styles/glass.css';
import '../styles/CardOperadorDetalles.css';
import iconoFrutaVerdura from '../assets/icons/iconoFrutaVerdura.png'
import iconoPan from '../assets/icons/iconoPan.png'
import iconoAbarrote from '../assets/icons/iconoAbarrote.png'
import iconoNoComestible from '../assets/icons/iconoNoComestible.png'

function CardOperadorDetalles(props) {
    return (
       <div className="cardOperadorDetalles-container darkGlass">
           <section className="cardOperadorDetalles-1">
               <p className="manrope4 folio-recoleccion bold">{`Folio ${props.user.folio}`}</p>
                <p className="manrope5 bold">{`${props.user.nombre} ${props.user.apellidoP} ${props.user.apellidoM}`}</p>
                <p className="manrope5">{`Operador #${props.user.numOperador}`}</p>
           </section>
           <section className="cardOperadorDetalles-2">
                <p className="manrope5">Recibió de <span className="bold">{props.user.personaDonador}</span> en <span className="bold">{props.user.tiendaDonador}</span>{`  ${props.user.direccionDonador}`}</p>
                <div className="cantidades-lista">
                    <div className="cantidad-elemento">
                        <img src={iconoFrutaVerdura} alt="" className="icono-cantidad" />
                        <p className="manrope5 bold">{`${props.user.notaFrutaYVerdura} kg`}</p>
                    </div>
                    <div className="cantidad-elemento">
                        <img src={iconoPan} alt="" className="icono-cantidad" />
                        <p className="manrope5 bold">{`${props.user.notaPan} kg`}</p>
                    </div>
                    <div className="cantidad-elemento">
                        <img src={iconoAbarrote} alt="" className="icono-cantidad" />
                        <p className="manrope5 bold">{`${props.user.notaAbarrote} kg`}</p>
                    </div>
                    <div className="cantidad-elemento">
                        <img src={iconoNoComestible} alt="" className="icono-cantidad" />
                        <p className="manrope5 bold">{`${props.user.notaNoComestible} kg`}</p>
                    </div>
                </div>
           </section>
           <section className="cardOperadorDetalles-3">
               <p className="manrope5">{props.user.fechaRecepcionDonativo}</p>
               <p className="manrope5 bold hora-recoleccion">{props.user.horaRecepcionDonativo}</p>
               <p className="manrope5">{`${props.user.notaDelOperadorRecibida? "SI": "NO"} recibió nota del donador.`}</p>
           </section>
       </div>
    )
}

export default CardOperadorDetalles
