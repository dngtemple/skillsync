import React from 'react'

import Ava1 from "../assets/ava1.jpg"
import Ava2 from "../assets/ava2.jpg"
import Ava3 from "../assets/ava3.jpg"

export default function Testimonial() {
  return (
    <section className='w-[100%] min-h-screen p-8 mt-10 bg-gray-100'>
        <h2 className="text-6xl font-semibold text-gray-800 text-center">Why Choose SkillSync?</h2>

        <div className='w-[95%] mx-auto mt-10 flex flex-wrap gap-2 justify-between'>
            <div className='w-[49%] bg-blue-200 h-[100%] p-8 rounded-2xl flex gap-4 items-center justify-start'>
                <img src={Ava1} className='w-[50px] h-[50px] rounded-full' alt='Avatar 1'/>
                <div>
                    <h2 className='text-2xl font-bold'>Majestina</h2>
                    <p className='text-sm'>"SkillSync helped me connect with mentors and grow my skills faster than ever."</p>
                </div>
            </div>
            <div className='w-[49%] bg-blue-200 h-[100%] p-8 rounded-2xl flex gap-4 items-center justify-start'>
                <img src={Ava2} className='w-[50px] h-[50px] rounded-full' alt='Avatar 1'/>
                <div>
                    <h2 className='text-2xl font-bold'>Kekeli</h2>
                    <p className='text-sm'>"The platform is easy to use and the resources are top-notch."</p>
                </div>
            </div>
            <div className='w-[49%] bg-blue-200 h-[100%] p-8 rounded-2xl flex gap-4 items-center justify-start'>
                <img src={Ava2} className='w-[50px] h-[50px] rounded-full' alt='Avatar 1'/>
                <div>
                    <h2 className='text-2xl font-bold'>Opong</h2>
                    <p className='text-sm'>"I love the interactive courses and the supportive community."</p>
                </div>
            </div>
            <div className='w-[49%] bg-blue-200 h-[100%] p-8 rounded-2xl flex gap-4 items-center justify-start'>
                <img src={Ava1} className='w-[50px] h-[50px] rounded-full' alt='Avatar 1'/>
                <div>
                    <h2 className='text-2xl font-bold'>Yaw</h2>
                    <p className='text-sm'>"SkillSync made learning fun and engaging for me."</p>
                </div>
            </div>
            <div className='w-[49%] bg-blue-200 h-[100%] p-8 rounded-2xl flex gap-4 items-center justify-start'>
                <img src={Ava3} className='w-[50px] h-[50px] rounded-full' alt='Avatar 1'/>
                <div>
                    <h2 className='text-2xl font-bold'>Charity</h2>
                    <p className='text-sm'>"I gained confidence in my abilities thanks to SkillSync."</p>
                </div>
            </div>
            <div className='w-[49%] bg-blue-200 h-[100%] p-8 rounded-2xl flex gap-4 items-center justify-start'>
                <img src={Ava3} className='w-[50px] h-[50px] rounded-full' alt='Avatar 1'/>
                <div>
                    <h2 className='text-2xl font-bold'>Wisdom</h2>
                    <p className='text-sm'>"The feedback from instructors is always constructive and helpful."</p>
                </div>
            </div>
            <div className='w-[49%] bg-blue-200 h-[100%] p-8 rounded-2xl flex gap-4 items-center justify-start'>
                <img src={Ava2} className='w-[50px] h-[50px] rounded-full' alt='Avatar 1'/>
                <div>
                    <h2 className='text-2xl font-bold'>Koomson</h2>
                    <p className='text-sm'>"SkillSync has the best community for learners."</p>
                </div>
            </div>
            <div className='w-[49%] bg-blue-200 h-[100%] p-8 rounded-2xl flex gap-4 items-center justify-start'>
                <img src={Ava1} className='w-[50px] h-[50px] rounded-full' alt='Avatar 1'/>
                <div>
                    <h2 className='text-2xl font-bold'>Gorge</h2>
                    <p className='text-sm'>"I recommend SkillSync to anyone looking to upskill."</p>
                </div>
            </div>
            <div className='w-[49%] bg-blue-200 h-[100%] p-8 rounded-2xl flex gap-4 items-center justify-start'>
                <img src={Ava3} className='w-[50px] h-[50px] rounded-full' alt='Avatar 1'/>
                <div>
                    <h2 className='text-2xl font-bold'>Pienel</h2>
                    <p className='text-sm'>"The variety of courses available is impressive."</p>
                </div>
            </div>
            <div className='w-[49%] bg-blue-200 h-[100%] p-8 rounded-2xl flex gap-4 items-center justify-start'>
                <img src={Ava2} className='w-[50px] h-[50px] rounded-full' alt='Avatar 1'/>
                <div>
                    <h2 className='text-2xl font-bold'>Oduro</h2>
                    <p className='text-sm'>"SkillSync helped me achieve my career goals."</p>
                </div>
            </div>
        </div>
    </section>    
  )
}
