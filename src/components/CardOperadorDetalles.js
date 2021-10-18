import React, { useState, useEffect } from 'react'
import '../styles/general.css';
import '../styles/glass.css';
import '../styles/CardOperadorDetalles.css';
import iconoFrutaVerdura from '../assets/icons/iconoFrutaVerdura.png'
import iconoPan from '../assets/icons/iconoPan.png'
import iconoAbarrote from '../assets/icons/iconoAbarrote.png'
import iconoNoComestible from '../assets/icons/iconoNoComestible.png'
import axios from 'axios';
import CustomLink from './CustomLink';
import Moment from 'react-moment';

function CardOperadorDetalles(props) {

    const [ status, setStatus ] = useState('')
    const [ error, setError ] = useState('')
    const [ recolecciones, setRecolecciones ] = useState([])

    useEffect(()=>{
        setStatus('loading')
        axios.get(`http://localhost:5000/drivers/collectedquantitiespernote/${props.nota.idCollection}`)
        .then((result)=>{
            console.log(result)
            setRecolecciones(result.data.notas)
            setStatus('resolved')
        })
        .catch((error)=>{
            setError(error)
            setStatus('error')
        })
    },[])

    return (
       <div className="cardOperadorDetalles-container darkGlass">
           <section className="cardOperadorDetalles-1">
               <p className="manrope4 folio-recoleccion bold">{`Folio ${props.nota.folio}`}</p>
                <p className="manrope5 bold">{`${props.nota.nombre} ${props.nota.apellidoP} ${props.nota.apellidoM}`}</p>
                <p className="manrope5">{`Operador #${props.nota.nombreUsuario}`}</p>
           </section>
           <section className="cardOperadorDetalles-2">
                <p className="manrope5">Recibió de <span className="bold">{props.nota.responsableEntrega}</span> en <span className="bold">{props.nota.donador}</span>{`  ${props.nota.longitud} ${props.nota.latitud}`}</p>
                <div className="cantidades-lista">
                    <div className="cantidad-elemento">
                        <img src={iconoFrutaVerdura} alt="" className="icono-cantidad" />
                        <p className="manrope5 bold">{`${recolecciones.fruta === ''? '0': recolecciones.fruta} kg`}</p>
                    </div>
                    <div className="cantidad-elemento">
                        <img src={iconoPan} alt="" className="icono-cantidad" />
                        <p className="manrope5 bold">{`${recolecciones.pan === ''? '0': recolecciones.pan} kg`}</p>
                    </div>
                    <div className="cantidad-elemento">
                        <img src={iconoAbarrote} alt="" className="icono-cantidad" />
                        <p className="manrope5 bold">{`${recolecciones.abarrote === ''? '0': recolecciones.abarrote} kg`}</p>
                    </div>
                    <div className="cantidad-elemento">
                        <img src={iconoNoComestible} alt="" className="icono-cantidad" />
                        <p className="manrope5 bold">{`${recolecciones.noComestible === ''? '0': recolecciones.noComestible} kg`}</p>
                    </div>
                </div>
           </section>
           <section className="cardOperadorDetalles-3">
               <p className="manrope5"><Moment date={props.nota.fechaRecoleccion} locale={"es-mx"} format={"LL"}></Moment></p>
               <p className="manrope5 bold hora-recoleccion"><Moment date={props.nota.fechaRecoleccion} add={{ hours: 5 }} locale={"es"} format={"LTS"}></Moment></p>
               <p className="manrope5">{`${props.nota.nota? "SÍ" : "NO"} recibió nota del donador.`}</p>
           </section>
           <section className="cardOperadorDetalles-4">
                <CustomLink tag='button' className='btnMasGlass' /* to='/agregarDonador' */><i class="far fa-map"></i></CustomLink>
                <p>Ver en Maps</p>
           </section>
       </div>
    )
}

export default CardOperadorDetalles
