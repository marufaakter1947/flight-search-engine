import React from 'react';
import Hero from '../Components/Hero';
import PopularRoutes from '../Components/PopularRoutes';
import WhyChooseUs from '../Components/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <PopularRoutes></PopularRoutes>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;