import React,{useState, useEffect} from 'react'
import { useHistory } from 'react-router'
import { useAuth} from '../auth-context'
import bamxMorelos from '../assets/images/logo_bamx_morelos.png'
import '../styles/RedireccionCargo.css'

import styled, { keyframes } from "styled-components";
import { zoomInDown, pulse, rubberBand, tada, fadeIn, bounceIn, zoomIn} from 'react-animations'
const Animation = keyframes`${zoomInDown}`;
const AnimationDiv = styled.div`
    backdrop-filter: blur( 20px );
    border-radius: 25px;
    -webkit-backdrop-filter: blur( 20px );
    animation: 1 1s ${Animation};
`;

const Animation1 = keyframes`${fadeIn}`;
const AnimationDiv1 = styled.div`
    backdrop-filter: blur( 20px );
    border-radius: 25px;
    -webkit-backdrop-filter: blur( 20px );
    animation: 1 2s ${Animation1};
`;

function RedireccionCargo() {
    const { cargo } = useAuth();
    const [timeLeft, setTimeLeft] = useState(5)

    const history = useHistory()

    if(cargo === "admin"){
         // setTimeout may cause an error
        setTimeout(() => {
            history.push('/gestionarUsuarios')
        }, 4000)
    }

    else if (cargo==="trafico"){
         // setTimeout may cause an error
         setTimeout(() => {
            history.push('/gestionarRutas')
        }, 4000)
    }

    
    // setInterval(() => {
    //     setTimeLeft(timeLeft-1)
    //     }, 3000)
    
    
    return (
            <div className="redirect-body ">
                <AnimationDiv1>
                    <div className="redirect-main orange-bg">
                        {/* <p className="redirect-header">¡Bienvenido!</p> */}
                        
                        <AnimationDiv>
                            <img src={bamxMorelos} alt="" className="redirect-manzana"/>
                        </AnimationDiv>

                        {/* <p className="manrope3 blanco">{`Redirigiendo a su panel de administración en ${timeLeft}`}</p> */}
                        
                    </div>
                </AnimationDiv1>
            </div>
    );
}

export default RedireccionCargo
