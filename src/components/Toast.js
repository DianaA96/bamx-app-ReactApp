import React from 'react'
import '../styles/Toast.css'; 
import '../styles/general.css';

let message = "Ruta agregada con éxito"

function Toast() {
    return(
        <div className="toastStyle manrope5 negro bold">{message}</div>
    );
}

export default Toast