import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Button, Card, Container, Row, Col, ButtonGroup } from 'react-bootstrap';

const Products = () => {
    const { addToCart, updateQuantity, cart, notification } = useContext(CartContext);
    const [products, setProducts] = useState([]);
    const [skip, setSkip] = useState(0);
    const [loading, setLoading] = useState(false);

    const fetchProducts = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${skip}`);
            const data = await response.json();
            console.log(data.products);
            setProducts((prevProducts) => [...prevProducts, ...data.products]);
            setSkip((prevSkip) => prevSkip + 10);
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const getProductQuantity = (productId) => {
        const product = cart.find(item => item.id === productId);
        return product ? product.quantity : 0;
    };

    const handleAddToCart = (product) => {
        addToCart(product);
        alert(`${product.title} added to cart`); // Show alert notification
    };

    const handleUpdateQuantity = (productId, quantity) => {
        updateQuantity(productId, quantity);
    };

    return (
        <Container>
            <Row>
                {products.map(product => (

                    <Col key={product.id} sm={6} md={4} lg={3}>
                        <Card style={{ width: '18rem' }}>


                            <Card.Body>
                                <Card.Img variant="top" src={product.thumbnail} />

                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>${product.price}</Card.Text>
                                {getProductQuantity(product.id) > 0 ? (
                                    <ButtonGroup>
                                        <Button variant="secondary" onClick={() => handleUpdateQuantity(product.id, 1)}>-</Button>
                                        <Button variant="light" disabled>{cart.find(item => item.id === product.id)?.quantity || 0}</Button>
                                        <Button variant="secondary" onClick={() => handleAddToCart(product)}>+</Button>
                                    </ButtonGroup>
                                ) : (
                                    <Button variant="primary" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Products;
