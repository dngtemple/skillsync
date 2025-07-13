import React from 'react'
import vid from "../assets/0713.mp4"

export default function Video() {
  return (
    <section className='h-screen  w-[100%]' >
        <div className='w-[95%] mx-auto h-[100%] flex'>

        <div className='w-[50%]  h-[full]'>
          <video src={vid} autoPlay loop  className='h-full w-full'/>
        </div>

        <div className='w-[50%] p-4 font-bold flex flex-col justify-center'>
            <h2 className='text-5xl'>
                Sync up with tech learners just like you!
            </h2>

        </div>

        </div>
        

    </section>
  )
}
