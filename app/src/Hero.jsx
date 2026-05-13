import React from 'react'
import { FaPlay } from "react-icons/fa";
import HeroPot from "./assets/images/HeroPot.png"
import { IoIosArrowForward } from "react-icons/io";
import HeroProfile from "./assets/images/HeroProfile.png"
import { IoStar } from "react-icons/io5";
import { LiaStarHalfSolid } from "react-icons/lia";
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

<div className='  p-6 relative  w-[310px] h-[180px] shadow-lg  bg-white/5 border border-r-0  border-b-0 border-gray-400   rounded-b-[40px] mr-10 mt-28 rounded-t-[40px] backdrop-blur-lg'>

<div className='flex gap-6'>
<img className='w-12 h-12 object-cover rounded-full' src={HeroProfile} alt="profile" />
<div>
  <span>Ronnie Hamill</span>
<div className='text-yellow-300 flex text-xs gap-1.5'>
<IoStar />  
<IoStar />
<IoStar />
<IoStar />
<LiaStarHalfSolid  />
</div>
</div>
</div>

<p className='pt-4 text-sm text-gray-300 flex break-words '>I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.</p>

</div>

    </div>

<div  className=' relative overflow-visible  w-[380px] h-[450px] shadow-lg  bg-white/5 border border-t-0  rounded-b-[40px] mr-10 mt-20 rounded-t-[40px] backdrop-blur-lg '>

    <img className='  absolute -top-[170px]  ' src={HeroPot} alt="" />

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