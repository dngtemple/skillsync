import React from 'react';
import Happy from "../assets/image14.png";
export default function Ready() {
  return (
    <section className='h-screen w-full   '>
      <div className=' w-[95%] mx-auto h-full flex '>
        <div  style={{backgroundImage:`url(${Happy})`}} className='w-[60%] gap-2  bg-center h-full flex flex-col justify-center'>
            <h2 className='font-bold text-7xl '>Ready to use SkillSync?</h2>
            <p className='text-xl font-bold'>Have questions, feedback, or partnership ideas? We'd love to hear from you!
Fill out the form and our team will get back to you as soon as possible.

Whether you're a learner with suggestions, an organization interested in collaboration, or just curious about SkillSync, we're here to help..</p>
        </div>
        <div className='w-[40%] h-full flex items-center justify-center'>
            <form className=' w-[100%] h-[80%] flex flex-col justify-center gap-4 text-sm'>
                <input className='p-2 rounded-2xl border outline-none' type='text' placeholder='Enter Name'/>
                <input className='p-2 rounded-2xl border outline-none' type='email' placeholder='Enter Email'/>
                <textarea className='border p-2 h-[50%] outline-none rounded-2xl' type='message' placeholder='Enter Message'/>
                <button className=' p-2 outline-none w-[50%] bg-black text-white rounded-2xl' type='submit'>Send Message</button>
            </form>

        </div>
      </div>
    </section>
  );
}
