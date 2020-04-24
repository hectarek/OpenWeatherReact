import React from 'react';
 
function Conditions (props) {

    return (
        <div className="container" >
            { props.time && <p className='m-3 p-2'>Current Time: {props.time} </p>}
            { props.feels_like && <p className='m-3 p-2'>Feels Like: {props.feels_like}</p>}
            { props.temp_max && <p className='m-3 p-2'>Max: {props.temp_max} </p>}
            { props.temp_min && <p className='m-3 p-2'>Min: {props.temp_min} </p>}
            { props.humidity && <p className='m-3 p-2'>Humdity: {props.humidity}</p>}
        </div>
    )

}

export default Conditions