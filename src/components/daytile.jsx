import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import '../style/daytiles.css'

function DayTile(props) {

    return (
        <Accordion>
            <Card >
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    <h6>{props.day} <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Sort_down_font_awesome.svg/512px-Sort_down_font_awesome.svg.png' alt='arrow' width='20'/></h6>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body >
                        { props.feels_like && <p>Feels Like: {props.feels_like} </p>}
                        { props.temp_max && <p>High: {props.temp_max}</p>}
                        { props.temp_min && <p>Low: {props.temp_min} </p> }
                        { props.humidity && <p>Humidity: {props.humidity} </p> }
                    </Card.Body>
                </Accordion.Collapse>
            </Card> 
        </Accordion>
    )

}

export default DayTile