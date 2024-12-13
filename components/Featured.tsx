
import Image from "next/image";
import { FaRegHeart, FaSearchPlus } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
export default function FeaturedComponents() {
  const featured = [
    {
      img: "/featured/1.png",
      name: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00",
    },
    {
      img: "/featured/2.png",
      name: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00",
    },
    {
      img: "/featured/3.png",
      name: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00",
    },
    {
      img: "/featured/4.png",
      name: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00",
    },
  ];

  return (
    <div className="bg-white mt-[120px] mb-[30px] wrapper flex flex-col justify-center  items-center  ">
      <h1 className="text-3xl md:text-4xl lg:text-5xl mb-16 text-[#1A0B5B] font-bold">
        Featured Products
      </h1>
      <div className="grid grid-cols-1   sm:grid-cols-2 md:grid-cols-3 gap-6 w-full lg:grid-cols-4   ">
        {featured.map((item) => (
         <div key={item.code} className="group hover:bg-blue-600 h-[361px] shadow-lg space-y-3  flex flex-col items-center relative">
         {/* Image Section */}
         <div className="bg-[#F6F7FB] group-hover:bg-white h-[261px] w-full flex flex-col justify-center items-center relative  duration-300">
           <Image
             src={item.img}
             alt={item.name}
             width={178}
             height={178}
             className=""
           />
           {/* Icons and Button that appear on hover */}
            <div className="absolute inset-0  bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-start flex-col justify-end gap-4">
                   <div className="flex justify-start items-center gap-4 ">
                      <button className=" p-2 mb-56 ml-4 bg-white rounded-full text-gray-700 hover:bg-gray-200">
                      <FaRegHeart/>
                     </button>
                     <button className=" p-2 mb-56  bg-white rounded-full text-gray-700 hover:bg-gray-200">
                      <FaSearchPlus/>
                     </button>
                     <button className=" p-2 mb-56  bg-white rounded-full text-gray-700 hover:bg-gray-200">
                      <LuShoppingCart/>
                     </button>
                    </div>
               <button className="bg-[#08D15F] text-white p-2 ml-[70px] mb-4 rounded-[4px]">
               View Details
             </button>
                   </div>
            
              </div>
       
         {/* Text Content */}
         

         <h3 className="text-lg text-[#FB2E86] font-semibold group-hover:text-white transition-all duration-300">
           {item.name}
         </h3>
         
         <div className="flex justify-center items-center gap-1">
           <div className="w-4 h-1 bg-[#05E6B7]"></div>
           <div className="w-4 h-1 bg-[#F701A8]"></div>
           <div className="w-4 h-1 group-hover:bg-[#05E6B7] bg-[#00009D]"></div>
         </div>
       
         <p className="text-[#151875] font-medium group-hover:text-white transition-all duration-300">
           {item.code}
         </p>
         
         <p className="text-[#151875] font-medium group-hover:text-white transition-all duration-300">
           {item.price}
         </p>
         </div>
   
               ))}
      </div>
       <div className="mt-20 flex justify-center items-center gap-2">
        <div className="w-8 opacity-20 h-2 bg-[#F701A8]"></div>
        <div className="w-8 opacity-15 h-2 bg-[#F701A8]"></div>
        <div className="w-8  h-2 bg-[#F701A8]"></div>
        <div className="w-8 opacity-20 h-2 bg-[#F701A8]"></div>
       </div>
    </div>
  );
}
