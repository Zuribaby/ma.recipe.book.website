import React, { useState, useEffect, useRef } from "react";
import video1 from "../images/video1.mp4";
import video2 from "../images/video2.mp4";
import video3 from "../images/video3.mp4";
import "../css/HeroVideo.css";

function HeroVideo() {
  // State variables to track the current video index and fade effect
  const [currentVideo, setCurrentVideo] = useState(0);
  const [fade, setFade] = useState(false);

  // Array containing video sources
  const videos = [video1, video2, video3];

  // Ref for the video element
  const videoRef = useRef(null);

  // Effect to change the video every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Triggering fade effect
      setFade(true);
      setTimeout(() => {
        // Switching to the next video
        setCurrentVideo((prevVideo) => (prevVideo + 1) % videos.length);
        // Disabling fade effect after video switch
        setFade(false);
      }, 1000); // Delay switching video to allow fade effect
    }, 30000); // Change video every 30 seconds (adjust as needed)

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, [videos.length]); // Dependency array to ensure effect runs when videos change

  // Render the component
  return (
    <div className="hero-video-container" id="hero-video-container" >
      {/* Video element */}
      <video
        ref={videoRef}
        src={videos[currentVideo]}
        autoPlay
        muted
        loop
        className={`hero-video ${fade ? "fade" : ""}`}
        disablePictureInPicture
        controlsList="nodownload"
        style={{ maxWidth: "90%", height: "90%" }} // Inline styles for max-width and height
      />
    </div>
  );
}

export default HeroVideo;
