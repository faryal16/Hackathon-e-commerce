 // This ensures the component runs on the client side
 "use server"
 import Link from "next/link";
 import { MdOutlineEmail, MdPhoneInTalk } from "react-icons/md";
 import { IoIosArrowDown } from "react-icons/io";
 
 import {  ClerkLoaded,  SignInButton, UserButton } from "@clerk/nextjs";
 import { ShoppingBag, User } from "lucide-react";
 import CartIcon from "./CartIcon";
 import Navbar from "./Navbar";
 import { auth, currentUser } from "@clerk/nextjs/server";
 import { getMyOrders } from "@/sanity/helpers";
 
 export default async function Header() {
   const user = await currentUser();
   const { userId } = await auth();
   let orders = null;
   if (userId) {
     orders = await getMyOrders(userId);
   }
   // console.log(orders?.length)
 
   return (
     <div className="sticky top-0 z-50">
 
     <header className="bg-[#7E33E0] text-[#F1F1F1] ">
       <div className="wrapper px-4 py-2">
         <div className="flex  justify-between items-center">
           {/* Centered Logo and Shop Now section */}
           <div className="flex-1 flex sm:flex-row flex-col justify-center items-center space-x-4 md:space-y-0 space-y-2 md:space-x-8">
             <Link href="/">
     
               <div className="text-sm md:text-base flex justify-center items-center gap-2 md:gap-4 font-semibold">
                 <MdOutlineEmail />
                 <p className="text-xs md:block hidden">Welcome Dear</p>
                 <p className="font-semibold">{user?.fullName }</p>
               </div>
             </Link>
             <Link
               href="/"
               className="text-sm md:text-base sm:flex hidden justify-center items-center gap-2 md:gap-4 font-semibold"
             >
               <MdPhoneInTalk /> (12345) 67890
             </Link>
           </div>
 
           {/* Language Selector with dropdown */}
           <div className="flex  text-sm md:text-lg gap-4 font-semibold items-center">
             <Link href="/" className="md:flex  hidden justify-center items-center gap-1 md:gap-2">
               English <IoIosArrowDown />
             </Link>
             <Link href="/" className="md:flex  hidden justify-center items-center gap-1 md:gap-2 mr-2">
               USD <IoIosArrowDown />
             </Link>
 
             <ClerkLoaded>
               {user ? (
                 <UserButton />
               ) : (
                 <SignInButton mode="modal">
                   <div
                    className="flex justify-center items-center gap-1 md:gap-2 mr-4 hoverEffect">
                     <p>Login</p>
                     <User size={17} />
                   </div>
                 </SignInButton>
               )}
             
 
               <Link
                 href="https://hekto-admin-dashboard.vercel.app/"
                 className="flex justify-center items-center mr-2 gap-1 md:gap-2 hoverEffect"
                 >
                    <div className="text-[35px]  cursor-pointer relative transition-transform duration-400 transform hover:scale-110 ease-in-out border-0 bg-transparent">
 
                 <ShoppingBag size={20} />
                 <p className="text-xs">
 
                    <span className="absolute right-[-6px] top-[-4px] text-[10px] bg-white text-black  w-[12px] h-[12px] rounded-full text-center font-semibold">
                   {orders && orders?.length > 0 ? orders?.length : 0}
 
                    </span>
                 </p>
                    </div>
               </Link>
               
             <Link href="/cart">
               <CartIcon />
             </Link>
                
             </ClerkLoaded>
 
            
             
 
           </div>
         </div>
       </div>
     </header>
       <Navbar/>
     </div>
   );
 }