import React from 'react';
import Carousel from './Carousel';
import ProductCard from './ProductCard';
import Products from './Products';

const Home = () => {
    return (
        <>

            <div>
                <Carousel />
            </div>

            <Products />
        </>
    );
};

export default Home;
