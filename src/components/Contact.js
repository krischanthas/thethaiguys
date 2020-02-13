import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./contact.css";
import red from './assets/red.png';
import ubereats from './assets/ubereats.png';
import gh from './assets/gh.png';

export default function Contact() {

      const marginBottom = {
            marginBottom: "8px"
      }
      return (
            <div className="contactBox" id="contact">
                  <div className="contact">
                        <h2>Now Accepting Orders</h2>
                        <div>
                              <h4>Available on all delivery platforms</h4>
                              <Router>
                              <a href="https://postmates.com/merchant/thai-guys-long-beach">
                                    <img
                                          src="https://postmates.com/assets/badges/pm-yellow-order-2.png"
                                          width="200px"
                                          alt="Order delivery from Postmates"
                                    />
                              </a>
                              <br/>
                              <a href="https://www.ubereats.com/en-US/los-angeles/food-delivery/thai-guys/crvlkqKRRLaE6wf9b7EpMA">
                                    <img
                                          src={ubereats}
                                          width="200px"
                                          alt="Order delivery from UberEats"
                                    />
                              </a>
                              <a href="https://www.doordash.com/business/373610/?utm_source=partner-link&utm_medium=website&utm_campaign=373610&utm_content=red-l" >
                                    <img
                                          src={red}
                                          width="200px"
                                          alt="Order delivery from Doordash"
                                          style={marginBottom}
                                    />
                              </a>
                              <a href="https://www.grubhub.com/restaurant/thai-guys-1388-daisy-ave-long-beach/1945094">
                                    <img
                                          src={gh}
                                          width="200px"
                                          alt="Order delivery from GrubHub"
                                    />
                              </a>
                              
                             

                              </Router>
                        </div>
                        <h3>(562) 414-4418</h3>
                        <h3>1388 Daisy Ave, Long Beach, CA 90813</h3>
                        <h3>
                              <a href="mailto:contact@thethaiguys.com">
                                    Contact us!
                              </a>
                        </h3>
                  </div>
            </div>
      );
}
