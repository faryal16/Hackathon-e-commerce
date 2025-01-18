import React from 'react';
import Image from 'next/image';
import { Chairs } from '@/sanity/lib/quires';
import { sanityFetch } from '@/sanity/lib/fetch';
import { urlFor } from '@/sanity/lib/image';



type Products={
  _id:string,
  name:string,
description:string,
  price:number,
  discountPercentage:number,
  imageUrl:string
  
}
const Category = async () => {

const products : Products[] = await sanityFetch({query: Chairs})

  return (
    <div className="wrapper my-[120px]">
         <h1 className="text-3xl md:text-4xl lg:text-5xl text-center mb-20 mt-20 text-[#0D0E43] font-semibold">
         Top Categories
      </h1>
    <div className="flex flex-wrap justify-center gap-8 p-6 ">
        {products.map((index, item)=> {
          return(

          
          <div  key={item} className="flex  flex-col items-center space-y-3 w-[150px] sm:w-[180px] md:w-[200px]">

      
      {/* Category Item 1 */}
        <div className="w-[150px] mb-8 h-[150px] sm:w-[180px] sm:h-[180px] rounded-full overflow-hidden shadow-lg shadow-[50] hover:shadow-purple-600 ">
          <Image
           src={urlFor(index.imageUrl).url()} alt={index.name}
            width={200}
            height={200}
            className="object-cover "
          />
        </div>

        <p className="text-gray-800 font-semibold text-xl">
       {index.name}
        </p>
        <p className="text-gray-600 text-lg text-center">
        ${index.price}
        </p>
      </div>
      )
  })}
      </div>
   <div className="flex justify-center items-center gap-4">
    <div className="w-4 h-4 rounded-full bg-[#FB2E86]"></div>
    <div className="w-4 h-4 rounded-full ring-[#FB2E86] ring-1  hover:bg-[#FB2E86]"></div>
    <div className="w-4 h-4 rounded-full ring-[#FB2E86] ring-1 hover:bg-[#FB2E86]"></div>
   </div>
   </div>
  );
};

export default Category;
