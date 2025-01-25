"use client"
import useCartStore from "@/store";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LuShoppingCart } from "react-icons/lu";

const CartIcon = () => {
  const [isClient, setIsClient] = useState(false);
  const groupedItems = useCartStore((state) => state.getGroupedItems());
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return null;
  }

  return (
    <Link href="/cart"
    className="flex justify-center items-center gap-1 md:gap-2  hoverEffect">

    <div className="text-[35px]  cursor-pointer relative transition-transform duration-400 transform hover:scale-110 ease-in-out border-0 bg-transparent">
<LuShoppingCart size={20}/>
<p className="text-xs">
          <span className="absolute right-[-6px] top-[-4px] text-[10px] bg-white text-black  w-[12px] h-[12px] rounded-full text-center font-semibold">
            {groupedItems?.length ? groupedItems.length : 0}{" "}
          </span>
       
        </p>
    </div>
    </Link>
  )
}

export default CartIcon