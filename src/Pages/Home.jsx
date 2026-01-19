import React from 'react';
import Hero from '../Components/Hero';
import PopularRoutes from '../Components/PopularRoutes';
import WhyChooseUs from '../Components/WhyChooseUs';
import HowItWorks from '../Components/HowItWorks';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <PopularRoutes></PopularRoutes>
            <WhyChooseUs></WhyChooseUs>
            <HowItWorks></HowItWorks>
        </div>
    );
};

export default Home;