import React, { useEffect, useState, useRef } from "react";

class Traits extends React.Component {
  render() {
    return (
      <div id="traits" className="section container-fluid m-0 p-0">
        {/* <div className="traits-top"></div>
        <div className="traits-top2"></div> */}

        <h1 className="center bubblegum text-shadow traits-title">Traits</h1>
        <div className="row bubblegum medium-font m-5">
          <div className="col-12 col-md-6">
            <ul>
              <li>Clothes: 8</li>
              <li>Eyes: 12</li>
              <li>Hair: 27</li>
              <li>Mouth: 29</li>
              <li>Background: 17</li>
              <li>Body: 13</li>
            </ul>
          </div>
          <div className="col-12 col-md-6">
            <ul>
              <li>Ears: 3</li>
              <li>Movie Quotes: 21</li>
              <li>Neck: 4</li>
              <li>Tattoos: 2</li>
              <li>Hands: 5</li>
              <li className="text-shadow">
                TOTAL: <span className="big-font">141</span> unique traits
              </li>
            </ul>
          </div>

          <div className="row rarities-row">
            <h1 className="text-shadow">Rarities:</h1>
            <div className="col-12 col-md-6 rarities-div">
              <p>Gold Bitcoin Necklace</p>
              <img
                className="rarities-img"
                src="config/images/gold-necklace.jpg"
              />
            </div>
            <div className="col-12 col-md-6">
              <p>Frickin' Laser Eyes</p>
              <img
                className="rarities-img"
                src="config/images/laser-eyes.png"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Traits;
