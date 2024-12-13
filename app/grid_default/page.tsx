import Acceory from '@/components/Acceory'
import Title from '@/components/Title'
import React from 'react'
import Image from 'next/image'
import ProductCard from "@/components/ProductCard"

const page = () => {
  return (
    <div> <Title title={'Shop Grid Default'} tag={'Shop Grid Default'} />
    <Acceory/>
    <div className="mb-20">
      <ProductCard/>
    </div>
    <div className="wrapper md:w-[904px] flex justify-center items-center mb-20 w-auto md:h-[93px] h-auto">
      <Image src="/images/4.png" alt='logo' width={500} height={300} />
    </div>
    </div>
  )
}

export default page