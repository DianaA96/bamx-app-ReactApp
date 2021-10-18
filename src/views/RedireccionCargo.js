import React from 'react'
import { useHistory } from 'react-router'
import { useAuth} from '../auth-context'

function RedireccionCargo() {
    const { cargo } = useAuth();

    const history = useHistory()

    console.log(cargo)

    if(cargo === "admin"){
         // setTimeout may cause an error
        setTimeout(() => {
            history.push('/gestionarUsuarios')
        }, 5000)
    }

    else if (cargo==="trafico"){
         // setTimeout may cause an error
         setTimeout(() => {
            history.push('/gestionarRutas')
        }, 5000)
    }
   


    return <div>Redirigiendo en 5 segundos</div>
}

export default RedireccionCargo
