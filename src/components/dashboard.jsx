
import test from "../assets/dash.png"


export default function Dashboard() {
  return (
    <section className='w-[100%] min-h-screen'>
        <div className='w-[95%] mx-auto  flex'>
            <div className='w-[100%] bg-red-400 h-[100%]'>
                <img src={test} className='w-[100%] h-[100%] object-cover' alt='dashboard'/>

            </div>

        </div>

    </section>
  )
}
