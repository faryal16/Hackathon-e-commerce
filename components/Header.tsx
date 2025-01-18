"use client"; // This ensures the component runs on the client side

import Link from "next/link";
import { MdOutlineEmail, MdPhoneInTalk } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { useUser, ClerkLoaded,  SignInButton, UserButton } from "@clerk/nextjs";
import { User } from "lucide-react";
import CartIcon from "./CartIcon";

export default function Header() {
  const { user } = useUser(); // Fetch the user client-side

  return (
    <header className="bg-[#7E33E0] text-[#F1F1F1]">
      <div className="wrapper px-4 py-2">
        <div className="flex flex-wrap justify-between items-center">
          {/* Centered Logo and Shop Now section */}
          <div className="flex-1 flex sm:flex-row flex-col justify-center items-center space-x-4 md:space-y-0 space-y-2 md:space-x-8">
            <Link href="/">
              <div className="text-sm md:text-base flex justify-center items-center gap-2 md:gap-4 font-semibold">
                <MdOutlineEmail />
                <p className="text-xs">Welcome Dear</p>
                <p className="font-semibold">{user?.fullName }</p>
              </div>
            </Link>
            <Link
              href="/"
              className="text-sm md:text-base flex justify-center items-center gap-2 md:gap-4 font-semibold"
            >
              <MdPhoneInTalk /> (12345) 67890
            </Link>
          </div>

          {/* Language Selector with dropdown */}
          <div className="flex text-sm md:text-lg gap-4 font-semibold items-center">
            <Link href="/" className="flex justify-center items-center gap-1 md:gap-2">
              English <IoIosArrowDown />
            </Link>
            <Link href="/" className="flex justify-center items-center gap-1 md:gap-2 mr-2">
              USD <IoIosArrowDown />
            </Link>

            <ClerkLoaded>
              {user ? (
                <UserButton />
              ) : (
                <SignInButton mode="modal">
                  <div className="flex justify-center items-center gap-1 md:gap-2 mr-4 hoverEffect">
                    <p>Login</p>
                    <User size={17} />
                  </div>
                </SignInButton>
              )}
              <Link
                href="/shop_list"
                className="flex justify-center items-center gap-1 md:gap-2 hoverEffect"
              >
                Wishlist <FaRegHeart size={15} />
              </Link>
            </ClerkLoaded>

           
            

            <Link href="/shopping_cart">
              <CartIcon />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
