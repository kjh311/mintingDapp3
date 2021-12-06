import React, { useEffect, useState, useRef } from "react";

class Navbar extends React.Component {
  render() {
    // return <h1 className="center">Navbar</h1>;
    return (
      <>
        <nav className="navbar section navbar-expand-md navbar-dark bg-dark">
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

          {/* <span class="navbar-brand mb-0 h1">Navbar</span> */}

          <a href="#">
            <img className="nav-logo" src="/config/images/main-logo2.png" />
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto d-flex justify-content-end align-items-center">
              {/* <a href="#" class="navbar-left"><img src="/path/to/image.png"></a> */}
              <li className="nav-item active">
                <a className="nav-link" href="#about-text">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#mint">
                  Mint
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#road-map">
                  Roadmap
                </a>
              </li>

              {/* <li className="nav-item"> */}

              {/* </li> */}

              {/* <li className="nav-item">
                <a className="nav-link" href="#team">
                  Team
                </a>
              </li> */}
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://twitter.com/dweeblezNFT"
                  target="_blank"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://opensea.io/collection/dweeblez"
                  target="_blank"
                >
                  <i className="fas fa-link"></i>
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://discord.com/channels/916817609834512426/916817610333642764"
                  target="_blank"
                >
                  {/* <img
                    className="opensea-logo"
                    src="/config/images/opensea-logo.png"
                  /> */}
                  <i className="fab fa-discord"></i>
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
