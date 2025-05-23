import React from "react";
import '../src/App.css';
import '../styles/residential.css';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// import cleaningSink2 from "../src/assets/cleaningSink2.mp4";
import cleaningSink from "../src/assets/cleaningSink.mp4";
// import cleanMicrowave from "../src/assets/cleanMicrowave.jpeg";
// import cleanSink from "../src/assets/postConstruction.jpeg";
import cleanStove from "../src/assets/cleanStove.jpeg";
// import dirtyMicrowave from "../src/assets/dirtyMicrowave.jpeg";
// import dirtySink from "../src/assets/dirtySink.jpeg";
import dirtyStove from "../src/assets/dirtyStove.jpeg";
// import gifSink from "../src/assets/gifSink.gif";

function ResidentialMain() {
    return (


        <div className="genResidential container ">
            <h2 className="regTitle">Residential Cleaning in General</h2>

            {/* Row 1 - Card Left, Image Right */}
            <div className="whyResidential">
                <Row className="align-items-center mb-5">
                    <Col md={6}>
                        <Card className="regCard h-100">
                            <Card.Body>
                                <Card.Title className="resCardTitle">  Why You Need Residential Cleaning Services  </Card.Title>
                                <Card.Text className="resCardText">
                                    <p> At <strong>Rux Cleaning</strong>, we understand that a clean home is a happy home. Residential cleaning is essential for maintaining a <strong>healthy, comfortable, and welcoming environment</strong> in your home. </p>
                                    <p> Whether you're busy with work, family, or just need a break, our professional cleaning services give you back your time and peace of mind, knowing your home is in good hands.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col md={6}>
                        <div className="d-flex h-100 gap-2">
                            <img src={dirtyStove} className="w-50 object-fit-cover" style={{ height: '100%' }} />
                            <img src={cleanStove} className="w-50 object-fit-cover" style={{ height: '100%' }} />
                        </div>
                    </Col>
                </Row>
            </div>


          

            <Row className="flex-md-row-reverse mb-5">
  {/* Card (natural height) */}
  <Col md={6}>
    <Card className="regCard">
      <Card.Body>
        <Card.Title className="resCardTitle">How Residential Cleaning Helps You</Card.Title>
        <Card.Text className="resCardText">
        <ul>
                                    <li><strong>Saves Time and Effort</strong> – Skip the hassle of scrubbing and dusting! Let our team handle everything so you can focus on what matters most.
                                    </li> 
                                    <li><strong>Creates a Healthier Home </strong>– Our deep cleaning removes allergens, dust, bacteria, and mold, improving indoor air quality and reducing potential health risks.</li>
                                    <li><strong>Stress-Free Living </strong>– Enjoy coming home to a spotless environment without the worry of cleaning chores piling up.</li>
                                    <li><strong>Increases Property Value </strong>– Regular cleaning preserves the condition of your home, keeping floors, furniture, and appliances in top shape.</li>
                                    <li><strong>Customized Cleaning Plans </strong>– Tailored services to meet individual needs and schedules.
                                    </li>
                                </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>

  {/* Video column with half-height video */}
  <Col md={6} className="d-flex justify-content-center">
    <div style={{ width: '100%', maxHeight: '550px', borderRadius: '0.5rem', overflow: 'hidden' }}>
      <video
        src={cleaningSink}
        autoPlay
        muted
        loop
        className="w-100 h-100 object-fit-cover"
      />
    </div>
  </Col>
</Row>



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
