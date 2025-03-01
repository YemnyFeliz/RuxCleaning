import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from 'react-router-dom';

import '../styles/NavBar.css';
import '../src/App.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Home from '../pages/Home';
import RegularCleaning from '../Pages/Residential/RegularCleaning';
import DeepCleaning from '../Pages/Residential/DeepCleaning';
import MoveCleaning from '../Pages/Residential/MoveCleaning';
import PostConstruction from '../Pages/Residential/PostConstruction';
import Commercial from '../pages/Commercial';
import EcoFriendly from '../pages/Eco-Friendly';
import Career from '../Pages/Career'
import CallAction from '../pages/CallAction';

const Navigation = () => {
  return (
    <Router>
    <Navbar fixed="top" collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">RuxCleaning</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link as={Link} to="/">Home</Nav.Link>

            <NavDropdown title="Residential" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/regularCleaning" >Regular Cleaning</NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/deepCleaning">
                Deep Cleaning
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/moveCleaning">Move in/out Cleaning</NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/postConstructionCleaning">
                Post Construction Cleaning
              </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/commercial">Commercial</Nav.Link>

              <Nav.Link as={Link} to="/ecoFriendly">Eco Friendly</Nav.Link>

              <Nav.Link as={Link} to="/career">Career</Nav.Link>

              <Nav.Link as={Link} to="/callAction">Call Action</Nav.Link>
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
        <Routes>
            <Route path="/" element={<Home />}> </Route>

            <Route path="/regularCleaning" element={<RegularCleaning />}> </Route>

            <Route path="/deepCleaning" element={<DeepCleaning />}> </Route>

            <Route path="/moveCleaning" element={<MoveCleaning />}> </Route>

            <Route path="/postConstructionCleaning" element={<PostConstruction />}> </Route>

            <Route path="/commercial" element={<Commercial />}> </Route>

            <Route path="/ecoFriendly" element={<EcoFriendly />}> </Route>

            <Route path="/career" element={<Career />}> </Route>

            <Route path="/callAction" element={<CallAction />}> </Route>




        </Routes>
    </div>

    </Router>
  );
}
export default Navigation;
