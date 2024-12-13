import CartTable from '@/components/CartTable'
import Title from '@/components/Title'
import { Button } from '@/components/ui/button'
import React from 'react'

const cart = () => {
  return (
    <div> <Title title={'Shopping Curt'} tag={'Shopping Curt'} />
    <div className="wrapper flex flex-col md:flex-row gap-8 p-4">
     <div className="flex-1">
       <CartTable/>
      </div>
      
    {/* Summary Section */}
    <div className="">
    <div className=" flex flex-col justify-start  items-center mt-[170px] ">
          <div className="">
            <h1 className='text-[#151875] mb-20 md:text-[22px] text-xl font-bold'>Cart Totals</h1>
            </div>
        <div className="w-[350px] h-[284px] text-xl text-[#1D3178]   p-8 space-y-12 rounded-[3px] bg-[#E8E6F1]">
          <div className="flex justify-between border-b mb-3 pt-2">
            <span className="font-semibold">Subtotal:</span>
            <span className="font-medium">£219.00</span>
          </div>
          
          <div className="flex justify-between border-b pt-2">
            <span className="font-medium">Total:</span>
            <span className="font-medium">£325.00</span>
          </div>
          <div className="flex justify-start items-center gap-2 ">
            <div className="w-2 h-2 bg-[#19D16F] rounded-full"></div>
            <p className="text-sm text-gray-500">Shipping & taxes calculated at checkout</p>
          </div>
          <button className="w-full py-2 px-4 bg-[#19D16F] text-white rounded-[3px] hover:bg-green-700">
            Process To Checkout
          </button>
        </div>
      </div>
    <div className=" flex flex-col justify-start  items-center mt-[50px] ">
          <div className="">
            <h1 className='text-[#151875] mb-20 md:text-[22px] text-xl font-bold'>Calculate Shopping</h1>
            </div>
        <div className="w-[350px] h-[284px] text-xl text-[#C5CBE3]   p-8 space-y-12 rounded-[3px] bg-[#E8E6F1]">
          <div className="flex justify-between border-b mb-3 pt-2">
            <span className="font-semibold">Bangladesh</span>
           
          </div>
          
          <div className="flex justify-between border-b pt-2">
            <span className="font-medium">Mirpur Dhaka - 1200</span>
            
          </div>
          <div className="flex justify-between border-b pt-2">
            <span className="font-medium">Postal Code</span>
            
          </div>
          
          <button className=" py-2 px-6 bg-[#FB2E86] rounded-[3px] text-white  hover:bg-pink-700">
          Calculate Shiping
          </button>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default cart