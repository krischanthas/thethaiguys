import React from 'react';
import './footer.css';
import yelpIcon from './assets/yelp-icon.png';
import ig from './assets/instagram-icon.png';
import { BrowserRouter as Router, Link } from 'react-router-dom'; 

export default function Footer() {
      return (
            <div>
                  <div className="footerBox" id="social">
                        <div className="socialBox">
                              <Router>
                              <div className="yelp">
                                    
                                    <a href="https://www.yelp.com/">
                                    <img src={yelpIcon} alt="The Thai Guys Yelp"/>
                                    </a>
                              </div>
                              &nbsp;
                              <div className="ig">
                                    <a href="https://instagram.com/thethaiguys_"><img src={ig} alt="The Thai Guys Instragram"/></a></div>
                              </Router>
                        </div>
                  </div>
            </div>
      )
}
