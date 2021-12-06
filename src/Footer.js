import React, { useEffect, useState, useRef } from "react";

class Footer extends React.Component {
  render() {
    return (
      <div id="footer" className="section">
        {/* <div className="footer-top"></div> */}
        {/* <h1 className="center bubblegum">Footer</h1> */}

        <div className="links-div">
          <ul className="links-ul d-flex flex-row justify-content-evenly">
            <li className="links-li">
              <a href="https://twitter.com/dweeblezNFT" target="_blank">
                <i class="fab fa-2x fa-twitter"></i>
              </a>
            </li>
            <li className="links-li">
              <a href="https://opensea.io/collection/dweeblez" target="_blank">
                <i class="fas fa-2x fa-link"></i>
              </a>
            </li>
            <li className="links-li">
              <a
                href="https://discord.com/channels/916817609834512426/916817610333642764"
                target="_blank"
              >
                <i class="fab fa-2x fa-discord"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="copyrite-div">
          <h4>Copyright &copy; {new Date().getFullYear()}</h4>
        </div>
      </div>
    );
  }
}

export default Footer;
