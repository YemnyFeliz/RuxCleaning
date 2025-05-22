import React from "react";
import '../src/App.css';
import '../styles/residential.css';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { CardBody } from "react-bootstrap";

function ResidentialMain() {
    return (


        <div className="genResidential container ">
            <h2 className="resTitle">Residential Cleaning in General</h2>

            {/* Row 1 - Card Left, Image Right */}
            <div className="whyResidential">
                <Row className="align-items-center mb-5">
                    <Col md={6}>
                        <Card className="resCard h-100">
                            <Card.Body>
                                <Card.Title className="resCardTitle">  Why You Need Residential Cleaning Services  </Card.Title>
                                <Card.Text className="resCardText">
                                    <p> At <strong>Rux Cleaning</strong>, we understand that a clean home is a happy home. Residential cleaning is essential for maintaining a <strong>healthy, comfortable, and welcoming environment</strong> in your home. </p>
                                    <p> Whether you're busy with work, family, or just need a break, our professional cleaning services give you back your time and peace of mind, knowing your home is in good hands.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>


            {/* Row 2 - Image Left, Card Right */}
            <div className="howResidential">
                <Row className="align-items-center flex-md-row-reverse mb-5">
                    <Col md={6}>
                        <Card className="resCard h-100">
                            <Card.Body>
                                <Card.Title className="resCardTitle"> How Residential Cleaning Helps You </Card.Title>
                                <Card.Text className="resCardText">
                                    <ul>
                                        <li><strong>Saves Time and Effort</strong> – Skip the hassle of scrubbing and dusting! Let our team handle everything so you can focus on what matters most.
                                        </li> <br />
                                        <li><strong>Creates a Healthier Home </strong>– Our deep cleaning removes allergens, dust, bacteria, and mold, improving indoor air quality and reducing potential health risks.</li><br />
                                        <li><strong>Stress-Free Living </strong>– Enjoy coming home to a spotless environment without the worry of cleaning chores piling up.</li><br />
                                        <li><strong>Increases Property Value </strong>– Regular cleaning preserves the condition of your home, keeping floors, furniture, and appliances in top shape.</li><br />
                                        <li><strong>Customized Cleaning Plans </strong>– Tailored services to meet individual needs and schedules.
                                        </li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>


            {/* Row 3 - Single Card Slightly Right */}
            <div className="includedResidential">
                <Row className="mb-5">
                    <Col md={{ span: 8, offset: 2 }}>
                        <Card className="resCard h-100">
                            <Card.Body>
                                <Card.Title className="resCardTitle">What Does Residential Cleaning with Rux Cleaning Include?
                                </Card.Title>
                                <Card.Text className="resCardText">
                                    <p>Our <strong>Eco-Friendly cleaning services</strong> are designed to meet the unique needs of your home. We offer:
                                    </p>
                                    <p>🏡 <strong>General House Cleaning - </strong> Dusting, vacuuming, and sanitizing all living areas, bedrooms, and common spaces.</p>
                                    <p>🍽 <strong>Kitchen Cleaning - </strong> Cleaning countertops, sinks, appliances (inside and out), and sweeping/mopping floors.</p>
                                    <p>🛁 <strong>Bathroom Cleanin - </strong>Disinfecting toilets, tubs, showers, sinks, and wiping down mirrors and countertops.</p>
                                    <p>🧹 <strong>Bedroom & Living Areas – </strong>Changing bed linens, dusting furniture, and vacuuming carpets.</p>
                                    <p>🧼 <strong>Deep Cleaning - </strong> Comprehensive cleaning of hard-to-reach places like baseboards, vents, and behind appliances.</p>
                                    <p>🚛 <strong>Move-In/Move-Out Cleaning – </strong> Preparing homes for new occupants by removing dirt, dust, and grime.</p>
                                    <p>🛠 <strong>Post Construction Cleaning - </strong> removes dust, debris, and odors, leaving your property move-in ready.</p>
                                    <p>🌿 <strong>Eco-Friendly - </strong> We use <strong>green cleaning products </strong> that are safe for your family and the environment.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>


            {/* Row 4 - Centered Card */}
            <div className="surroundingAreas">
                <Row className="justify-content-center">
                    <Col md={6}>
                        <Card className="bookCard ">
                            <Card.Body>
                                <Card.Title className="resCardTitle">Serving Bolingbrook and Surrounding Areas</Card.Title>
                                <Card.Text className="resCardText">
                                    <p>Rux Cleaning is proud to serve the <strong>Bolingbrook community </strong> with reliable, professional cleaning services that prioritize your satisfaction and well-being.</p>
                                    <p><strong>📞 Contact us today for a free estimate and experience a cleaner, healthier home!</strong></p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>



    );
}

export default ResidentialMain;
