import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../images/banner/banner-1.png'
import img2 from '../../../images/banner/banner-2.png'
import img3 from '../../../images/banner/banner-3.png'
import img4 from '../../../images/banner/banner-4.png'

const Banner = () => {
    return (
        <div>
           <Carousel >
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />
   
  </Carousel.Item>
   <Carousel.Item>
    <img
      className="d-block w-100"
      src={img4}
      alt="Fourth slide"
    />
   
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;