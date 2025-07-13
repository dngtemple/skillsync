import React from 'react'
import vid from "../assets/0713.mp4"
import vid2 from "../assets/skill.mp4"

export default function Video() {
  return (
    <section className='h-screen w-[100%]' >
        
        <video src={vid2} autoPlay playsInline muted  loop  className='h-[100%] w-[100%] border-blue-500'/>

    </section>
  )
}
