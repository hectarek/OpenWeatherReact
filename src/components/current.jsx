import React from 'react';
import '../style/current.css'

function Current(props) {
    return (
        <div className="current">
            { props.condition && <h2>{props.condition}</h2>}
            { props.city && props.country && <h3 >{props.city}, {props.country} </h3>}
            { props.temp && <h1 >{props.temp} F</h1>}
            { props.error && <h1> {props.error} </h1>}
        </div>
    )
}

export default Current;