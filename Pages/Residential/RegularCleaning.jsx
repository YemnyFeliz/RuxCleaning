import React from "react";
import "../../src/App.css";
import "../../styles/RegCleaning.css";
import { useState } from 'react';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
// import residentialCleaning from "../../src/assets/residentialCleaning.jpg";
import bathroom1 from "../../src/assets/bathroom1.jpg";
import ResLivingArea from "../../src/assets/ResLivingArea.jpg";
import ResKitchen from "../../src/assets/ResKitchen.jpg";
import ResProducts from "../../src/assets/ResProducts.jpg";






function RegularCleaning() {

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
                            <h2 className="regTitle">Regular Residential Cleaning </h2>
                            <div className="regIntroText">
                                <p id="indent">Keeping your home clean is essential for a <strong>healthy, comfortable, and stress-free living environment.</strong></p>
                                <p>At <strong>Rux Cleaning</strong>, we provide <strong>professional, eco-friendly regular cleaning services</strong> in Bolingbrook, ensuring your home stays fresh and spotless without the use of harsh chemicals.</p>
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* <div className="customGrid"> */}
                <Row xs={1} md={2} className="g-4">
                    <Col className="whatRegResidential">
                        {/* <div className="whatRegResidential"> */}
                        <Card className="regCard">
                            <Card.Body>
                                <Card.Title className="regCardTitle">What is Regular Residential Cleaning?</Card.Title>
                                <Card.Text className="regCardText">
                                    <p id="indent">Regular residential cleaning is a <strong>routine maintenance cleaning service</strong> designed to keep your home consistently clean and tidy. Unlike deep cleaning, which focuses on every detail, regular cleaning covers the essential areas to maintain cleanliness and prevent buildup of dirt and dust.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        {/* </div> */}
                    </Col>



                    {/* <Row className="mt-4"> */}
                    <Col className="howRegResidential">
                        {/* <div className="howRegResidential"> */}
                        <Card className="regCard">
                            <Card.Title className="regCardTitle">How Regular Cleaning Helps You
                            </Card.Title>
                            <Card.Text className="regCardText">
                                <p>🏡 <strong>Keeps Your Home in Top Shape – </strong>A regularly cleaned home <strong>looks and feels
                                    fresh</strong> at all times.
                                </p>
                                <p>⏳<strong> More Free Time –</strong> Spend less time cleaning and more time enjoying your home,
                                    family, and hobbies.
                                </p>
                                <p>🌿 <strong>Healthier Living Environment –</strong> Reduce allergens, bacteria, and dust to create a
                                    cleaner, <strong>healthier home</strong>.</p>
                                <p> 💰 <strong>Extends the Life of Your Home & Furniture –</strong> Regular dusting and cleaning
                                    prevent <strong>wear and tear on furniture, flooring, and fixtures</strong>.</p>

                            </Card.Text>
                        </Card>
                        {/* </div> */}
                    </Col>
                </Row>

                {/* </Row> */}
                {/* </div> */}




                <Row>
                <Col>
                <div className="deepCleaningIntroText">
                    <h2 className="regCardTitle">What Does Residential Cleaning Include?
                    </h2>
                    </div>
                </Col>
            </Row>



                <Row className="includedRegResidential g-4">

                <Col xs={12} sm={6} md={6} lg={3}>
                        <Card className="smCard">
                            <Card.Body>
                                <Card.Img className="cardImg" variant="top" src={ResLivingArea} />
                                <Card.Title className="smCardTitle">🧹 Living Areas & Bedrooms:</Card.Title>
                                <Card.Text className="smCardText">
                                    <ul>
                                        <li>Dusting and wiping down surfaces, furniture, and décor</li>
                                        <li>Vacuuming carpets and rugs
                                        </li>
                                        <li>Sweeping and mopping floors</li>
                                        <li>Cleaning mirrors and glass surfaces</li>
                                        <li>Emptying trash bins
                                        </li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col xs={12} sm={6} md={6} lg={3}>
                        <Card className="smCard">
                            <Card.Body>
                                <Card.Img className="cardImg" variant="top" src={bathroom1} />
                                <Card.Title className="smCardTitle">🛁 Bathrooms:
                                </Card.Title>
                                <Card.Text className="smCardText">
                                    <ul>
                                        <li>Scrubbing and disinfecting toilets, sinks, bathtubs, and showers</li>
                                        <li>Wiping down countertops and fixtures
                                        </li>
                                        <li>Cleaning mirrors and polishing chrome</li>
                                        <li>Mopping floors and sanitizing high-touch areas
                                        </li>

                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col xs={12} sm={6} md={6} lg={3}>
                        <Card className="smCard">
                            <Card.Body>
                                <Card.Img className="cardImg" variant="top" src={ResKitchen} />
                                <Card.Title className="smCardTitle">🍽 Kitchen:</Card.Title>
                                <Card.Text className="smCardText">
                                    <ul>
                                        <li>Wiping down countertops, sinks, and appliances
                                        </li>
                                        <li>Cleaning the exterior of cabinets and drawers</li>
                                        <li>Sanitizing high-touch surfaces like doorknobs and light switches</li>
                                        <li>Sweeping and mopping floors
                                        </li>

                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col xs={12} sm={6} md={6} lg={3}>
                        <Card className="smCard">
                            <Card.Body>
                                <Card.Img className="cardImg" variant="top" src={ResProducts} />
                                <Card.Title className="smCardTitle">🌱 Eco-Friendly Cleaning Products Used:</Card.Title>
                                <Card.Text className="smCardText">
                                    <ul>
                                        <li>Non-toxic, biodegradable cleaners
                                        </li>
                                        <li>Safe for children, pets, and allergy-sensitive individuals</li>
                                        <li>Gentle yet effective cleaning solutions for a chemical-free home</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>



                <Row xs={1} md={2} className="g-4">
                    <Col className="whyNeedRegResidential" md={12} lg={6}>
                        {/* <div className="whyNeedRegResidential"> */}
                        <Card className="regCard">
                            <Card.Body>
                                <Card.Title className="regCardTitle">Why Do You Need Regular Cleaning?</Card.Title>
                                <Card.Text className="regCardText">
                                    <p>✅ <strong>Maintains a Clean & Healthy Home –</strong> Regular cleaning helps prevent dust, allergens, and bacteria from accumulating, creating a healthier indoor environment.</p>
                                    <p>✅ <strong>Saves Time & Reduces Stress –</strong> Life is busy! Let our professional team take care of the cleaning so you can focus on what matters most.
                                    </p>
                                    <p>✅ <strong>Prevents Dirt & Grime Buildup – </strong>Regularly scheduled cleaning prevents dirt and stains from becoming harder to remove over time.</p>
                                    <p>✅ <strong>Eco-Friendly & Safe –</strong> We use <strong>non-toxic, biodegradable cleaning products</strong>, ensuring a clean home without harmful chemicals.
                                    </p>
                                    <p>✅ <strong>Improves Indoor Air Quality –</strong> Reducing dust, pet dander, and allergens helps create a fresher, healthier atmosphere.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        {/* </div> */}
                    </Col>


                    <Col className="whyChoseRegResidential" md={12} lg={6}>
                        <Card className="regCard">
                            <Card.Body>
                                {/* <div className="whyChoseRegResidential"> */}
                                <Card.Title className="regCardTitle">Why Choose Rux Cleaning for Regular Residential Cleaning?</Card.Title>
                                <Card.Text className="regCardText">
                                    <p>✨ <strong>Reliable & Professional Service – </strong>Our team is dedicated to quality, reliability, and customer satisfaction.</p>
                                    <p>🌿 <strong>Eco-Friendly & Safe Cleaning Products –</strong> We use green-certified cleaning products for a healthier home.
                                    </p>
                                    <p>🏡 <strong>Flexible Scheduling –</strong> Choose from weekly, bi-weekly, or monthly cleaning services to fit your needs.
                                    </p>
                                    <p>📍<strong>Locally Trusted in Bolingbrook –</strong>  We take pride in serving our community with top-tier residential cleaning services.
                                    </p>
                                </Card.Text>
                                {/* </div> */}
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>


<Row className="justify-content-center">
  <Col md={8} lg={6}>
    <Card className="bookCard">
      <Card.Body>
        <Card.Title className="resCardTitle">Book Your Cleaning Service Today!</Card.Title>
        <Card.Text className="resCardText">
          <p id="indent" >
            Let <strong>Rux Cleaning</strong> help you maintain a clean, fresh, and healthy home in
            <strong> Bolingbrook</strong> with our <strong>eco-friendly residential cleaning services</strong>.
          </p>

          <div className="d-flex flex-column align-items-center">
            {!showPhone ? (
              <Button variant="secondary" className="m-3" onClick={handleToggle}>
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
            <p className="text-center">
              <strong>📍 Serving Bolingbrook & Nearby Areas</strong> 
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

export default RegularCleaning;