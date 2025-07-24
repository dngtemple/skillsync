import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import logo4 from '../assets/logo4.png';

export default function Header() {
  const headerRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDrop, setShowDrop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.from(headerRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <div
      className="fixed z-[100] w-full p-2 flex items-center justify-center bg-white shadow"
      ref={headerRef}
    >
      <div className="bg-blue-400 px-4 flex w-[95%] items-center justify-between rounded-full py-2 relative">
        {/* Logo */}
        <img src={logo4} className="h-10 w-10 rounded-full" alt="Logo" />

        {/* Hamburger Icon for Mobile */}
        <div
          className="md:hidden text-white cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center justify-between gap-6 text-white text-sm font-bold relative">
          <li className="cursor-pointer">Home</li>
          <li
            className="cursor-pointer relative"
            onMouseEnter={() => setShowDrop(true)}
            onMouseLeave={() => setShowDrop(false)}
          >
            Learn
            {showDrop && (
              <ul className="absolute top-6 left-0 bg-white shadow-md rounded-md p-2 text-black z-10">
                <li className="py-1 px-2 hover:bg-gray-100 rounded">Documentation</li>
                <li className="py-1 px-2 hover:bg-gray-100 rounded">Resources</li>
                <li className="py-1 px-2 hover:bg-gray-100 rounded">Community</li>
                <li className="py-1 px-2 hover:bg-gray-100 rounded">Blog</li>
              </ul>
            )}
          </li>
          <li className="cursor-pointer">Pricing</li>
          <li className="cursor-pointer">About</li>
          <li
            className="cursor-pointer relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            Support
            {showDropdown && (
              <ul className="absolute top-6 left-0 bg-white shadow-md rounded-md p-2 text-black z-10">
                <li className="py-1 px-2 hover:bg-gray-100 rounded">FAQ</li>
                <li className="py-1 px-2 hover:bg-gray-100 rounded">Contact</li>
                <li className="py-1 px-2 hover:bg-gray-100 rounded">Live Chat</li>
              </ul>
            )}
          </li>
        </ul>

        {/* Mobile Nav */}
        {menuOpen && (
          <ul className="absolute top-16 right-4 w-48 bg-white text-black shadow-lg rounded-md flex flex-col gap-2 p-4 z-50 md:hidden">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Learn</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Support</li>
          </ul>
        )}
      </div>
    </div>
  );
}
