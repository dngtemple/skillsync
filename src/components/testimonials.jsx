import React from 'react'

import { Avatar } from '@mantine/core'
import Ava1 from "../assets/ava1.jpg"
import Ava2 from "../assets/ava2.jpg"
import Ava3 from "../assets/ava3.jpg"
import test from "../assets/test.png"


export default function Testimonials() {
  return (
    <section className='w-[100%] min-h-screen  p-2'>
        <div className='w-[95%] mx-auto p-2 flex'>
            <div className='w-[50%]  p-4'>
                <div className='w-[100%] flex flex-col gap-4'>
                    {/* <h2 className='text-6xl font-bold'>What Our Users Say</h2> */}
                    {/* <p className='text-2xl mt-2'>Hear from learners who have transformed their online learning experience with SkillSync.</p> */}

                    <div className=' rounded-xl bg-blue-200 p-4 flex gap-4 justify-center items-center'>
                        <img src={Ava1} className='w-10 h-10 rounded-full'/>
                        <div className=''>
                        <h3 className='text-lg font-semibold mt-2'>John Doe</h3>
                        <p className='text-sm'>“SkillSync has completely changed the way I approach online courses. The peer support is invaluable!”</p>
                        </div>
                    </div>
                    <div className=' rounded-xl bg-blue-200 p-4 flex gap-4 justify-center items-center'>
                        <img src={Ava1} className='w-10 h-10 rounded-full'/>
                        <div className=''>
                        <h3 className='text-lg font-semibold mt-2'>John Doe</h3>
                        <p className='text-sm'>“SkillSync has completely changed the way I approach online courses. The peer support is invaluable!”</p>
                        </div>
                    </div>
                    <div className=' rounded-xl bg-blue-200 p-4 flex gap-4 justify-center items-center'>
                        <img src={Ava1} className='w-10 h-10 rounded-full'/>
                        <div className=''>
                        <h3 className='text-lg font-semibold mt-2'>John Doe</h3>
                        <p className='text-sm'>“SkillSync has completely changed the way I approach online courses. The peer support is invaluable!”</p>
                        </div>
                    </div>
                    <div className=' rounded-xl bg-blue-200 p-4 flex gap-4 justify-center items-center'>
                        <img src={Ava1} className='w-10 h-10 rounded-full'/>
                        <div className=''>
                        <h3 className='text-lg font-semibold mt-2'>John Doe</h3>
                        <p className='text-sm'>“SkillSync has completely changed the way I approach online courses. The peer support is invaluable!”</p>
                        </div>
                    </div>
                    <div className=' rounded-xl bg-blue-200 p-4 flex gap-4 justify-center items-center'>
                        <img src={Ava1} className='w-10 h-10 rounded-full'/>
                        <div className=''>
                        <h3 className='text-lg font-semibold mt-2'>John Doe</h3>
                        <p className='text-sm'>“SkillSync has completely changed the way I approach online courses. The peer support is invaluable!”</p>
                        </div>
                    </div>
                    
                </div>

            </div>

            <div className='w-[50%] bg-red-500 h-full'>
                <img src={test} className='w-[100%] h-[100%] object-cover' alt='Testimonials'/>

            </div>

        </div>

    </section>
  )
}
