import React from "react";
import { NavLink } from "react-router-dom";

function Nav({ className = "" }) {
  const linkClass = ({ isActive }) =>
    `opacity-90 focus:underline focus-visible:outline-none hover:opacity-100 transition-opacity ${isActive ? "font-bold opacity-100" : ""}`;

  return (
    <div className={`py-1.5 px-6 bg-white/20 backdrop-blur-lg border border-white/40 shadow-[0_4px_12px_rgba(0,0,0,0.1)] w-fit flex gap-10 items-center justify-center rounded-2xl text-sm font-extralight ${className}`}>
      <NavLink to="/" className={linkClass} end>Home</NavLink>
      <NavLink to="/plants" className={linkClass}>Plants</NavLink>
      <NavLink to="/about" className={linkClass}>About</NavLink>
      <NavLink to="/contact" className={linkClass}>Contact</NavLink>
    </div>
  );
}

export default Nav;
