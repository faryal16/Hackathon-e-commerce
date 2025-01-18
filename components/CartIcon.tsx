"use client"
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { LuShoppingCart } from "react-icons/lu";

const CartIcon = () => {
const[ isClient, setIsClient] = useState(false);
useEffect(() => {
    setIsClient(true)
}, [] )
if(!isClient){
    return null
}

  return (
    <Link href="/shopping_cart"
    className="flex justify-center items-center gap-1 md:gap-2  hoverEffect">

    <div>
<LuShoppingCart size={17}/>
    </div>
    </Link>
  )
}

export default CartIcon