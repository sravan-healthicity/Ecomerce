import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

const Otp = () => {

    const [otp, setOtp] = useState('');
    const { user, verifyOtp } = useContext(UserContext);
    const navigate = useNavigate();

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        if (verifyOtp(otp)) {
            navigate('/password');
        } else {
            alert('Invalid OTP');
        }
    };

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <Row className="w-100"></Row>
            <Col md={{ span: 6, }}>
                <img src="https://st.depositphotos.com/1395424/4400/i/450/depositphotos_44001907-stock-photo-supermarket-cart.jpg" alt="signup" style={{ width: '100%', height: '100%' }} />
            </Col>
            <Col md={{ span: 6 }}>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Enter OTP</h2>


                        <Form onSubmit={handleOtpSubmit}>
                            <Form.Group controlId="formOtp">
                                <Form.Label>OTP</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <p>{user.otp}</p>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>

        </Container>
    );
};

export default Otp;
