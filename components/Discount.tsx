import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/live';
import { DiscountQuery } from '@/sanity/lib/quires';
import { Product } from '@/sanity.types';

export default async function Discount() {
  try {
    // Fetch products
    const result = await sanityFetch({ query: DiscountQuery });
    const products = (Array.isArray(result?.data) ? result.data : []) as Product[];

    // If no products are available
    if (products.length === 0) {
      return <div className="text-center mt-20">No discount items available.</div>;
    }

    // Using the first product as an example
    const product = products[0];

    // Validate the product fields
    const productImage = product?.image ? urlFor(product.image).url() : '/placeholder-image.png';
    const productSlug = product?.slug?.current || '#';

    return (
      <div className="wrapper flex flex-col items-center justify-between px-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl mb-10 mt-20 text-[#0D0E43] font-semibold">
          Discount Item
        </h1>

        {/* Links */}
        <div className="flex justify-center space-x-4 md:space-x-12">
          <Link
            href="/new-arrivals"
            className="text-base md:text-lg text-[#0D0E43] hover:text-[#FB2E86] hover:underline font-semibold"
          >
            Wood Chair
          </Link>
          <Link
            href="/best-sellers"
            className="text-base md:text-lg text-[#0D0E43] hover:text-[#FB2E86] hover:underline font-semibold"
          >
            Plastic Chair
          </Link>
          <Link
            href="/featured"
            className="text-base md:text-lg text-[#0D0E43] hover:text-[#FB2E86] hover:underline font-semibold"
          >
            Sofa Collection
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row mt-10 lg:mt-20">
          {/* Left Text Section */}
          <div className="flex-1 space-y-6">
            <h2 className="text-[28px] md:text-[36px] font-semibold text-[#0D0E43]">
              {product?.discount|| 0}% Discount on All Products
            </h2>
            <h3 className="text-[16px] md:text-[21px] font-semibold text-[#FB2E86]">
              {product?.name || 'Product Name'}
            </h3>
            <p className="text-[#B8B8DC] text-[14px] md:text-[16px]">
              {product?.description || 'No description available for this product.'}
            </p>
            <ul className="space-y-2 text-[#B8B8DC] grid grid-cols-2 mb-12 text-[14px] md:text-[16px]">
              <li>✓ Material expose like metals</li>
              <li>✓ Clear lines and geometric figures</li>
              <li>✓ Simple neutral colours</li>
              <li>✓ Material expose like metals</li>
            </ul>
           <button  className="w-40 mt-20 text-white bg-[#FB2E86] rounded-[12px] px-6 py-3 text-center text-lg shadow-lg hover:bg-pink-700 transition-colors">
            <Link href="/grid_default">
             Shop Now
            </Link>
             </button>
          </div>

          {/* Right Image Section */}
          <div className="flex-1 mt-10 lg:mt-0 flex justify-center relative">
  {/* Irregular Circle Background */}
  <div
    className="absolute -z-10 w-[500px] h-[500px] bg-[#ebd1eb] blur-md"
    style={{
      clipPath:
        'path("M325 0 C 450 50, 400 150, 450 325 C 400 300, 450 300, 325 450 C 150 400, 50 400, 0 325 C 50 150, 150 50, 325 0")',
    }}
  ></div>

  {/* Product Image */}
  <Link href={`/product/${productSlug}`}>
    <Image
      src={productImage}
      alt={product?.name || 'Product Image'}
      width={700}
      height={700}
      className="rounded-lg transition-transform duration-300 hover:scale-105"
    />
  </Link>
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
