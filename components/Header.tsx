'use client';

import Link from 'next/link';
import { MdOutlineEmail, MdPhoneInTalk } from "react-icons/md";
import { IoIosArrowDown, IoIosContact } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";

export default function Header() {
  return (
    <header className="w-full bg-[#7E33E0] text-[#F1F1F1]">
      <div className=" px-4 py-2">
        <div className="flex flex-wrap justify-between  items-center">
          {/* Centered Logo and Shop Now section */}
          <div className="flex-1 flex justify-center items-center space-x-4 md:space-y-0 space-y-2 md:space-x-8">
            <Link href="/" className="text-sm md:text-base flex justify-center items-center gap-2 md:gap-4 font-semibold">
              <MdOutlineEmail /> mhhasanul@gmail.com
            </Link>
            <Link href="/" className="text-sm md:text-base flex justify-center items-center gap-2 md:gap-4 font-semibold">
              <MdPhoneInTalk /> (12345)67890
            </Link>
          </div>

          {/* Language Selector with dropdown */}
          <div className="flex text-sm md:text-base font-semibold items-center">
            <Link href="/" className="flex justify-center items-center gap-1 md:gap-2 mr-2 md:mr-4">English <IoIosArrowDown /></Link>
            <Link href="/" className="flex justify-center items-center gap-1 md:gap-2 mr-2 md:mr-4">USD <IoIosArrowDown /></Link>
            <Link href="/login" className="flex justify-center items-center gap-1 md:gap-2 mr-2 md:mr-4">Login <IoIosContact/></Link>
            <Link href="/wishlist" className="flex justify-center items-center gap-1 md:gap-2 mr-2 md:mr-4">Wishlist <FaRegHeart/></Link>
            <Link href="/cart" className="flex justify-center items-center gap-1 md:gap-2 mr-2 md:mr-4"><LuShoppingCart /></Link>
          </div>
        </div>
      </div>
    </header>
  );
}

