import React from 'react';
import Nav from 'react-bootstrap/Nav'
import '../style/midmenu.css'

function MidMenu() {

return (
    <Nav justify variant="pills" defaultActiveKey="link-0">
        <Nav.Item className='nav-item'>
            <Nav.Link eventKey='link-0' className='nav-link'>Conditions</Nav.Link>
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