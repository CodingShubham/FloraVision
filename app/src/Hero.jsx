import React from 'react'
import { FaPlay } from "react-icons/fa";
import HeroPot from "./assets/images/HeroPot.png"
import { IoIosArrowForward } from "react-icons/io";
function Hero() {
  return (
    <div className='  flex justify-between relative overflow-hidden  '>

    <div className='text-white pl-8 pt-16 flex flex-col gap-2 z-10'>
<h1 className='text-8xl text-gray-300 font-bold'>Earth’s Exhale</h1>
<h3 className='w-[600px]  font-semibold text-gray-300'>"Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.</h3>
<div className='flex items-center  pt-2 gap-4'>
    <button className=' h-12 w-40 border  rounded-lg border-2 text-gray-300 text-center '>Buy Now</button>
    <button className='w-[50px] h-[50px] border rounded-full flex justify-center items-center text-xl border-2 text-gray-300  '><FaPlay /> </button>
    <p className='font-indie'>Live Demo...</p>
</div>

    </div>

<div  className=' relative overflow-visible  w-[380px] h-[450px] shadow-lg  bg-white/5 border border-t-0  rounded-b-[40px] mr-10 mt-20 rounded-t-[40px] backdrop-blur-lg '>

    <img className=' object-fit absolute -top-[170px]  ' src={HeroPot} alt="" />

    <div className=' pt-[220px] text-gray-300 flex flex-col  pl-16'>
      <p className=''>Indoor Plant </p>
   <div className='flex   pb-4 gap-14'>
       <h2 className='text-3xl '>Aglaonema  plant</h2>
      < IoIosArrowForward className=' mt-3 text-2xl' />
   </div>
      <button className=' h-12 w-40 border  rounded-lg border-2 text-gray-300 text-center '>Buy Now</button>
    </div>

</div>
    </div>
  )
}

export default Hero