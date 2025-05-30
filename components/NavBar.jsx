import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';
import '../src/App.css';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import logo from '../src/assets/logo.png'; 

const Navigation = () => {
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
        <img alt="ruxcleaninglogo" src={logo} width="200" height="150" className="d-inline-block align-top" />
        {/* <span className="brand-name">RuxCleaning</span> */}
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto w-100 d-flex justify-content-around">
          <Nav.Link as={Link} to="/">Home</Nav.Link>

{/* <Nav.Link as={Link} to="/residential"> Residential */}
          <NavDropdown title={<Link to="/residential" className="dropdown-link">Residential</Link>} id="collapsible-nav-dropdown" className='custom-dropdown'>
            <NavDropdown.Item as={Link} to="/regularCleaning">Regular Cleaning</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/deepCleaning">Deep Cleaning</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/moveCleaning">Move in/out Cleaning</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/postConstructionCleaning">Post Construction Cleaning</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link as={Link} to="/commercial">Commercial</Nav.Link>
          <Nav.Link as={Link} to="/ecoFriendly">Eco Friendly</Nav.Link>
          <Nav.Link as={Link} to="/career">Career</Nav.Link>
          <Button className="callBtn" variant="secondary" href="tel:630-441-4446">Call Now (630) 441 - 4446</Button>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;


