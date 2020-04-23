import React from 'react';

// Importing Local Components
import Header from './components/header'
import Current from './components/current'
import MidMenu from './components/midmenu'
import DayTile from './components/daytile'
import Icon from './components/icon'
import './style/main.css'

//Importing Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
  return (
    <>
      <Header />

      <Row className="justify-content-md-center background-image">
        <Col><Current/></Col>
        <Col><Icon /></Col>
        
        
      </Row>

      <MidMenu className="mid-menu"/>

      <DayTile />
      <DayTile />

      
    </>
  );
}

export default App;
