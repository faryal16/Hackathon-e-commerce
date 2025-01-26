import Title from '@/components/Title'
import React from 'react'
import Image from "next/legacy/image"
import Link from 'next/link'

const not_found = () => {
  return (
    <div className='wrapper overflow-hidden '><Title title={'404 Not Found'} tag={'404 Not Found'}/>

    <div className="flex mb-36 justify-center flex-col items-center">
        <Image src="/images/404.png" alt='404' width={600} height={600}/>
        <button className='w-[166px] h-[39px] mt-4 text-white bg-[#FB2E86] '>
          <Link href="/">Back To Home</Link></button>
    </div>
     <div className="md:w-[904px] flex justify-center items-center mb-20 w-auto md:h-[93px] h-auto">
      <Image src="/images/4.png" alt='logo' width={500} height={300} />
    </div></div>
  )
}

export default not_found