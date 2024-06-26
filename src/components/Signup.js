import React, { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

const Signup = () => {
    const [email, setEmail] = useState('');
    const { loginUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        loginUser(email);
        navigate('/otp');
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
                        <h2 className="text-center mb-4">Signup</h2>

                        <Form onSubmit={handleSignup}>
                            <div className='mb-3'>
                                <Form.Group controlId="formEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                            </div>

                            <Button variant="primary" type="submit">
                                Signup
                            </Button>
                        </Form>


                    </Card.Body>
                </Card>
            </Col>

        </Container >
    );
};

export default Signup;
