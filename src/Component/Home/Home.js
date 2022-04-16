import React from 'react';
import CarouselImg from '../Header/Carousel';
import CityTour from './CityTour';
import Featured from './Featured/Featured';

const Home = () => {
    return (
        <div>
            <CarouselImg></CarouselImg>
            <CityTour/>
            <Featured></Featured>
        </div>
    );
};

export default Home;