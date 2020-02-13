import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import page1 from './assets/1.jpg';
import page2 from './assets/2.jpg';
 
class MenuCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={page1} alt="menu page 1"/>
                </div>
                <div>
                    <img src={page2} alt="menu page 2"/>
                </div>
           
            </Carousel>
        );
    }
};

export default MenuCarousel;
 