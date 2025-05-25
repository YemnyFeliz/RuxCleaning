import React from "react";
import { useState } from 'react';
import '../../src/App.css';
import '../../styles/DeepCleaning.css';
import residentialCleaning from "../../src/assets/residentialCleaning.jpg";

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


function DeepCleaning() {

    const [showPhone, setShowPhone] = useState(false);

    const handleToggle = () => {
        setShowPhone(!showPhone);
    };

    const handlePhoneClick = () => {
        setShowPhone(false);
    };
    return (
        <>
            <div className="deepCleaning container">
                <Row>
                    <Col>
                        <h2 className="deepCleaningTitle">Deep Cleaning Services </h2>
                        <div className="deepCleaningIntroText">
                            <p className="text-indent">Looking for a <strong>thorough and eco-friendly deep cleaning service</strong> in Bolingbrook?
                                At <strong>Rux Cleaning</strong>, we specialize in <strong>green deep cleaning solutions</strong> that eliminate dirt, bacteria, and allergens while using <strong>safe, non-toxic products</strong> for a healthier home and environment.
                            </p>
                        </div>
                    </Col>
                </Row>


                <Row xs={1} md={2} className="g-4">
                    <Col className="whatDeepCleaning">
                        <Card className="regCard">
                            <Card.Body>
                                <Card.Title className="regCardTitle">What is Deep Cleaning?
                                </Card.Title>
                                <Card.Text className="regCardText">
                                    <p><strong>Deep cleaning</strong> is an intensive, detailed cleaning process that goes beyond regular housekeeping. It targets dirt, grime, bacteria, and buildup in hard-to-reach areas, ensuring a healthier and more hygienic home environment. Unlike standard cleaning, which focuses on surface-level tidiness, deep cleaning removes deep-seated dust, allergens, and germs.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>



                    <Col className="whenDeepCleaning">
                        <Card className="regCard">
                            <Card.Body>
                                <Card.Title className="regCardTitle">When Should You Get a Deep Cleaning Service?
                                </Card.Title>
                                <Card.Text className="regCardText">
                                    <ul id="list">
                                        <li>✔️ Moving into a new home
                                        </li>
                                        <li>✔️ Preparing for a special event or guests
                                        </li>
                                        <li>✔️ After renovations or home construction
                                        </li>
                                        <li>✔️ At least twice a year for maintenance
                                        </li>
                                        <li>✔️ If you notice dust buildup, odors, or stains
                                        </li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="mb-5 mt-5">
                    <Col>
                        <Card className="regCard deepCard">
                            <Card.Body>
                                <Card.Title className="regCardTitle">Why Choose Deep Cleaning?
                                </Card.Title>
                                <Card.Text className="regCardText">
                                    <p id="includedIntro" className="text-indent">Deep cleaning is essential for homeowners, renters, and property managers who want a truly fresh and sanitized space. Here’s how it helps:
                                    </p><br />
                                    <p>✅ <strong>Healthier Home Environment –</strong> Removes allergens, bacteria,  and dust buildup, improving indoor air quality.
                                    </p>
                                    <p>✅ <strong>Prevents Pest Infestations –</strong> Cleans hidden food debris and buildup that attract pests like ants or cockroaches.</p>
                                    <p>✅ <strong>Extends the Life of Your Home –</strong> Protects furniture, carpets, and appliances from long-term dirt and wear.
                                    </p>
                                    <p>✅ <strong>Eco-Friendly & Safe –</strong> We use biodegradable, non-toxic products that are safe for children, pets, and the planet.</p>
                                    <p>✅ <strong>Tough on Dirt, Gentle on Surfaces –</strong> Our deep cleaning methods restore freshness without harsh chemicals.</p>
                                    <p>✅ <strong>Perfect for Seasonal & Move-In/Move-Out Cleaning –</strong> Ideal for spring cleaning, post-renovation, or preparing a home for new occupants.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col>

                        <h2 className="regCardTitle">What Does Deep Cleaning Include?
                        </h2>
                        <div className="deepCleaningIntroText">
                            <p className="text-indent">
                                A deep cleaning service covers all areas of your home, including:
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row className="g-4 mb-4">
                    <Col md={6}>

                        <Card className="smCard h-100">
                            <Card.Body>
                                <Card.Img className="cardImg" variant="top" src={residentialCleaning} />
                                <Card.Title className="smCardTitle">Kitchen</Card.Title>
                                <Card.Text className="smCardText"></Card.Text>
                                <ul>
                                    <li>All surfaces dusted and cleaned (ceiling fans, blinds, furniture tops, trims, doors, baseboards, chairs, table)</li>
                                    <li>Scrubbing grease and grime from stove tops and range hoods</li>
                                    <li>Deep cleaning appliances exterior (oven, refrigerator, dishwasher)
                                    </li>
                                    <li>Microwave cleaned inside and out
                                    </li>
                                    <li>Countertops, sinks, and cabinet exteriors cleaned and disinfected
                                    </li>
                                    <li>Degreasing backsplash and tile grout</li>
                                    <li>Trash emptied and trash can cleaned and sanitized
                                    </li>
                                    <li>Floor vacuumed and mopped. </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card className="smCard h-100">
                            <Card.Body>
                                <Card.Img className="cardImg" variant="top" src={residentialCleaning} />
                                <Card.Title className="smCardTitle">Bathrooms
                                </Card.Title>
                                <Card.Text className="smCardText">
                                    <ul>
                                        <li>All surfaces dusted and cleaned (air vents, blinds, doors, baseboards, window sills, fixtures, vanities, medicine cabinet)</li>
                                        <li>Mirrors cleaned
                                        </li>
                                        <li>Deep scrubbing of showers, tubs, tiles, sinks, and toilets inside and out
                                        </li>
                                        <li>Disinfecting high-touch surfaces like doorknobs and light switches
                                        </li>
                                        <li>Trash emptied and trash can cleaned and sanitized
                                        </li>
                                        <li>Floor vacuumed, mopped and disinfected
                                        </li>

                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="g-4 mb-4">
                    <Col md={6}>

                        <Card className="smCard h-100">
                            <Card.Body>
                                <Card.Img className="cardImg" variant="top" src={residentialCleaning} />
                                <Card.Title className="smCardTitle">Bedrooms</Card.Title>
                                <Card.Text className="smCardText">
                                    <ul>
                                        <li>All surfaces dusted and cleaned
                                        </li>
                                        <li>Mirrors cleaned
                                        </li>
                                        <li>Beds made and linens changed (if provided)
                                        </li>
                                        <li>Cleaning baseboards, doors, windowsills and blinds
                                        </li>
                                        <li>Cleaning air vents and ceiling fans to remove dust buildup
                                        </li>
                                        <li>Trash emptied and trash can cleaned and sanitized
                                        </li>
                                        <li>Floor vacuumed and mopped
                                        </li>

                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card className="smCard h-100">
                            <Card.Body>
                                <Card.Img className="cardImg" variant="top" src={residentialCleaning} />
                                <Card.Title className="smCardTitle">Other Areas: living room, hallway, stairs</Card.Title>
                                <Card.Text className="smCardText">
                                    <ul>
                                        <li>All surfaces dusted and cleaned
                                        </li>
                                        <li>Cleaning baseboards, doors, windowsills and blinds
                                        </li>
                                        <li>Sofas, chairs vacuumed
                                        </li>
                                        <li>Floors vacuumed and mopped, including hard floors.
                                        </li>

                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row >

                <Row className="justify-content-center">
                    <Col md={6}>
                        <Card className="bookCard ">
                            <Card.Body>
                                <Card.Title className="resCardTitle">Serving Bolingbrook and Surrounding Areas</Card.Title>
                                <Card.Text className="resCardText">
                                    <p id="indent">
                                        Whether you’re moving in, moving out, or just need a fresh start, our team is ready to provide
                                        <strong>
                                            reliable, eco-friendly deep cleaning services in Bolingbrook.
                                        </strong>

                                    </p>

                                    <div className="d-flex flex-column align-items-center">
                                        <p id="indent" className="text-center">
                                            {!showPhone ? (
                                                <Button variant="secondary" className="m-1" onClick={handleToggle}>
                                                    📞 Contact us
                                                </Button>


                                            ) : (
                                                <a
                                                    href="tel:1234567890"
                                                    onClick={handlePhoneClick}
                                                    className="m-2 text-decoration-none"
                                                >
                                                    <strong style={{ fontSize: "1.2rem" }}>📱 (123) 456-7890</strong>
                                                </a>

                                            )}
                                            <strong>
                                                today for a free quote and let’s make your home sparkle the green way!
                                                Book a Professional Deep Cleaning Today!

                                            </strong></p>
                                    </div>


                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


            </div>
            {/* <Row className="justify-content-center">
                <Col md={6}>
                    <Card className="bookCard ">
                        <Card.Body>
                            <Card.Title className="resCardTitle">
                                <Card.Text className="regCardText">
                                    <p className="text-indent">Whether you’re moving in, moving out, or just need a fresh start, 
                                    our team is ready to provide reliable, eco-friendly deep cleaning services in Bolingbrook. </p>  
                                    <p > 
                                    <Button variant="secondary" className="m-1" onClick={handleToggle}>
                                        📞 Callus today</Button>    
                                    
                                    
                                     for a free quote and let’s make your home sparkle the green way!
                                        Book a Professional Deep Cleaning Today!</p>
                                   
                                </Card.Text>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row> */}



        </>
    )
}

export default DeepCleaning;