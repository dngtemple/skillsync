import React from 'react';
import Happy from "../assets/image15.png";
export default function Contact() {
  return (
    <section className='h-screen w-full'>
      <div className=' w-[95%] mx-auto h-full flex flex-col sm:flex-row '>
        <div  style={{backgroundImage:`url(${Happy})`}} className='w-[100%] sm:w-[60%] gap-2 bg-cover  sm:bg-center md:bg-center xl:bg-center sm:flex h-full  flex-col justify-center'>
        </div>
        <div className='w-[100%] sm:w-[40%] h-full gap-0 flex items-center flex-col justify-center'>
            <h2 className='text-3xl md:text-5xl font-semibold text-center sm:text-start text-gray-800'>Get In Touch With SkillSync</h2>
            <form className=' w-[100%] h-[80%]  flex flex-col justify-center gap-4 text-sm'>
                <input className='p-2 rounded-2xl border-blue-500 border outline-none' type='text' placeholder='Enter Name'/>
                <input className='p-2 rounded-2xl border-blue-500 border outline-none' type='email' placeholder='Enter Email'/>
                <textarea className='border-blue-500 border p-2 h-[50%] outline-none rounded-2xl' type='message' placeholder='Enter Message'/>
                <button className=' p-2 outline-none w-[50%] bg-blue-500 text-white rounded-2xl' type='submit'>Send Message</button>
            </form>

        </div>
      </div>
    </section>
  );
}
