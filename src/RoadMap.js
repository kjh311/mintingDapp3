// import React, { useEffect, useState, useRef } from "react";
import React from "react";
// import CountdownTimer from "./CountdownTimer";
// import Countdown from "react-countdown-to-future-date";
import Countdown from "react-countdown";
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
            <span className="big-font">27</span>,{" "}
            <span className="big-font">7pm</span> PST.
          </h3>
          {/* <CountdownTimer /> */}
          {/* <Countdown
            className="mint-countdown"
            givenDate={"December, 27, 2021"}
          /> */}
          {/* <Countdown
            date={new Date("2022-12-27T06:51:55.437Z").getTime() - Date.now()}
            // date={new Date(1640660420)}
          /> */}
          <Countdown
            className="mint-countdown"
            date={0 + new Date("2021-12-27T19:00:00.000Z").getTime()}
          />
          <br />
          <br />
          <h3>
            - <span className="big-font">Reveal</span> December{" "}
            <span className="big-font">30th</span>,{" "}
            <span className="big-font">7pm</span> PST
          </h3>
          {/* <Countdown
            className="mint-countdown"
            givenDate={"December, 30, 2021"}
          /> */}
          <Countdown
            className="mint-countdown"
            date={0 + new Date("2021-12-30T19:00:00.000Z").getTime()}
            // date={0 + new Date(1640660403).getTime()}
          />
        </div>
        <br />
        <br />
        <br />
        <ul className="roadmap-ul ">
          <li className="roadmap-li bubblegum blue-text">
            <i class="fas fa-2x fa-arrow-circle-right text-shadow "></i>{" "}
            <span className="text-shadow big-font">Phase 1 (0-10%)</span>
          </li>
          <ul className="pink-text">
            <li>
              <h3 className="bubblegum">
                - The first 300 Dweeblez will be used for marketing and
                giveaways.
              </h3>
            </li>
            <li>
              <h3 className="bubblegum">
                - Dweebles <span className="big-font">#301 - #1,000</span> will
                cost only <span className="big-font">100 Matic</span> each!
              </h3>
            </li>
          </ul>
          <br />
          <br />
          <li className="roadmap-li bubblegum blue-text big-font">
            <i class="fas fa-2x fa-arrow-circle-right text-shadow"></i>{" "}
            <span className="text-shadow big-font">Phase 2 (10-25%)</span>
          </li>
          <ul className="pink-text">
            <li>
              <h3 className="bubblegum">
                - Dweeblez <span className="big-font">#1,001 - #10,000</span>{" "}
                will cost <span className="big-font">120 Matic</span> each.
              </h3>
            </li>

            <li>
              <h3 className="bubblegum">
                - <span className="big-font">1</span> out of every{" "}
                <span className="big-font">20 </span> Phase 2 Dweeblez holders
                will each receive another free Dweeble via Airdrop. <br />
                <span className="big-font">9,000 Matic in total value!!</span>
              </h3>
            </li>
          </ul>
          <br />
          <br />
          <li className="roadmap-li bubblegum blue-text  big-font">
            <i className="fas fa-2x fa-arrow-circle-right text-shadow"></i>{" "}
            <span className="text-shadow big-font">Phase 3 (25-50%)</span>
          </li>
          <ul className="pink-text">
            <li>
              <h3 className="bubblegum">
                - <span className="big-font">5</span> lucky winners will each
                receive <span className="big-font">2%</span> of the Phase 3 Mint
                earnings.
                <br />
                <span className="big-font">12,000 Matic in TOTAL value!!</span>
              </h3>
            </li>
          </ul>
          <br />
          <br />
          {/* <li className="roadmap-li bubblegum blue-text  big-font">
            <i class="fas fa-arrow-circle-right text-shadow"></i>{" "}
            <span className="text-shadow big-font">Phase 4 (50-75%)</span>
          </li>
          <ul className="pink-text">
            <li>
              <h3 className="bubblegum">
                - <span className="big-font">2</span> lucky winners will each
                receive <span className="big-font">5%</span> of the Phase 4 Mint
                earnings.
              </h3>
            </li>
          </ul>
          <br />
          <br /> */}
          <li className="roadmap-li bubblegum blue-text  big-font">
            <i className="fas fa-2x fa-arrow-circle-right text-shadow"></i>{" "}
            <span className="text-shadow big-font">Phase 4 (50-100%)</span>
          </li>
          <ul className="pink-text">
            <li>
              <h3 className="bubblegum">
                - <span className="big-font">10</span> lucky winners will each
                receive <span className="big-font">1%</span> of the Phase 4 Mint
                earnings.
                <br />
                <span className="big-font">24,000 Matic in TOTAL value!!</span>
              </h3>
            </li>
            <li>
              <h3 className="bubblegum">
                - <span className="big-font">1%</span> of total Mint Earnings
                will be donated to the <br />
                <span className="big-font">World Wildlife Fund.</span>
              </h3>
              <a href="https://www.worldwildlife.org/" target="_blank">
                <img className="wwf" src="config/images/wwf.png" />
              </a>
            </li>
          </ul>
          <br />
          <br />
          <li className="roadmap-li bubblegum blue-text">
            <i className="fas fa-2x fa-arrow-circle-right text-shadow"></i>{" "}
            <span className="text-shadow big-font">Phase 5</span>
          </li>
          <br />
          <ul className="pink-text">
            <li>
              <h3 className="bubblegum phase-six-details">
                - <span className="big-font">Whitelist spots</span> for my next
                project will be entirely composed of randomly chosen Dweeblez
                holders.
              </h3>
            </li>
            <br />
            <li>
              <h3 className="bubblegum phase-six-details">
                - Each Dweeblez holder will own{" "}
                <span className="big-font">sole rights</span> to the online
                likeness of their Dweeblez.
              </h3>
            </li>
            {/* <li>
              <h3 className="bubblegum">
                - 300 Dweeblez will be withheld for marketing and givaways.
              </h3>
            </li> */}
          </ul>
        </ul>
        <br />
      </div>
    );
  }
}

export default RoadMap;
