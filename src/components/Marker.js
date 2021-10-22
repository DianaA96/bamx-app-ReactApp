import React from 'react'
import tomappleMarker from '../assets/images/tomapple.png'
import '../styles/Marker.css'

function Marker() {
    return (
        <div>
            <img className="marker-img" src={tomappleMarker} alt=""/>
        </div>
    )
}

export default Marker
