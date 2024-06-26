import React, { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

const Password = () => {
    const [password, setPasswordState] = useState('');
    const { setPassword } = useContext(UserContext);
    const navigate = useNavigate();

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        setPassword(password);
        navigate('/');
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
                        <h2 className="text-center mb-4">Set Password</h2>

                        <Form onSubmit={handlePasswordSubmit}>
                            <Form.Group controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPasswordState(e.target.value)}
                                    required
                                />
                            </Form.Group>
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

export default Password;
