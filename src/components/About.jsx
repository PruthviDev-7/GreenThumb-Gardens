import React, { useState, useRef } from "react";
import aboutbg from "../assets/bg-about.jpg";
import img2 from "../assets/page2-2.png";
import Nav from "./Nav";
import Bleft from "../assets/video-thumnel.jpg";
import Bright from "../assets/bootom-banner.jpg";
import Video1 from "../assets/Plant-Cinematic-Video.mp4";

function About() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef(null);

  const handlePlayClick = (e) => {
    e.stopPropagation();
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div className="main w-full h-screen">
      <div
        className="top w-full h-[40%] bg-cover bg-center pt-15 pl-12 pr-12 flex flex-col justify-between"
        style={{ backgroundImage: `url(${aboutbg})` }}
      >
        <div className="flex justify-between relative">
          <div>
            <h2 className="font-black text-3xl leading-tight text-[#4A7A3C] inline">
              GreenThumb Gardens
            </h2>
            <img className="h-10 inline-block align-top" src={img2} alt="" />
          </div>
          <Nav className="absolute  top-0 right-0 text-white" />
        </div>
        <h1 className="text-white text-4xl uppercase font-bold tracking-wider mb-3">
          About Us
        </h1>
      </div>
      <div className="bottom w-full h-[60%] p-12">
        <div className="bootom-top flex gap-32">
          <div className="text-4xl font-bold opacity-70 tracking-normal leading-tight text-black">
            <h2>Where Every Leaf</h2>
            <h2>Tells A Story.</h2>
          </div>
          <div className="text-md leading-tight tracking-widest opacity-50 text-black ">
            <p>Welcome to our garden — a peaceful green escape where nature is celebrated, </p>
            <p>nurtured, and shared with everyone who walks in. What started as a small idea </p>
            <p>rooted in love for plants has grown into a space filled with beauty, learning, and </p>
            <p>joy. Our goal is simple: to help people reconnect with nature, one plant and one </p>
            <p>moment at a time.</p>
          </div>
        </div>
        <div className="bootom-bootom mt-1.5 flex gap-5">
          <div className="Bleft h-55 overflow-hidden rounded-xl w-90 relative bg-black cursor-pointer" onClick={handleVideoClick}>
            {!isPlaying && (
              <>
                <img className="absolute inset-0 w-full h-full object-cover" src={Bleft} alt="Video Thumbnail" />
                <button
                  onClick={handlePlayClick}
                  className="absolute inset-0 m-auto w-fit h-fit bg-white rounded-full p-4 hover:bg-gray-200 transition-all shadow-lg z-20"
                >
                  <svg className="w-8 h-8 text-black fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </>
            )}
            
            <video ref={videoRef} className="w-full h-full object-cover" onEnded={() => setIsPlaying(false)}>
              <source src={Video1} type="video/mp4" />
            </video>
          </div>
          <div className="Brigth h-55 overflow-hidden rounded-xl w-200">
            <img className="w-full h-full object-cover" src={Bright} alt="Bottom Banner" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
