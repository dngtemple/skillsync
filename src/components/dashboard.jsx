import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import test from "../assets/dash.png";

export default function Dashboard() {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.from(imageRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1.2,
      ease: 'power3.out',
    });
  }, []);

  return (
    <section className='w-full  py-8 px-4 md:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='w-full  rounded-lg overflow-hidden shadow-md'>
          <img
            ref={imageRef}
            src={test}
            className='w-full h-auto object-contain'
            alt='dashboard'
          />
        </div>
      </div>
    </section>
  );
}
