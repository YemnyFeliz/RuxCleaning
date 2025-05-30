import React from "react";
import { useState } from 'react';
import "../../src/App.css";
import '../../styles/MoveCleaning.css';

import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import residentialCleaning from "../../src/assets/residentialCleaning.jpg";

import MoveKitchen from '../../src/assets/MoveKitchen.jpg';
import MoveDeep from '../../src/assets/MoveDeep.jpg';
import MoveLiving from '../../src/assets/MoveLiving.jpg';
import MoveProducts from '../../src/assets/MoveProducts.jpg';
import MoveBathroom from '../../src/assets/MoveBathroom.jpg'

function MoveCleaning() {

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
                            <h2 className="regTitle">Move-In/Move-Out Cleaning
                            </h2>
                            <div className="regIntroText">
                                <p className="text-indent">Moving into a new home or leaving your old one can be stressful, but <strong>move-in/out cleaning</strong> from <strong>Rux Cleaning</strong> makes the process easier and more enjoyable. Our professional cleaning service ensures that your new or vacated home is spotless and ready for the next chapter, all while using <strong>safe, environmentally-friendly cleaning products</strong> that protect your health and the planet.</p>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row xs={1} md={2} className="g-4">
                    <Col className="whyMoveCleaning" md={12} lg={6} >
                        <Card className="regCard">
                            <Card.Body>
                                <Card.Title className="regCardTitle">Why You Need Move-In/Move-Out Cleaning
                                </Card.Title>
                                <Card.Text className="regCardText">
                                    <ul>
                                        <li><strong>A Fresh Start – </strong>Whether you're moving in or moving out, cleaning is essential to make sure every corner of your space is ready for a new beginning. Our move-in/out service guarantees a <strong>fresh, hygienic environment</strong> free of dirt, grime, and odors.
                                        </li>
                                        <li><strong>Safe and Green Cleaning –</strong> we use <strong>eco-friendly solutions</strong> that are non-toxic, biodegradable, and safe for everyone, including children and pets. You don’t have to worry about harsh chemicals in your new home or on your belongings.
                                        </li>
                                        <li><strong>Time and Energy Saver –</strong> Moving is exhausting enough. With our comprehensive cleaning services, you won’t have to spend hours scrubbing every surface, giving you more time to focus on your move.
                                        </li>
                                        <li><strong>Avoiding Security Deposit Deductions – </strong>If you're a renter, cleaning your old space thoroughly is essential to avoid deductions from your security deposit. Our expert cleaners will make sure the property is spotless, ensuring you get the maximum refund.
                                        </li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className="howMoveClenaing" md={12} lg={6}>
                        <Card className="regCard">
                            <Card.Body>
                                <Card.Title className="regCardTitle">How It Helps You
                                </Card.Title>
                                <Card.Text className="regCardText">
                                    <ul>
                                        <li><strong>Healthy Living Environment:</strong> Our eco-friendly products clean without leaving behind harmful residue, so you can breathe easy in your new space.
                                        </li>
                                        <li><strong>Comprehensive Service:</strong> We cover all areas, including hard-to-reach spots, ensuring every inch of your space is clean and disinfected.
                                        </li>
                                        <li><strong>Peace of Mind:</strong> With Rux Cleaning, you can rest assured that your move-in or move-out cleaning will be done right. We take care of the details, so you don’t have to worry about a thing.
                                        </li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>




                <h2 className="regCardTitle mb-5" >What’s Included in Our Move-In/Move-Out Cleaning
                </h2>

                <Row className="justify-content-center g-4 mb-4">
                    <Col xs={12} sm={6} lg={4} xl={3}>
                        <Card className="smCard">
                            <Card.Body>
                                <Card.Img className="cardImg" variant="top" src={MoveKitchen} />
                                <Card.Title className="smCardTitle">Kitchen:</Card.Title>
                                <Card.Text className="smCardText">
                                    <p>Cleaning all appliances (inside and out), countertops, sinks, and cabinets. Scrubbing floors and wiping down baseboards.
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} sm={6} lg={4} xl={3}>
                        <Card className="smCard">
                            <Card.Body>
                                <Card.Img className="cardImg" variant="top" src={MoveBathroom} />
                                <Card.Title className="smCardTitle">Bathrooms:</Card.Title>
                                <Card.Text className="smCardText">
                                    <p>Disinfecting toilets, tubs, showers, sinks, and counters. Cleaning mirrors and ensuring that every surface is sanitized.
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    
                    <Col xs={12} sm={6} lg={4} xl={3}>
                        <Card className="smCard">
                            <Card.Body>
                                <Card.Img className="cardImg" variant="top" src={MoveLiving} />
                                <Card.Title className="smCardTitle">Living Areas & Bedrooms:</Card.Title>
                                <Card.Text className="smCardText">
                                    <p>Dusting and wiping down all furniture, baseboards, and window sills. Vacuuming carpets, cleaning floors, and removing any debris left behind.
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    </Row>
                    <Row className="justify-content-center g-4">
                    <Col xs={12} sm={6} lg={4} xl={3}>
                        <Card className="smCard">
                            <Card.Body>
                                <Card.Img className="cardImg" variant="top" src={MoveDeep} />
                                <Card.Title className="smCardTitle">Deep Cleaning Areas:</Card.Title>
                                <Card.Text className="smCardText">
                                    <p>Cleaning inside cabinets, closets, and drawers to remove dust and debris. Wiping down walls, light switches, and door frames.
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} sm={6} lg={4} xl={3}>
                        <Card className="smCard">
                            <Card.Body>
                                <Card.Img className="cardImg" variant="top" src={MoveProducts} />
                                <Card.Title className="smCardTitle">Eco-Friendly Products:</Card.Title>
                                <Card.Text className="smCardText">
                                    <p>We use <strong>green-certified, biodegradable cleaning supplies</strong> that are effective yet gentle on the environment, leaving your home fresh without the harsh chemicals.

                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

               


                <Row className="justify-content-center">
                    <Col xs={12} md={8} lg={6}>
                        <Card className="bookCard ">
                            <Card.Body>
                                <Card.Title className="resCardTitle">Serving Bolingbrook and Surrounding Areas</Card.Title>
                                <Card.Text className="resCardText">
                                    <p id="indent" className="text-center">

                                        Let <strong>Rux Cleaning</strong> make your move easier and more eco-friendly.
                                        Our <strong>move-in/out cleaning services in Bolingbrook</strong> provide a
                                        <strong>safe, fresh, and spotless home</strong> without compromising the health of your family or the planet.


                                    </p>

                                    <div className="d-flex flex-column align-items-center">
                                        <p id="indent" className="text-center">
                                            {!showPhone ? (
                                                <Button variant="secondary" className="m-1" onClick={handleToggle}>
                                                    📞 Contact us
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
                                            <strong>
                                                today for a quote and enjoy a hassle-free, eco-friendly move!


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

export default MoveCleaning;