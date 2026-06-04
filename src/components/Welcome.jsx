import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import welcome from '../assets/Wellcome.png'
import '../index.css'

function Welcome({ onComplete }) {
  gsap.registerPlugin(useGSAP);
  const container = useRef();
  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });
    tl.fromTo(container.current, 
      { opacity: 0, scale: 2 }, 
      { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
    )
    .to(container.current, { opacity: 0, duration: 0.8, delay: 0.5, ease: "power2.inOut" });
    
  }, { scope: container });
  return (
    <div  ref={container} className=' main h-screen w-full bg-cover bg-center py-20 relative '  style={{backgroundImage: `url(${welcome})`, backgroundAttachment: 'fixed'}}>
        <div className='absolute inset-0 bg-black/40'></div>
        <div className='content relative h-full border-t-4 border-white border-b-4 border-white text-white flex flex-col items-center gap-12 py-20'>
            <h3 className='text-4xl font-normal font-serif'>Welcome to</h3>
            <div className='flex flex-col items-center gap-1'>
            <h2 className='text-7xl font-light tracking-normal leading-tight'>GreenThumb</h2>
            <h2 className='text-7xl font-light tracking-normal leading-tight'>Gardens</h2>
            </div>
            <h6 className='text-xl font-normal leading-0 tracking-normal'>Where Nature Greets You with a Smile.</h6>
        </div>
    </div>
  ) 
}

export default Welcome