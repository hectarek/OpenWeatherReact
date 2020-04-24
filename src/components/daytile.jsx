import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

function DayTile(props) {

    return (
        <Accordion>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    {props.day} 
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        { props.feels_like && <p>Feels Like: {props.feels_like} </p>}
                        { props.temp_max && <p>High: {props.temp_max}}</p>}
                        { props.temp_min && <p>Low: {props.temp_min} </p> }
                        { props.humidity && <p>Humidity: {props.humidity} </p> }
                        { props.clouds && <p>Clouds: {props.clouds} </p> }
                    </Card.Body>
                </Accordion.Collapse>
            </Card> 
        </Accordion>
    )

}

export default DayTile