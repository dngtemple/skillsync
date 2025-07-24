import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

import image1 from '../assets/image1.png'
import image4 from '../assets/image4.png'

export default function Herosection() {
  const headingRef = useRef(null)
  const paraRef = useRef(null)
  const imgRef = useRef(null)
  const btn1Ref = useRef(null)
  const btn2Ref = useRef(null)

  useEffect(() => {
    gsap.from(headingRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out'
    })
    gsap.from(paraRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.5
    })
    gsap.from([btn1Ref.current, btn2Ref.current], {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 1,
      stagger: 0.3
    })
    gsap.from(imgRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 1.8,
      delay: 0.5,
      ease: 'power3.out'
    })
  }, [])

  return (
    <div className='w-full px-4 py-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-10'>
      {/* Text Section */}
      <div className='w-full lg:w-1/2 flex flex-col gap-6'>
        <h1 ref={headingRef} className='text-4xl sm:text-5xl md:text-7xl font-bold text-gray-800  text-center lg:text-left'>
          Turn learning <br /> into a habit—with people
        </h1>

        <p ref={paraRef} className='text-base sm:text-lg md:text-xl text-center lg:text-left text-gray-700'>
          SkillSync helps you stay committed to your coding journey by matching you with like-minded learners in structured accountability groups.
        </p>

        <div className='flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4'>
          <button
            ref={btn1Ref}
            className='bg-blue-500 text-white rounded-full px-6 py-3 w-full sm:w-auto'
          >
            Get Started
          </button>
          <button
            ref={btn2Ref}
            className='bg-white text-blue-500 border border-blue-500 rounded-full px-6 py-3 w-full sm:w-auto'
          >
            Schedule a Demo
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className='w-full lg:w-1/2 relative flex justify-center items-center'>
        <img
          ref={imgRef}
          src={image4}
          className='absolute z-20 right-0 top-10  w-48 hidden sm:block'
          alt='overlay'
        />
        <img
          src={image1}
          className='w-full h-auto rounded-xl'
          alt='main visual'
        />
      </div>
    </div>
  )
}
