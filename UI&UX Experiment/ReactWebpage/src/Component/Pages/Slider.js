import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import imgg1 from '../images/imgg1.png'
import imgg2 from '../images/imgg2.png'
import imgg3 from '../images/imgg3.png'

function Slider() {
  return (
    
      <Carousel data-bs-theme="dark" className='slide text-light bg-custom-colors'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgg1}
          alt="First slide"
          width='1500'
          height='336'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgg2}
          alt="Second slide"
          width='1500'
          height='336'
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgg3}
          alt="Third slide"
          width='1500'
          height='336'
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider
