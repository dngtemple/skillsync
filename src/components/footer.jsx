import React from 'react'
import Logo from "../assets/logo4.png"

export default function Footer() {
  return (
    <footer className=' min-h-40 w-[100%] py-6'>
        <div className='w-[95%] p-2 mx-auto flex gap-4 flex-wrap'  >
            <div className=' w-[24%] p-3'>
                <img  src={Logo} className='h-10 w-10 rounded-full'/>
                <p className=''>Helping learners finish online courses with peer support and progress tracking. Learn smarter, not harder.</p>
            </div>
            <div className=' w-[24%] p-3 flex flex-col '>
                <h4 className='font-bold'>Quick Links</h4>
                <ul className='list-type-none flex flex-col gap-1'>
                    <li>Join A Group</li>
                    <li>How It Works</li>
                    <li>FAQS</li>
                </ul>

            </div>

            <div className=' w-[24%] p-3 flex flex-col '>
                <h4 className='font-bold'>Resources</h4>
                <ul className='list-type-none flex flex-col gap-1'>
                    <li>Blogs</li>
                    <li>Guides</li>
                    <li>Community Stores</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className=' w-[24%] p-3 flex flex-col n'>
                <h4 className='font-bold'>Features</h4>
                <ul className='list-type-none flex flex-col gap-1'>
                    <li>Peer matching</li>
                    <li>Accountable groups</li>
                    <li>Progress tracking</li>
                    <li>Peer support</li>
                </ul>
            </div>
            <div className=' w-[24%] p-3 flex flex-col '>
                <h4 className='font-bold'>Discover SkillSync</h4>
                <ul className='list-type-none flex flex-col gap-1'>
                    <li>Get the app</li>
                    <li>Affiliate</li>
                    <li>Help and Support</li>
                    <li>Terms</li>
                </ul>
            </div>
            <div className=' w-[24%] p-3 flex flex-col '>
                <h4 className='font-bold'>Resources</h4>
                <ul className='list-type-none flex flex-col gap-1'>
                    <li>Blogs</li>
                    <li>Guides</li>
                    <li>Community Stores</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className=' w-[24%] p-3 flex flex-col '>
                <h4 className='font-bold'>Community</h4>
                <ul className='list-type-none flex flex-col gap-1'>
                    <li>Join discussions</li>
                    <li>Meet learners</li>
                    <li>Community Stores</li>
                    <li>Grow Together</li>
                </ul>
            </div>

            <div className='w-[24%] p-3'>
                <h4 className='font-bold'>Stay in the loop</h4>
                <p className=''>
                    Get learning tips and updates right to your inbox.
                </p>
                <input type='email ' placeholder='Enter your email' className='w-[100%] mt-2 border border-blue-500 outline-none rounded-2xl p-1 text-sm  indent-1'/>
                <button className='w-[100%] bg-blue-500 text-white rounded-2xl p-1 mt-2'>Subscribe</button>

            </div>

           
        </div>
        
    </footer>
  )
}
