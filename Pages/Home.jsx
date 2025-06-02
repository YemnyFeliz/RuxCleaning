import React from "react";
import "../styles/Home.css";
import Card from 'react-bootstrap/Card';

import { Row, Col } from 'react-bootstrap';


function Home() {
    return (
        <>
            <div className="">
                <div className="header-wraper">
                    <div className="intro">
                        <h1>Rux Cleaning</h1>
                        <p className="slogan">"Sparkle and shine, every time—cleaning made effortless!"</p>
                    </div>

                </div>

                <Row >
                    <Col md={{ span: 8, offset: 2 }}>
                        <Card className="regCard">
                            <Card.Body>
                            
                                
                                <Card.Text className=" intro-text regCardText text-center ">
                                    <p>At <strong>Rux Cleaning</strong>, <br />our mission is to provide top-quality, reliable, and eco-friendly cleaning services that create healthier and more comfortable spaces for our clients.</p> 
<p>We are committed to excellence, professionalism, and customer satisfaction, ensuring every home and business we clean is left spotless and refreshed. </p>
<p>Through sustainability, integrity, and attention to detail, we strive to build long-term relationships and make a positive impact on our community - one clean space at a time.

                                    </p>
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <div className="services m-5">
                    <h2 className="resCardTitle homeh2">Our Services</h2>



                    <Row className="justify-content-center">
                        <Col xs={12} sm={10} md={8}>
                            <Card className="cardHome">
                                <Card.Body>
                                    {/* <Card.Title>Special title treatment</Card.Title> */}
                                    <Card.Text className="cardtext text-center">
                                        <strong>🏡 Residential Cleaning <br /> </strong>Routine and deep home cleaning to keep your living space fresh and inviting. <br />
                                        <br />
                                        <strong>🏢 Commercial Cleaning <br /> </strong> Office, retail, warehouse, and industrial cleaning for a healthier work environment. <br />
                                        <br />
                                        <strong>🛠 Post-Construction Cleaning <br />  </strong>Removing dust, debris, and residue for a clean, move-in-ready space. <br />
                                        <br />
                                        <strong>🚛 Move-In/Move-Out Cleaning  <br /> </strong>Preparing homes for new occupants by removing dirt, dust, and grime. <br />
                                        <br />
                                        <strong>🧼 Deep Cleaning <br />  </strong>Comprehensive cleaning for hard-to-reach areas and high-traffic spaces.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>


                </div>
            </div>
        </>
    )
}

export default Home;