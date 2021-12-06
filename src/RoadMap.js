// import React, { useEffect, useState, useRef } from "react";
import React from "react";
// import CountdownTimer from "./CountdownTimer";
import Countdown from "react-countdown-to-future-date";
import { gsap } from "gsap";

class RoadMap extends React.Component {
  render() {
    return (
      <div id="road-map" className="section">
        {/* <div className="roadmap-top"></div> */}
        {/* <div className="roadmap-top-div">
          <img
            className="roadmap-top-img"
            src="config/images/Triangle-Up.svg"
          />
        </div> */}
        <h1 className="center bubblegum text-shadow roadmap-title">RoadMap</h1>
        <br />
        <div className="minting-time bubblegum">
          <h3>
            - <span className="big-font">Minting</span> December{" "}
            <span className="big-font">17</span>,{" "}
            <span className="big-font">7pm</span> PST.
          </h3>
          {/* <CountdownTimer /> */}
          <Countdown
            className="mint-countdown"
            givenDate={"December, 17, 2021"}
          />
          <br />
          <br />
          <h3>
            - <span className="big-font">Reveal</span> December{" "}
            <span className="big-font">20th</span>,{" "}
            <span className="big-font">7pm</span> PST
          </h3>
          <Countdown
            className="mint-countdown"
            givenDate={"December, 21, 21 2021"}
          />
        </div>
        <br />
        <br />
        <br />
        <ul className="roadmap-ul ">
          <li className="roadmap-li bubblegum blue-text">
            <i class="fas fa-arrow-circle-right text-shadow "></i>{" "}
            <span className="text-shadow big-font">Phase 1 (0-20%)</span>
          </li>
          <ul className="pink-text">
            <li>
              <h4 className="bubblegum">
                - <span className="big-font">2</span> lucky winners will each
                receive <span className="big-font">5%</span> of the Phase 1 Mint
                earnings.
              </h4>
            </li>

            <li>
              <h4 className="bubblegum">
                - <span className="big-font">1</span> out of every{" "}
                <span className="big-font">20</span> Dweeblez holders will each
                receive another free via Airdrop.
              </h4>
            </li>
          </ul>
          <br />
          <br />
          <li className="roadmap-li bubblegum blue-text big-font">
            <i class="fas fa-arrow-circle-right text-shadow"></i>{" "}
            <span className="text-shadow big-font">Phase 2 (20-40%)</span>
          </li>
          <ul className="pink-text">
            <li>
              <h4 className="bubblegum">
                - <span className="big-font">2</span> lucky winners will each
                receive <span className="big-font">5%</span> of the Phase 2 Mint
                earnings.
              </h4>
            </li>
          </ul>
          <br />
          <br />
          <li className="roadmap-li bubblegum blue-text  big-font">
            <i class="fas fa-arrow-circle-right text-shadow"></i>{" "}
            <span className="text-shadow big-font">Phase 3 (40-60%)</span>
          </li>
          <ul className="pink-text">
            <li>
              <h4 className="bubblegum">
                - <span className="big-font">2</span> lucky winners will each
                receive <span className="big-font">5%</span> of the Phase 3 Mint
                earnings.
              </h4>
            </li>
          </ul>
          <br />
          <br />
          <li className="roadmap-li bubblegum blue-text  big-font">
            <i class="fas fa-arrow-circle-right text-shadow"></i>{" "}
            <span className="text-shadow big-font">Phase 4 (60-80%)</span>
          </li>
          <ul className="pink-text">
            <li>
              <h4 className="bubblegum">
                - <span className="big-font">2</span> lucky winners will each
                receive <span className="big-font">5%</span> of the Phase 4 Mint
                earnings.
              </h4>
            </li>
          </ul>
          <br />
          <br />
          <li className="roadmap-li bubblegum blue-text  big-font">
            <i class="fas fa-arrow-circle-right text-shadow"></i>{" "}
            <span className="text-shadow big-font">Phase 5 (80-100%)</span>
          </li>
          <ul className="pink-text">
            <li>
              <h4 className="bubblegum">
                - <span className="big-font">2</span> lucky winners will each
                receive <span className="big-font">5%</span> of the Phase 5 Mint
                earnings.
              </h4>
            </li>
            <li>
              <h4 className="bubblegum">
                - <span className="big-font">1%</span> of Mint Earnings will be
                donated to the{" "}
                <span className="big-font">World Wildlife Fund.</span>
              </h4>
            </li>
          </ul>
          <br />
          <br />
          <li className="roadmap-li bubblegum blue-text">
            <i class="fas fa-arrow-circle-right text-shadow"></i>{" "}
            <span className="text-shadow big-font">Phase 6</span>
          </li>
          <br />
          <ul className="pink-text">
            <li>
              <h4 className="bubblegum phase-six-details">
                - <span className="big-font">Whitelist spots</span> for my next
                project will be entirely composed of randomly chosen Dweeblez
                holders.
              </h4>
            </li>
            <br />
            <li>
              <h4 className="bubblegum phase-six-details">
                - Each Dweeblez holder will own{" "}
                <span className="big-font">sole rights</span> the online
                likeness of their Dweeblez.
              </h4>
            </li>
            <li>
              <h4 className="bubblegum">
                - 300 Dweeblez will be withheld for marketing and givaways.
              </h4>
            </li>
          </ul>
        </ul>
        <br />
      </div>
    );
  }
}

export default RoadMap;
