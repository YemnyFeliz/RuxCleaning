import React from "react";
import { useState } from 'react';
import "../src/App.css";
import "../styles/Commercial.css";

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


import commercialCleaning from "../src/assets/commercialCleaning.jpeg";
import breakroom from "../src/assets/breakroom.jpg";
import gencleaning from "../src/assets/gencleaning.jpg";
import restroom from "../src/assets/restroom.jpg";
import trashremoval from "../src/assets/trashremoval.jpg";

function Commercial() {

    const [showPhone, setShowPhone] = useState(false);

    const handleToggle = () => {
        setShowPhone(!showPhone);
    };

    const handlePhoneClick = () => {
        setShowPhone(false);
    };

    return (
        <>
            <div className="regResidential container">
                <Row>
                    <Col>
                        <div className="regIntro">
                            <h2 className="regTitle">Commercial Cleaning Services
                            </h2>
                            <div className="regIntroText text-indent">
                            <p >A <strong>clean and well-maintained workspace</strong> is essential for productivity, professionalism, and employee well-being. </p>
                             <p>   At <strong>Rux Cleaning</strong>, we offer <strong>eco-friendly commercial cleaning services</strong> in <strong>Bolingbrook</strong> to ensure your business space is spotless, hygienic, and welcoming for employees, clients, and visitors.
                            </p>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className="mb-5">

                <Col md={12} lg={6}>
                        <Card.Img className="imgC" src={commercialCleaning} />
                    </Col>
                    <Col md={12} lg={6}>
                        <Card className="regCard">
                            <Card.Body>
                                <Card.Title className="resCardTitle">What is Commercial Cleaning?</Card.Title>
                                <Card.Text className="resCardText">
                                    <p id="indent">Commercial cleaning is a <strong>specialized cleaning service tailored for businesses, offices, and commercial properties. </strong>
                                        Unlike residential cleaning, it involves <strong>deep sanitation, high-traffic area maintenance, and large-scale cleaning solutions</strong> to meet industry standards and ensure a healthy work environment.
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* <Col md={6}>
                        <Card.Img className="imgC" src={commercialCleaning} />
                    </Col> */}
                </Row>


                <Row>
                <Col md={12} lg={8} className="mx-auto">
                        <Card className="regCard h-100">
                            <Card.Body>
                                <Card.Title className="resCardTitle">Why Do Businesses Need Commercial Cleaning?</Card.Title>
                                <Card.Text className="resCardText">
                                    <p>✅ <strong>Creates a Professional & Welcoming Environment –</strong> A clean workspace <strong>enhances your company’s image</strong> and leaves a great impression on clients and visitors.</p>
                                    <p>✅ <strong>Ensures a Healthier Workplace –</strong> Reducing <strong>dust, bacteria, and allergens</strong> promotes a safer work environment, leading to fewer sick days.</p>
                                    <p>✅ <strong>Increases Employee Productivity –</strong> A clean, clutter-free workspace improves <strong>focus, morale, and efficiency.</strong></p>
                                    <p>✅<strong> Eco-Friendly & Safe –</strong> We use <strong>non-toxic, biodegradable cleaning products</strong>, ensuring a healthy environment without harmful chemicals.</p>
                                    <p>✅ <strong>Complies with Health & Safety Standards –</strong> Many industries have strict <strong>cleaning and sanitation requirements</strong> that must be met to ensure compliance.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


                <h2 className="resCardTitle mb-5">What’s Included in commercial Cleaning? </h2>
                <Row className="includedRegResidential g-4">
                    <Col xs={12} sm={6} md={6} lg={3}>
                        <Card className="smCard">
                            <Card.Body>
                                <Card.Img className="cardImg h-100" variant="top" src={gencleaning} />
                                <Card.Title className="smCardTitle"></Card.Title>
                                <Card.Text className="smCardText">
                                    <p>🧹 <strong>General Cleaning & Maintenance –</strong> Dusting, sweeping, mopping, and disinfecting high-traffic areas.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} sm={6} md={6} lg={3}>
                        <Card className="smCard">
                            <Card.Body>
                                <Card.Img className="cardImg h-100" variant="top" src={restroom} />
                                <Card.Title className="smCardTitle"></Card.Title>
                                <Card.Text className="smCardText">
                                    <p>🛁 <strong>Restroom Sanitation –</strong> Deep cleaning and sanitizing of sinks, toilets, and high-touch surfaces.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} sm={6} md={6} lg={3}>
                        <Card className="smCard">
                            <Card.Body>
                                <Card.Img className="cardImg h-100" variant="top" src={breakroom} />
                                <Card.Title className="smCardTitle"></Card.Title>
                                <Card.Text className="smCardText">
                                    🍽 <strong>Breakroom & Kitchen Cleaning –</strong> Wiping down countertops, cleaning sinks, and sanitizing appliances.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} sm={6} md={6} lg={3}>
                        <Card className="smCard">
                            <Card.Body>
                                <Card.Img className="cardImg" variant="top" src={trashremoval} />
                                <Card.Title className="smCardTitle"></Card.Title>
                                <Card.Text className="smCardText">
                                    🗑 <strong>Trash Removal –</strong> Ensuring a clean, clutter-free workspace with responsible waste disposal.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


               
                <Row>
                <Col md={12} lg={6}>
                        <Card className="regCard">
                            <Card.Body>
                                <Card.Title className="regCardTitle">How Rux Cleaning’s Commercial Services Help Your Business</Card.Title>
                                <Card.Text className="regCardText">
                                    <p>🌿 <strong>Healthier Workspace –</strong> Reduce germs, allergens, and bacteria to promote employee wellness.
                                    </p>
                                    <p>💼 <strong>Enhances Professional Image –</strong> A spotless workspace leaves a lasting impression on clients and visitors.
                                    </p>
                                    <p>⏳ <strong>Saves Time & Money –</strong> Our efficient services <strong>free up your staff</strong> to focus on their work instead of cleaning.
                                    </p>
                                    <p>♻ <strong>Eco-Friendly & Sustainable –</strong> We use <strong>green-certified cleaning products</strong> that are safe for people and the planet.
                                    </p>
                                    <p>🏢 <strong>Custom Cleaning Plans –</strong> Choose from daily, weekly, or customized cleaning schedules to suit your needs.
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col md={12} lg={6}>
                        <Card className="regCard">
                            <Card.Body>
                                <Card.Title className="regCardTitle">Why Choose Rux Cleaning?</Card.Title>
                                <Card.Text className="regCardText">

                                    <p>✨ <strong>Reliable & Professional Team –</strong> We provide <strong>consistent, high-quality service</strong> tailored to your business.</p>
                                    <p>🌿 <strong>Eco-Friendly & Non-Toxic Products –</strong> Our cleaning solutions are <strong>safe, effective, and environmentally responsible.</strong></p>
                                    <p>📍 <strong></strong> Serving businesses across the <strong>Bolingbrook area with expert commercial cleaning services.</strong></p>
                                    <p>📅 <strong><strong>Flexible Scheduling –</strong></strong> Available <strong>after-hours and on weekends</strong> to minimize business disruptions.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

                <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                    <Card className="bookCard ">
                        <Card.Body>
                            <Card.Title className="resCardTitle">Schedule Your Commercial Cleaning Service Today!</Card.Title>
                            <Card.Text className="resCardText">
                                <p id="indent" className="text-center">
                                Let <strong>Rux Cleaning</strong> keep your <strong>office, store, or business space</strong> spotless and sanitary
                                 with our <strong>eco-friendly commercial cleaning services in Bolingbrook.</strong>
                                </p>

                                <div className="d-flex flex-column align-items-center text-center">
                                <p id="indent" >
                                    {!showPhone ? (
                                        <Button variant="secondary" className="contactBtn" onClick={handleToggle}>
                                            📞 Call Us for a Free Quote!
                                        </Button>
                                        

                                    ) : (
                                        <a
                                            href="tel:6304414446"
                                            onClick={handlePhoneClick}
                                            className="m-2 text-decoration-none"
                                        >
                                            <strong style={{ fontSize: "1.2rem" }}>📱 630-441-4446</strong>
                                        </a>

                                    )}
                                   </p>
                                   <p>
                                   <strong>
                                   📍 Serving Bolingbrook & Surrounding Areas
                                    </strong>
                                   </p>
                                </div>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>



            </div>
        </>
    )
}

export default Commercial;