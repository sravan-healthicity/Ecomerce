import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Carousel, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CartContext } from '../contexts/CartContext';

const ProductCard = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = React.useContext(CartContext);

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
                <Card.Img variant="top" src={product.thumbnail} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>Price: ${product.price}</Card.Text>
                    <Card.Text>{product.description}</Card.Text>
                    <Button onClick={() => addToCart(product)}>Add to Cart</Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ProductCard;