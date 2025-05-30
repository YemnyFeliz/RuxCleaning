import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import handShake from '../src/assets/handShake.jpg';
import "../styles/Career.css";

function Career() {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        availability: '',
        experience: '',
        transportation: '',
        aboutYou: ''
    });

    const [errors, setErrors] = useState({});


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        // Full Name
        if (!formData.fullName.trim()) {
            newErrors.fullName = "This field is required.";
        } else if (formData.fullName.length < 2 || formData.fullName.length > 50) {
            newErrors.fullName = "Name must be between 2 and 50 characters.";
        }

        // Phone
        if (!formData.phone.trim()) {
            newErrors.phone = "This field is required.";
        } else if (!/^\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/.test(formData.phone)) {
            newErrors.phone = "Invalid phone number.";
        }

        // Email
        if (!formData.email.trim()) {
            newErrors.email = "This field is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email address.";
        }

        // Availability
        if (!formData.availability) {
            newErrors.availability = "This field is required.";
        }

        // Experience
        if (!formData.experience.trim()) {
            newErrors.experience = "This field is required.";
        } else if (formData.experience.length < 2 || formData.experience.length > 300) {
            newErrors.experience = "Must be between 10 and 300 characters.";
        }

        // Transportation
        if (!formData.transportation) {
            newErrors.transportation = "This field is required.";
        }

        // About You
        if (!formData.aboutYou.trim()) {
            newErrors.aboutYou = "This field is required.";
        } else if (formData.aboutYou.length < 20 || formData.aboutYou.length > 500) {
            newErrors.aboutYou = "Must be between 20 and 500 characters.";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert("Application submitted!");
            console.log(formData);
            // optionally reset the form or send data to API
        }
    };



    return (
        <>
            <div className="regResidential container">
                <Row>
                    <Col>
                        <div className="regIntro">
                            <h2 className="regTitle">Join Our Team | Rux Cleaning</h2>
                            <div className="regIntroText" id="indent">
                                <p>Are you looking for a rewarding job with a flexible schedule and great pay? </p>
                                <p><strong>We are hiring</strong> dedicated and detail-oriented cleaners to join our growing team in Bolingbrook and surrounding areas!</p>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col md={12} lg={6} className="d-flex align-items-center justify-content-center">
                        <Card.Img className="imgC" src={handShake} />
                    </Col>

                    <Col md={12} lg={6}>
                        <Card className="regCard">
                            <Card.Body>
                                <Card.Title className="resCardTitle">Why Work With Us?</Card.Title>
                                <Card.Text className="resCardText">
                                    <p><strong>✅ Competitive Pay – </strong>Earn great wages for quality work</p>
                                    <p><strong>✅ Flexible Scheduling – </strong>Full-time & part-time positions available</p>
                                    <p><strong>✅ Supportive Team Environment – </strong>We value and respect our employees</p>
                                    <p><strong>✅ Training & Growth Opportunities – </strong>No experience? We’ll train you!</p>
                                    <p><strong>✅ Eco-Friendly Cleaning –</strong>Work with safe, non-toxic products</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="justify-content-center mt-5">
                <Col md={12} lg={8} className="mx-auto">
                        <h2 className="resCardTitle mb-5" style={{ fontSize: "1.8rem" }}>Employment Contact Form</h2>
                        <Card className="resCard">
                            <Card.Body>

                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="fullName">
                                        <Form.Label className='formLabel'>Full Name</Form.Label>
                                        <Form.Control
                                            className='formGroup'
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            isInvalid={!!errors.fullName}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.fullName}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="phone">
                                        <Form.Label className='formLabel'>Phone Number</Form.Label>
                                        <Form.Control
                                            className='formGroup'
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            isInvalid={!!errors.phone}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.phone}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Label className='formLabel'>Email Address</Form.Label>
                                        <Form.Control
                                            className='formGroup'
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            isInvalid={!!errors.email}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.email}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="availability">
                                        <Form.Label className='formLabel'>Availability</Form.Label>
                                        <Form.Select
                                            className='formGroup'
                                            name="availability"
                                            value={formData.availability}
                                            onChange={handleChange}
                                            isInvalid={!!errors.availability}
                                        >
                                            <option value="">Select...</option>
                                            <option value="Full-time">Full-time</option>
                                            <option value="Part-time">Part-time</option>
                                            <option value="Flexible">Flexible</option>
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.email}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="experience">
                                        <Form.Label className='formLabel'>Previous Cleaning Experience?</Form.Label>
                                        <Form.Control
                                            className='formGroup'
                                            as="textarea"
                                            rows={2}
                                            name="experience"
                                            placeholder="Yes/No – If yes, please explain"
                                            value={formData.experience}
                                            onChange={handleChange}
                                            isInvalid={!!errors.experience}
                                        />
                                         <Form.Control.Feedback type="invalid">
                                            {errors.experience}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="transportation">
                                        <Form.Label className='formLabel'>Do you have reliable transportation?</Form.Label>
                                        <Form.Select
                                            className='formGroup'
                                            name="transportation"
                                            value={formData.transportation}
                                            onChange={handleChange}
                                            isInvalid={!!errors.transportation}
                                        >
                                            <option value="">Select...</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.transportation}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="aboutYou">
                                        <Form.Label className='formLabel'>Tell us why you’d be a great fit for Rux Cleaning!</Form.Label>
                                        <Form.Control
                                            className='formGroup'
                                            as="textarea"
                                            rows={3}
                                            name="aboutYou"
                                            value={formData.aboutYou}
                                            onChange={handleChange}
                                            isInvalid={!!errors.aboutYou}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.aboutYou}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <div className="text-center">
                                        <Button variant="secondary" type="submit" id="applyBtn">
                                            Apply Now
                                        </Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </div>
        </>
    );
}

export default Career;
