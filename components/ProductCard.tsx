
import Image from 'next/image';

import { FaRegHeart, FaSearchPlus } from "react-icons/fa";
import { LuShoppingCart } from 'react-icons/lu';


const ProductCard = ({ name,sale, price, imgSrc }: { name: string; sale?:string; price: string; imgSrc: string }) => {
  return (
    <div className="group w-full   shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      {/* Image Container */}
      <div className="relative flex justify-center items-center w-full h-[270px] bg-gray-100">
        <Image
          src={imgSrc}
          alt={name}
          width={150}
          height={150}
          objectFit="cover"
          className="transition-transform  duration-300 group-hover:scale-105"
        />
        {/* Hover Icons */}
        <div className="absolute inset-0  bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-start flex-col justify-end gap-4">
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
      {/* Product Info */}
      <div className="p-4 w-full space-y-2 text-center">
        <h3 className="text-lg font-semibold text-[#0D0E43]">{name}</h3>
        <div className="flex justify-center m-2 items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-[#DE9034]"></div>
          <div className="w-2 h-2 rounded-full bg-[#EC42A2]"></div>
          <div className="w-2 h-2 rounded-full bg-[#8568FF]"></div>
        </div>
       <div className="flex justify-center items-center gap-2">
         <p className="text-gray-500">${sale}</p>
        <p className="text-[#FB2E86]">${price}</p>
        </div>
      </div>
    </div>
  );
  



};

export default function Page() {
  const products = [
    { name: 'CVel elit euismod',sale:'26.00', price: '42.00', imgSrc: '/grid/1.png' },
    { name: '  Ultricies condimentum imperdiet',sale:'26.00 ', price: '42.00', imgSrc: '/grid/2.png' },
    { name: 'Vitae suspendisse sed',sale:'26.00', price: '42.00', imgSrc: '/grid/3.png' },
    { name: 'Sed at fermentum',ssale:'26.00', price: '42.00', imgSrc: '/grid/4.png' },
    { name: 'Fusce pellentesque at',sale:'26.00', price: '42.00', imgSrc: '/grid/5.png' },
    { name: 'Modern Table',sale:'26.00', price: '42.00', imgSrc: '/grid/6.png' },
    { name: 'Wooden Lamp',sale:'26.00', price: '42.00', imgSrc: '/grid/7.png' },
    { name: 'Fusce pellentesque at',sale:'26.00', price: '42.00', imgSrc: '/grid/8.png' },
    { name: 'CVel elit euismod',sale:'26.00', price: '42.00', imgSrc: '/grid/9.png' },
    { name: 'Modern Table',sale:'26.00', price: '42.00', imgSrc: '/grid/10.png' },
    { name: 'Wooden Lamp',sale:'26.00', price: '42.00', imgSrc: '/grid/11.png' },
    { name: 'Fusce pellentesque at',sale:'26.00', price: '42.00', imgSrc: '/grid/4.png' },
  ];

  return (
    <div className="wrapper  flex items-center justify-center py-10">
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
