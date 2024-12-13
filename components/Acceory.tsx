import React from 'react'
import { TbLayoutGridFilled } from "react-icons/tb";
import { AiOutlineBars } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";

const Acceory = () => {
  return (
    <div className='wrapper flex flex-col md:flex-row  justify-between items-center  mt-[120px] mb-[120px] '>
        <div className="">

<h1 className="text-[#151875] md:text-[22px] text-xl font-bold">
Ecommerce Acceories & Fashion item 
</h1>
 <p className="text-[12px] text-[#8A8FB9]">About 9,620 results (0.62 seconds)</p>
        </div><div className="flex gap-4 flex-col md:flex-row  justify-center items-center">

        <div className="flex justify-center items-center gap-2">
            <p className="text-[#3F509E] text-base">Per Page:</p>
            <div className="border-[1px] border-[#8A8FB9] w-[55px] h-[25px]"></div>
        </div>
        <div className="flex justify-center items-center gap-2">
            <p className="text-[#3F509E] text-base">Sort By:</p>
            <div className="border-[1px] border-[#8A8FB9] w-[74px] text-[#8A8FB9] h-[18px] text-xs py-1 text-center flex items-center justify-center"> Best Match<RiArrowDropDownLine /> </div>
        </div>
        <div className="flex justify-center items-center gap-2">
            <p className="text-[#3F509E] text-base flex justify-center items-center ">View:<TbLayoutGridFilled /><AiOutlineBars /></p>
            <div className="border-[1px] border-[#8A8FB9] w-[162px] h-[30px]"></div>
        </div>
        </div>
    </div>
  )
}

export default Acceory