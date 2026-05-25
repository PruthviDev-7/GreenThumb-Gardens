import React from "react";

function Nav({ className = "" }) {
  return (
   <div className={`py-2 px-8 bg-white/20 backdrop-blur-lg border border-white/40 shadow-[0_4px_12px_rgba(0,0,0,0.1)] w-fit flex gap-10 items-center justify-center rounded-2xl text-md text-black/80 font-medium ${className}`}>
  <a href="#" className="hover:text-black transition-colors">Home</a>
  <a href="#" className="hover:text-black transition-colors">Plants</a>
  <a href="#" className="hover:text-black transition-colors">About</a>
  <a href="#" className="hover:text-black transition-colors">Contact</a>
</div>
  );
}

export default Nav;
