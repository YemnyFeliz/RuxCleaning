import React from "react";
import { useState } from 'react';
import "../src/App.css";
import "../styles/Eco-Friendly.css";

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import ecofriendly from '../src/assets/ecofriendly.png';
// import cleanMicrowave from "../src/assets/cleanMicrowave.jpeg";

function EcoFriendly() {

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
                        <div>
                            <h2 className="regTitle">Eco-Friendly Cleaning Solutions at Rux Cleaning</h2>
                        </div>
                    </Col>
                </Row>

                <Row>
                <Col md={12} lg={8} className="mx-auto text-center">
                        <Card className="regCard">
                            <Card.Body>
                                <Card.Title className="regCardTitle">What is Eco-Friendly Cleaning?</Card.Title>
                                <Card.Text className="regCardText" id="indent">
                                    <p>Eco-friendly cleaning is a <strong>sustainable approach to cleaning that prioritizes health, safety, and environmental responsibility</strong>.
                                        
                                    </p>
                                    <p>It involves using <strong>non-toxic, biodegradable cleaning products</strong>, reducing waste, and implementing responsible water disposal practices to minimize pollution and environmental harm.</p>
                                    <p><strong>At Rux Cleaning, we proudly offer eco-friendly cleaning services in Bolingbrook</strong>, ensuring your home or business stays clean while protecting your family, employees, and the planet.
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>



                <Row xs={1} md={2} className="g-4 text-center">
                    <Col xs={12} sm={10} md={12} lg={6} className="d-flex align-items-center justify-content-center">
                        <div>
                            <Card.Img src={ecofriendly} className="imgEco" style={{ maxWidth: '100%', height: 'auto' }} />
                        </div>
                    </Col>

                    <Col xs={12} md={12} lg={6}>
                        <Card className="regCard">
                            <Card.Body>
                                <Card.Title className="regCardTitle">What Types of Products Are Used in Eco-Friendly Cleaning?
                                </Card.Title>
                                <Card.Text className="regCardText">
                                    <p>✅ <strong>Biodegradable & Plant-Based Cleaners  <br /> </strong> Made from natural ingredients like vinegar, baking soda, citrus, and essential oils.
                                    </p>
                                    <p>✅ <strong>Non-Toxic Disinfectants <br /></strong> Green alternatives to bleach, such as hydrogen peroxide and botanical-based disinfectants.</p>
                                    <p>✅ <strong>Microfiber Cloths & Mops <br /></strong> Reduce the need for disposable paper towels and plastic-heavy cleaning supplies.</p>
                                    <p>✅ <strong>Eco-Friendly Soaps & Detergents <br /></strong> Free from phosphates, artificial dyes, and synthetic fragrances.</p>
                                    <p>✅ <strong>Reusable & Recyclable Packaging <br /></strong> Reducing plastic waste by using refillable or recyclable containers.</p>
                                    <p>✅ <strong>Water-Based & pH-Neutral Cleaners <br /></strong> Safe for delicate surfaces without stripping finishes or causing damage.
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>


                </Row>



                <Row className="text-center">
                <Col md={12} lg={8} className="mx-auto">
                        <Card className="regCard">
                            <Card.Body>
                                <Card.Title className="regCardTitle">How Does Eco-Friendly Cleaning Help Clients?</Card.Title>
                                <Card.Text className="regCardText">
                                    <p>🌱 <strong>Improves Health & Well-Being<br /></strong> Reduces allergies, asthma triggers, and harmful chemical exposure.</p>
                                    <p>🌱 <strong>Creates a Chemical-Free Home or Workspace<br /></strong> No lingering toxins or strong artificial odors.</p>
                                    <p>🌱 <strong>Prevents Environmental Damage<br /></strong> Safe for waterways, wildlife, and ecosystems.</p>
                                    <p>🌱 <strong>Extends the Life of Surfaces & Furniture<br /></strong> Gentle yet effective natural cleaners help maintain flooring, countertops, and upholstery.</p>
                                    <p>🌱 <strong>Encourages Sustainability<br /></strong> Less waste, better resource conservation, and environmentally friendly choices.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="text-center">
                
                    <Col xs={12} md={12} lg={6}>
                        <Card className="regCard">
                            <Card.Body>
                                <Card.Title className="regCardTitle">Why Do Clients Need Eco-Friendly Cleaning?</Card.Title>
                                <Card.Text className="regCardText">
                                    <p>✅ <strong>Healthier Indoor Air Quality<br /></strong> Conventional cleaning products release harmful chemicals (VOCs) that can cause respiratory issues, allergies, and irritation. Eco-friendly products eliminate these risks.</p>
                                    <p>✅ <strong>Safer for Families & Pets<br /></strong> Non-toxic and chemical-free solutions ensure a safe environment for children, pets, and allergy-sensitive individuals.</p>
                                    <p>✅ <strong>Sustainable & Environmentally Responsible<br /></strong> Traditional cleaning chemicals contribute to water pollution and environmental damage. Eco-friendly cleaning minimizes this impact.</p>
                                    <p>✅ <strong>Reduces Exposure to Harsh Chemicals<br /></strong> Many traditional cleaners contain ammonia, bleach, and artificial fragrances, which can be harmful to human health. Green cleaning products use plant-based alternatives.</p>
                                    <p>✅ <strong>Supports a Greener Future<br /></strong> By choosing eco-friendly cleaning, you reduce your carbon footprint and contribute to a healthier planet.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} md={12} lg={6}>
                        <Card className="regCard">
                            <Card.Body>
                                <Card.Title className="regCardTitle">Why Choose Rux Cleaning?</Card.Title>
                                <Card.Text className="regCardText">
                                    <p>🌿 <strong>Committed to Green Cleaning<br /></strong> We use <strong>only non-toxic, eco-friendly cleaning products</strong> that are safe for you and the planet.</p>
                                    <p>🏡 <strong>Safe for Homes & Businesses<br /></strong> Whether residential or commercial, we prioritize <strong>health-conscious and sustainable cleaning practices</strong>.</p>
                                    <p>💦 <strong>Environmentally Responsible Water Disposal<br /></strong> We ensure our cleaning processes follow <sreong>green standards</sreong> to protect local water systems.
                                    </p>
                                    
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>





                <Row className="justify-content-center text-center">
                <Col xs={12} md={8} lg={6}>
                    <Card className="bookCard ">
                        <Card.Body>
                            <Card.Title className="resCardTitle">Experience a Cleaner, Greener Space with Rux Cleaning!</Card.Title>
                            <Card.Text className="resCardText">
                                <p id="indent" >
                                If you're looking for a 
                                <strong> safe, effective, and environmentally responsible cleaning service in Bolingbrook, 
                                    Rux Cleaning is your go-to choice! </strong> 
                                </p>

                                <div className="d-flex flex-column ">
                                <p id="indent" >
                                    {!showPhone ? (
                                        <Button variant="secondary" className="contactBtn" onClick={handleToggle}>
                                            📞 Call Us for a Free Quote Today!
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

export default EcoFriendly;