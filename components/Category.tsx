import React from 'react';
import Image from 'next/image';

const Category = () => {
  return (
    <div className="wrapper my-[120px]">
         <h1 className="text-3xl md:text-4xl lg:text-5xl text-center mb-20 mt-20 text-[#0D0E43] font-semibold">
         Top Categories
      </h1>
    <div className="flex flex-wrap justify-center gap-8 p-6 ">
        
      {/* Category Item 1 */}
      <div className="flex flex-col items-center space-y-3 w-[150px] sm:w-[180px] md:w-[200px]">
        <div className="w-[150px] mb-8 h-[150px] sm:w-[180px] sm:h-[180px] rounded-full overflow-hidden shadow-lg shadow-[50] hover:shadow-purple-600 ">
          <Image
            src="/category/1.png" // Replace with your image path
            alt="Category 1"
            width={200}
            height={200}
            className="object-cover "
          />
        </div>

        <p className="text-gray-800 font-semibold text-xl">
        Mini LCW Chair
        </p>
        <p className="text-gray-600 text-lg text-center">
        $56.00
        </p>
      </div>

      {/* Category Item 2 */}
      <div className="flex flex-col items-center space-y-3 w-[150px] sm:w-[180px] md:w-[200px]">
        <div className="w-[150px] mb-8 h-[150px] sm:w-[180px] sm:h-[180px] rounded-full overflow-hidden shadow-lg shadow-[50] hover:shadow-purple-600">
          <Image
            src="/featured/1.png" // Replace with your image path
            alt="Category 2"
            width={200}
            height={200}
            className="object-cover"
          />
        </div>
        <p className="text-gray-800 font-semibold text-xl">
           Mini LCW Chair
        </p>
        <p className="text-gray-600 text-lg text-center">
        $56.00
        </p>
      </div>

      {/* Category Item 3 */}
      <div className="flex flex-col items-center space-y-3 w-[150px] sm:w-[180px] md:w-[200px]">
        <div className="w-[150px] mb-8 h-[150px] sm:w-[180px] sm:h-[180px] rounded-full overflow-hidden shadow-lg shadow-[50] hover:shadow-purple-600">
          <Image
            src="/trending/1.png" // Replace with your image path
            alt="Category 3"
            width={200}
            height={200}
            className="object-cover"
          />
        </div>
        <p className="text-gray-800 font-semibold text-xl">
           Mini LCW Chair
        </p>
        <p className="text-gray-600 text-lg text-center">
           $56.00
        </p>
      </div>

      {/* Category Item 4 */}
      <div className="flex flex-col items-center space-y-3 w-[150px] sm:w-[180px] md:w-[200px]">
        <div className="w-[150px] mb-8 h-[150px] sm:w-[180px] sm:h-[180px] rounded-full overflow-hidden shadow-lg shadow-[50] hover:shadow-purple-600">
          <Image
            src="/category/1.png" // Replace with your image path
            alt="Category 4"
            width={200}
            height={200}
            className="object-cover"
          />
        </div>
        <p className="text-gray-800 font-semibold text-xl">
        Mini LCW Chair
        </p>
        <p className="text-gray-600 text-lg text-center">
           $56.00
        </p>
      </div>
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
