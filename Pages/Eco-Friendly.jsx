import React from "react";
import "../src/App.css";
import "../styles/Eco-Friendly.css";

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import ecofriendly from '../src/assets/ecofriendly.png';
// import cleanMicrowave from "../src/assets/cleanMicrowave.jpeg";

function EcoFriendly() {
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
                    <Col md={{ span: 8, offset: 2 }}>
                        <Card className="regCard">
                            <Card.Body>
                                <Card.Title className="regCardTitle">What is Eco-Friendly Cleaning?</Card.Title>
                                <Card.Text className="regCardText text-indent">
                                    <p>Eco-friendly cleaning is a <strong>sustainable approach to cleaning that prioritizes health, safety, and environmental responsibility</strong>.
                                        It involves using <strong>non-toxic, biodegradable cleaning products</strong>, reducing waste, and implementing responsible water disposal practices to minimize pollution and environmental harm.
                                    </p>
                                    <p><strong>At Rux Cleaning, we proudly offer eco-friendly cleaning services in Bolingbrook</strong>, ensuring your home or business stays clean while protecting your family, employees, and the planet.
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>



                <Row xs={1} md={2} className="g-4">
                    <Col md={6} className="d-flex align-items-center justify-content-center">
                        <div>
                            <Card.Img src={ecofriendly} className="imgEco" style={{ maxWidth: '100%', height: 'auto' }} />
                        </div>
                    </Col>

                    <Col>
                        <Card className="regCard">
                            <Card.Body>
                                <Card.Title className="regCardTitle">What Types of Products Are Used in Eco-Friendly Cleaning?
                                </Card.Title>
                                <Card.Text className="regCardText">
                                    <p>✅ <strong>Biodegradable & Plant-Based Cleaners –</strong> Made from natural ingredients like vinegar, baking soda, citrus, and essential oils.
                                    </p>
                                    <p>✅ <strong>Non-Toxic Disinfectants –</strong> Green alternatives to bleach, such as hydrogen peroxide and botanical-based disinfectants.</p>
                                    <p>✅ <strong>Microfiber Cloths & Mops –</strong> Reduce the need for disposable paper towels and plastic-heavy cleaning supplies.</p>
                                    <p>✅ <strong>Eco-Friendly Soaps & Detergents –</strong> Free from phosphates, artificial dyes, and synthetic fragrances.</p>
                                    <p>✅ <strong>Reusable & Recyclable Packaging –</strong> Reducing plastic waste by using refillable or recyclable containers.</p>
                                    <p>✅ <strong>Water-Based & pH-Neutral Cleaners –</strong> Safe for delicate surfaces without stripping finishes or causing damage.
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>


                </Row>



                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <Card className="regCard">
                            <Card.Body>
                                <Card.Title className="regCardTitle">How Does Eco-Friendly Cleaning Help Clients?</Card.Title>
                                <Card.Text className="regCardText">
                                    <p>🌱 <strong>Improves Health & Well-Being –</strong> Reduces allergies, asthma triggers, and harmful chemical exposure.</p>
                                    <p>🌱 <strong>Creates a Chemical-Free Home or Workspace –</strong> No lingering toxins or strong artificial odors.</p>
                                    <p>🌱 <strong>Prevents Environmental Damage –</strong> Safe for waterways, wildlife, and ecosystems.</p>
                                    <p>🌱 <strong>Extends the Life of Surfaces & Furniture –</strong> Gentle yet effective natural cleaners help maintain flooring, countertops, and upholstery.</p>
                                    <p>🌱 <strong>Encourages Sustainability –</strong> Less waste, better resource conservation, and environmentally friendly choices.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>

                    <Col>
                        <Card className="regCard">
                            <Card.Body>
                                <Card.Title className="regCardTitle">Why Do Clients Need Eco-Friendly Cleaning?</Card.Title>
                                <Card.Text>
                                    <p>✅ <strong>Healthier Indoor Air Quality –</strong> Conventional cleaning products release harmful chemicals (VOCs) that can cause respiratory issues, allergies, and irritation. Eco-friendly products eliminate these risks.</p>
                                    <p>✅ <strong>Safer for Families & Pets –</strong> Non-toxic and chemical-free solutions ensure a safe environment for children, pets, and allergy-sensitive individuals.</p>
                                    <p>✅ <strong>Sustainable & Environmentally Responsible –</strong> Traditional cleaning chemicals contribute to water pollution and environmental damage. Eco-friendly cleaning minimizes this impact.</p>
                                    <p>✅ <strong>Reduces Exposure to Harsh Chemicals –</strong> Many traditional cleaners contain ammonia, bleach, and artificial fragrances, which can be harmful to human health. Green cleaning products use plant-based alternatives.</p>
                                    <p>✅ <strong>Supports a Greener Future –</strong> By choosing eco-friendly cleaning, you reduce your carbon footprint and contribute to a healthier planet.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="regCard">
                            <Card.Body>
                                <Card.Title className="regCardTitle">Why Choose Rux Cleaning?</Card.Title>
                                <Card.Text className="regCardText">
                                    <p>🌿 <strong>Committed to Green Cleaning –</strong> We use <strong>only non-toxic, eco-friendly cleaning products</strong> that are safe for you and the planet.</p>
                                    <p>🏡 <strong>Safe for Homes & Businesses –</strong> Whether residential or commercial, we prioritize <strong>health-conscious and sustainable cleaning practices</strong>.</p>
                                    <p>💦 <strong>Environmentally Responsible Water Disposal –</strong> We ensure our cleaning processes follow <sreong>green standards</sreong> to protect local water systems.
                                    </p>
                                    
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>





                <Row className="justify-content-center">
                    <Col md={6}>
                        <Card className="bookCard ">
                            <Card.Body>
                                <Card.Title className="resCardTitle">Experience a Cleaner, Greener Space with Rux Cleaning!</Card.Title>
                                <Card.Text className="resCardText">
                                    <p>If you're looking for a <strong>safe, effective, and environmentally responsible cleaning service in Bolingbrook, Rux Cleaning is your go-to choice!</strong>
                                    </p>
                                    <p><strong>📞 Call Us for a Free Quote Today!
                                        📍 Serving Bolingbrook & Surrounding Areas</strong>
                                    </p>
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