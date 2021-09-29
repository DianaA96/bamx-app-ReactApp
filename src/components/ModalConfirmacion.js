import React from 'react'
import '../styles/general.css';
import '../styles/ModalConfirmacion.css';

function ModalConfirmacion(props) {
    return (
        <div className="modalConfirmacion-container">
            <section className="modalConfirmacion-header">
                <i class="fas fa-exclamation-triangle colorG900"></i>
                <h2 className="colorG900">Confirmar {props.titulo1} de {props.titulo2}</h2>
                <button className="btn-cerrar"><i class="fas fa-times-circle colorG100"></i></button>
            </section>
            <section className="modalConfirmacion-body">
                <p>¿Está seguro que desea {props.accion} {props.entidadObjetivo} <b>{props.nombreRuta}</b> ?</p>    
            </section>
            <section className="modalConfirmacion-acciones">
                <button>Confirmar</button>
                <button>Cancelar</button>
            </section>
        </div>
    )
}

export default ModalConfirmacion
