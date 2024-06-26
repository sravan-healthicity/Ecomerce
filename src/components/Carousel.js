import React from 'react';
import { Carousel as BootstrapCarousel, Container, Nav } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Carousel = () => {
    const [products, setProducts] = useState([]);
    const [skip, setSkip] = useState(0);
    const [loading, setLoading] = useState(false);
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=10&skip=30`);
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
        <>
            <Container>
                <BootstrapCarousel onSelect={handleSelect}>
                    {products.map((product, index) => (
                        <BootstrapCarousel.Item>
                            <Nav.Link as={Link} to={`/product/${product.id}`}>
                                <img
                                    className="d-block w-100"
                                    src={product.images[0]}
                                    alt="First slide"
                                />
                                <BootstrapCarousel.Caption>
                                    <h3 className='title'>{product.title}</h3>
                                    <p className='carouselp'>{product.description}</p>
                                </BootstrapCarousel.Caption>
                            </Nav.Link>
                        </BootstrapCarousel.Item>
                    ))}
                </BootstrapCarousel>
            </Container >
        </>

    );


};


export default Carousel;
