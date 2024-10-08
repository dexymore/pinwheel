import React from 'react';
import Hero from '../sections/HomePageSections/Hero';
import Solutions from '../sections/HomePageSections/Solutions';
import Failure from '../sections/HomePageSections/Failure';
import Payments from '../sections/HomePageSections/Payments';
import Accountability from '../sections/HomePageSections/Accountability';
import Testimonials from '../sections/HomePageSections/Testimonials';
import Helping from '../sections/HomePageSections/Helping';

const HomePage = () => {
    return (<>
        <Hero></Hero>
        <Solutions></Solutions>
        <Failure></Failure>
        <Payments></Payments>
        <Accountability></Accountability>
        <Testimonials></Testimonials>
        <Helping></Helping>
</>
    );
};

export default HomePage;