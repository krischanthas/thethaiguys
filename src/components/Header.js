import React from "react";
import "./header.css";
import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter as Router} from "react-router-dom";


export default function Header() {
  return (
    <div>
      <div className="ui secondary pointing menu" id="menuBar">
        <div className="home ui content">The Thai Guys</div>
        <Router>
        <div className="right menu">
          <Link smooth to='/#about'>
            <div className="item">About Us</div>
          </Link>
          <Link smooth to='/#menu'>
          <div className="item">Menu</div>
          </Link>
          <Link smooth to='/#contact'>          
            <div className="item">Contact</div>
          </Link>
          <Link smooth to='/#social'>
          <div className="item">Social</div>
          </Link>
        </div>
        </Router>
      </div>
    </div>
  );
}
