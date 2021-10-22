import React, { useState, useContext } from 'react'
import axios from 'axios';

export const AuthContext = React.createContext();

export function AuthProvider(props) {

    const [ user, setUser ] = useState(useState(window.localStorage.getItem('gn3ivluxXGi0CNE')));
    const [ cargo, setCargo ] = useState('')
    const [ error, setError ] = useState(null)

    function login({ nombreUsuario, contrasena }) {
        console.log(contrasena)
        axios( {
            url: 'http://bamxapi-env.eba-wsth22h3.us-east-1.elasticbeanstalk.com/users/login',
            method: 'post',
            data: {
                body: {
                    nombreUsuario,
                    contrasena,
                },
                headers: {
                    'Content-type': 'application/json'
                }
            }
        })
        .then((result) => {
            console.log("result de api", result)
            console.log(result.data.data)
            window.localStorage.setItem('gn3ivluxXGi0CNE', result.data.data)
            setCargo(result.data.rol)
            setUser(result.data.data);
            console.log("usuario", user.data)
            alert('Bienvenido')
        })
        .catch((err)=>{
            alert('Credenciales inválidas')
            setError('error')
            }
        )
    }

    function logout() {
        console.log("estoy haciendo logout")
        window.localStorage.removeItem('gn3ivluxXGi0CNE')
        window.location.reload();
    }

    function getToken() {
        return window.localStorage.getItem('gn3ivluxXGi0CNE')
    }

    const value = {
        user,
        cargo,
        getToken,
        login,
        logout,
    };

    return <AuthContext.Provider value={value} {...props}/>;
}

export function useAuth() {
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error('useAuth solo puede ser utilizado dentro de AuthProvider')
    }
    return context;
}

export default AuthContext;