import React from 'react';
import Nav from 'react-bootstrap/Nav'

function MidMenu() {

return (
    <Nav justify variant="pills" defaultActiveKey="link-0">
        <Nav.Item>
            <Nav.Link eventKey='link-0'>Conditions</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-1">Other Info</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-2">Forecast</Nav.Link>
        </Nav.Item>
    </Nav>
    )
}

export default MidMenu