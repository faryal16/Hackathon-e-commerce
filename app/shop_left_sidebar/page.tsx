import Acceory from '@/components/Acceory'
import Title from '@/components/Title'
import React from 'react'
import Image from 'next/image'

import { FaStar } from "react-icons/fa";
import { IoIosCheckboxOutline } from "react-icons/io";
import { Search } from 'lucide-react'
import Flex from '@/components/Flex'

const Sidebar = () => {
  return (
    <main className=''>

    
    <div className=' overflow-hidden'><Title title={'Shop Left Sidebar'} tag={'Shop Left Sidebar'} />
    <Acceory/>
    <div className="flex wrapper flex-col md:flex-row justify-center items-center mb-[120px]">

<div className="w-1/3 mb-[200px] ">
{/* Div 1 */}
  <div className="cursor-pointer ">

  <h1 className="text-[#151875] sm:text-[30px] font-bold text-[20px] underline mb-7">Product Brand</h1>
  <ul className='text-[#7E81A2] space-y-6 text-base'>
    <li className='flex justify-start items-center hover:underline  gap-2'><IoIosCheckboxOutline  className='hover:bg-[#603EFF] hover:text-white text-[#603EFF] size-5' />Coaster Furniture</li>
    <li className='flex justify-start items-center hover:underline  gap-2'> <IoIosCheckboxOutline className='hover:bg-[#603EFF] hover:text-white text-[#603EFF] size-5'  /> Fusion Dot High Fashion</li>
    <li className='flex justify-start items-center hover:underline  gap-2'><IoIosCheckboxOutline  className='hover:bg-[#603EFF] hover:text-white text-[#603EFF] size-5' />Unique Furnitture Restor</li>
    <li className='flex justify-start items-center hover:underline  gap-2'><IoIosCheckboxOutline  className='hover:bg-[#603EFF] hover:text-white text-[#603EFF] size-5' />Dream Furnitture Flipping</li>
    <li className='flex justify-start items-center hover:underline  gap-2'><IoIosCheckboxOutline  className='hover:bg-[#603EFF] hover:text-white text-[#603EFF] size-5' />Young Repurposed</li>
    <li className='flex justify-start items-center hover:underline  gap-2'><IoIosCheckboxOutline  className='hover:bg-[#603EFF] hover:text-white text-[#603EFF] size-5' />Green DIY furniture</li>
  </ul>
  </div>
  {/* div 2 */}
  <div className="mt-16 cursor-pointer">

  <h1 className="text-[#151875] sm:text-[30px] font-bold text-[20px] underline  mb-7">Discount Offer</h1>
  <ul className='text-[#7E81A2] space-y-6 text-base'>
    <li className='flex justify-start items-center hover:underline gap-2'><IoIosCheckboxOutline  className='hover:bg-[#FF3EB2] hover:text-white  text-[#FF3EB2] size-5' />C20% Cashback</li>
    <li className='flex justify-start items-center hover:underline gap-2'> <IoIosCheckboxOutline className='hover:bg-[#FF3EB2] hover:text-white    text-[#FF3EB2] size-5'  />5% Cashback Offer</li>
    <li className='flex justify-start items-center hover:underline gap-2'><IoIosCheckboxOutline  className='hover:bg-[#FF3EB2] hover:text-white   text-[#FF3EB2] size-5' />25% Discount Offer</li>
    
  </ul>
  </div>
{/* div 3 */}
  <div className="mt-16 cursor-pointer">

  <h1 className="text-[#151875] sm:text-[30px] font-bold text-[20px] underline  mb-7">Rating Item</h1>
  <ul className='text-[#7E81A2] space-y-6 text-base'>
    <li className='flex justify-start items-center hover:underline gap-2'>
    <IoIosCheckboxOutline  className='hover:bg-[#FFCC2E] hover:text-white  text-[#FFCC2E] size-5' /><FaStar   className='text-[#FFCC2E]' /><FaStar   className='text-[#FFCC2E]'/><FaStar   className='text-[#FFCC2E]'/><FaStar  className='text-[#FFCC2E]'/><FaStar />(2341)</li>
    <li className='flex justify-start items-center hover:underline gap-2'>
    <IoIosCheckboxOutline  className='hover:bg-[#FFCC2E] hover:text-white  text-[#FFCC2E] size-5' /><FaStar  className='text-[#FFCC2E]' /><FaStar  className='text-[#FFCC2E]' /><FaStar  className='text-[#FFCC2E]' /><FaStar  /><FaStar  />(1726)</li>
    <li className='flex justify-start items-center hover:underline gap-2'>
    <IoIosCheckboxOutline  className='hover:bg-[#FFCC2E] hover:text-white  text-[#FFCC2E] size-5' /><FaStar className='text-[#FFCC2E]'  /><FaStar  className='text-[#FFCC2E]' /><FaStar  /><FaStar  /><FaStar  />(258)</li>
    
    <li className='flex justify-start items-center hover:underline gap-2'>
    <IoIosCheckboxOutline  className='hover:bg-[#FFCC2E] hover:text-white  text-[#FFCC2E] size-5' /><FaStar  className='text-[#FFCC2E]' /><FaStar  className='text-[#FFCC2E]' /><FaStar  /><FaStar  /><FaStar  />(25)</li>
    
  </ul>
  </div>
{/* div 4 */}
<div className="mt-16 cursor-pointer">

<h1 className="text-[#151875] sm:text-[30px] font-bold text-[20px] underline  mb-7">Categories</h1>
<ul className='text-[#7E81A2] space-y-6 text-base'>
  <li className='flex justify-start items-center hover:underline gap-2'><IoIosCheckboxOutline  className='hover:bg-[#FF3EB2] hover:text-white  text-[#FF3EB2] size-5' />CPrestashop</li>
  <li className='flex justify-start items-center hover:underline gap-2'> <IoIosCheckboxOutline className='hover:bg-[#FF3EB2] hover:text-white    text-[#FF3EB2] size-5'  />Magento</li>
  <li className='flex justify-start items-center hover:underline gap-2'><IoIosCheckboxOutline  className='hover:bg-[#FF3EB2] hover:text-white   text-[#FF3EB2] size-5' />Bigcommerce</li>
  <li className='flex justify-start items-center hover:underline gap-2'><IoIosCheckboxOutline  className='hover:bg-[#FF3EB2] hover:text-white  text-[#FF3EB2] size-5' />osCommerce</li>
  <li className='flex justify-start items-center hover:underline gap-2'> <IoIosCheckboxOutline className='hover:bg-[#FF3EB2] hover:text-white    text-[#FF3EB2] size-5'  />3dcart</li>
  <li className='flex justify-start items-center hover:underline gap-2'><IoIosCheckboxOutline  className='hover:bg-[#FF3EB2] hover:text-white   text-[#FF3EB2] size-5' />Bags</li>
  <li className='flex justify-start items-center hover:underline gap-2'><IoIosCheckboxOutline  className='hover:bg-[#FF3EB2] hover:text-white  text-[#FF3EB2] size-5' />Accessories</li>
  <li className='flex justify-start items-center hover:underline gap-2'> <IoIosCheckboxOutline className='hover:bg-[#FF3EB2] hover:text-white    text-[#FF3EB2] size-5'  />Jewellery</li>
  <li className='flex justify-start items-center hover:underline gap-2'><IoIosCheckboxOutline  className='hover:bg-[#FF3EB2] hover:text-white   text-[#FF3EB2] size-5' />Watches</li>
  
</ul>
</div>
{/* div 5 */}
<div className="mt-16 cursor-pointer">

  <h1 className="text-[#151875] sm:text-[30px] font-bold text-[20px] underline  mb-7">Price Filter</h1>
  <ul className='text-[#7E81A2] space-y-6 text-base'>
    <li className='flex justify-start items-center hover:underline gap-2'><IoIosCheckboxOutline  className='hover:bg-[#FF3EB2] hover:text-white  text-[#FF3EB2] size-5' />$0.00 - $150.00</li>
    <li className='flex justify-start items-center hover:underline gap-2'> <IoIosCheckboxOutline className='hover:bg-[#FF3EB2] hover:text-white    text-[#FF3EB2] size-5'  />$150.00 - $350.00</li>
    <li className='flex justify-start items-center hover:underline gap-2'><IoIosCheckboxOutline  className='hover:bg-[#FF3EB2] hover:text-white   text-[#FF3EB2] size-5' />$150.00 - $504.00</li>
    <li className='flex justify-start items-center hover:underline gap-2'><IoIosCheckboxOutline  className='hover:bg-[#FF3EB2] hover:text-white   text-[#FF3EB2] size-5' />$450.00 +</li>
    <div className="border-[1px] border-[#BCBDDB] p-2 items-end flex justify-end mr-4"><Search className='size-5 '/></div>
    
  </ul>
  </div>
  {/* div 6 */}
  <div className="mt-16 cursor-pointer">
  <h1 className="text-[#151875] sm:text-[30px] font-bold text-[20px] underline  mb-7">Filter By Color</h1>
  <div className="grid grid-cols-3 space-y-6  text-[#7E81A2]">
    <div className="flex justify-start items-center hover:underline  gap-3">

    <div className="w-3 h-3 rounded-full   bg-[#5E37FF]"></div><p className="">Blue</p>
    </div>
    <div className="flex justify-start items-center hover:underline gap-3">

    <div className="w-3 h-3 rounded-full   bg-[#FF9437]"></div><p className="">Orange</p>
    </div>
    <div className="flex justify-start items-center hover:underline gap-3">

    <div className="w-3 h-3 rounded-full   bg-[#FFBF95]"></div><p className="">Brown</p>
    </div>
    <div className="flex justify-start items-center hover:underline gap-3">

    <div className="w-3 h-3 rounded-full   bg-[#33D221]"></div><p className="">Green</p>
    </div>
    <div className="flex justify-start items-center hover:underline gap-3">

    <div className="w-3 h-3 rounded-full   bg-[#E248FF]"></div><p className="">Purple</p>
    </div>
    <div className="flex justify-start items-center hover:underline gap-3">

    <div className="w-3 h-3 rounded-full   bg-[#26CBFF]"></div><p className="">sky</p>
    </div>
   </div>
  </div>
</div>





<div className="">
  <Flex/>
</div>
    </div>




    <div className=" wrapper md:w-[904px] flex justify-center items-center mb-20 w-auto md:h-[93px] h-auto">
      <Image src="/images/4.png" alt='logo' width={500} height={300} />
    </div>
    </div>
    </main>
  )
}

export default Sidebar