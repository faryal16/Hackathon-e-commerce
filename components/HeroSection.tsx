

import { sanityFetch } from '@/sanity/lib/fetch';
import { urlFor } from '@/sanity/lib/image';
import { Hero } from '@/sanity/lib/quires';
import Image from 'next/image';
import Link from 'next/link';
type Products = {
  _id: string;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  imageUrl: string[];
};
export default async function HeroSection() {
  const products : Products[] = await sanityFetch({query: Hero})
  
  const product = products[0];
  return (
    <section className="relative w-full md:h-[90%] h-full flex md:flex-row flex-col  items-center justify-center bg-[#F2F0FF]">
      {/* Background image on the left top */}

      {/* Foreground content */}
      <div className="z-10 flex flex-col md:flex-row  w-full md:w-[644px] h-full md:h-[248px] ml-0 md:ml-[250px] justify-between items-center px-4">
      <div className="absolute top-0 sm:left-0 left-24 md:w-96 md:h-96 w-60 h-60 lg:w-[384px]  lg:h-[384px]">
        <Image src="/images/home2.png" fill objectFit="cover" alt="Background" />
      </div>
        {/* Text content in the middle */}
        <div className="text-left space-y-8 md:ml-4  mb-32 flex-1">
          <p className="text-sm md:text-lg font-bold text-[#FB2E86] mt-2">
            Best Furniture For Your Castle
          </p>
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-black">
{product.name}
          </h1>
          <p className="text-xs md:text-sm lg:text-base text-black mt-4 mx-auto">
          {product.description}
          </p>
          {/* Button */}
          <Link href="/shop" className="mt-6 inline-block text-white bg-[#FB2E86] rounded-lg px-6 py-3 shadow-lg hover:bg-gray-200 transition-colors">
            Shop Now
          </Link>
        </div>
      </div>

      {/* Right image */}
      <div className="md:w-3/4 w-1/2 h-1/2 md:h-auto   mt-0">
        <Image src={urlFor(product.imageUrl).url()} alt={product.name} layout="responsive" width={706} height={689}/>
      </div>
    </section>
  );
}