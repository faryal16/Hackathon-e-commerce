import Featured from '@/components/Featured'
import Title from '@/components/Title'
import Image from 'next/image'
import Trending from '@/components/Trending'

import React from 'react'

const products = () => {
  return (
   <main className=''>
    <Title title={'Products'} tag={'Products'}/>
    <div className="wrapper my-[120px]">

   <Featured/>
   <Trending/>
    </div>
      <div className=" wrapper md:w-[904px] flex justify-center items-center mb-20 w-auto md:h-[93px] h-auto">
            <Image src="/images/4.png" alt="logo" width={500} height={300} />
          </div>
   </main>
  )
}

export default products