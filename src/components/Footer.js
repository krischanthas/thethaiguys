import React from 'react';
import './footer.css';
import yelpIcon from './assets/yelp-icon.png';
import ig from './assets/instagram-icon.png';
import { BrowserRouter as Router } from 'react-router-dom'; 

export default function Footer() {
      const contact = {
            marginLeft: "50px"
      }
      return (
            <div>
                  <div className="footerBox" id="social">
                        <div className="socialBox">
                              <Router>
                              <div className="yelp">
                                    
                                    <a href="https://www.yelp.com/biz/the-thai-guys-long-beach">
                                    <img src={yelpIcon} alt="The Thai Guys Yelp"/>
                                    </a>
                              </div>
                              &nbsp;
                              <div className="ig">
                                    <a href="https://instagram.com/thethaiguys_"><img src={ig} alt="The Thai Guys Instragram"/></a></div>
                              </Router>
                              <div style={contact}>
                              <h4>(562) 414-4418</h4>
                              
                              <h4>
                                    <a href="mailto:contact@thethaiguys.com">
                                          Contact us!
                                    </a>
                              </h4>
                              </div>
                        </div>
                  </div>
            </div>
      )
}
