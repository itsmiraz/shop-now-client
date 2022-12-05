import React from 'react';
import CardSection from '../CardSection/CardSection';
import Catagory from '../Catagory/Catagory';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import Hero from '../Hero/Hero';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <CardSection></CardSection>
            <Catagory></Catagory>
            <FeaturedProducts></FeaturedProducts>
        </div>
    );
};

export default Home;