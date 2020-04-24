import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

function Header (props) {
    return (
        <Navbar expand="lg" variant="light" bg="light" >
            <Container>
                <Navbar.Brand href="#">Hector's Weather App</Navbar.Brand>
                    <Form inline onSubmit={props.getWeather}>
                        <FormControl name='city' id='city' type="text" placeholder="Enter City" className="mr-sm-2" />
                        <Button type='submit' variant="outline-dark">Get Weather</Button>
                    </Form>
            </Container>
        </Navbar>
    )

  }


export default Header;