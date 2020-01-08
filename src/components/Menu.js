import React from 'react';
import './menu.css';
import MenuCarousel from './Carousel';

export default function Menu() {
      return (
            <div className="menuBox" id="menu">
                  <div className="menu">
                  <MenuCarousel/>
                  </div>
            </div>
      )
}
