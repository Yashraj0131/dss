import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Carousel from 'react-bootstrap/Carousel';
import image12 from "./image12.jpg";
import image13 from "./image13.jpg";
import image14 from "./image14.jpg";
import image15 from "./image15.jpg";
import image16 from "./image16.jpg";
import image17 from "./image17.jpg";

const MainContent = () => {

  return (
    <div>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossorigin="anonymous" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>

      <section style={{ backgroundColor: "#c5aa6a" }} className="text-center m-2 mt-2 p-2 d-flex aligns-items-center justify-content-md-center ">

        <h4 className="p-2 mt-5 text-center pt-3" style={{ color: "#741b47" }}>WELCOME TO DOCUMENT SUBMISSION SYSTEM</h4>

      </section>
      <Carousel className='m-2 p-2 ml-2 border-5 border border-dark w-100%' >
        
      
        <Carousel.Item interval={700}>
          <img
            className="w-100"
            src={image12}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className=''>Document Submission System</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={700}>
          <img
            className="w-100"
            src={image13}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Document Submission System</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={700}>
          <img
            className="w-100"
            src={image14}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Document Submission System</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={700}>
          <img
            className="w-100"
            src={image15}
            alt="Forth slide"
          />

          <Carousel.Caption>
            <h3>Document Submission System</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={700}>
          <img
            className="w-100"
            src={image16}
            alt="fifth slide"
          />

          <Carousel.Caption>
            <h3>Document Submission System</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={700}>
          <img
            className="w-100"
            src={image17}
            alt="sixth slide"
          />

          <Carousel.Caption>
            <h3>Document Submission System</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>



    </div>
  )
}

export default MainContent;
