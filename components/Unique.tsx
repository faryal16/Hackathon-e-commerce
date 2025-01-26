import React from 'react';
import Image from "next/legacy/image";
import { sanityFetch } from '@/sanity/lib/live';
import { urlFor } from '@/sanity/lib/image';
import { Unique } from '@/sanity/lib/quires';
import { Product } from '@/sanity.types';
import AddToCartButton from './AddToCartButton';
import Link from 'next/link';

export default async function UniqueProduct() {
  try {
    // Fetch products
    const result = await sanityFetch({ query: Unique });
    const products = (Array.isArray(result?.data) ? result.data : []) as Product[];

    // If no products are available
    if (products.length === 0) {
      return <div className="text-center mt-20">No discount items available.</div>;
    }

    // Using the first product as an example
    const product = products[0];

    // Validate product fields
    const productImage = product?.image ? urlFor(product.image).url() : '/placeholder-image.png';
    const productSlug = product?.slug?.current || '#';

    return (
        <div className=" bg-[#F1F0FF]">

        
      <div className="my-[50px] wrapper bg-[#F1F0FF] px-4 py-8 flex flex-col justify-center items-center md:flex-row">
        {/* Left Image Section */}
        <div className="flex-1">
        <Link href={`/product/${productSlug}`}>
          <Image
            src={productImage}
            alt={product.name || 'Product Image'}
            width={500}
            height={300}
            className="w-full h-auto object-cover  transition-transform duration-300 hover:scale-105 hoverEffect"
          />
          </Link>
        </div>

        {/* Right Text Section */}
        <div className="flex-1 px-4 space-y-6">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl leading-loose font-semibold text-[#0D0E43]">
            {product.name || 'Product Name'}
          </h1>

          <ul className="text-[#ACABC3] list-inside space-y-5 md:text-lg text-sm sm:text-base">
            <li className="flex gap-4 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="#F52B70" />
              </svg>
              All frames constructed with hardwood solids and laminates
            </li>
            <li className="flex gap-4 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="#2B2BF5" />
              </svg>
              Reinforced with double wood dowels, glue, screw-nails corner blocks, and machine nails
            </li>
            <li className="flex gap-4 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="#2BF5CC" />
              </svg>
              Arms, backs, and seats are structurally reinforced
            </li>
          </ul>

          <div className="flex justify-start gap-6 items-center">
            
            
            <AddToCartButton product={product} className='w-[120px] h-[30px]'/>
           
            <p className="text-base font-semibold text-[#0D0E43]">
              B&B Italian Sofa <br />${product.price?.toFixed(2) || 'N/A'}
            </p>
          </div>
        </div>
      </div>
      </div> 
    );
  } catch (error) {
    console.error('Error fetching discount items:', error);
    return (
      <div className="text-center mt-20 text-red-500">
        Error loading discount items. Please try again later.
      </div>
    );
  }
}
