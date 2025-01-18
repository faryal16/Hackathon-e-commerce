
import { sanityFetch } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";

import { Featured } from "@/sanity/lib/quires";
import Image from "next/image";

import { FaRegHeart, FaSearchPlus } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";


type Products = {
  _id: string;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  imageUrl: string[];
};




export default async function FeaturedComponents() {
 
const products : Products[] = await sanityFetch({query: Featured})
return (
  <div className="bg-white mt-[120px] mb-[30px] wrapper flex flex-col justify-center  items-center  ">
    <h1 className="text-3xl md:text-4xl lg:text-5xl mb-16 text-[#1A0B5B] font-bold">
      Featured Products
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
          <div className="absolute inset-0  bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-start flex-col justify-end gap-4">
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
                 </div>
          
            </div>
     
       {/* Text Content */}
       

       <h3 className="text-lg text-center text-[#FB2E86] font-semibold group-hover:text-white transition-all duration-300">
         {index.name}
       </h3>

     
     

       <p className="text-[#151875] mt-8 text-lg font-medium group-hover:text-white transition-all duration-300">
         ${index.price}<span className="text-[#FB2E86] ml-12 "> ${index.discountPercentage}%</span>
       </p>
       
      
 
       </div>
 
             ))}
    </div>
     <div className="mt-20 flex justify-center items-center gap-2">
      <div className="w-8 opacity-20 h-2 bg-[#F701A8]"></div>
      <div className="w-8 opacity-15 h-2 bg-[#F701A8]"></div>
      <div className="w-8  h-2 bg-[#F701A8]"></div>
      <div className="w-8 opacity-20 h-2 bg-[#F701A8]"></div>
     </div>
  </div>
);
}



