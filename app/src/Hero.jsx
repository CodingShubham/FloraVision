import React from 'react'
import { FaPlay } from "react-icons/fa";
function Hero() {
  return (
    <div className='flex justify-between relative overflow-hidden  '>

    <div className='text-white pl-8 pt-16 flex flex-col gap-2 z-10'>
<h1 className='text-8xl text-gray-300 font-bold'>Earth’s Exhale</h1>
<h3 className='w-[600px]  font-semibold text-gray-300'>"Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.</h3>
<div className='flex items-center  pt-2 gap-4'>
    <button className=' h-12 w-40 border  rounded-lg border-2 text-gray-300 text-center '>Buy Now</button>
    <button className='w-[50px] h-[50px] border rounded-full flex justify-center items-center text-xl border-2 text-gray-300  '><FaPlay /> </button>
    <p className='font-indie'>Live Demo...</p>
</div>

    </div>

<div  className='w-[380px] h-[480px] shadow-lg  bg-white/5 border border-t-0  rounded-b-[40px] mr-8 mt-5 rounded-t-[40px] backdrop-blur-lg '>

</div>
    </div>
  )
}

export default Hero