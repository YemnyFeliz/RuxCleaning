import React from "react";
import "../styles/Home.css";
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
// import ListGroup from 'react-bootstrap/ListGroup';

function Home() {
    return (
        <>
            <div className="header-wraper">
                <div className="intro">
                    <h1>Rux Cleaning</h1>
                    <p className="slogan">"Sparkle and shine, every time—cleaning made effortless!"</p>
                </div>

            </div>

            <div className="intro-text-div">
                <p className="intro-text">At Rux Cleaning, our mission is to provide top-quality, reliable, and eco-friendly cleaning services that create healthier and more comfortable spaces for our clients. 
                    We are committed to excellence, professionalism, and customer satisfaction, ensuring every home and business we clean is left spotless and refreshed.
                    Through sustainability, integrity, and attention to detail, we strive to build long-term relationships and make a positive impact on our community - one clean space at a time.
                </p>
            </div>

            <div className="services">
                    <h2>Our Services</h2>
                   
                    {/* <Card className="text-center card">
                        
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text className="cardtext">
                                🏡 Residential Cleaning – Routine and deep home cleaning to keep your living space fresh and inviting.
	🏢 Commercial Cleaning – Office, retail, warehouse, and industrial cleaning for a healthier work environment.
	🛠 Post-Construction Cleaning – Removing dust, debris, and residue for a clean, move-in-ready space.
	🚛 Move-In/Move-Out Cleaning – Preparing homes for new occupants by removing dirt, dust, and grime.
	🧼 Deep Cleaning – Comprehensive cleaning for hard-to-reach areas and high-traffic spaces.
                            </Card.Text>
                            
                        </Card.Body>

                    </Card> */}

{/* <Button variant="primary">Go somewhere</Button> */}

<Row className="justify-content-center">
    <Col md={8}>
        <Card className="text-center card">
            <Card.Body>
                {/* <Card.Title>Special title treatment</Card.Title> */}
                <Card.Text className="cardtext">
                    🏡 Residential Cleaning – Routine and deep home cleaning to keep your living space fresh and inviting. <br />
                    <br />
                    🏢 Commercial Cleaning – Office, retail, warehouse, and industrial cleaning for a healthier work environment. <br />
                    <br />
                    🛠 Post-Construction Cleaning – Removing dust, debris, and residue for a clean, move-in-ready space. <br />
                    <br />
                    🚛 Move-In/Move-Out Cleaning – Preparing homes for new occupants by removing dirt, dust, and grime. <br />
                    <br />
                    🧼 Deep Cleaning – Comprehensive cleaning for hard-to-reach areas and high-traffic spaces.
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>
</Row>


                </div>

        </>
    )
}

export default Home;