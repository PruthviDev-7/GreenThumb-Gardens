import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import img1 from "../assets/page2-1.png";
import img2 from "../assets/page2-2.png";
import img3 from "../assets/page2-3.png";
import img4 from "../assets/page2-4.png";
import img5 from "../assets/page2-5.png";
import logo from "../assets/logo.png";
import "../index.css";
import { FaArrowRightLong } from "react-icons/fa6";
import Nav from "./Nav";
import { Link } from "react-router-dom";

function Home() {
  gsap.registerPlugin(useGSAP);
  const container = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();
        // tl.from(".Home_left", {
        //   opacity: 0,
        //   x: -100,
        //   duration: 0.8,
        // });
        tl.from(".Home_Right_imgg img", {
          opacity: 0,
          y: 350,
          scale: 0,
          duration: 2,
        },);
        gsap.from(
          ".Home_Right_info",
          {
            opacity: 0,
            y: 150,
            duration: 3,
          },
          
        );  
    },
    
  );
  return (
    <div
      ref={container}
      className="Home_main w-full h-screen pt-15 flex relative overflow-hidden"
    >
      <div className="Home_left h-full w-[40%] flex flex-col items-center gap-25">
        <div className="H-left-Hedline flex flex-col items-center">
          <div className="flex items-center gap-3">
            <img src={logo} alt="GreenThumb Gardens Logo" className="h-12 w-12 object-contain rounded-full shadow-sm" />
            <h2 className="font-black  text-3xl leading-tight text-[#4A7A3C] inline">
              GreenThumb Gardens
            </h2>
            <img className="h-10 inline-block align-top" src={img2} alt="" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-400 rounded-full py-2 px-4 w-85 focus:outline-none mt-6"
          />
        </div>
        <div className="H-left-info flex flex-col gap-5">
          <div className="H_info-H1 ">
            <h1 className="text-[2.7rem] font-semibold inline">
              Your <span className="text-[#4A7A3C] font-black">GARDEN</span>,
            </h1>
            <img className="h-10 inline-block align-top " src={img2} alt="" />
            <h1 className="text-[2.7rem] font-black">reimagined.</h1>
          </div>
          <div className="info-p text-lg font-light leading-tight opacity-70 ">
            <p>Each gardening task is approached with</p>
            <p>creativity and a dedication to excellence,</p>
            <p>inspired by nature's beauty.</p>
          </div>
          <div className="Home_left-btn flex gap-10">
            <button className=" cursor-pointer py-2 text-sm px-6 bg-black text-white text-center rounded-full ">
              Shop Now{" "}
              <FaArrowRightLong className="inline ml-0.5 text-lg font-extralight" />
            </button>
            <Link to="/nature-video">
              <button className=" cursor-pointer py-2 text-sm px-10 border border-gray-400 text-center rounded-full ">
                About Us
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="Home_Right h-full w-[60%] relative">
          <div className="Home_Right_imgg absolute top-0 right-0 h-full w-[60%]">
            <img className="h-full w-full object-cover" src={img1} alt="" />
          </div>
        <Nav className="absolute text-black top-0 right-10" />
        <div className="Home_Right_info absolute top-45 left-0">
          <div className="info1 p-2 shadow-[0_8px_30px_rgba(0,0,0,0.1)] rounded-lg text-left flex  bg-[#FFFFFF]">
            <div className="flex flex-col gap-1 justify-center">
              <h2 className="font-bold text-sm tracking-tight leading-none ">
                Organic Gardening Workshop
              </h2>
              <p className="text-sm font-extralight opacity-60 ">
                Learn composting techniques with expert gardeners.
              </p>
            </div>
            <img className="h-10 w-fit" src={img3} alt="Workshop" />
          </div>
          <div className="flex gap-6 mt-4">
            <div className="info2 p-3 bg-[#EBEBEB] w-fit  rounded-lg">
              <div>
                <h2 className="font-bold text-sm tracking-tight leading-none">
                  Flower Festival
                </h2>
                <div className="flex items-center gap-0.5">
                  <div className="text-sm font-extralight opacity-60 text-left w-fit ">
                    <p>Learn composting</p>
                    <p>techniques & </p>
                    <p>seasonal planting </p>
                    <p>tips.</p>
                  </div>
                  <img className="h-10 w-fit" src={img5} alt="Workshop" />
                </div>
              </div>
            </div>
            <div className="info3 p-3 bg-[#EBEBEB] w-fit  rounded-lg">
              <div>
                <h2 className="font-bold text-sm tracking-tight leading-none">
                  Crop Festival
                </h2>
                <div className="flex items-center gap-0.5">
                  <div className="text-sm font-extralight opacity-60 text-left w-fit ">
                    <p>Learn creative</p>
                    <p>flower </p>
                    <p>arrangements with</p>
                    <p>expert florists.</p>
                  </div>
                  <img className="h-10 w-fit" src={img4} alt="Workshop" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Home_bootm rounded-tl-[924px] h-20 w-full absolute bg-[#67A657] bottom-0 left-5"></div>
    </div>
  );
}

export default Home;
