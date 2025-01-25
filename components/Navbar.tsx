import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Menu, Search } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-white">
      <nav className="wrapper  h-[60px]  text-[#0D0E43] ">
        <div className=" px-4">
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
                Home
              </Link>

              <Link
                href="/about"
                className="flex justify-center items-center hover:text-[#FB2E86] hover:underline"
              >
                About
              </Link>

              <Link
                href="/product"
                className="flex justify-center items-end gap-1 hover:text-[#FB2E86]"
              >
                {" "}
                Products
              </Link>

              <Link
                href="/blog"
                className="hover:text-[#FB2E86] hover:underline"
              >
                Blog
              </Link>

              <Link
                href="/grid_default"
                className="flex justify-center items-end gap-1 hover:text-[#FB2E86] hover:underline"
              >
                Shop
              </Link>

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
              <Link href="/search">
                <form
                  action="/search"
                  className="hidden md:flex items-center   "
                >
                  <input
                    type="text"
                    name="query"
                    placeholder=""
                    className="bg-transparent h-12 px-3 rounded-lg border-[1px] border-gray-300 bg-gray-100 focus-visible:border-pink-400   outline-none w-48 lg:w-64 "
                  />
                  <Search className="w-12 h-12 bg-[#FB2E86] text-white cursor-pointer p-2" />
                </form>

                {/* Icons */}
                <div className="flex  items-center space-x-8">
                  <Search className="h-5 w-5 md:hidden text-gray-500 cursor-pointer" />
                </div>
              </Link>

              {/* Mobile menu button */}
              <div className="md:hidden ">
                <Sheet>
                  <SheetTrigger>
                    <Menu />
                  </SheetTrigger>
                  <SheetContent className="items-center bg-gray-800 text-white justify-center flex flex-col gap-10">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                      <Link href="/demo" className="text-4xl  font-bold">
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
                      <Link
                        href="/about"
                        className="flex justify-center items-center hover:text-[#FB2E86] hover:underline"
                      >
                        <Link href="/about">About</Link>
                      </Link>
                      <Link
                        href="/product"
                        className="flex justify-center items-end gap-1 hover:text-[#FB2E86]"
                      >
                        {" "}
                        Products
                      </Link>
                      <Link
                        href="/blog"
                        className="hover:text-[#FB2E86] hover:underline"
                      >
                        Blog
                      </Link>
                      <Link
                        href="/grid_default"
                        className="flex justify-center items-end gap-1 hover:text-[#FB2E86] hover:underline"
                      >
                        Shop
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
      </nav>
    </div>
  );
}
