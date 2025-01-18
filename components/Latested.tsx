

import { sanityFetch } from '@/sanity/lib/fetch';
import {  sixPro } from '@/sanity/lib/quires';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from "@/sanity/lib/image";

import { FaRegHeart, FaSearchPlus } from "react-icons/fa";
import { LuShoppingCart } from 'react-icons/lu';

type Products={
  _id:string,
  name:string,
description:string,
  price:number,
  discountPercentage:number,
  imageUrl:string
  
}
export default async function GallerySection() {
   
const products : Products[] = await sanityFetch({query: sixPro})

  return (
    <div className="wrapper flex justify-center items-center flex-col mx-auto px-4 py-8">
     <h1 className="text-3xl md:text-4xl lg:text-5xl mb-10 mt-20 text-[#0D0E43] font-semibold">
     Leatest Products
      </h1>

      {/* Links */}
      <div className="flex justify-center mb-20 space-x-4 md:space-x-12">
        <Link href="/new-arrivals" className="text-base md:text-lg text-[#0D0E43] hover:text-[#FB2E86] hover:underline font-semibold">New Arrival</Link>
        <Link href="/best-sellers" className="text-base md:text-lg text-[#0D0E43]
        hover:text-[#FB2E86] hover:underline font-semibold">Best Seller</Link>
        <Link href="/featured" className="text-base md:text-lg text-[#0D0E43]
        hover:text-[#FB2E86] hover:underline font-semibold">Featured</Link>
        <Link href="/special-offers" className="text-base md:text-lg text-[#0D0E43]
        hover:text-[#FB2E86] hover:underline  font-semibold">Special Offer</Link>
      </div>
      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8   mt-8 mb-6">

{
  products.map( ( index , item) => {
   

    return (
      <div key={item} className="group w-full   shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
        <div className="w-[320px] relative group-hover:bg-[#fcfbfb]  bg-[#F7F7F7] h-[300px] flex justify-center items-center">
          
        <Image src={urlFor(index.imageUrl).url()} alt={index.name} width={280} height={300} className='bject-cover p-4 w-full h-full'/>
         <div className="absolute inset-0  bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-start flex-col justify-end gap-4">

                  <button className="p-2 ml-2   bg-white rounded-full text-gray-700 hover:bg-gray-200">
                   <FaRegHeart/>
                  </button>
                  <button className="p-2 ml-2  bg-white rounded-full text-gray-700 hover:bg-gray-200">
                   <FaSearchPlus/>
                  </button>
                  <button className="p-2 ml-2 mb-4 bg-white rounded-full text-gray-700 hover:bg-gray-200">
                   <LuShoppingCart/>
                  </button>
                </div>

        </div>
        <div className="flex flex-col mt-4 gap-12 items-center justify-start">
          <h3 className="text-[#151875] font-medium text-xl ml-2 ">{index.name}</h3>
          <p className="text-[#151875] ml-1 ">${index.price}<span className="text-[#FB2448] ml-3">${index.discountPercentage}%</span></p>
        </div>
      </div>
    )
  })
}






     </div>    </div>
  );
}
