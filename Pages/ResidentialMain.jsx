import React from "react";
import { Container, Row, Col } from "react-bootstrap"; // Only needed if using react-bootstrap

function ResidentialMain() {
    return (
        <Container fluid className="vh-100 d-flex justify-content-center align-items-center">
            <Row>
                <Col md="auto">
                    <div className="genResidential">
                        <h2>Residential cleaning in general</h2>
                        <h3> Residential cleaning in general </h3>
                        <div className="whyResidential">
                            <h4> Why You Need Residential Cleaning Services </h4>
                            <p> At Rux Cleaning, we understand that a clean home is a happy home. Residential cleaning is essential for maintaining a healthy, comfortable, and welcoming environment in your home. </p>
                            <p> Whether you're busy with work, family, or just need a break, our professional cleaning services give you back your time and peace of mind, knowing your home is in good hands.</p>
                        </div>
                        <div className="howResidential">
                            <h4> How Residential Cleaning Helps You </h4>
                            <ul>
                                <li>Saves Time and Effort – Skip the hassle of scrubbing and dusting! Let our team handle everything so you can focus on what matters most.
                                </li>
                                <li>Creates a Healthier Home – Our deep cleaning removes allergens, dust, bacteria, and mold, improving indoor air quality and reducing potential health risks.</li>
                                <li>Stress-Free Living – Enjoy coming home to a spotless environment without the worry of cleaning chores piling up.</li>
                                <li>Increases Property Value – Regular cleaning preserves the condition of your home, keeping floors, furniture, and appliances in top shape.</li>
                                <li>Customized Cleaning Plans – Tailored services to meet individual needs and schedules.
                                </li>
                            </ul>
                        </div>
                        <div className="includedResidential">
                            <h4>What Does Residential Cleaning with Rux Cleaning Include?
                            </h4>
                            <p>🏡 General House Cleaning: Dusting, vacuuming, and sanitizing all living areas, bedrooms, and common spaces.</p>
                            <p>🍽 Kitchen Cleaning: Cleaning countertops, sinks, appliances (inside and out), and sweeping/mopping floors.</p>
                            <p>🛁 Bathroom Cleaning: Disinfecting toilets, tubs, showers, sinks, and wiping down mirrors and countertops.</p>
                            <p>🧹 Bedroom & Living Areas – Changing bed linens, dusting furniture, and vacuuming carpets.</p>
                            <p>🧼 Deep Cleaning: Comprehensive cleaning of hard-to-reach places like baseboards, vents, and behind appliances.</p>
                            <p>🚛 Move-In/Move-Out Cleaning – Preparing homes for new occupants by removing dirt, dust, and grime.</p>
                            <p>🛠 Post Construction Cleaning - removes dust, debris, and odors, leaving your property move-in ready.</p>
                            <p>🌿 Eco-Friendly: We use green cleaning products that are safe for your family and the environment.</p>

                        </div>
                        <div className="surroundingAreas">
                            <h4>Serving Bolingbrook and Surrounding Areas</h4>
                            <p>Rux Cleaning is proud to serve the Bolingbrook community with reliable, professional cleaning services that prioritize your satisfaction and well-being.</p>
                            <p>📞 Contact us today for a free estimate and experience a cleaner, healthier home!</p>
                        </div>

                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ResidentialMain;
