import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const News = () => {
  return (
    <div className="relative  h-screen ">
      {/* Background Image with Text */}
      <div className="relative w-full h-3/4 ">
        <Image
          src="/images/3.png" // Replace with your background image path
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center  px-4">
          <h1 className="text-[24px] sm:text-[30px] md:text-[35px] text-[#0D0E43] w-[574px] font-semibold">
          Get Leatest Update By Subscribe
0ur Newslater

          </h1>
          <button className="bg-[#FB2E86] mt-20 text-white px-12 py-3 rounded-sm text-[14px] md:text-[16px] hover:bg-[#e12575] transition">
          <Link href="/grid_default" >Shop Now</Link>
        </button>
        </div>
      </div>
      <div className="flex justify-center items-center mt-28">

<Image src="/images/4.png" alt='news' width={500} height={500}/>
      </div>
      
    </div>
  )
}

export default News