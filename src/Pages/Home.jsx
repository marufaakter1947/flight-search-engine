import React from 'react';
import Hero from '../Components/Hero';
import PopularRoutes from '../Components/PopularRoutes';
import WhyChooseUs from '../Components/WhyChooseUs';
import HowItWorks from '../Components/HowItWorks';
import Destinations from '../Components/Destinations';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <PopularRoutes></PopularRoutes>
            <WhyChooseUs></WhyChooseUs>
            <HowItWorks></HowItWorks>
            <Destinations></Destinations>
        </div>
    );
};

export default Home;