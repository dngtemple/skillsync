import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import logo1 from '../assets/logo1.png'
import logo4 from '../assets/logo4.png'

export default function Header() {
  const headerRef = useRef(null)
  const [showDropdown, setShowDropdown] = useState(false)
  const [showDrop, setShowDrop] = useState(false)

  useEffect(() => {
    gsap.from(headerRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'power3.out'
    })
  }, [])

  return (
    <div className='fixed z-100 w-[100%] p-2 flex items-center justify-center' ref={headerRef}>
      <div className='bg-blue-200 px-2 flex w-[95%] items-center justify-between rounded-full p-1 relative'>
        <img src={logo4} className='h-10 w-10 rounded-full' />

        <ul className='flex items-center justify-between gap-4 relative'>
          <li className='text-sm cursor-pointer'>Home</li>
          <li 
            className='text-sm cursor-pointer relative'
            onMouseEnter={() => setShowDrop(true)}
            onMouseLeave={() => setShowDrop(false)}
          >
            Learn
            {showDrop && (
              <ul className="absolute top-6 left-0 bg-white shadow-md rounded-md p-2 text-black z-10">
                <li className="text-sm py-1 px-2 hover:bg-gray-100 rounded">Documentation</li>
                <li className="text-sm py-1 px-2 hover:bg-gray-100 rounded">Resources</li>
                <li className="text-sm py-1 px-2 hover:bg-gray-100 rounded">Community</li>
                <li className="text-sm py-1 px-2 hover:bg-gray-100 rounded">Blog</li>
              </ul>
            )}
          </li>
          <li className='text-sm cursor-pointer'>About</li>
          <li className='text-sm cursor-pointer'>Pricing</li>

          {/* Support Dropdown */}
          <li 
            className='text-sm cursor-pointer relative'
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            Support
            {showDropdown && (
              <ul className="absolute top-6 left-0 bg-white shadow-md rounded-md p-2 text-black z-10">
                <li className="text-sm py-1 px-2 hover:bg-gray-100 rounded">FAQ</li>
                <li className="text-sm py-1 px-2 hover:bg-gray-100 rounded">Contact</li>
                <li className="text-sm py-1 px-2 hover:bg-gray-100 rounded">Live Chat</li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  )
}
