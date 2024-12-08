import {
    Sheet,
    SheetContent,
  
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu, Search } from "lucide-react";
  import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  
  return (
    <nav className="w-full relative  mb-12 h-[40px] bg-white text-[#0D0E43] shadow-sm p-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl md:text-4xl font-bold">
              Hekto
            </Link>
          </div>
        





          {/* Navigation Links - hidden on mobile, visible on medium and up */}
          <div className="hidden md:flex items-center md:text-2xl  space-x-10">
            <Link href="/" className="text-[#FB2E86] hover:underline flex justify-center items-center gap-1" >
              Home <IoIosArrowDown />
            </Link>
            <Link href="/pages" className="hover:text-gray-600 hover:underline">
            Pages
            </Link>
            <Link href="/products" className="hover:text-gray-600 hover:underline">
             
Products
            </Link>
            <Link href="/blog" className="hover:text-gray-600 hover:underline">
            Blog 
            </Link>
            <Link href="/shop" className="hover:text-gray-600 hover:underline">
            Shop
            </Link>
            <Link href="/contact" className="hover:text-gray-600 hover:underline">
            Contact
            </Link>
          </div>

          {/* Search and Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Bar - hidden on mobile */}
            <div className="hidden md:flex items-center bg-gray-100 rounded-md ">
              <input
                type="text"
                placeholder=""
                className="bg-transparent outline-none w-48 lg:w-64"
              />
              <Search className="h-[40px] w-12 bg-[#FB2E86] text-white cursor-pointer p-2"  />
            </div>

            {/* Icons */}
            <div className="flex  items-center space-x-8">
              <Search className="h-5 w-5 md:hidden text-gray-500 cursor-pointer" />
             
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              
              <Sheet>
  <SheetTrigger><Menu/></SheetTrigger>
  <SheetContent className='items-center justify-center flex flex-col gap-10' > 
  
         {/* Logo */}
         <div className="flex-shrink-0">
            <Link href="/" className="text-4xl  font-bold">
            Hekto
            </Link>
          </div>
   
      <div className="flex items-center flex-col  justify-center  text-2xl  gap-10">
      <Link href="/" className="hover:text-gray-600 hover:underline" >
              Home
            </Link>
            <Link href="/pages" className="hover:text-gray-600 hover:underline">
            Pages
            </Link>
            <Link href="/products" className="hover:text-gray-600 hover:underline">
             
Products
            </Link>
            <Link href="/blog" className="hover:text-gray-600 hover:underline">
            Blog 
            </Link>
            <Link href="/shop" className="hover:text-gray-600 hover:underline">
            Shop
            </Link>
            <Link href="/contact" className="hover:text-gray-600 hover:underline">
            Contact
            </Link>
          </div>
          </SheetContent>

</Sheet>

              
            </div>
          </div>
        </div>
      </div>
      {/* Horizontal divider for mobile */}
      <div className=" h-px bg-gray-200 my-4"></div>
    </nav>
  );
}