import React from 'react';
import Banner from '../Banner/Banner';
import Partner from '../Partner/Partner';
import Product from '../Product/Product';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Product></Product>
            <Testimonial></Testimonial>
            <Partner></Partner>
        </>
    );
};

export default Home;