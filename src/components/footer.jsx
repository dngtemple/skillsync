import React from 'react';
import Logo from "../assets/logo4.png";

export default function Footer() {
  return (
    <footer className='w-full py-8 bg-white'>
      <div className='w-[95%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        <div className='p-3'>
          <img src={Logo} className='h-10 w-10 rounded-full mb-2' alt='SkillSync logo' />
          <p>Helping learners finish online courses with peer support and progress tracking. Learn smarter, not harder.</p>
        </div>

        <div className='p-3'>
          <h4 className='font-bold mb-2'>Quick Links</h4>
          <ul className='flex flex-col gap-1'>
            <li>Join A Group</li>
            <li>How It Works</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className='p-3'>
          <h4 className='font-bold mb-2'>Resources</h4>
          <ul className='flex flex-col gap-1'>
            <li>Blogs</li>
            <li>Guides</li>
            <li>Community Stores</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className='p-3'>
          <h4 className='font-bold mb-2'>Features</h4>
          <ul className='flex flex-col gap-1'>
            <li>Peer matching</li>
            <li>Accountable groups</li>
            <li>Progress tracking</li>
            <li>Peer support</li>
          </ul>
        </div>

        <div className='p-3'>
          <h4 className='font-bold mb-2'>Discover SkillSync</h4>
          <ul className='flex flex-col gap-1'>
            <li>Get the app</li>
            <li>Affiliate</li>
            <li>Help and Support</li>
            <li>Terms</li>
          </ul>
        </div>

        <div className='p-3'>
          <h4 className='font-bold mb-2'>Community</h4>
          <ul className='flex flex-col gap-1'>
            <li>Join discussions</li>
            <li>Meet learners</li>
            <li>Community Stores</li>
            <li>Grow Together</li>
          </ul>
        </div>

        <div className='p-3 col-span-1 sm:col-span-2 lg:col-span-2'>
          <h4 className='font-bold mb-2'>Stay in the loop</h4>
          <p>Get learning tips and updates right to your inbox.</p>
          <input
            type='email'
            placeholder='Enter your email'
            className='w-full mt-2 border border-blue-500 outline-none rounded-2xl p-2 text-sm'
          />
          <button className='w-[50%]   bg-blue-500 text-white rounded-2xl p-2 mt-2'>Subscribe</button>
        </div>
      </div>
    </footer>
  );
}
