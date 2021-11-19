import React, { useEffect, useState, useRef } from "react";

class Navbar extends React.Component {
  render() {
    // return <h1 className="center">Navbar</h1>;
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#road-map">
                  Roadmap
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#mint">
                  Mint
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team">
                  Team
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
