import React from "react";
import Nav from "./Nav";

function Contact() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-[#f0f4f1] text-[#4A7A3C]">
      <Nav className="absolute top-10" />
      <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg opacity-80">Get in touch with the GreenThumb Gardens team.</p>
    </div>
  );
}

export default Contact;
