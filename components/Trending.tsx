import React from 'react'
import Image from 'next/image'
import { sanityFetch } from '@/sanity/lib/fetch'
import { fourPro } from '@/sanity/lib/quires'
import { urlFor } from '@/sanity/lib/image'
type Products={
  _id:string,
  name:string,
description:string,
  price:number,
  discountPercentage:number,
  imageUrl:string
  
}
const Trending = async () => {
  const products : Products[] = await sanityFetch({query: fourPro})
  return (
    <div className= "wrapper bg-white  flex flex-col justify-center items-center p-4">
      <h1 className="text-3xl md:text-4xl lg:text-5xl mb-20 mt-20 text-[#0D0E43] font-semibold">
      Trending Products
      </h1>
      
         <div className="grid grid-cols-1   sm:grid-cols-2 md:grid-cols-3 gap-6 w-full lg:grid-cols-4   ">
              {products.map((index,item) => (
               <div key={item} className="group hover:bg-blue-300 h-[361px] shadow-lg space-y-3  flex flex-col items-center relative">
               {/* Image Section */}
               <div className="bg-[#F6F7FB] group-hover:bg-white h-[261px] w-full flex flex-col justify-center items-center relative  duration-300">
                 <Image
                   src={urlFor(index.imageUrl).url()} alt={index.name}
                 
                   width={178}
                   height={178}
                   className=""
                 />
                 {/* Icons and Button that appear on hover */}
                  {/* <div className="absolute inset-0  bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-start flex-col justify-end gap-4">
                         <div className="flex justify-start items-center gap-4 ">
                            <button className=" p-2 mb-56 ml-4 bg-white rounded-full text-gray-700 hover:bg-gray-200">
                            <FaRegHeart/>
                           </button>
                           <button className=" p-2 mb-56  bg-white rounded-full text-gray-700 hover:bg-gray-200">
                            <FaSearchPlus/>
                           </button>
                           <button className=" p-2 mb-56  bg-white rounded-full text-gray-700 hover:bg-gray-200">
                            <LuShoppingCart/>
                           </button>
                          </div>
                     <button className="bg-[#08D15F] text-white p-2 ml-[70px] mb-4 rounded-[4px]">
                     View Details
                   </button>
                         </div> */}
                  
                    </div>
             
               {/* Text Content */}
               
        
              <h3 className="text-lg text-[#0D0E43] font-semibold">{index.name}</h3>
            <p className="text-[#0D0E43] font-semibold "> ${index.price} 
            <span className="text-gray-600 ml-4">${index.discountPercentage}%</span></p> 
               
              
         
               </div>
         
                     ))}
            </div>
        
          </div>

  )
}

export default Trending

