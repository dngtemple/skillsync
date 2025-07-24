import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import Sad from "../assets/image10.png";
import Happy from "../assets/image6.png";

export default function Hard() {
  const sadRef = useRef(null);
  const happyRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    tl.from(sadRef.current, {
      opacity: 0,
      x: -50,
      scale: 0.8,
      duration: 1,
      ease: 'power2.out',
    }).from(happyRef.current, {
      opacity: 0,
      x: 50,
      scale: 0.8,
      duration: 1,
      ease: 'power2.out',
    }, "-=0.5");
  }, []);

  return (
    <section className='min-h-screen w-full flex flex-col lg:flex-row items-center justify-center px-4 py-12 gap-8'>
      <div className='w-full lg:w-[40%] flex flex-col items-center justify-center gap-6'>
        <img ref={sadRef} src={Sad} className='w-2/3 max-w-xs object-contain' alt='Sad face' />
        <img ref={happyRef} src={Happy} className='w-2/3 max-w-xs object-contain' alt='Happy face' />
      </div>

      <div className='w-full lg:w-[60%] flex flex-col gap-6 justify-center items-start'>
        <h1 className='text-4xl sm:text-5xl text-center sm:text-start lg:text-6xl xl:text-7xl font-bold text-gray-800 leading-tight'>
          Learning to Code Alone is Hard
        </h1>
        <p className='text-lg sm:text-xl text-gray-700'>
          SkillSync connects you with a community of learners to make your journey easier and more enjoyable.
        </p>
        <button className='bg-blue-500 hover:bg-blue-600 transition w-full sm:w-auto text-white rounded-full px-6 py-3'>
          Join SkillSync
        </button>
      </div>
    </section>
  );
}
