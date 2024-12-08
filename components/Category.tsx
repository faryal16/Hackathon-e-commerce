import React from 'react';
import Image from 'next/image';

const Category = () => {
  return (
    <div className="">
         <h1 className="text-3xl md:text-4xl lg:text-5xl text-center mb-20 mt-20 text-[#0D0E43] font-semibold">
         Top Categories
      </h1>
    <div className="flex flex-wrap justify-center gap-8 p-6 ">
        
      {/* Category Item 1 */}
      <div className="flex flex-col items-center space-y-3 w-[150px] sm:w-[180px] md:w-[200px]">
        <div className="w-[100px] mb-8 h-[100px] sm:w-[120px] sm:h-[120px] rounded-full overflow-hidden shadow-lg border-b-4 border-[#9877E7]">
          <Image
            src="/category/1.png" // Replace with your image path
            alt="Category 1"
            width={120}
            height={120}
            className="object-cover "
          />
        </div>

        <p className="text-gray-800 font-semibold text-sm sm:text-base">
        Mini LCW Chair
        </p>
        <p className="text-gray-600 text-xs sm:text-sm text-center">
        $56.00
        </p>
      </div>

      {/* Category Item 2 */}
      <div className="flex flex-col items-center space-y-3 w-[150px] sm:w-[180px] md:w-[200px]">
        <div className="w-[100px] mb-8 h-[100px] sm:w-[120px] sm:h-[120px] rounded-full overflow-hidden shadow-lg">
          <Image
            src="/featured/1.png" // Replace with your image path
            alt="Category 2"
            width={120}
            height={120}
            className="object-cover"
          />
        </div>
        <p className="text-gray-800 font-semibold text-sm sm:text-base">
           Mini LCW Chair
        </p>
        <p className="text-gray-600 text-xs sm:text-sm text-center">
        $56.00
        </p>
      </div>

      {/* Category Item 3 */}
      <div className="flex flex-col items-center space-y-3 w-[150px] sm:w-[180px] md:w-[200px]">
        <div className="w-[100px] mb-8 h-[100px] sm:w-[120px] sm:h-[120px] rounded-full overflow-hidden shadow-lg">
          <Image
            src="/trending/1.png" // Replace with your image path
            alt="Category 3"
            width={120}
            height={120}
            className="object-cover"
          />
        </div>
        <p className="text-gray-800 font-semibold text-sm sm:text-base">
           Mini LCW Chair
        </p>
        <p className="text-gray-600 text-xs sm:text-sm text-center">
           $56.00
        </p>
      </div>

      {/* Category Item 4 */}
      <div className="flex flex-col items-center space-y-3 w-[150px] sm:w-[180px] md:w-[200px]">
        <div className="w-[100px] mb-8 h-[100px] sm:w-[120px] sm:h-[120px] rounded-full overflow-hidden shadow-lg">
          <Image
            src="/category/1.png" // Replace with your image path
            alt="Category 4"
            width={120}
            height={120}
            className="object-cover"
          />
        </div>
        <p className="text-gray-800 font-semibold text-sm sm:text-base">
        Mini LCW Chair
        </p>
        <p className="text-gray-600 text-xs sm:text-sm text-center">
           $56.00
        </p>
      </div>
    </div>
    <Image
              src="/category/2.png"
              width={50}
              height={10}
              alt="Product 1"
        className="mb-20 mt-20 md:ml-[600px] ml-32 sm:ml-[370px]"
            /></div>
  );
};

export default Category;
