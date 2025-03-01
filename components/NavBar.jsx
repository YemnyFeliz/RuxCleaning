import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import '../styles/NavBar.css';
import '../src/App.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

import Home from '../pages/Home';
import RegularCleaning from '../Pages/Residential/RegularCleaning';
import DeepCleaning from '../Pages/Residential/DeepCleaning';
import MoveCleaning from '../Pages/Residential/MoveCleaning';
import PostConstruction from '../Pages/Residential/PostConstruction';
import Commercial from '../pages/Commercial';
import EcoFriendly from '../pages/Eco-Friendly';
import Career from '../Pages/Career';
import CallAction from '../pages/CallAction';
import logo from '../src/assets/logo.png'; 

const Navigation = () => {
  return (
    <Router>
      <Navbar fixed="top" collapseOnSelect expand="lg" className="bg-body-tertiary">
        {/* <Container> */}
          {/* ✅ Fix Logo & Brand Name Alignment */}
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <img 
              alt="ruxcleaninglogo" 
              src={logo} 
              width="150" // Adjust width
              height="150" // Set height explicitly
              className="d-inline-block align-top" 
            />
            <span className="brand-name">RuxCleaning</span> {/* Styled in CSS */}
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* ✅ Ensure NavLinks Take Full Space */}
            <Nav className="ms-auto w-100 d-flex justify-content-around">
              <Nav.Link as={Link} to="/">Home</Nav.Link>

              <NavDropdown title="Residential" id="collapsible-nav-dropdown" className='custom-dropdown'>
                
                <NavDropdown.Item as={Link} to="/regularCleaning">Regular Cleaning</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/deepCleaning">Deep Cleaning</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/moveCleaning">Move in/out Cleaning</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/postConstructionCleaning">Post Construction Cleaning</NavDropdown.Item>
                
              </NavDropdown>

              <Nav.Link as={Link} to="/commercial">Commercial</Nav.Link>
              <Nav.Link as={Link} to="/ecoFriendly">Eco Friendly</Nav.Link>
              <Nav.Link as={Link} to="/career">Career</Nav.Link>
              <Button className="callBtn" variant="secondary" as={Link} to="/callAction">Call Now 777-777-7777</Button>
            </Nav>
          </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/regularCleaning" element={<RegularCleaning />} />
          <Route path="/deepCleaning" element={<DeepCleaning />} />
          <Route path="/moveCleaning" element={<MoveCleaning />} />
          <Route path="/postConstructionCleaning" element={<PostConstruction />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/ecoFriendly" element={<EcoFriendly />} />
          <Route path="/career" element={<Career />} />
          <Route path="/callAction" element={<CallAction />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Navigation;

