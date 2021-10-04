import React from 'react'
import '../styles/general.css';
import '../styles/ModalDetallesRuta.css';
import '../styles/ModalDetallesUsuario.css';
import iconoUsuario from '../assets/icons/iconoUnidadDetalle.png'
import '../styles/glass.css';
import '../styles/botones.css';

function ModalDetallesUsuario(props) {

    let usuario = {
        idUsuario: 'OP2456-B',
        nombreUsuario: 'Daniel',
        apellidosUsuario: 'Sánchez Cornejo',
        rolUsuario: 'Operador',
        correoUsuario: 'daniel@correofalso.com',
        numeroTelfUsuario: '77 7234 5678' 
    }

    return (
        <div className="modalDetallesUsuario-container darkGlass">
            <section className="modalDetallesUsuario-izquierda">
                <h1 className="bebas1 blanco">Detalle del usuario</h1>
                <img src={iconoUsuario} alt="" />
            </section>
            <section className="modalDetallesUsuario-derecha">
                <section className="modalDetallesUsuario-header">
                    <div className="modalTitulo">
                        <p className="manrope5">ID</p>
                        <p className="manrope5">{usuario.idUsuario}</p>
                    </div>
                    <button className="btn-cerrar"><i class="fas fa-times-circle colorG100"></i></button>
                </section>
                <section className="modalDetallesUsuario-body">
                    <div className="modalTitulo">
                        <p className="manrope4">{usuario.nombreUsuario}</p>
                        <p className="manrope4">{usuario.apellidosUsuario}</p>
                        <p className="manrope5">{usuario.rolUsuario}</p>
                    </div>
                </section>
                <section className="modalDetallesUsuario-body">
                    <div className="modalUsuarioIndividual">
                        <div className="infoUsuarioIndividual">
                            <p className="manrope5">{usuario.correoUsuario}</p>
                            <p className="manrope5">{usuario.numeroTelfUsuario}</p>
                        </div>
                    </div>
                </section>
                <section className="modalDetallesUsuario-acciones">
                    <button className="btnRosa bebas4">Eliminar usuario</button>
                    <button className="btnAmarillo bebas4">Editar datos del usuario</button>
                </section>
            </section>
        </div>
    )
}

export default ModalDetallesUsuario
