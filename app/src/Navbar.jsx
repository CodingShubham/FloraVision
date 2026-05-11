import navbarPlant from "./assets/images/navbarPlant.png"
import { CiSearch } from "react-icons/ci";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { MdOutlineArrowDropDown } from "react-icons/md";
export const Navbar=()=>{

    return(
      <div className="text-white flex justify-between px-8 py-8 items-center ">


    <div className="  flex items-center gap-2">
    <img className=" w-10 h-10 object-contain" src={navbarPlant} alt="" />
    <h3 className="font-bold text-[22px] text-gray-300 ">FloraVision.</h3>
    </div>


    <div >

        <ul className="flex gap-10 font-indie">
            <li>Home</li>
             <li className="flex items-center gap-2 text-xl">Plants Type <span><MdOutlineArrowDropDown  /></span></li>
              <li>More</li>
               <li>Contact</li>
        </ul>
    
    </div>


    <div className="flex gap-10 items-center ">
    <CiSearch className=" w-6 h-6 " />
    <HiMiniShoppingBag className=" w-5 h-5 " />
      <div className=" flex flex-col gap-2 ">
         <div className="w-6 h-[2px]  bg-white"></div>
      <div className="w-4 h-[2px] ml-2 bg-white"></div>
      </div>
    </div>


        </div>
    )
}