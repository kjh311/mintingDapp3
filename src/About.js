import React, { useEffect, useState, useRef } from "react";
import ImageGallery from "react-image-gallery";

class About extends React.Component {
  constructor() {
    super();
    // this.play = ImageGallery.play();
    this.state = {
      showIndex: false,
      showBullets: true,
      infinite: true,
      showThumbnails: true,
      showFullscreenButton: true,
      showGalleryFullscreenButton: true,
      showPlayButton: true,
      showGalleryPlayButton: true,
      showNav: true,
      isRTL: false,
      slideDuration: 450,
      slideInterval: 1700,
      slideOnThumbnailOver: false,
      thumbnailPosition: "right",
      showVideo: {},
      useWindowKeyDown: true,
      autoPlay: true,
    };

    this.images = [
      {
        original: "/config/images/carousel/1.jpg",
        thumbnail: "/config/images/carousel/1.jpg",
      },
      {
        original: "/config/images/carousel/2.jpg",
        thumbnail: "/config/images/carousel/2.jpg",
      },
      {
        original: "/config/images/carousel/3.jpg",
        thumbnail: "/config/images/carousel/3.jpg",
      },
      {
        original: "/config/images/carousel/4.jpg",
        thumbnail: "/config/images/carousel/4.jpg",
      },
      {
        original: "/config/images/carousel/5.jpg",
        thumbnail: "/config/images/carousel/5.jpg",
      },
      {
        original: "/config/images/carousel/6.jpg",
        thumbnail: "/config/images/carousel/6.jpg",
      },
      {
        original: "/config/images/carousel/7.jpg",
        thumbnail: "/config/images/carousel/7.jpg",
      },
      {
        original: "/config/images/carousel/8.jpg",
        thumbnail: "/config/images/carousel/8.jpg",
      },
      {
        original: "/config/images/carousel/9.jpg",
        thumbnail: "/config/images/carousel/9.jpg",
      },
      {
        original: "/config/images/carousel/10.jpg",
        thumbnail: "/config/images/carousel/10.jpg",
      },
      {
        original: "/config/images/carousel/11.jpg",
        thumbnail: "/config/images/carousel/11.jpg",
      },
      {
        original: "/config/images/carousel/12.jpg",
        thumbnail: "/config/images/carousel/12.jpg",
      },
      {
        original: "/config/images/carousel/13.jpg",
        thumbnail: "/config/images/carousel/13.jpg",
      },
      {
        original: "/config/images/carousel/14.jpg",
        thumbnail: "/config/images/carousel/14.jpg",
      },
      {
        original: "/config/images/carousel/15.jpg",
        thumbnail: "/config/images/carousel/15.jpg",
      },
      {
        original: "/config/images/carousel/16.jpg",
        thumbnail: "/config/images/carousel/16.jpg",
      },
      {
        original: "/config/images/carousel/17.jpg",
        thumbnail: "/config/images/carousel/17.jpg",
      },
      {
        original: "/config/images/carousel/18.jpg",
        thumbnail: "/config/images/carousel/18.jpg",
      },
      {
        original: "/config/images/carousel/19.jpg",
        thumbnail: "/config/images/carousel/19.jpg",
      },
      {
        original: "/config/images/carousel/20.jpg",
        thumbnail: "/config/images/carousel/20.jpg",
      },
      {
        original: "/config/images/carousel/21.jpg",
        thumbnail: "/config/images/carousel/21.jpg",
      },
      {
        original: "/config/images/carousel/22.jpg",
        thumbnail: "/config/images/carousel/22.jpg",
      },
      {
        original: "/config/images/carousel/23.jpg",
        thumbnail: "/config/images/carousel/23.jpg",
      },
      {
        original: "/config/images/carousel/24.jpg",
        thumbnail: "/config/images/carousel/24.jpg",
      },
      {
        original: "/config/images/carousel/25.jpg",
        thumbnail: "/config/images/carousel/25.jpg",
      },
      {
        original: "/config/images/carousel/26.jpg",
        thumbnail: "/config/images/carousel/26.jpg",
      },
      {
        original: "/config/images/carousel/27.jpg",
        thumbnail: "/config/images/carousel/27.jpg",
      },
      {
        original: "/config/images/carousel/28.jpg",
        thumbnail: "/config/images/carousel/28.jpg",
      },
      {
        original: "/config/images/carousel/29.jpg",
        thumbnail: "/config/images/carousel/29.jpg",
      },
      {
        original: "/config/images/carousel/30.jpg",
        thumbnail: "/config/images/carousel/30.jpg",
      },
      {
        original: "/config/images/carousel/31.jpg",
        thumbnail: "/config/images/carousel/31.jpg",
      },
      {
        original: "/config/images/carousel/32.jpg",
        thumbnail: "/config/images/carousel/32.jpg",
      },
      {
        original: "/config/images/carousel/33.jpg",
        thumbnail: "/config/images/carousel/33.jpg",
      },
      {
        original: "/config/images/carousel/34.jpg",
        thumbnail: "/config/images/carousel/34.jpg",
      },
      {
        original: "/config/images/carousel/35.jpg",
        thumbnail: "/config/images/carousel/35.jpg",
      },
      {
        original: "/config/images/carousel/36.jpg",
        thumbnail: "/config/images/carousel/36.jpg",
      },
      {
        original: "/config/images/carousel/37.jpg",
        thumbnail: "/config/images/carousel/37.jpg",
      },
      {
        original: "/config/images/carousel/38.jpg",
        thumbnail: "/config/images/carousel/38.jpg",
      },
      {
        original: "/config/images/carousel/39.jpg",
        thumbnail: "/config/images/carousel/39.jpg",
      },
      {
        original: "/config/images/carousel/40.jpg",
        thumbnail: "/config/images/carousel/40.jpg",
      },
      {
        original: "/config/images/carousel/41.jpg",
        thumbnail: "/config/images/carousel/41.jpg",
      },
      {
        original: "/config/images/carousel/42.jpg",
        thumbnail: "/config/images/carousel/42.jpg",
      },
      {
        original: "/config/images/carousel/43.jpg",
        thumbnail: "/config/images/carousel/43.jpg",
      },
      {
        original: "/config/images/carousel/44.jpg",
        thumbnail: "/config/images/carousel/44.jpg",
      },
      {
        original: "/config/images/carousel/45.jpg",
        thumbnail: "/config/images/carousel/45.jpg",
      },
      {
        original: "/config/images/carousel/46.jpg",
        thumbnail: "/config/images/carousel/46.jpg",
      },
      {
        original: "/config/images/carousel/47.jpg",
        thumbnail: "/config/images/carousel/47.jpg",
      },
      {
        original: "/config/images/carousel/48.jpg",
        thumbnail: "/config/images/carousel/48.jpg",
      },
      {
        original: "/config/images/carousel/49.jpg",
        thumbnail: "/config/images/carousel/49.jpg",
      },
      {
        original: "/config/images/carousel/50.jpg",
        thumbnail: "/config/images/carousel/50.jpg",
      },
      {
        original: "/config/images/carousel/51.jpg",
        thumbnail: "/config/images/carousel/51.jpg",
      },
      {
        original: "/config/images/carousel/52.jpg",
        thumbnail: "/config/images/carousel/52.jpg",
      },
      {
        original: "/config/images/carousel/53.jpg",
        thumbnail: "/config/images/carousel/53.jpg",
      },
      {
        original: "/config/images/carousel/54.jpg",
        thumbnail: "/config/images/carousel/54.jpg",
      },
      {
        original: "/config/images/carousel/55.jpg",
        thumbnail: "/config/images/carousel/55.jpg",
      },
    ];
  }
  render() {
    return (
      <div id="about" className="section">
        {/* <img className="main-logo" src="/config/images/main-logo2.png" /> */}
        {/* image marquee */}
        <div className="intro-paragraph d-flex justify-content-center">
          <h3 className="intro-text">
            DWEEBLES ARE 10,000 FUN LOVING CHARACTERS LIVING ON THE POLYGON
            BLOCKCHAIN.
          </h3>
        </div>
        <ImageGallery
          items={this.images}
          autoPlay={true}
          showThumbnails={true}
        />
      </div>
    );
  }
}

export default About;
