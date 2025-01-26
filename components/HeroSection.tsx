

import { SALE_QUERYResult } from '@/sanity.types';

import { urlFor } from '@/sanity/lib/image';

import Image from "next/legacy/image";
import Link from 'next/link';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';


export default async function HeroSection({sales}:{sales:SALE_QUERYResult}) {
 
  return (
    < div className=" w-full  mb-10 bg-[#F2F0FF]">
      {/* Background image on the left top */}

      {/* Foreground content */}
      <Carousel className=" wrapper  ">
      <div className="absolute  w-[250px]  h-[270px]">
        <Image src="/images/home2.png"  width={270} height={270}  alt="Background" />
        </div>
        {/* Text content in the middle */}
        <CarouselContent className="   ">
          {sales?.map((sale)=> (
            <CarouselItem key={sale?._id}>
              <Card>
                <CardContent className='p-0'>
<div className="flex flex-col  ml-48 md:flex-row items-center">
  <div className="flex-1 flex flex-col gap-4  p-6 md:px-12">
<Badge variant="secondary" className=' text-2xl space-x-2 text-pink-500 capitalize'>
  {sale?.badge} {sale?.discountAmount}% off
</Badge>
            <p className="text-lg md:text-3xl tracking-wider font-bold text-[#a9248e]">
              {sale?.title}
              </p>
  <p className="text-sm md:text-lg font-bold text-[#FB2E86]">
            Best Furniture For Your Castle
          </p>
          <h1 className="text-xl md:text-3xl tracking-tight lg:text-5xl font-semibold text-black">
       {sale?.name}
          </h1>
          <p className="text-muted-foreground md:text-sm lg:text-base text-black mt-4 mx-auto">
          {sale?.description}
          </p>
          <p className="">
            Use Code: <span
            className='font-semibold text-primary uppercase' >{sale?.couponCode} </span>
             for{" "}
             <span className='font-semibold'>{sale?.discountAmount}%</span> OFF
          </p>
        
          <Link href="/product" className="w-40 text-white bg-[#FB2E86] rounded-[12px] px-6 py-3 text-center text-lg shadow-lg hover:bg-pink-700 transition-colors">
            Shop Now
            </Link>
  </div>

  {sale?.image && <div>
    <Image src={urlFor(sale?.image).url()} alt="banner image" width={500} height={500}
    objectFit='cover' className=' transition-transform duration-300 hover:scale-105 hoverEffect' />
    </div>}
</div>
                </CardContent>
                </Card>
            </CarouselItem>
          ))}
         </CarouselContent>
         <CarouselPrevious className='absolute left-2'/>
         <CarouselNext className='absolute right-2'/>
         
      </Carousel>

      
    </ div>
  );
}