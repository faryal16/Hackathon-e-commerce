"use client";

import useCartStore from "@/store";
import { Check, Home, Package, ShoppingBag } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Title from "@/components/Title";
import Image from "next/image";

const SuccessPage = () => {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("orderNumber");
  const clearCart = useCartStore((state) => state.resetCart);

  useEffect(() => {
    if (orderNumber) {
      clearCart();
    }
  }, [orderNumber, clearCart]);

  return (
    <div className="">

    <Title title={"Order Completed"} tag={"Order Completed"}/>
    <div className="py-10 md:py-20 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-2xl px-8 py-12 max-w-2xl w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-24 h-24  rounded-full flex items-center justify-center transition-transform duration-500 hover:scale-105 hoverEffect mx-auto mb-8 shadow-lg"
        >
          <Check  className="text-pink-500 w-20 h-32 font-extrabold   " />
        </motion.div>

        <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Your Order Is Completed! 
        </h1>
        <div className="space-y-4 mb-8 text-left">
          <p className="text-gray-600">
          Thank you for your order! Your order is being processed and will be completed within 3-6
hours. You will receive an email confirmation when your order is completed.

          </p>
          <p className="text-gray-600">
            Order Number:{" "}
            <span className="text-black font-semibold">{orderNumber}</span>
          </p>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
         
          <Link
            href="/orders"
            className="flex items-center justify-center px-4 py-3 font-semibold bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-all duration-300 shadow-md"
          >
            <Package className="w-5 h-5 mr-2" />
            Orders
          </Link>
          <Link
            href="/"
            className="flex items-center justify-center px-4 py-3 font-semibold bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-all duration-300 shadow-md"
          >
            <ShoppingBag className="w-5 h-5 mr-2" />
            Continue Shopping
          </Link>
        </div>
      </motion.div>
    </div>
    <div className="wrapper md:w-[904px] flex justify-center items-center mb-20 w-auto md:h-[93px] h-auto">
            <Image src="/images/4.png" alt="logo" width={500} height={300} />
          </div>
    </div>
  );
};

export default SuccessPage;