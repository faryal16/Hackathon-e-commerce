import React from "react";
import Image from "next/image";
import { BsVectorPen } from "react-icons/bs";
import { MdOutlineCalendarMonth } from "react-icons/md";

export default function BlogPage() {
  return (
    <div className="wrapper my-[120px] py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-2xl md:text-4xl font-bold text-[#0D0E43] mb-12 text-center">
          Latest Blog
        </h1>

        {/* Blog Grid */}
        <div className="grid group grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Blog 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative w-full h-64">
              <Image
                src="/blog/1.png" // Replace with your blog image
                alt="Blog 1"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="flex items-center text-sm md:text-base text-[#0D0E43] gap-2">
                  <BsVectorPen size={14} className="text-[#FB2E86]" />
                  SaberAli
                </h2>
                <p className="flex items-center text-sm md:text-base font-medium text-[#0D0E43] gap-2">
                  <MdOutlineCalendarMonth className="text-[#FB2E86]" />
                  21 August, 2020
                </p>
              </div>
              <h3 className="text-lg md:text-xl font-bold hover:text-[#FB2E86] text-[#0D0E43] mb-4">
                Top essential Trends in 2021
              </h3>
              <p className="text-sm md:text-base text-[#B8B8DC] mb-6">
                More off this less hello samlande lied much over tightly circa
                horse taped mightly.
              </p>
              <button className="text-[#0D0E43] hover:text-[#FB2E86] font-medium underline">
                Read More
              </button>
            </div>
          </div>

          {/* Blog 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative w-full h-64">
              <Image
                src="/blog/2.png" // Replace with your blog image
                alt="Blog 2"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="flex items-center text-sm md:text-base text-[#0D0E43] gap-2">
                  <BsVectorPen size={14} className="text-[#FB2E86]" />
                  SaberAli
                </h2>
                <p className="flex items-center text-sm md:text-base font-medium text-[#0D0E43] gap-2">
                  <MdOutlineCalendarMonth className="text-[#FB2E86]" />
                  21 August, 2020
                </p>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#FB2E86] mb-4">
                Top essential Trends in 2021
              </h3>
              <p className="text-sm md:text-base text-[#B8B8DC] mb-6">
                More off this less hello samlande lied much over tightly circa
                horse taped mightly.
              </p>
              <button className="text-[#FB2E86] font-medium underline">
                Read More
              </button>
            </div>
          </div>

          {/* Blog 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative w-full h-64">
              <Image
                src="/blog/3.png" // Replace with your blog image
                alt="Blog 3"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="flex items-center text-sm md:text-base text-[#0D0E43] gap-2">
                  <BsVectorPen size={14} className="text-[#FB2E86]" />
                  SaberAli
                </h2>
                <p className="flex items-center text-sm md:text-base font-medium text-[#0D0E43] gap-2">
                  <MdOutlineCalendarMonth className="text-[#FB2E86]" />
                  21 August, 2020
                </p>
              </div>
              <h3 className="text-lg md:text-xl font-bold hover:text-[#FB2E86] text-[#0D0E43] mb-4">
                Top essential Trends in 2021
              </h3>
              <p className="text-sm md:text-base text-[#B8B8DC] mb-6">
                More off this less hello samlande lied much over tightly circa
                horse taped mightly.
              </p>
              <button className="text-[#0D0E43] hover:text-[#FB2E86] font-medium underline">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
