import React from 'react'; 

// Importing Local Components
import Header from './components/header'
import Current from './components/current'
import MidMenu from './components/midmenu'
import DayTile from './components/daytile'
import Icon from './components/icon'
import Conditions from './components/conditions'

//Style
import './style/main.css'

//Importing Bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//import Icons 
import { WiDaySunny} from 'weather-icons-react' 
import { WiCloudy} from 'weather-icons-react' 
import { WiDayShowers} from 'weather-icons-react' 
import { WiDayRain} from 'weather-icons-react' 
import { WiDayLightning} from 'weather-icons-react' 
import { WiDaySnow} from 'weather-icons-react' 
import { WiFog} from 'weather-icons-react' 


const api = {
  key: '554b954c4498dd6dcea9fa6a913c29b3',
  base: "https://api.openweathermap.org/data/2.5/",
  units: 'imperial',
  city: "Charlotte"
}

const iconMap = {
    "Clear": <WiDaySunny size={400} color="#FFF" />,
    "Clouds": <WiCloudy size={400} color="#FFF" />,
    "Drizzle": <WiDayShowers size={400} color="#FFF" />,
    "Rain": <WiDayRain size={400} color="#FFF" />,
    "Thunderstorm": <WiDayLightning size={400} color="#FFF" />,
    "Snow": <WiDaySnow size={400} color="#FFF" />,
    "Mist": <WiFog size={400} color="#FFF" />
}

class App extends React.Component {

  state = {
    time: undefined,
    condition: undefined,
    city: undefined,
    country: undefined,
    temp: undefined,
    feels_like: undefined,
    temp_max: undefined,
    temp_min: undefined,
    humidity: undefined,
    description: undefined,
    icon: undefined,
    wind: undefined,
    error: undefined
  }

  getWeather = async (e) => {

    e.preventDefault()
    const city = e.target.elements.city.value

    const api_call = await fetch(`${api.base}forecast?q=${city}&units=${api.units}&appid=${api.key}`)
    const data = await api_call.json();
    console.log(data)
    console.log(iconMap[this.state.icon])

    if (city) {
      this.setState({
        time: undefined, 
        condition: data.list[0].weather[0].main,
        city: data.city.name,
        country: data.city.country,
        temp: data.list[0].main.temp,
        feels_like: data.list[0].main.feels_like,
        temp_max: data.list[0].main.temp_max,
        temp_min: data.list[0].main.temp_min,
        humidity: data.list[0].main.humidity,
        description: data.list[0].weather[0].description,
        icon: data.list[0].weather[0].main,
        wind: data.list[0].wind.speed,
        error: ''
      })
    } else {
      this.setState({
        time: undefined, 
        condition: undefined,
        city: undefined,
        country: undefined,
        temp: undefined,
        feels_like: undefined,
        temp_max: undefined,
        temp_min: undefined,
        humidity: undefined,
        description: undefined,
        icon: undefined,
        wind: undefined,
        error: 'Please enter a valid city or zip'
      })
    }
  };

  render() { 
    return (
      <>

       <Header getWeather={this.getWeather} />

        <Row className="justify-content-md-center background-image">
          <Col><Current 
            time={this.state.time}
            condition={this.state.condition}
            city={this.state.city}
            country={this.state.country}
            temp={this.state.temp}
            error={this.state.error}
            /></Col>
          <Col><Icon 
            icon={iconMap[this.state.icon]}
          /></Col>
        </Row>
  
        <MidMenu className="mid-menu"/>
  
        <Conditions 
          time={this.state.time}
          feels_like={this.state.feels_like}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          humidity={this.state.humidity}
          error={this.state.error}
        />
        <DayTile
         
         />  
        
      </>
    );
  }
}

export default App;
