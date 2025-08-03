import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import all from './bmcoffers.jpg';


function adds() {
  return (
    <div>
        <Carousel>
      <Carousel.Item  >
        <img src={all} alt='first' style={{height:'118vh'}}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
      <img style={{height:'118vh'}} src={all} alt='sec'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
      <img src={all} alt='third' style={{height:'118vh'}}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default adds
