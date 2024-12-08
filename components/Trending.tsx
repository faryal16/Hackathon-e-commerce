import React from 'react'
import Image from 'next/image'

const Trending = () => {
  return (
    <div className="bg-white  flex flex-col justify-center items-center p-4">
      <h1 className="text-3xl md:text-4xl lg:text-5xl mb-20 mt-20 text-[#0D0E43] font-semibold">
      Trending Products
      </h1>
      <div className="">
        <div className="grid grid-cols-1 bg-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 lg:gap-20 w-full">
          {/* First Item */}

          <div className="w-[270px] h-[361px]  shadow-lg space-y-3 flex flex-col items-center">
           
          <div className="bg-[#F6F7FB] h-[261px] w-[90%] flex flex-col justify-center items-center">
             <Image
              src="/trending/1.png"
              width={300}
              height={300}
              alt="Product 1"
        
            />
           
            
            </div>
            <h3 className="text-lg text-[#0D0E43] font-semibold">Cantilever chair</h3>
            <p className="text-[#0D0E43] font-semibold "> $26.00 
            <span className="text-gray-600 ml-4">$42.00</span></p>
          </div>
          {/* second Item */}

          <div className="w-[270px] h-[361px]  shadow-lg space-y-3 flex flex-col items-center">
           
          <div className="bg-[#F6F7FB] h-[261px] w-[90%] flex flex-col justify-center items-center">
             <Image
              src="/trending/2.png"
              width={300}
              height={300}
              alt="Product 1"
        
            />
           
            
            </div>
            <h3 className="text-lg text-[#0D0E43] font-semibold">Cantilever chair</h3>
            <p className="text-[#0D0E43] font-semibold "> $26.00 
            <span className="text-gray-600 ml-4">$42.00</span></p>
          </div>
          {/* Third Item */}

          <div className="w-[270px] h-[361px]  shadow-lg space-y-3 flex flex-col items-center">
           
          <div className="bg-[#F6F7FB] h-[261px] w-[90%] flex flex-col justify-center items-center">
             <Image
              src="/trending/3.png"
              width={300}
              height={300}
              alt="Product 1"
        
            />
           
            
            </div>
            <h3 className="text-lg text-[#0D0E43] font-semibold">Cantilever chair</h3>
            <p className="text-[#0D0E43] font-semibold "> $26.00 
            <span className="text-gray-600 ml-4">$42.00</span></p>
          </div>
          {/* Forth Item */}

          <div className="w-[270px] h-[361px]  shadow-lg space-y-3 flex flex-col items-center">
           
          <div className="bg-[#F6F7FB] h-[261px] w-[90%] flex flex-col justify-center items-center">
             <Image
              src="/trending/4.png"
              width={300}
              height={300}
              alt="Product 1"
        
            />
           
            
            </div>
            <h3 className="text-lg text-[#0D0E43] font-semibold">Cantilever chair</h3>
            <p className="text-[#0D0E43] font-semibold "> $26.00 
            <span className="text-gray-600 ml-4">$42.00</span></p>
          </div>
          </div>
          </div>
          </div>

  )
}

export default Trending