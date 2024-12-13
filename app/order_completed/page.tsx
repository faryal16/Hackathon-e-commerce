import Title from '@/components/Title'
import React from 'react'
import Image from 'next/image'

const order = () => {
  return (
    <div> <Title title={'Order Completed'} tag={'Order Completed'} />
     <div className="md:w-[904px] flex justify-center items-center mb-20 w-auto md:h-[93px] h-auto">
      <Image src="/images/4.png" alt='logo' width={500} height={300} />
    </div></div>
  )
}

export default order