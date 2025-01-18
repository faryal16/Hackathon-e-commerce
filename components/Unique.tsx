import { sanityFetch } from '@/sanity/lib/fetch';
import { urlFor } from '@/sanity/lib/image';
import { Unique } from '@/sanity/lib/quires';

import Image from 'next/image';


type Products = {
    _id: string;
    name: string;
    description: string;
    price: number;
    discountPercentage: number;
    imageUrl: string[];
  };
export default async function UniqueProduct() {
const products : Products[] = await sanityFetch({query: Unique})

const product = products[0];
    return (
        <div className="my-[50px] bg-[#F1F0FF] px-4 py-8 flex flex-col justify-center items-center md:flex-row">
 <div className="flex-1">
                <Image src={urlFor(product.imageUrl).url()} alt={product.name} width={500} height={300}  className="w-full h-auto object-cover" />
            </div>
            <div className="flex-1 px-4 space-y-20  ">
                <h1 className="text-2xl sm:text-3xl lg:text-5xl leading-loose font-semibold text-[#0D0E43] mb-4">
                    {product.name}</h1>
              
                <ul className="  text-[#ACABC3] list-inside space-y-5 md:text-lg text-sm sm:text-base mb-4">
                    <li className='flex  gap-4 items-center' ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 100 100"
                className="text-[#F52B70]"
            >
                <circle cx="50" cy="50" r="40" fill='#F52B70' />
            </svg> All frames constructed with hardwood solids and laminates</li>
                    <li className='flex  gap-4 items-center'> <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 100 100"
                className="text-[#F52B70]"
            >
                <circle cx="50" cy="50" r="40" fill='#2B2BF5' />
            </svg>Reinforced with double wood dowels, glue, screw-nails corner blocks, and machine nails</li>
                    <li className='flex  gap-4 items-center'>  <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 100 100"
                className="text-[#F52B70]"
            >
                <circle cx="50" cy="50" r="40" fill='#2BF5CC  ' />
            </svg>Arms, backs, and seats are structurally reinforced</li>
                </ul>
                 
                <div className=" flex justify-start gap-6 items-center">

                <button  className="bg-[#FB2E86]  text-white font-bold py-4 px-10 rounded-sm">
                    Add To Cart
                </button>  <p className="text-base font-semibold text-[#0D0E43] ">B&B Italian Sofa  <br/>${product.price}</p>
                </div>
            </div>
        </div>
    );
}
