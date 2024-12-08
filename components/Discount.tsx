import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Discount() {
  return (
    <div className="flex flex-col items-center justify-between  px-6 ">
    <h1 className="text-3xl md:text-4xl lg:text-5xl mb-10 mt-20 text-[#0D0E43] font-semibold">
    Discount Item
      </h1>

      {/* Links */}
      <div className="flex justify-center space-x-4 md:space-x-12">


        <Link href="/new-arrivals" className="text-base md:text-lg text-[#FB2E86] underline font-semibold">Wood Chair</Link>
        <Link href="/best-sellers" className="text-base md:text-lg text-[#0D0E43] font-semibold">Plastic Chair</Link>
        <Link href="/featured" className="text-base md:text-lg text-[#0D0E43] font-semibold">Sofa Colletion</Link>
        
      </div>
      <div className="flex flex-col lg:flex-row  ">


      {/* Left Text Section */}
      <div className="flex-1 space-y-6 mt-20">
        <h2 className="text-[28px] md:text-[36px] font-semibold text-[#0D0E43]">
          20% Discount Of All Products
        </h2>
        <h3 className="text-[16px] md:text-[21px] font-semibold text-[#FB2E86]">
          Eams Sofa Compact
        </h3>
        <p className="text-[#B8B8DC] text-[14px] md:text-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
        </p>
        <ul className="space-y-2 text-[#B8B8DC] grid grid-cols-2 text-[14px] md:text-[16px]">
          <li>✓ Material expose like metals</li>
          <li>✓ Clear lines and geometric figures</li>
          <li>✓ Simple neutral colours</li>
          <li>✓ Material expose like metals</li>
        </ul>
        <button className="bg-[#FB2E86]  text-white px-12 py-3 rounded-sm text-[14px] md:text-[16px] hover:bg-[#e12575] transition">
          Shop Now
        </button>
      </div>

      {/* Right Image Section */}
      <div className="flex-1 mt-10 lg:mt-0 flex justify-center">
        <Image
          src="/images/2.png" // Replace with your image path in the public folder
          alt="Eams Sofa Compact"
          width={600}
          height={600}
          className=""
        />
      </div>
    </div>      </div>
  );
}
