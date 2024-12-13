import React from 'react';
import Image from 'next/image';

const Items = () => {
  return (
    <div className="wrapper  mt-12">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 ml-40 md:ml-0 grid-cols-1 gap-8">
        {/* First Item */}
        <div className="w-full max-w-[420px] h-[270px] flex flex-col bg-[#FFF6FB] p-4">
          <h3 className="text-[20px] sm:text-[22px] lg:text-[26px] font-semibold text-gray-800">
            23% off in all products
          </h3>
          <button className="text-[#FB2E86] underline text-left mt-4">
            Shop Now
          </button>
          <div className="flex justify-end items-end mt-auto">
            <Image
              src="/item/1.png"
              alt="Example Image"
              width={210}
              height={213}
              className=""
            />
          </div>
        </div>

        {/* Second Item */}
        <div className="w-full max-w-[420px] h-[270px] flex flex-col bg-[#EEEFFB] p-4">
          <h3 className="text-[20px] sm:text-[22px] lg:text-[26px] font-semibold text-gray-800">
            23% off in all products
          </h3>
          <button className="text-[#FB2E86] underline text-left mt-4">
            View Collection
          </button>
          <div className="flex justify-end items-end mt-auto">
            <Image
              src="/item/2.png"
              alt="Example Image"
              width={210}
              height={213}
              className=""
            />
          </div>
        </div>

        {/* Third Column */}
        <div className="flex flex-col gap-6">
          {/* Small Item 1 */}
          <div className="flex items-center gap-4">
            <div className="bg-[#F5F6F8] p-1 ">
              <Image
                src="/item/3.png"
                alt="Example Image"
                width={70}
                height={80}
                className=""
              />
            </div>
            <div>
              <h3 className="text-[14px] sm:text-[16px] font-semibold text-gray-800">
                Executive Seat Chair
              </h3>
              <p className="text-[12px] sm:text-[14px]">$32.00</p>
            </div>
          </div>

          {/* Small Item 2 */}
          <div className="flex items-center gap-4">
            <div className="bg-[#F5F6F8] p-1 ">
              <Image
                src="/item/4.png"
                alt="Example Image"
                width={70}
                height={80}
                className=""
              />
            </div>
            <div>
              <h3 className="text-[14px] sm:text-[16px] font-semibold text-gray-800">
                Executive Seat Chair
              </h3>
              <p className="text-[12px] sm:text-[14px]">$32.00</p>
            </div>
          </div>

          {/* Small Item 3 */}
          <div className="flex items-center gap-4">
            <div className="bg-[#F5F6F8] p-1 ">
              <Image
                src="/item/5.png"
                alt="Example Image"
                width={70}
                height={80}
                className=""
              />
            </div>
            <div>
              <h3 className="text-[14px] sm:text-[16px] font-semibold text-gray-800">
                Executive Seat Chair
              </h3>
              <p className="text-[12px] sm:text-[14px]">$32.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
