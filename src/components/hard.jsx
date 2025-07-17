import React from 'react'
import Sad from "../assets/image10.png"
import Happy from "../assets/image6.png"

export default function Hard() {
  return (
    <section className='min-h-screen  w-[100%] flex'>
        <div className='w-[40%] flex flex-col items-center'>
            <img src={Sad} className='h-[40%] '/>
            <img src={Happy} className='h-[40%]' />
        </div>

        <div className='w-[60%] h-screen flex flex-col gap-2 justify-center items-start p-8'>
            <h1 className='text-8xl font-bold text-gray-800'>Learning to Code Alone is Hard</h1>

            <p className='text-2xl'>SkillSync connects you with a community of learners to make your journey easier and more enjoyable</p>

            <button className='bg-blue-500 w-[20%] text-white rounded-full p-2'>Join SkillSync</button>

        </div>

    </section>
  )
}
