import React from 'react';

export default function Ready() {
  return (
    <section className='h-screen w-full bg-[linear-gradient(90deg,_rgba(157,157,196,1)_4%,_rgba(121,121,166,1)_35%,_rgba(0,212,255,1)_100%)]'>
      <div className='w-[95%] mx-auto h-full flex'>
        <div className='w-[60%] gap-2  h-full flex flex-col justify-center'>
            <h2 className='font-bold text-7xl '>Ready to use SkillSync?</h2>
            <p className='text-2xl font-bold'>Have questions, feedback, or partnership ideas? We’d love to hear from you.

</p>
        </div>
        <div className='w-[40%] h-full flex items-center justify-center'>
            <form className=' w-[100%] h-[80%] flex flex-col justify-center gap-4 text-sm'>
                <input className='p-2 rounded-2xl border-1 outline-none' type='text' placeholder='Enter Name'/>
                <input className='p-2 rounded-2xl border-1 outline-none' type='email' placeholder='Enter Email'/>
                <textarea className='border-1 p-2 h-[50%] outline-none rounded-2xl' type='message' placeholder='Enter Message'/>
                <button className=' p-2 outline-none w-[50%] bg-black text-white rounded-2xl' type='submit'>Send Message</button>
            </form>

        </div>
      </div>
    </section>
  );
}
