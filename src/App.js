import React from 'react'; 

// Importing Local Components
import Header from './components/header'
import Current from './components/current'
import DayTile from './components/daytile'
import Icon from './components/icon'
import Conditions from './components/conditions'

//Style
import './style/main.css'

//Importing Bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'

//import timezone
import moment from 'moment'

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
    "Clear": <WiDaySunny size={400} color="#2f2f2f" />,
    "Clouds": <WiCloudy size={400} color="#2f2f2f" />,
    "Drizzle": <WiDayShowers size={400} color="#2f2f2f" />,
    "Rain": <WiDayRain size={400} color="#2f2f2f" />,
    "Thunderstorm": <WiDayLightning size={400} color="#2f2f2f" />,
    "Snow": <WiDaySnow size={400} color="#2f2f2f" />,
    "Mist": <WiFog size={400} color="#2f2f2f" />
}



class App extends React.Component {

  state = {
    time: undefined,
    date: undefined,
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
    error: undefined,
    forecast: undefined
  }

  getWeather = async (e) => {

    e.preventDefault()
    const city = e.target.elements.city.value
    let time = new moment();

    const api_call = await fetch(`${api.base}forecast?q=${city}&units=${api.units}&appid=${api.key}`)
    const data = await api_call.json();
    console.log(data)
    console.log(moment())

    let forecastDays = [];
    
    for (let i=0; i < 40; i+=8) {
      
    forecastDays.push(
      <DayTile 
        key={i}
        day={moment(data.list[i].dt_txt).format('dddd MMMM Do')}
        feels_like={data.list[i].main.feels_like}
        temp_max={data.list[i].main.temp_max}
        temp_min={data.list[i].main.temp_min}
        humidity={data.list[i].main.humidity}
        />)
    }

    if (city) {
      this.setState({
        time: time.utcOffset(data.city.timezone/60/60).format('hh:mm a'), 
        date: (moment(data.list[0].dt_txt).format('dddd MMMM Do')),
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
        error: '',
        forecast: forecastDays
      })
    } else {
      this.setState({
        time: undefined, 
        date: undefined,
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
        error: 'Please enter a valid city or zip',
        forecast: undefined
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
            date={this.state.date}
            /></Col>
          <Col><Icon 
            icon={iconMap[this.state.icon]}
          /></Col>
        </Row>

        <Tab.Container defaultActiveKey="Conditions" >
            <Row>
              <Nav variant="tabs" defaultActiveKey="Conditions" className='row justify-content-around tabs'>
                  <Nav.Item>
                      <Nav.Link eventKey='Conditions'>Conditions</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link eventKey="Forecast">Forecast</Nav.Link>
                  </Nav.Item>
              </Nav> 
            </Row> 
            
            <Row>
              <Tab.Content className='tabs'>
                <Tab.Pane eventKey="Conditions">
                  <Conditions 
                    time={this.state.time}
                    feels_like={this.state.feels_like}
                    temp_max={this.state.temp_max}
                    temp_min={this.state.temp_min}
                    humidity={this.state.humidity}
                    error={this.state.error}
                    />
                </Tab.Pane>
                <Tab.Pane eventKey="Forecast">
                  {this.state.forecast}
                </Tab.Pane>
              </Tab.Content>
            </Row>
          </Tab.Container>
        
        
      </>
    );
  }
}

export default App;
