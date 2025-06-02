import React from "react";
import { useState } from 'react';
import '../../src/App.css';
import '../../styles/DeepCleaning.css';


import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

// import residentialCleaning from "../../src/assets/residentialCleaning.jpg";
import DeepLivingArea from '../../src/assets/DeepLivingArea.jpg';
import DeepBedroom from '../../src/assets/DeepBedroom.jpg';
import DeepKitchen from '../../src/assets/DeepKitchen.jpg';
import DeepBathroom from '../../src/assets/DeepBathroom.jpg';


function DeepCleaning() {

    const [showPhone, setShowPhone] = useState(false);

    const handleToggle = () => {
        setShowPhone(!showPhone);
    };

    const handlePhoneClick = () => {
        setShowPhone(false);
    };
    return (

        <div className="deepCleaning container">
            <Row>
                <Col>
                    <h2 className="regTitle">Deep Cleaning Services </h2>
                    <div className="deepCleaningIntroText text-center" id="indent">
                        <p className="text-indent">Looking for a <strong>thorough and eco-friendly deep cleaning service</strong> in Bolingbrook?</p>
                        <p> At <strong>Rux Cleaning</strong>, we specialize in <strong>green deep cleaning solutions</strong> that eliminate dirt, bacteria, and allergens while using <strong>safe, non-toxic products</strong> for a healthier home and environment.</p>

                    </div>
                </Col>
            </Row>


            <Row xs={1} md={2} className="g-4">
                <Col className="whatDeepCleaning text-center" >
                    <Card className="regCard">
                        <Card.Body>
                            <Card.Title className="regCardTitle">What is Deep Cleaning?
                            </Card.Title>
                            <Card.Text className="regCardText" id="indent">
                                <p ><strong>Deep cleaning</strong> is an intensive, detailed cleaning process that goes beyond regular housekeeping. It targets dirt, grime, bacteria, and buildup in hard-to-reach areas, ensuring a healthier and more hygienic home environment. </p>
                                <p>Unlike standard cleaning, which focuses on surface-level tidiness, deep cleaning removes deep-seated dust, allergens, and germs.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>



                <Col className="whenDeepCleaning" >
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


            <Row className="text-center">
                <Col>
                    <div className="deepCleaningIntroText">
                        <h2 className="regCardTitle">Why Choose Deep Cleaning?
                        </h2>
                        <p id="includedIntro" className="text-indent">Deep cleaning is essential for homeowners, renters, and property managers who want a truly fresh and sanitized space. <p className="mt-4">Here’s how it helps:</p>
                        </p>
                    </div>
                </Col>
            </Row>


            <Row className="mb-5 text-center ">
                <Col md={12} lg={8} className="mx-auto">
                    <Card className="resCard deepCard ">
                        <Card.Body >
                            {/* <Card.Title className="regCardTitle">Why Choose Deep Cleaning?
                            </Card.Title> */}
                            <Card.Text className="regCardText ">
                                {/* <p id="includedIntro" className="text-indent">Deep cleaning is essential for homeowners, renters, and property managers who want a truly fresh and sanitized space. Here’s how it helps:
                                </p><br /> */}
                                <p>✅ <strong>Healthier Home Environment < br /></strong> Removes allergens, bacteria,  and dust buildup, improving indoor air quality.
                                </p>
                                <p>✅ <strong>Prevents Pest Infestations < br /></strong> Cleans hidden food debris and buildup that attract pests like ants or cockroaches.</p>
                                <p>✅ <strong>Extends the Life of Your Home < br /></strong> Protects furniture, carpets, and appliances from long-term dirt and wear.
                                </p>
                                <p>✅ <strong>Eco-Friendly & Safe < br /></strong> We use biodegradable, non-toxic products that are safe for children, pets, and the planet.</p>
                                <p>✅ <strong>Tough on Dirt, Gentle on Surfaces < br /></strong> Our deep cleaning methods restore freshness without harsh chemicals.</p>
                                <p>✅ <strong>Perfect for Seasonal & Move-In/Move-Out Cleaning < br /></strong> Ideal for spring cleaning, post-renovation, or preparing a home for new occupants.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="text-center">
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

            {/* KITCHEN */}
            <Row className="flex-md-row-reverse mb-5 text-center">
                <Col xs={12} sm={6} md={12} lg={6}>
                    <Card className="regCard">
                        <Card.Body>
                            <Card.Title className="resCardTitle">Kitchen</Card.Title>
                            <Card.Text className="resCardText">
                                <ul>
                                    <li>All surfaces dusted and cleaned (ceiling fans, blinds, furniture tops, trims, doors, baseboards, chairs, table)</li>< br />
                                    <li>Scrubbing grease and grime from stove tops and range hoods</li>< br />
                                    <li>Deep cleaning appliances exterior (oven, refrigerator, dishwasher)</li>< br />
                                    <li>Microwave cleaned inside and out </li>< br />
                                    <li>Countertops, sinks, and cabinet exteriors cleaned and disinfected </li>< br />
                                    <li>Degreasing backsplash and tile grout</li>< br />
                                    <li>Trash emptied and trash can cleaned and sanitized</li>< br />
                                    <li>Floor vacuumed and mopped. </li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} sm={6} md={12} lg={6}>
                    <Card.Img className="imgC" src={DeepKitchen} />
                </Col>
            </Row>

            <Row className="align-items-center mb-5 text-center">
                {/* <Col xs={12} sm={6} md={10} lg={6}>
                    <Card.Img
                        className="imgC"
                        src={DeepBathroom}
                        style={{ height: "450px", objectFit: "cover", width: "100%" }}
                    />
                </Col> */}

                <Col xs={12} sm={6} md={12} lg={6}>
                    <Card className="regCard">
                        <Card.Body>
                            <Card.Title className="resCardTitle">Bathrooms</Card.Title>
                            <Card.Text className="resCardText">
                                <ul>
                                    <li>All surfaces dusted and cleaned (air vents, blinds, doors, baseboards, window sills, fixtures, vanities, medicine cabinet)</li>< br />
                                    <li>Mirrors cleaned</li>
                                    <li>Deep scrubbing of showers, tubs, tiles, sinks, and toilets inside and out</li>< br />
                                    <li>Disinfecting high-touch surfaces like doorknobs and light switches
                                    </li>< br />
                                    <li>Trash emptied and trash can cleaned and sanitized
                                    </li>< br />
                                    <li>Floor vacuumed, mopped and disinfected
                                    </li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={12} lg={6}>
                    <Card.Img
                        className="imgC"
                        src={DeepBathroom}
                        style={{ height: "450px", objectFit: "cover", width: "100%" }}
                    />
                </Col>

            </Row>

            {/* BEDROOMS */}
            <Row className="flex-md-row-reverse mb-5 text-center">
                <Col xs={12} sm={6} md={12} lg={6}>
                    <Card className="regCard">
                        <Card.Body>
                            <Card.Title className="resCardTitle">Bedrooms</Card.Title>
                            <Card.Text className="resCardText">
                                <ul>
                                    <li>All surfaces dusted and cleaned</li><br />
                                    <li>Mirrors cleaned </li><br />
                                    <li>Beds made and linens changed (if provided)</li><br />
                                    <li>Cleaning baseboards, doors, windowsills and blinds</li><br />
                                    <li>Cleaning air vents and ceiling fans to remove dust buildup</li><br />
                                    <li>Trash emptied and trash can cleaned and sanitized</li><br />
                                    <li>Floor vacuumed and mopped</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} sm={6} md={12} lg={6}>
                    <Card.Img className="imgC" src={DeepBedroom} />
                </Col>
            </Row>

            {/* Living Areas */}
            <Row className=" mb-5 text-center">

                {/* <Col xs={12} sm={6} md={10} lg={6}>
                    <Card.Img className="imgC" src={DeepLivingArea} />
                </Col> */}

                <Col xs={12} sm={6} md={12} lg={6}>
                    <Card className="regCard">
                        <Card.Body>
                            <Card.Title className="resCardTitle">Other Areas: living room, hallway, stairs</Card.Title>
                            <Card.Text className="resCardText">
                                <ul>
                                    <li>All surfaces dusted and cleaned</li><br />
                                    <li>Cleaning baseboards, doors, windowsills and blinds
                                    </li><br />
                                    <li>Sofas, chairs vacuumed
                                    </li><br />
                                    <li>Floors vacuumed and mopped, including hard floors.
                                    </li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} sm={6} md={12} lg={6}>
                    <Card.Img className="imgC" src={DeepLivingArea} />
                </Col>
            </Row>



            <Row className="justify-content-center text-center">
                <Col xs={12} md={8} lg={6}>
                    <Card className="bookCard ">
                        <Card.Body>
                            <Card.Title className="resCardTitle">Serving Bolingbrook and Surrounding Areas</Card.Title>
                            <Card.Text className="resCardText">
                                <p id="indent">
                                    Whether you’re moving in, moving out, or just need a fresh start, our team is ready to provide <strong>
                                        reliable, eco-friendly deep cleaning services in Bolingbrook.
                                    </strong>

                                </p>

                                <div className="d-flex flex-column ">
                                    <p id="indent" >
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
                                            today for a free quote and let’s make your home sparkle the green way!<br />
                                            Book a Professional Deep Cleaning Today!

                                        </strong></p>
                                </div>


                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>


        </div>





    )
}

export default DeepCleaning;