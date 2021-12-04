import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import App from "./App";
import About from "./About";
import OpenSea from "./OpenSea";
import RoadMap from "./RoadMap";
import Traits from "./Traits";
import Team from "./Team";
import Footer from "./Footer";

import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./styles/reset.css";
// import "../public/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
// var countdown  = require('react-countdown-to-future-date');
// import Countdown from "react-countdown-to-future-date";

ReactDOM.render(
  <Provider store={store}>
    <Navbar />
    <About />
    {/* <Countdown givenDate={"November, 17, 2022"} /> */}
    <App />
    <OpenSea />
    <RoadMap />
    <Traits />
    <Team />
    <Footer />
    {/* <Footer /> */}
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
