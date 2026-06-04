import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { plants } from '../Data/plantsData';
import Nav from "./Nav";
import '../index.css';

function PlantCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const currentPlant = plants[currentIndex];
  // Calculate the next plant for the bottom-right preview card
  const nextIndex = (currentIndex + 1) % plants.length;
  const nextPlant = plants[nextIndex];

  // ================= GSAP ANIMATION LOGIC =================
  useGSAP(() => {
    const tl = gsap.timeline();

    // Reset properties to ensure clean animations on state change
    gsap.set([".anim-title", ".anim-img", ".anim-benefits", ".anim-text"], { clearProps: "all" });

    // 1. Text slides up smoothly
    gsap.from(".anim-title", {
      x: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out" // Sleek, non-bouncy ease
    })
    // 2. Plant Image: Scales up and slides diagonally from bottom-right
    gsap.from(".anim-img", {
      x: 300,
      y: 200,
      scale: 0.15,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.6")
    // 3. Benefits fade in
    gsap.from(".anim-benefits", {
      x: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.6")
    // 4. Bottom text fades in
    gsap.from(".anim-text", {
      x: -20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=0.6");

  }, { dependencies: [currentIndex], scope: containerRef });
  return (
    <div
      ref={containerRef}
      // Dark green background matching your design
      className="relative w-full h-screen bg-gradient-to-b from-[#143d2c] to-[#0c261b] text-white overflow-hidden font-sans flex flex-col"
    >
      {/* ================= HEADER ================= */}
      <header className="absolute top-0 left-0 w-full p-8 flex justify-between items-center pt-15 z-20">
        {/* Left Icons */}
        <div className="flex gap-4">
          <button className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          </button>
          <button className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
          </button>
        </div>
        <Nav />
      </header>

      {/* ================= CENTER STAGE ================= */}
      <div className="relative flex-1 w-full max-w-6xl mx-auto flex items-center justify-center mt-12">

        {/* Giant Staggered Text (Behind Plant) */}
        <div className="absolute inset-0 flex flex-col items-center top-[10%] pointer-events-none">
          <h1 className="anim-title text-8xl font-bold leading-none tracking-wide -ml-[20%] drop-shadow-lg">
            {currentPlant.title1}
          </h1>
          <h1 className="anim-title absolute top-30 z-100 text-8xl font-bold leading-none tracking-wide ml-[20%] drop-shadow-lg">
            {currentPlant.title2}
          </h1>
        </div>

        {/* Main Plant Image */}
        <img
          src={currentPlant.mainImage}
          alt={currentPlant.title1}
          className="anim-img relative z-10 w-auto h-[65vh] object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)]"
        />

        {/* Floating Benefits Card */}
        <div className="anim-benefits absolute z-20 right-[15%] top-[55%] bg-white/5 backdrop-blur-sm border border-white/40 rounded-xl p-4 w-48 shadow-xl">
          <h4 className="text-sm font-semibold mb-2">Benefits :</h4>
          <ul className="text-xs space-y-1 opacity-80">
            {currentPlant.benefits.map((benefit, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-1 h-1 bg-white rounded-full"></span> {benefit}
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* ================= BOTTOM SECTION ================= */}
      <div className="absolute bottom-12 left-12 max-w-md z-20">
        <p className="anim-text text-[15px] leading-relaxed opacity-90 mb-6 drop-shadow-md">
          {currentPlant.description}
        </p>
        <div className="anim-text flex items-center gap-6">
          <p className="text-xl font-semibold">Price : {currentPlant.price}</p>
          <button className="px-6 py-2 border border-white/60 rounded-full text-sm font-medium hover:bg-white hover:text-[#143d2c] transition-colors shadow-lg">
            SHOP NOW
          </button>
        </div>
      </div>

      {/* ================= NEXT PLANT PREVIEW CARD ================= */}
      <div
        onClick={() => setCurrentIndex(nextIndex)}
        className="absolute bottom-0 right-16 w-72 bg-[#1b4635]/80 backdrop-blur-md rounded-t-[32px] pt-14 pb-8 px-6 text-center cursor-pointer transition-transform duration-300 hover:-translate-y-4 hover:bg-[#225742]/90 z-20 shadow-2xl border-t border-x border-white/10 group"
      >
        <img
          src={nextPlant.thumbImage}
          alt={nextPlant.title1}
          className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-110"
        />
        <h3 className="text-lg font-medium mb-2 capitalize">
          {nextPlant.title1.toLowerCase()} {nextPlant.title2.toLowerCase()}
        </h3>
        <p className="text-xs opacity-70 line-clamp-2">
          {nextPlant.description}
        </p>
      </div>

    </div>
  );
}

export default PlantCarousel;