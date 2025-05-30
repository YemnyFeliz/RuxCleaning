import React from 'react';
import '../src/App.css';
import '../styles/Footer.css'
import { Container, Row, Col } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons'


function RuxFooter() {
    return (
      <footer className="footer mt-5 p-4 ">
        <Container>
          <Row className="text-center justify-content-center p-4">
            <Col xs="auto">
              <SocialIcon url="https://www.facebook.com/ruxcleaning" className="icon" target="_blank"/>
            </Col>
            <Col xs="auto">
              <SocialIcon url="https://www.instagram.com/ruxcleaning" className="icon" target="_blank" />
            </Col>
            {/* <Col xs="auto">
              <SocialIcon url="https://www.x.com/ruxcleaning" className="icon" target="_blank"/>
            </Col> */}
          </Row>
          <Row className="text-center mt-3">
            <Col>
              <p className="footer-text">© {new Date().getFullYear()} Rux Cleaning. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }

export default RuxFooter;