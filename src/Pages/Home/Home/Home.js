import React from 'react';
import CardSection from '../CardSection/CardSection';
import Catagory from '../Catagory/Catagory';
import Contact from '../Contact/Contact';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import Hero from '../Hero/Hero';
import Testimonials from '../Testimonials/Testimonials';
import TextSlide from '../TextSlide/TextSlide';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <TextSlide></TextSlide>
            <CardSection></CardSection>
            <Catagory></Catagory>
            <FeaturedProducts></FeaturedProducts>
            <Testimonials></Testimonials>
            <Contact></Contact>
        </div>
    );
};

export default Home;