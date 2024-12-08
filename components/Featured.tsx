"use client";

import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";

export default function FeaturedComponents() {
  return (
    <div className="bg-white  flex flex-col justify-center items-center p-4">
      <h1 className="text-3xl md:text-4xl lg:text-5xl mb-20 mt-20 text-[#0D0E43] font-semibold">
        Featured Products
      </h1>
      <div className="">
        <div className="grid grid-cols-1 bg-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 lg:gap-20 w-full">
          {/* First Item */}

          <div className="w-[270px] h-[361px]  shadow-lg space-y-3 flex flex-col items-center">
           
          <div className="bg-[#F6F7FB] h-[261px] w-full flex flex-col justify-center items-center">
             <Image
              src="/featured/1.png"
              width={100}
              height={100}
              alt="Product 1"
        
            />
            </div>
            <h3 className="text-lg text-[#FB2E86] font-semibold">Cantilever chair</h3>
            <p className="text-gray-600">Code - Y523201</p>
            <p className="text-gray-600">$42.00</p>
          </div>

          {/* Second Item */}

          <div className=" w-[270px] h-[361px] bg-[#2F1AC4] shadow-lg space-y-3 flex flex-col items-center">
           
           <div className="bg-[#F6F7FB] h-[261px] w-full flex flex-col justify-center items-center">
          <div className="flex gap-2 text-[#2F1AC4] mr-60 mb-20">
             <LuShoppingCart /> <FaRegHeart/>  <Search size={12} />
            </div>
             <Image
              src="/featured/2.png"
              width={100}
              height={100}
              alt="Product 2"
              className=" "
              /> 
               {/* Button */}
          <Link href="/shop" className="mt-6 inline-block text-white bg-[#08D15F] rounded-lg px-6 py-3 shadow-lg hover:bg-gray-200 transition-colors">
            View details
          </Link>
              </div>
            <h3 className="text-lg text-white   font-semibold">Cantilever chair</h3>
            <p className="text-white">Code - Y523201</p>
            <p className="text-white">$42.00</p>
          </div>

          {/* Third Item */}
          <div className=" w-[270px] h-[361px]  shadow-lg space-y-3 flex flex-col items-center">
           <div className="bg-[#F6F7FB] h-[261px] w-full flex flex-col justify-center items-center">

            <Image
              src="/featured/3.png"
              width={100}
              height={100}
              alt="Product 3"
              />
              </div>
            <h3 className="text-lg  font-semibold">Cantilever chair</h3>
            <p className="text-gray-600">Code - Y523201</p>
            <p className="text-gray-600">$42.00</p>
          </div>

          {/* Fourth Item */}
          <div className=" w-[270px] h-[361px]  shadow-lg space-y-3 flex flex-col items-center">
          <div className="bg-[#F6F7FB] h-[261px] w-full flex flex-col justify-center items-center">

            <Image
              src="/featured/4.png"
              width={100}
              height={100}
              alt="Product 4"
              />
              </div>
            <h3 className="text-lg  font-semibold">Cantilever chair</h3>
            <p className="text-gray-600">Code - Y523201</p>
            <p className="text-gray-600">$42.00</p>
          </div>
        </div>
      </div>
      <Image
              src="/featured/5.png"
              width={100}
              height={100}
              alt="Product 1"
        className="mt-20 "
            />
    </div>
  );
}
