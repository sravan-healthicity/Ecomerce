import React, { useContext } from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { Carousel, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CartContext } from '../contexts/CartContext';


const Product = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = React.useContext(CartContext);
    const { showConfirmation, confirmation, hideConfirmation, confirmAddToCart, updateQuantity, cart } = useContext(CartContext);

    const getProductQuantity = (productId) => {
        const product = cart.find(item => item.id === productId);
        return product ? product.quantity : 0;
    };

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${productId}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [productId]);

    if (!product) return <p>Loading...</p>;

    return (
        <Container>
            <Card style={{ margin: '20px' }}>
                <Card.Body>
                    <Container>
                        <Carousel>
                            {product.images.map((image, index) => (
                                <Carousel.Item key={index}>
                                    <img
                                        className="d-block w-100"
                                        src={image}
                                        alt={`Slide ${index}`}
                                    />
                                </Carousel.Item>
                            ))};

                        </Carousel>
                    </Container>
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>${product.price}</Card.Text>

                        {getProductQuantity(product.id) > 0 ? (
                            <ButtonGroup>
                                <Button variant="secondary" onClick={() => updateQuantity(product.id, getProductQuantity(product.id) - 1)}>-</Button>
                                <Button variant="light" disabled>{getProductQuantity(product.id)}</Button>
                                <Button variant="secondary" onClick={() => updateQuantity(product.id, getProductQuantity(product.id) + 1)}>+</Button>
                            </ButtonGroup>
                        ) : (
                            <Button variant="primary" onClick={() => showConfirmation(product)}>Add to Cart</Button>
                        )}
                    </Card.Body>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Product;
