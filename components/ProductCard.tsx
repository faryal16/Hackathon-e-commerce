// ProductCard.tsx (Client Component)
'use client';

import Image from 'next/image';
import { FaRegHeart, FaSearchPlus } from 'react-icons/fa';
import { LuShoppingCart } from 'react-icons/lu';

const ProductCard = ({
  name,
  sale,
  price,
  imgSrc,
}: {
  name: string;
  sale?: string;
  price: string;
  imgSrc: string;
}) => {
  return (
    <div className="group w-full shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      {/* Image Container */}
      <div className="relative flex justify-center items-center w-full h-[270px] bg-gray-100">
        <Image
          src={imgSrc}
          alt={name}
          width={150}
          height={150}
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
        {/* Hover Icons */}
        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-start flex-col justify-end gap-4">
          <button className="p-2 ml-2 bg-white rounded-full text-gray-700 hover:bg-gray-200">
            <FaRegHeart />
          </button>
          <button className="p-2 ml-2 bg-white rounded-full text-gray-700 hover:bg-gray-200">
            <FaSearchPlus />
          </button>
          <button className="p-2 ml-2 mb-2 bg-white rounded-full text-gray-700 hover:bg-gray-200">
            <LuShoppingCart />
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

export default ProductCard;
