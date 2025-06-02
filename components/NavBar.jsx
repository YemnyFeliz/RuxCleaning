import React from 'react';
import { useState } from 'react';
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

  const [expanded, setExpanded] = useState(false);

  const handleLinkClick = () => {
    setExpanded(false); // Collapse the menu after any link is clicked
    // window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  return (
    <Navbar fixed="top" collapseOnSelect expand="lg"
      expanded={expanded}
      onToggle={(isExpanded) => setExpanded(isExpanded)}
      className="bg-body-tertiary">
      <Container className='navContainer'>
        <Navbar.Brand as={Link} to="/" onClick={handleLinkClick} className="d-flex align-items-center">
          <img alt="ruxcleaninglogo" src={logo}  className="d-inline-block align-top mt-5 logo" />
          {/* <span className="brand-name">RuxCleaning</span> */}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto w-100 d-flex justify-content-around">
            <Nav.Link as={Link} to="/" onClick={handleLinkClick} >Home</Nav.Link>

            {/* <Nav.Link as={Link} to="/residential"> Residential */}
            <NavDropdown 
            title={
              
              <span className="dropdown-title-link">
              <Link to="/residential" className="dropdown-link" onClick={handleLinkClick}>
                Residential
              </Link>
            </span>}
            
            id="collapsible-nav-dropdown" className='custom-dropdown'>
              <NavDropdown.Item as={Link} to="/regularCleaning" onClick={handleLinkClick} >Regular Cleaning</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/deepCleaning" onClick={handleLinkClick} >Deep Cleaning</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/moveCleaning" onClick={handleLinkClick} >Move in/out Cleaning</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/postConstructionCleaning" onClick={handleLinkClick} >Post Construction Cleaning</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/commercial" onClick={handleLinkClick} >Commercial</Nav.Link>
            <Nav.Link as={Link} to="/ecoFriendly" onClick={handleLinkClick} >Eco Friendly</Nav.Link>
            <Nav.Link as={Link} to="/career" onClick={handleLinkClick} >Career</Nav.Link>
            <Button className="callBtn" variant="secondary" href="tel:630-441-4446">Call Now (630) 441 - 4446</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;


