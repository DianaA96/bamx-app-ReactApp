import React,{useState} from 'react';
import '../styles/CardFormularioInicioSesion.css';
import '../styles/general.css';
import '../styles/glass.css';
import '../styles/botones.css';
import '../styles/inputs.css';
import CustomLink from './CustomLink';
import { useAuth } from '../auth-context'

function CardFormularioInicioSesion(){

    const [ usuarioAuth, setUsuarioAuth ] = useState({});
    const [ formState, setFormState ] = useState('pristine');

    const { login } = useAuth();

    function handleChange(event) {
        let datosUsuario = {
            ...usuarioAuth,
            [event.target.name]: event.target.value
        }
        setUsuarioAuth(datosUsuario)
        setFormState('dirty')
    }

    function handleLogin(){
        login(usuarioAuth)
    }
    return(
        <div className="cardPrincipal formularioInicioSesion darkGlass">
            <form >
                <div className='formularioCard'>
                    <h2 className="bebas3 blanco delgada">Inicie sesión para comenzar</h2>
                    <input type="text" className="inputInicioSesion manrope5" name="nombreUsuario" placeholder='Escriba su usuario' onChange={handleChange}/>
                    <input type="password" className="inputInicioSesion manrope5" name="contrasena" placeholder='Escriba su contraseña' onChange={handleChange}/>
                    <CustomLink tag='button' onClick={handleLogin} className='btnVerde bebas3 blanco delgada' to='./redirect'>Iniciar sesión</CustomLink>
                    <button className="btnRecContrasena manrope5 subrayada blanco">Olvidé mi contraseña</button>
                </div>
                <p className="manrope7 blanco">Banco de Alimentos de Morelos, 2021.</p>
            </form>
            
        </div>
    )
}

export default CardFormularioInicioSesion