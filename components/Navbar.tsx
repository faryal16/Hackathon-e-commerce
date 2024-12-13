import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Menu, Search } from "lucide-react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  return (

 
    <nav className="wrapper  relative  mb-12 h-[40px] bg-white text-[#0D0E43] shadow-sm p-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/demo" className="text-2xl md:text-4xl font-bold">
              Hekto
            </Link>
          </div>

          {/* Navigation Links - hidden on mobile, visible on medium and up */}
          <div className="hidden md:flex items-center  text-[14px]  space-x-6">
            <Link
              href="/"
              className="text-[#FB2E86]  hover:underline flex justify-center items-center gap-1"
            >
                Home</Link>
             
           
            <Link href="/about" className="flex justify-center items-center hover:text-[#FB2E86] hover:underline">
                About
             
            </Link>
            
             
             <DropdownMenu>
             <DropdownMenuTrigger className="flex justify-center items-end gap-1 hover:text-[#FB2E86] hover:underline">
              <Link
              href="/products">Products</Link><IoIosArrowDown size={12} /></DropdownMenuTrigger>
  <DropdownMenuContent className="bg-[#f175ab] text-white rounded-2xl shadow-lg">
  <DropdownMenuItem>
                    <Link href="/product_details">Product Details</Link>
                  </DropdownMenuItem>

  
  </DropdownMenuContent>
</DropdownMenu>

            
            <Link href="/blog" className="hover:text-[#FB2E86] hover:underline">
            Blog
            </Link>

            <DropdownMenu>
             <DropdownMenuTrigger className="flex justify-center items-end gap-1 hover:text-[#FB2E86] hover:underline"><Link href="/">Shop</Link><IoIosArrowDown size={12} /></DropdownMenuTrigger>
  <DropdownMenuContent className="bg-[#f175ab] text-white rounded-2xl shadow-lg">
  <DropdownMenuItem>
                    <Link href="/shop_left_sidebar">
                      Shop Left Sidebar
                    </Link>
                  </DropdownMenuItem>
  <DropdownMenuItem>
                    <Link href="/shop_list">Shop List</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/grid_default">Shop Grid Default</Link>
                  </DropdownMenuItem>
                  
                 
                  
                  
                 
                  
  
  </DropdownMenuContent>
</DropdownMenu>
            
            <Link
              href="/contact"
              className="hover:text-[#FB2E86] hover:underline"
            >
              Contact
            </Link>
          </div>

          {/* Search and Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Bar - hidden on mobile */}
            <div className="hidden md:flex items-center border-[1px] border-gray-300 bg-gray-100 rounded-md ">
              <input
                type="text"
                placeholder=""
                className="bg-transparent  outline-none w-48 lg:w-64"
              />
              <Search className="h-[40px]  w-12 bg-[#FB2E86] text-white cursor-pointer p-2" />
            </div>

            {/* Icons */}
            <div className="flex  items-center space-x-8">
              <Search className="h-5 w-5 md:hidden text-gray-500 cursor-pointer" />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden ">
              <Sheet>
                <SheetTrigger>
                  <Menu />
                </SheetTrigger>
                <SheetContent className="items-center bg-gray-800 text-white justify-center flex flex-col gap-10">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <Link href="/" className="text-4xl  font-bold">
                      Hekto
                    </Link>
                  </div>

                  <div className="flex flex-col justify-center items-start space-y-6 text-[14px]  ">
            <Link
              href="/"
              className="text-[#FB2E86]  hover:underline flex justify-center items-center gap-1"
            >
                <Link href="/">Home</Link>
             
            </Link>
            <Link href="/about" className="flex justify-center items-center hover:text-[#FB2E86] hover:underline">
                <Link href="/about">About</Link>
             
            </Link>
            <Link
              href="//products"
              className="flex justify-center items-end gap-1 hover:text-[#FB2E86]"
            >
             <DropdownMenu>
             <DropdownMenuTrigger className="flex justify-center items-end gap-1 hover:text-[#FB2E86] ">Products<IoIosArrowDown size={12} /></DropdownMenuTrigger>
  <DropdownMenuContent className="bg-[#f175ab] text-white rounded-2xl shadow-lg">
  <DropdownMenuItem>
                    <Link href="/product_details">Product Details</Link>
                  </DropdownMenuItem>
  
  
  </DropdownMenuContent>
</DropdownMenu>

            </Link>
            <Link href="/blog" className="hover:text-[#FB2E86] hover:underline">
             Blog
           
           
            </Link>
            <Link href="/" className="hover:text-[#FB2E86] hover:underline">
            <DropdownMenu>
             <DropdownMenuTrigger className="flex justify-center items-end gap-1 hover:text-[#FB2E86] ">Shop<IoIosArrowDown size={12} /></DropdownMenuTrigger>
  <DropdownMenuContent className="bg-[#f175ab] text-white rounded-2xl shadow-lg">
  <DropdownMenuItem>
                    <Link href="/shop_left_sidebar">
                      Shop Left Sidebar
                    </Link>
                  </DropdownMenuItem>
  <DropdownMenuItem>
                    <Link href="/shop_list">Shop List</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/grid_default">Shop Grid Default</Link>
                  </DropdownMenuItem>
                  
                 
                  
                  
                 
  
  </DropdownMenuContent>
</DropdownMenu>
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#FB2E86] hover:underline"
            >
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
