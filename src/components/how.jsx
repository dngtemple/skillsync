import React from 'react'

import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
import image4 from "../assets/image4.png"

export default function How() {
  return (
    <div className=' w-[100%] h-[100%] p-4 flex flex-col gap-10'>
        <h1 className='text-5xl text-bold text-center'>How  Skillsync Works</h1>


        <div className='w-[95%] ml-[2.5%]  p-2 flex gap-8'>
            <div className='w-[30%] h-[50%] p-2 flex flex-col rounded-2xl'>
                <img src={image4} className='cover w-[100%] h-[70%]'/>

                <h3 className='text-center text-bold'>Step 1</h3>

                <p className='text-center text-bold'>Signup and set goals</p>

            </div>
            <div className='w-[30%] h-[50%] p-2 flex flex-col rounded-2xl'>
                <img src={image2} className='cover w-[100%] h-[70%]'/>

                <h3 className='text-center text-bold'>Step 2</h3>

                <p className='text-center text-bold'>Signup and set goals</p>

            </div>
            <div className='w-[30%] h-[50%] p-2 flex flex-col rounded-2xl'>
                <img src={image3} className='cover w-[100%] h-[70%]'/>

                <h3 className='text-center text-bold'>Step 3</h3>

                <p className='text-center text-bold'>Signup and set goals</p>

            </div>

        </div>
    </div>
  )
}
