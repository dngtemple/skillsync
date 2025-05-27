import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

import image1 from '../assets/image1.png'
import image2 from '../assets/image3.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'

export default function Herosection() {
  // Refs for elements to animate
  const headingRef = useRef(null)
  const paraRef = useRef(null)
  const imgRef = useRef(null)
  const btn1Ref = useRef(null)
  const btn2Ref = useRef(null)

  useEffect(() => {
    // Animate heading
    gsap.from(headingRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out'
    })

    // Animate paragraph
    gsap.from(paraRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.5
    })

    // Animate buttons with stagger
    gsap.from([btn1Ref.current, btn2Ref.current], {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 1,
      stagger: 0.3
    })

    // Animate right image
    gsap.from(imgRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 1.8,
      delay: 0.5,
      ease: 'power3.out'
    })
  }, [])

  return (
    <div className='w-[95%] ml-[2.5%] h-[100%] py-24 flex'>
      <div className='w-[70%] h-[100%] gap-8 flex flex-col justify-center items-start'>
        <h1 ref={headingRef} className='text-8xl font-bold'>
          Turn learning <br /> into a habit—with people
        </h1>

        <p ref={paraRef} className='text-lg'>
          SkillSync helps you stay committed to your coding journey by matching you with like-minded learners in structured accountability groups
        </p>

        <div className='w-[50%] flex justify-center items-center gap-2'>
          <button ref={btn1Ref} className='w-[50%] bg-blue-500 text-white rounded-full p-2'>
            Get Started
          </button>
          <button ref={btn2Ref} className='w-[50%] bg-white text-blue-500 border border-blue-500 rounded-full p-2'>
            Schedule a Demo
          </button>
        </div>
      </div>

      <div className='w-[55%] h-[100%] relative bg-blue-400'>
        <img
          ref={imgRef}
          src={image4}
          className='absolute z-20 right-0 h-[40%] w-[40%]'
        />
        <img src={image1} className='h-[100%] w-[100%]' />
      </div>
    </div>
  )
}
