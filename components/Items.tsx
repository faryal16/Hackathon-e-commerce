import React from 'react';
import Image from "next/legacy/image";
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/live';
import { ItemQuery, FirstQuery, SecondQuery, ThirdQuery } from '@/sanity/lib/quires';

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  discountPercentage?: number;
  image?: any; // Update to match your Sanity schema if needed
  slug?: { current: string };
};

const Items = async () => {
  try {
    // Fetch products
    const result = await sanityFetch({ query: ItemQuery });
    const result1 = await sanityFetch({ query: FirstQuery });
    const result2 = await sanityFetch({ query: SecondQuery });
    const result3 = await sanityFetch({ query: ThirdQuery });

    // Safely typecast results
    const product = (Array.isArray(result?.data) ? result.data : []) as Product[];
    const firstProduct = (Array.isArray(result1?.data) ? result1.data : []) as Product[];
    const secondProduct = (Array.isArray(result2?.data) ? result2.data : []) as Product[];
    const thirdProduct = (Array.isArray(result3?.data) ? result3.data : []) as Product[];

    return (
      <div className="wrapper mt-32">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
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
              {product[0]?.image ? (
                <Image
                  src={urlFor(product[0].image).url()}
                  alt={product[0]?.name || 'Placeholder'}
                  width={210}
                  height={213}
                  className=""
                />
              ) : (
                <Image
                  src="/placeholder-image.png"
                  alt="Placeholder"
                  width={210}
                  height={213}
                  className=""
                />
              )}
            </div>
          </div>

          {/* Third Column */}
          <div className="flex flex-col gap-6">
            {[firstProduct, secondProduct, thirdProduct].map((products) =>
              products.map((product) => (
                <div className="flex items-center  gap-4" key={product._id}>
                  {/* Product Image */}
                  {product?.image && product.slug?.current ? (
                    <Link href={`/product/${product.slug.current}`}>
                      <Image
                        src={urlFor(product.image).url()}
                        alt={product.name || 'Product Image'}
                        width={80}
                        height={80}
                        className="rounded-[8px] w-[80px] h-[80px] border-[1px] hover:border-[2px] border-gray-700 "
                      />
                    </Link>
                  ) : (
                    <Image
                      src="/placeholder-image.png"
                      alt="Placeholder"
                      width={100}
                      height={100}
                      className="rounded-md"
                    />
                  )}

                  {/* Product Details */}
                  <div>
                    <h3 className="text-[14px] sm:text-[16px] font-semibold text-gray-800">
                      {product.name || 'Product Name'}
                    </h3>
                    <p className="text-[12px] sm:text-[14px]">
                      ${product.price?.toFixed(2) || '0.00'}
                    </p>
                  </div>
                </div>
              ))
            )}
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
