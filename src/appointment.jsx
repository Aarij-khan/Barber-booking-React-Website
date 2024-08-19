import hero1 from "./assets/hero1.jpg"
import hero2 from "./assets/hero2.png"
import { Link } from "react-router-dom"
import Booking from "./booking";
function Appointment() {
  return (
    <div className='w-full bg-[#222423] pt-10 pb-10'>
        <h1 className='text-center text-5xl font-bold text-white tracking-wide pb-10'>Pricing</h1>
        <div className="w-full  flex  justify-center gap-10 flex-wrap flex-col sm:flex-row p-10 sm:p-0">
            <div className='rounded-xl w-[300px] h-[420px] border-2 border-orange-400 text-white flex items-center flex-col gap-4'>
                <img src={hero1} alt="pic"/>
                <h1 className='text-2xl font-bold'>Plan 1</h1>
                <h1 className='text-2xl font-bold'>Hair Dressing + Cleaning</h1>
                <p className="text-xl font-semi text-orange-400">price : 45.00</p>
                <Link to="/booking">
                <button className="p-2 rounded-xl bg-orange-400">Book an Appointment</button>
                </Link>            </div>
            <div className='rounded-xl w-[300px] h-[420px] border-2 border-orange-400 text-white flex items-center flex-col gap-5'>
                <img src={hero2} alt="pic" />
                <h1 className='text-2xl font-bold'>Plan 2</h1>
                <h1 className='text-2xl font-bold'>Hair Washing + Style</h1>
                <p className="text-xl font-semi text-orange-400">price : 105.00</p>
                <Link to="/booking">
                <button className="p-2 rounded-xl bg-orange-400">Book an Appointment</button>
                </Link>
            </div>

            <div className='rounded-xl w-[300px] h-[420px] border-2 border-orange-400 text-white flex items-center flex-col gap-4'>
                <img src={hero1} alt="pic" />
                <h1 className='text-2xl font-bold'>Plan 3</h1>
                <h1 className='text-2xl font-bold'>Multi Hair colors</h1>
                <p className="text-xl font-semi text-orange-400">price : 200.00</p>
                <Link to="/booking">
                <button className="p-2 rounded-xl bg-orange-400">Book an Appointment</button>
                </Link>
                
            </div>
        </div>
    </div>
  )
}

export default Appointment 