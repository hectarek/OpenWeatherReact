import React from 'react';
import '../style/current.css'

//import used icons
import { WiDaySunny} from 'weather-icons-react' 
import { WiCloudy} from 'weather-icons-react' 
import { WiDayShowers} from 'weather-icons-react' 
import { WiDayRain} from 'weather-icons-react' 
import { WiDayLightning} from 'weather-icons-react' 
import { WiDaySnow} from 'weather-icons-react' 
import { WiFog} from 'weather-icons-react' 


function Icon(props) {

    return (
        <div className='current'>
            {props.icon}
        </div>
    )
}

export default Icon

