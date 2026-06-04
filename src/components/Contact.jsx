import React from "react";
import Nav from "./Nav";
import Main1 from "../assets/Mainplant.png";
import SmallPlant from "../assets/page2-4.png";
import BannerBg from "../assets/PlantCard-Base.jpg";
import LeafBg from "../assets/leaf.png";

function Contact() {
  return (
    <div className="w-full h-screen bg-[#F8F9FA] relative flex flex-col overflow-hidden pt-">
      {/* Top Main Section */}
      <div className="w-full h-full flex flex-col md:flex-row">
        
        {/* Left Column - Large Image Placeholder */}
        <div className="w-full md:w-1/2 h-full flex items-end justify-center px-8 relative">
          <div className="w-full max-w-[350px] h-[85%] bg-[#508B63] rounded-t-[230px] flex items-center justify-center relative shadow-sm translate-y-[10vh] border-[4px] border-[#508B63]">
            <img src={Main1} alt="Main Image" className="absolute bottom-[2%] w-[140%] max-w-none z-10 pointer-events-none" />
          </div>
        </div>

        {/* Right Column - Navigation & Content */}
        <div className="w-full md:w-1/2 flex flex-col z-10 ">
          
          {/* Top Right: Nav Area */}
          <div className="w-full flex justify-end pt-8 pr-8 relative">
            <img src={LeafBg} alt="Leaf Background" className="absolute top-0 right-0 w-[300px] md:w-[450px] -z-10 pointer-events-none" />
            <div className="relative z-10 flex justify-end">
              <Nav className="mt-1.5"/>
            </div>
          </div>

          {/* Content Area */}
          <div className="max-w-[480px]  pl-10 pr-12 mt-10 md:mt-16 z-0 fixed relative">
            <h1 className="text-4xl md:text-[44px] font-bold text-gray-900 leading-[1.15] mb-5 tracking-tight relative inline-block">
              Why Our Plants Are <br/> Special
              <span className="absolute bottom-1 left-0 w-full h-[3px] bg-[#007BFF] transform translate-y-2" style={{ width: 'calc(100% + 15px)' }}></span>
            </h1>
            
            <p className="text-gray-500 text-sm leading-[1.7] mb-8 mt-5">
              We proudly feature a wide variety of native plants
              that are well-suited to the local climate. These plants
              are not only hardy and low-maintenance but also
              help conserve water—perfect for sustainable
              gardening. You'll also find a thoughtful selection of
              herbal and medicinal plants, like Tulsi, Aloe Vera, and
              Lemongrass, which bring wellness benefits right to
              your home.
            </p>
            
            <div className="flex items-center gap-5">
              <button className="bg-black text-white px-7 py-3 rounded-full font-medium text-sm flex items-center gap-2 hover:bg-gray-800 transition-colors">
                Shop Now <span className="text-base leading-none">→</span>
              </button>
              <button className="border border-black text-black px-7 py-3 rounded-full font-medium text-sm hover:bg-black hover:text-white transition-colors">
                About Us —
              </button>
            </div>
          </div>
          
        </div>
      </div>

      {/* Bottom Banner Section - absolute overlay */}
      <div className="absolute bottom-0 left-0 w-full z-20 shadow-2xl">
        <div 
            className="w-full py-8 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10 relative bg-cover bg-center"
            style={{ backgroundImage: `url(${BannerBg})` }}
        >
          {/* Overlay to darken banner image slightly just in case */}
          <div className="absolute inset-0 bg-[#06180F]/60 z-0"></div>

          {/* Left Text */}
          <div className="relative z-10 basis-1/2">
            <h2 className="text-white text-[38px] md:text-[42px] tracking-tight leading-[1.1] font-bold">
              Grown with Love, <br/> Not Chemicals!
            </h2>
          </div>
          
          {/* Right Text + Button */}
          <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10 basis-1/2 justify-end">
            {/* Small Arched Icon/Image */}
            <div className="w-[85px] h-[105px] bg-[#E8EAE6] rounded-t-[40px] rounded-b-md flex-shrink-0 flex items-center justify-center pt-4 pb-2 shadow-md overflow-hidden relative">
               <img src={SmallPlant} alt="Plant Icon" className="w-[90%] h-[90%] object-contain" />
            </div>
            
            <div className="flex flex-col items-start gap-4 max-w-[320px]">
              <p className="text-white/90 text-[14px] leading-relaxed">
                Our plants bloom beautifully all year round — from
                vibrant spring flowers to lush winter greens.
              </p>
              <button className="bg-white text-black px-6 py-2 rounded-full text-[13px] font-semibold hover:bg-gray-200 transition-colors">
                About Us —
              </button>
            </div>
          </div>
          
        </div>
      </div>

    </div>
  );
}

export default Contact;