import React from 'react'
import Logo from "../assets/logo4.png"

export default function Footer() {
  return (
    <footer className=' min-h-40 w-[100%] p-2'>
        <div className='w-[95%] p-2 mx-auto flex gap-4'  >
            <div className=' w-[24%] p-3'>
                <img  src={Logo} className='h-10 w-10 rounded-full'/>
                <p className=''>Helping learners finish online courses with peer support and progress tracking. Learn smarter, not harder.</p>
            </div>
            <div className=' w-[25%] p-3 flex flex-col '>
                <h4 className='font-bold'>Quick Links</h4>
                <ul className='list-type-none flex flex-col gap-1'>
                    <li>Join A Group</li>
                    <li>How It Works</li>
                    <li>FAQS</li>
                </ul>

            </div>

            <div className=' w-[25%] p-3 flex flex-col justify-between'>
                <h4 className='font-bold'>Resources</h4>
                <ul className='list-type-none flex flex-col gap-1'>
                    <li>Blogs</li>
                    <li>Guides</li>
                    <li>Community Stores</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className='w-[24%] p-3'>
                <h4 className='font-bold'>Stay in the loop</h4>
                <p className=''>
                    Get learning tips and updates right to your inbox.
                </p>

            </div>

           
        </div>
        
    </footer>
  )
}
