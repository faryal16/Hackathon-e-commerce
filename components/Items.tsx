import React from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

import { sanityFetch } from '@/sanity/lib/fetch';
import { FirstQuery, ItemQuery, SecondQuery, ThirdQuery } from '@/sanity/lib/quires';

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  discountPercentage?: number;
  imageUrl?: string; // Image URL can be undefined
};

const Items = async () => {
  try {
    // Fetch products
    const products: Product[] = await sanityFetch({ query: ItemQuery });
    const firstProducts: Product[] = await sanityFetch({ query: FirstQuery });
    const secondProducts: Product[] = await sanityFetch({ query: SecondQuery });
    const thirdProducts: Product[] = await sanityFetch({ query: ThirdQuery });

    // Use the first product as fallback
    const product = products[0] || null;
    const firstProduct = firstProducts[0] || null;
    const secondProduct = secondProducts[0] || null;
    const thirdProduct = thirdProducts[0] || null;

    return (
      <div className="wrapper mt-12">
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
                src={
                  product?.imageUrl
                    ? urlFor(product.imageUrl).url()
                    : '/placeholder-image.png'
                }
                alt={product?.name || 'Placeholder'}
                width={210}
                height={213}
                className=""
              />
            </div>
          </div>

          {/* Third Column */}
          <div className="flex flex-col gap-6">
            {[firstProduct, secondProduct, thirdProduct].map((prod, index) => (
              <div className="flex items-center gap-4" key={prod?._id || index}>
                <div className="bg-[#F5F6F8] p-1">
                  <Image
                    src={
                      prod?.imageUrl
                        ? urlFor(prod.imageUrl).url()
                        : '/placeholder-image.png'
                    }
                    alt={prod?.name || 'Placeholder'}
                    width={70}
                    height={80}
                    className=""
                  />
                </div>
                <div>
                  <h3 className="text-[14px] sm:text-[16px] font-semibold text-gray-800">
                    {prod?.name || 'Product Name'}
                  </h3>
                  <p className="text-[12px] sm:text-[14px]">
                    ${prod?.price || '0.00'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return <p>Error loading items. Please try again later.</p>;
  }
};

export default Items;
