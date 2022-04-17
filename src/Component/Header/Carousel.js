import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner/banner1.jpg'
import banner2 from '../../images/banner/banner2.jpg'
import banner3 from '../../images/banner/banner3.jpg'
function CarouselImg() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>BEST SERVICE instantly</h3>
            <p>Good customer service typically providing timely.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Sevice give customer timely</h3>
            <p>car pickup and journy start instantly by time</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Checking And Providing Service Online</h3>
            <p>
              Service ..take most prority so that customer will happy alltime 
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  


export default CarouselImg;