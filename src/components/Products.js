import React, { useState, useEffect, useContext } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { CartContext } from '../contexts/CartContext';


const Products = () => {
    const [products, setProducts] = useState([]);
    const [skip, setSkip] = useState(0);
    const [loading, setLoading] = useState(false);
    const { addToCart } = useContext(CartContext);

    const fetchProducts = async () => {
        setLoading(true);
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

    return (
        <Container>
            <Row>
                {products.map((product, index) => (
                    <Col key={index} sm={12} md={6} lg={4}>
                        <Card style={{ margin: '10px' }}>
                            X<Card.Img variant="top" src={product.thumbnail} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>Price: ${product.price}</Card.Text>
                                <Button onClick={() => addToCart(product)}>Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <div className="text-center">
                <Button onClick={fetchProducts} disabled={loading}>
                    {loading ? 'Loading...' : 'Load More'}
                </Button>
            </div>
        </Container>
    );
};

export default Products;
