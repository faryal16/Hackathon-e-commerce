'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function GallerySection() {
   


  return (
    <div className="container flex justify-center items-center flex-col mx-auto px-4 py-8">
     <h1 className="text-3xl md:text-4xl lg:text-5xl mb-10 mt-20 text-[#0D0E43] font-semibold">
     Leatest Products
      </h1>

      {/* Links */}
      <div className="flex justify-center space-x-4 md:space-x-12">
        <Link href="/new-arrivals" className="text-base md:text-lg text-[#FB2E86] underline font-semibold">New Arrival</Link>
        <Link href="/best-sellers" className="text-base md:text-lg text-[#0D0E43] font-semibold">Best Seller</Link>
        <Link href="/featured" className="text-base md:text-lg text-[#0D0E43] font-semibold">Featured</Link>
        <Link href="/special-offers" className="text-base md:text-lg text-[#0D0E43]  font-semibold">Special Offer</Link>
      </div>
      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-24 mt-8 mb-6">
      <Image
              src="/latestet/1.png"
              width={330}
              height={500}
              alt="Product 1"
        
            />
      <Image
              src="/latestet/2.png"
              width={330}
              height={500}
              alt="Product 1"
        
            />
      <Image
              src="/latestet/3.png"
              width={330}
              height={500}
              alt="Product 1"
        
            />
      <Image
              src="/latestet/4.png"
              width={330}
              height={500}
              alt="Product 1"
        
            />
      <Image
              src="/latestet/5.png"
              width={330}
              height={500}
              alt="Product 1"
        
            />
      <Image
              src="/latestet/6.png"
              width={330}
              height={500}
              alt="Product 1"
        
            />
      </div>
    </div>
  );
}
