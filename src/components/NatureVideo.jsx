import React from "react";
import Nav from "./Nav";
import NeturalVideo from "../assets/Netural30sec.mp4";

function NatureVideo() {
  return (
    <div className="w-full h-screen flex flex-col bg-[#F8F9FA] overflow-hidden">
      {/* 60% Video Section */}
      <div className="w-full h-[60vh] relative">
        <div className="absolute top-8 right-12 z-20">
          <Nav />
        </div>
        <video 
          className="w-full h-full object-cover" 
          autoPlay 
          loop 
          playsInline
        >
          <source src={NeturalVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center pointer-events-none">
          <h1 className="text-white text-5xl md:text-7xl font-bold uppercase tracking-wider drop-shadow-lg text-center">
            Our Nature Story
          </h1>
        </div>
      </div>

      {/* 40% Text Section */}
      <div className="w-full h-[40vh] p-8 md:p-12 flex flex-col justify-center items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#4A7A3C] mb-4">
          Where Every Leaf Tells A Story.
        </h2>
        <p className="text-gray-600 max-w-4xl text-base md:text-lg leading-relaxed">
          Welcome to our garden — a peaceful green escape where nature is celebrated, 
          nurtured, and shared with everyone who walks in. What started as a small idea 
          rooted in love for plants has grown into a space filled with beauty, learning, and 
          joy. Our goal is simple: to help people reconnect with nature, one plant and one 
          moment at a time.
        </p>
      </div>
    </div>
  );
}

export default NatureVideo;
