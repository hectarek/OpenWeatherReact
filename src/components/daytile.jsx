import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

function DayTile() {

    return (
        <Accordion>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    Day, Temp
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <p>Humidity</p>
                        <p>Sunrise</p>
                        <p>Sunset</p>

                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )

}

export default DayTile