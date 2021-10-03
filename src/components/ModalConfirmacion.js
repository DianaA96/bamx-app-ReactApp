import React from 'react'
import '../styles/general.css';
import '../styles/ModalConfirmacion.css';
import '../styles/glass.css';
import '../styles/botones.css';

function ModalConfirmacion(props) {
    return (
        <div className="modalConfirmacion-container darkGlass">
            <section className="modalConfirmacion-header">
                <i class="fas fa-exclamation-triangle blanco"></i>
                <h2 className="bebas2 blanco">Confirmar {props.titulo1} de {props.titulo2}</h2>
                <button className="btn-cerrar"><i class="fas fa-times-circle colorG100"></i></button>
            </section>
            <section className="modalConfirmacion-body">
                <p className="manrope4">¿Está seguro que desea {props.accion} {props.entidadObjetivo} <b>{props.nombreRuta}</b> ?</p>    
            </section>
            <section className="modalConfirmacion-acciones">
                <button className="btnVerde bebas3 blanco">Confirmar</button>
                <button className="btnRojo bebas3 blanco">Cancelar</button>
            </section>
        </div>
    )
}

export default ModalConfirmacion
