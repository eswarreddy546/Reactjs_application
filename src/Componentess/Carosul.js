import React from 'react'

import Carousel from 'react-bootstrap/Carousel';
import Courses from './Courses';

export default function Carosul(){ 
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <center>
        <img 
          className="d-block "
          src="https://e1.pxfuel.com/desktop-wallpaper/574/84/desktop-wallpaper-net-full-stack-developer-full-stack-thumbnail.jpg"
          alt="First slide"
        style={{padding:'100px',height:'800px',width:'1200px'}}/>
        </center>
      </Carousel.Item>
      <Carousel.Item>
        <center>
        <img 
          className="d-block "
      
          src="https://t4.ftcdn.net/jpg/02/65/28/09/360_F_265280966_3F83JFHvgU3b4XclfS0TdI148h4dJuxD.jpg"           alt="Second slide"
          style={{padding:'100px',height:'800px',width:'1200px'}}/>
          
          </center>
      </Carousel.Item>
      <Carousel.Item>
      <center>
      <img
          className="d-block "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5lH5w5Ne-1Z2ft9KGhm2DeYCk0elSHMLTpQ&usqp=CAU"
          alt="Third slide"
          style={{padding:'100px',height:'800px',width:'1200px'}}/>
          
          </center>
      </Carousel.Item>
      <Courses/>

    </Carousel>
  );
  }

