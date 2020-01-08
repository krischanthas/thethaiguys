import React from "react";
import tuttut_small from "./assets/tuttut.jpg";
import wok_small from "./assets/wok.jpg";
import ingredients from "./assets/ingredients.jpg";
import nightMarket from "./assets/night-market.jpg";
import spices from "./assets/spices_small.jpg";
import streetVendor from "./assets/street-vendor.jpg";
import satay from "./assets/satay.jpg";
import produce from "./assets/produce.jpg";
import wok2 from "./assets/wok2.jpg";
import pad from "./assets/pad.jpg";
import curry from "./assets/curry.jpg";

import "./content.css";

export default function Content() {
  return (
    <div>
      <h1 className="jumbo">The Thai Guys</h1>

      <div className="rw">
        <div className="col">
          <img src={tuttut_small} alt="" className="tuttut" />
          <img src={wok2} alt="" className="wok2" />
          <img src={spices} alt="" className="spices" />
        </div>
        <div className="col">
        <img src={pad} alt="pad"/>
        <img src={curry} alt="" className="curry" />
        <img src={nightMarket} alt="nightMarket"/>
        </div>
        <div className="col">
        <img id="wok" src={wok_small} alt="" className="wok" />
        <img id="produce" src={produce} alt=""/>
        <img id="satay" src={satay} alt=""/>
        </div>
      </div>
    </div>
  );
}
