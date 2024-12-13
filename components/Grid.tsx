import Image from 'next/image';

import { FaRegHeart, FaSearchPlus } from "react-icons/fa";
import { LuShoppingCart } from 'react-icons/lu';


const ProductCard = ({ name,sale, price, imgSrc }: { name: string; sale?:string; price: string; imgSrc: string }) => {
  return (
    <main>

  
    <div className="wrapper p-8 flex flex-row  shadow-md rounded-lg overflow-hidden ">
      {/* Image Container */}
      <div className=" flex  justify-center items-center w-2/5 h-[230px] bg-gray-100">
        <Image
          src={imgSrc}
          alt={name}
          width={400}
          height={300}
          objectFit="cover"
          className="transition-transform  duration-300 group-hover:scale-105"
        />
      </div>
      {/* Product Info */}
      <div className="px-4 py-12  space-y-6 text-center">
        <div className="flex mb-4 justify-start items-center gap-8">
        <h3 className="text-xl font-bold text-[#0D0E43]">{name}</h3>
        <div className="flex justify-center m-2 items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-[#DE9034]"></div>
          <div className="w-2 h-2 rounded-full bg-[#EC42A2]"></div>
          <div className="w-2 h-2 rounded-full bg-[#8568FF]"></div>
        </div>
     
        </div>
       <div className="flex justify-start  items-center gap-4">
         <p className="text-gray-500">${sale}</p>
        <p className="text-[#FB2E86]">${price}</p>
        <p className="">⭐⭐⭐⭐⭐</p>
        </div>
        <div className="text-left mb-20 ">
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est<br/> adipiscing in phasellus non in justo.</p>
        </div>
        {/* Hover Icons */}
        <div className=" mt-20  flex justify-start items-center gap-10">
          <button className="p-2 ml-2   bg-white rounded-full text-gray-700 hover:bg-gray-200">
           <FaRegHeart/>
          </button>
          <button className="p-2 ml-2  bg-white rounded-full text-gray-700 hover:bg-gray-200">
           <FaSearchPlus/>
          </button>
          <button className="p-2 ml-2 mb-2 bg-white rounded-full text-gray-700 hover:bg-gray-200">
           <LuShoppingCart/>
          </button>
        </div>
      </div>
    </div>
    </main>
  );
  



};

export default function Page() {
  const products = [
    { name: 'Accumsan tincidunt',sale:'26.00', price: '42.00', imgSrc: '/grid/12.png' },
    { name: '  In nulla',sale:'26.00 ', price: '42.00', imgSrc: '/grid/13.png' },
    { name: 'Vel sem',sale:'26.00', price: '42.00', imgSrc: '/grid/14.png' },
    { name: 'Porttitor cum',ssale:'26.00', price: '42.00', imgSrc: '/grid/15.png' },
    { name: 'Nunc in',sale:'26.00', price: '42.00', imgSrc: '/grid/16.png' },
    { name: 'Vitae facilisis',sale:'26.00', price: '42.00', imgSrc: '/grid/17.png' },
    { name: 'Curabitur lectus',sale:'26.00', price: '42.00', imgSrc: '/grid/18.png' },
      ];

  return (
    <div className="wrapper  flex items-center justify-center py-10">
      <div className="grid w-full grid-cols-1 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            sale={product.sale}
            price={product.price}
            imgSrc={product.imgSrc}
          />
        ))}
      </div>
    </div>
      
  );
}
