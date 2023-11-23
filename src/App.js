import React from 'react'
import './App.css'
import {NavDropdown, Nav, Navbar, Container, Button} from 'react-bootstrap'
import { FaBeer } from "react-icons/fa";
import { GiOrangeSlice } from "react-icons/gi";

const App = () => {
  return (
    <div className='app'>
        {/* ################  NAVBAR  ###################"" */}
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><GiOrangeSlice color={'rgb(13, 110, 253)'}/> React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <h1 style={{display: 'flex', justifyContent: 'center', marginTop: '8%'}}>React Bootstrap  <FaBeer color={'rgb(13, 110, 253)'} /></h1>

    <h4 style={{display: 'flex', justifyContent: 'center'}}>The most popular front-end framework, rebuilt for React.</h4>

    <div style={{display: 'flex', justifyContent: 'center', marginTop: '36px'}}>
      <Button style={{marginRight: '9px'}}>Get Started</Button>
      <Button  variant="outline-primary">Free trial.</Button>
    </div>


    </div>
  )
}

export default App