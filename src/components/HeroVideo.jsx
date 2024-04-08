import React, { useState, useEffect } from "react";
import video1 from "../images/video1.mp4";
import video2 from "../images/video2.mp4";
import video3 from "../images/video3.mp4";
import "../css/HeroVideo.css";

function HeroVideo() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videos = [video1, video2, video3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prevVideo) => (prevVideo + 1) % videos.length);
    }, 30000); // Change video every 5 seconds (adjust as needed)
    return () => clearInterval(interval);
  }, [videos.length]);

  return (
    <div className="hero-video-container">
      <video
        src={videos[currentVideo]}
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
