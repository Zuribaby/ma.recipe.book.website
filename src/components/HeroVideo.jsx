import React from "react";
import video from "../images/video.mp4";
import "../css/HeroVideo.css";

function HeroVideo() {
  return (
    <div className="hero-video-container">
      <video
        src={video}
        autoPlay
        muted
        loop
        className="hero-video"
        disablePictureInPicture
        controlsList="nodownload"
      />
    </div>
  );
}

export default HeroVideo;
