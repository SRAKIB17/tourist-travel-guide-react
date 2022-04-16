import React from 'react';
import CarouselImg from '../Header/Carousel';
import AppsDownload from './AppsDownload';
import CityTour from './CityTour';
import Featured from './Featured/Featured';

const Home = () => {
    return (
        <div className='home'>
            <CarouselImg/>  
            <CityTour/>
            <Featured/>
            <AppsDownload/>
        </div>
    );
};

export default Home;