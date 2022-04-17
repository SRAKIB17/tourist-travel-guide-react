import React from 'react';
import CarouselImg from '../Header/Carousel';
import AppsDownload from './AppsDownload';
import CityTour from './CityTour';
import Featured from './Featured/Featured';
import Tours from './Tours/Tours';
import Tour from './Tours/Tours';

const Home = () => {
    return (
        <div className='home'>
            <CarouselImg/>  
            <CityTour/>
            <Featured/>
            
            <Tours></Tours>
            <AppsDownload/>
        </div>
    );
};

export default Home;