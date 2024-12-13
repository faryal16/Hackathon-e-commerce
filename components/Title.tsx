import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
  } from "@/components/ui/breadcrumb"
  import { LuDot } from "react-icons/lu";
  

const Title = ({ title , tag} : {title: string, tag:string}) => {
  return (<main className="w-full bg-[#F6F5FF]" >
  
    <div className='wrapper px-12 flex flex-col justify-center items-start h-[286px] bg-[#F6F5FF]'>
       <div className=" ">
         <h1 className="text-[#0D0E43] text-2xl md:text-[36px] mb-8 font-bold">{title}</h1>
      


<Breadcrumb >
  <BreadcrumbList className='text-[16px] space-x-0 '>
    <BreadcrumbItem>
      <BreadcrumbLink href="/" className='hover:text-[#FB2E86]'>Home</BreadcrumbLink>
    </BreadcrumbItem>
    
    <BreadcrumbItem>
      <BreadcrumbLink href="/components" className='hover:text-[#FB2E86]  flex justify-center items-end'>  <LuDot />Pages</BreadcrumbLink>
    </BreadcrumbItem>
    
    <BreadcrumbItem>
      <BreadcrumbLink href="/grid_default" className='text-[#FB2E86] flex justify-center items-end '> <LuDot />{tag}</BreadcrumbLink>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>

    </div>
    </div>
    </main>
  )
}

export default Title