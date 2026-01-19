import React from 'react';
import Hero from '../Components/Hero';
import PopularRoutes from '../Components/PopularRoutes';
import WhyChooseUs from '../Components/WhyChooseUs';
import HowItWorks from '../Components/HowItWorks';
import Destinations from '../Components/Destinations';
import Testimonials from '../Components/Testimonials';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <PopularRoutes></PopularRoutes>
            <WhyChooseUs></WhyChooseUs>
            <HowItWorks></HowItWorks>
            <Destinations></Destinations>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;