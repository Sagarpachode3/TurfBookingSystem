import React from 'react';

import { Button, Card,  Carousel} from 'react-bootstrap';
import f1 from '../../../images/f1.jpeg';
import f2 from '../../../images/f2.jpeg';
import f3 from '../../../images/f3.jpeg';

import './Coursel.css';
import "react-multi-carousel/lib/styles.css";
 
export default function ControlledCarousel(){
    
    return(
        <Carousel>

          <Carousel.Item style={{width:1200 , alignContent:'center', marginLeft:80 }}>
            <img
              className="d-block w-100 imgset"
              src={f1}
              alt="First slide" 
            />
            <Carousel.Caption>
              <h1 class="display-1">Cricket</h1>
              <p class="rounded-pill t">Add sports in your daily life !</p>
              <p class="rounded-pill t">The Dugout is an online platform to connect sports facilities to its users, <br></br> We're breaking down barriers to getting more people active</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item style={{width:1200, alignContent:'center', marginLeft:80}}>
            <img
              className="d-block w-100 imgset"
              src={f2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h1 class="display-1">Football</h1>
              <p class="rounded-pill t">Meet your pals over game !</p>
              <p class="rounded-pill t">Want to play, but don't get an opponent team? <br></br> You can invite your friends or Join a pre scheduled match through The Dugout</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item style={{width:1200, alignContent:'center', marginLeft:80}}>
            <img
              className="d-block w-100 imgset"
              src={f3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h1 class="display-1">Tennis</h1>
              <p class="rounded-pill t" >Play More, Pay Less !</p>
              <p class="rounded-pill t" >Register yourself and book your turf now</p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>

    );
 
}

