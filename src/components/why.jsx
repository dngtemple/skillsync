
import image5 from "../assets/image5.png"
import image6 from "../assets/image6.png"
import image7 from "../assets/image7.png"
import image8 from "../assets/image8.png"



export default function Why() {

  const steps=[
    {
      image : image5,
      word:"Accountability",
      phrase:"Groups"
    },
    {
      image : image6,
      word:"Weekly Progress",
      phrase:"Tracking"
    },
    {
      image : image7,
      word:"Peer Support ",
      phrase:"System"
    },
    {
      image : image8,
      word:"Flexbile Learning",
      phrase:"Schedules"
    },
  ]

  return (
    <div className='h-full  py-12 flex flex-col items-center gap-8'>
        <h1 className='font-semibold text-6xl'>Why Choose Skillsync?</h1>

        <div className='h-96 w-[95%] py-4 flex gap-4'>
            {
                steps.map((a,i)=>{
                    return(
                    <div key={i} className=' h-72 gap-4  p-2 flex flex-col items-center'>
                        <img src={a.image} className='h-60 object-cover'/>

                        <h4>{a.word}</h4>

                        <p>{a.phrase}</p>

                    </div>    
                    )
                })
            }

        </div>
    </div>
  )
}
