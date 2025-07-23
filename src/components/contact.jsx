import React from 'react';
import Happy from "../assets/image14.png";
export default function Contact() {
  return (
    <section className='h-screen w-full'>
      <div className=' w-[95%] mx-auto h-full flex '>
        <div  style={{backgroundImage:`url(${Happy})`}} className='w-[60%] gap-2  bg-center h-full flex flex-col justify-center'>
            {/* <h2 className=' text-6xl text-blue-400 '>Get In Touch With SkillSync</h2> */}
            {/* <p className='text-3xl w-[80%] text-center '>Have questions, feedback, or want to partner with us? We’d love to hear from you. Fill out the form below and our team will get back to you as soon as possible. Let’s build better learning journeys together</p> */}
        </div>
        <div className='w-[40%] h-full flex items-center flex-col justify-center'>
            <h2 className='text-5xl font-bold text-gray-800'>Get In Touch With SkillSync</h2>
            <form className=' w-[100%] h-[80%] flex flex-col justify-center gap-4 text-sm'>
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
