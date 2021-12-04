import React, { useEffect, useState, useRef } from "react";

class Traits extends React.Component {
  render() {
    return (
      <div id="traits" className="section container-fluid m-0 p-0">
        <div className="traits-top"></div>
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
        </div>
      </div>
    );
  }
}

export default Traits;
