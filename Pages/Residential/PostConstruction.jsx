import React from "react";
import { useState } from 'react';
import '../../src/App.css';
import '../../styles/PostConstruction.css';
import postConstruction from "../../src/assets/postConstruction.jpeg";

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function PostConstruction() {

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
                            <h2 className="regTitle">Post-Construction Cleaning
                            </h2>
                        </div>
                    </Col>
                </Row>

                <Row xs={1} md={2} className="g-4">
                    <Col md={12} lg={6}>

                        <Card className="regCard">
                            <Card.Body>
                                <Card.Title className="regCardTitle">What is Post-Construction Cleaning?
                                </Card.Title>
                                <Card.Text className="regCardText">
                                    <p id="indent">
                                        Post-construction cleaning is the <strong>final step after a building or renovation project</strong>,
                                        ensuring that a newly constructed or remodeled home is <strong>clean, safe, and move-in ready</strong>.
                                        Construction projects leave behind dust, debris, and hazardous materials that require professional cleaning to make the space safe, spotless, and livable.
                                        At <strong>Rux Cleaning</strong>, we take it a step further by using <srtong>eco-friendly, non-toxic products</srtong> that protect both your home and the environment.
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={12} lg={6}>
                        <Card.Img className="img" src={postConstruction}></Card.Img>
                    </Col>
                </Row>

                <Row>
                    <Col md={12} lg={8} className="mx-auto">
                        <Card className="regCard">
                            <Card.Body>
                                <Card.Title className="regCardTitle">Why Do You Need Post-Construction Cleaning?
                                </Card.Title>
                                <Card.Text className="regCardText">
                                    <ul>
                                        <li><strong>Eliminates Dust & Construction Residue –</strong> Fine dust and leftover debris can cause allergies and respiratory issues. Our team ensures a thorough cleanup for a fresh start.
                                        </li>
                                        <li><strong>Ensures a Safe, Healthy Living Space –</strong> Post-construction materials like adhesives, paint fumes, and sawdust can linger in the air. We use <strong>eco-friendly cleaning methods</strong> to remove these harmful particles.
                                        </li>
                                        <li><strong>Preserves Your New Space –</strong> Proper cleaning prevents buildup and residue that could damage floors, countertops, and appliances.
                                        </li>
                                        <li><strong>Saves Time & Effort – </strong>Cleaning after construction is a labor-intensive process. Let our <strong>Bolingbrook-based professional</strong> team handle it while you enjoy your newly improved home.
                                        </li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col md={12} lg={6}>
                        <Card className="regCard">
                            <Card.Body>
                                <Card.Title className="regCardTitle">How Post-Construction Cleaning Helps You</Card.Title>
                                <Card.Text className="regCardText">
                                    <p>✅ <strong>Improves Indoor Air Quality –</strong> We remove dust, allergens, and toxins without introducing harsh chemicals into your space.</p>
                                    <p>✅ <strong>Safe for Families & Pets –</strong> Our <strong>non-toxic, biodegradable cleaning products</strong> ensure a chemical-free home that’s safe for everyone.</p>
                                    <p>✅ <strong>Sustainable & Responsible – </strong>Eco-friendly cleaning reduces environmental impact by using green-certified products and responsible waste disposal.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="regCard">
                            <Card.Body>
                                <Card.Title className="regCardTitle">Why Choose Post-Construction Cleaning?</Card.Title>
                                <Card.Text className="regCardText">
                                    <p>🏡 <strong>Locally Trusted Experts –</strong> Serving <strong>Bolingbrook and surrounding areas</strong>, we take pride in providing top-quality, eco-friendly cleaning services.
                                    </p>
                                    <p>🌿 <strong>Eco-Conscious Cleaning –</strong> We use <strong>green-certified, biodegradable products</strong> that are safe for you and the environment.
                                    </p>
                                    <p>💯 <strong>Thorough & Professional Service –</strong> Our <strong>detailed cleaning process</strong> ensures your home is <strong>flawless, fresh, and move-in ready</strong>.
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


                <Row className="mb-5">
                    <Col md={12} lg={8} className="mx-auto">
                        <Card Card className="resCard h-100">
                            <Card.Body>
                                <Card.Title className="resCardTitle">What’s Included in Our Post-Construction Cleaning?</Card.Title>
                                <Card.Text className="resCardText">
                                    <p>🌱 <strong>Dust & Debris Removal – </strong>Thorough vacuuming, sweeping, and dusting to eliminate fine particles from walls, ceilings, vents, and floors.</p>
                                    <p>🌱 <strong>Surface Cleaning & Sanitization –</strong> Wiping down countertops, cabinets, doors, and baseboards with non-toxic, eco-friendly solutions.</p>
                                    <p>🌱 <strong>Floor Care –</strong> Mopping, vacuuming, and polishing floors to remove construction residue. Safe methods used for wood, tile, and carpeted surfaces.</p>
                                    <p>🌱 <strong>Window & Glass Cleaning –</strong> Streak-free cleaning of windows, mirrors, and glass doors to remove smudges and construction dust.</p>
                                    <p>🌱 <strong>Air Vent & Filter Cleaning –</strong> Removing dust from air ducts and vents to improve indoor air quality.</p>
                                    <p>🌱 <strong>Safe Disposal of Construction Waste –</strong> Responsible removal of leftover debris using sustainable waste disposal practices.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col xs={12} md={8} lg={6}>
                        <Card className="bookCard ">
                            <Card.Body>
                                <Card.Title className="resCardTitle">Get a Fresh Start with Post-Construction Cleaning!
                                </Card.Title>
                                <Card.Text className="resCardText">
                                    <p id="indent">
                                        If you've recently completed a construction or renovation project in <strong>Bolingbrook</strong>,
                                        let <strong>Rux Cleaning</strong> handle the final cleanup.
                                        Contact us today for a <strong>free quote</strong> and enjoy a clean, safe, and eco-friendly home!
                                    </p>

                                    <div className="d-flex flex-column align-items-center text-center">
                                        <p id="indent" className="text-center">
                                            {!showPhone ? (
                                                <Button variant="secondary" className="m-1 contactBtn" onClick={handleToggle}>
                                                    📞 Call Rux Cleaning Today!
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
                                        <p><strong>
                                            📍 Serving Bolingbrook & Nearby Areas

                                        </strong></p>
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

export default PostConstruction;