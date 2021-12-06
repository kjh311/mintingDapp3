import React, { useEffect, useState, useRef } from "react";

class Team extends React.Component {
  render() {
    return (
      <div id="team" className="section">
        {/* <div className="team-top"></div> */}
        {/* <div className="team-top2"></div> */}
        <h1 className="center bubblegum text-shadow team-title">Team</h1>
        <div>
          <img
            className="frame-profile-pic"
            src="/config/images/Web-Profile.png"
          />
          <h1 className="bubblegum text-shadow">"El Moco Loco"</h1>
          <h4 className="bubblegum">
            Artist, Programmer, and Project Manager.
            <br /> I can do it all, baby!
          </h4>
          <br />
          <a
            className="deviant-link"
            href="https://www.deviantart.com/kjh311"
            target="_blank"
          >
            <img
              className="deviantart-logo"
              src="config/images/Deviantart-logo.png"
            />
          </a>
        </div>
        {/* <div className="team-bottom"></div> */}
      </div>
    );
  }
}

export default Team;
