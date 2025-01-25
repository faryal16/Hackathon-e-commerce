"use client";
import Container from "@/components/Container";
import PriceFormatter from "@/components/PriceFormatter";
import QuantityButtons from "@/components/QuantityButtons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { urlFor } from "@/sanity/lib/image";
import useCartStore from "@/store";
import { useAuth, useUser } from "@clerk/nextjs";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import EmptyCart from "@/components/EmptyCart";
import NoAccessToCart from "@/components/NoAccessToCart";
import Loader from "@/components/Loader";
import {
  createCheckoutSession,
  Metadata,
} from "@/action/createCheckoutSession";
import Title from "@/components/Title";
import { X } from "lucide-react";

const CartPage = () => {
  const {
    deleteCartProduct,
    getTotalPrice,
    getItemCount,
    getSubTotalPrice,
    resetCart,
  } = useCartStore();
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(false);
  const groupedItems = useCartStore((state) => state.getGroupedItems());
  const { isSignedIn } = useAuth();
  const { user } = useUser();

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return <Loader />;
  }

  const handleResetCart = () => {
    const confirmed = window.confirm("Are you sure to reset your Cart?");
    if (confirmed) {
      resetCart();
      toast.success("Your cart reset successfully!");
    }
  };

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const metadata: Metadata = {
        orderNumber: crypto.randomUUID(),
        customerName: user?.fullName ?? "Unknown",
        customerEmail: user?.emailAddresses[0]?.emailAddress ?? "Unknown",
        clerkUserId: user!.id,
      };
      const checkoutUrl = await createCheckoutSession(groupedItems, metadata);
      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = (id: string) => {
    deleteCartProduct(id);
    toast.success("Product deleted successfully!");
  };
  return (
    <div className="">
<Title title={"Shopping_Cart"} tag={"Shopping_Cart"}/>
    
    <div className=" pb-10 wrapper my-[120px]">
      {isSignedIn ? (
        <Container>
          {groupedItems?.length ? (
            <>
              {/* <div className="flex items-center gap-2 py-5">
                <ShoppingBag className="h-6 w-6 text-primary" />
                <h1 className="text-2xl font-semibold">Cart Totals</h1>
              </div> */}
              <div className="grid lg:grid-cols-3 md:gap-8">
                {/* Product View start */}
                <div className="lg:col-span-2 rounded-lg">
                  <div className="grid grid-cols-5 md:grid-cols-6 text-left p-4 py-20 text-[#151875] md:text-[22px] text-xl font-bold">
                    <h2 className="col-span-2 md:col-span-3">Product</h2>
                    <h2  >Price</h2>
                    <h2  >Quantity</h2>
                    <h2  >Total</h2>
                  </div>
                  <div className="">
                    {groupedItems?.map(({ product }) => {
                      const itemCount = getItemCount(product?._id);
                      return (
                        <div
                          key={product?._id}
                          className="grid grid-cols-5 md:grid-cols-6 items-center border-b p-2.5 last:border-b-0"
                        >
                          <div className="col-span-2 md:col-span-3 flex items-center">
                            {product?.image && (
                             <div className="relative   p-0.5 md:p-1 mr-2 rounded-md overflow-hidden group">
                             <button
                               onClick={() => handleDeleteProduct(product?._id)}
                               className="a w-4 h-4 bg-black  absolute top-2 right-2 text-white z-10 rounded-full flex items-center justify-center hover:bg-red-600 transition duration-300"
                               title="Remove"
                             >
                               <X size={14} className="" /> {/* Icon */}
                             </button>
                               <Image
                                 src={urlFor(product.image).url()}
                                 alt="productImage"
                                 width={300}
                                 height={300}
                                 loading="lazy"
                                 className="w-16 h-16 md:w-full md:h-24 object-cover group-hover:scale-105 overflow-hidden transition-transform duration-500"
                               />
                           
                           </div>
                            )}
                            <h2 className="text-black text-base font-semibold">{product?.name}</h2>
                          </div>
                          <div className="text-gray-500 text-base">
                            <PriceFormatter amount={product?.price} />
                          </div>
                          <QuantityButtons
                            product={product}
                            className="text-sm gap-0 md:gap-1"
                          />
                          <div className="text-gray-500 text-base">
                            <PriceFormatter
                              amount={
                                product?.price ? product.price * itemCount : 0
                              }
                            />
                          </div>
                        </div>
                      );
                    })}
                    <div className="flex justify-between items-center">
                        <Button  className="px-16 py-6 mt-20 rounded-[6px] text-white bg-[#FB2E86] hover:bg-pink-800 font-semibold text-lg"
                      variant="destructive">
                  
                  
                  Update Cart

                   
                   
                        </Button>
                    <Button
                      onClick={handleResetCart}
                      className="px-16 py-6 mt-20 rounded-[6px] text-white bg-[#FB2E86] hover:bg-pink-800 font-semibold text-lg"
                      variant="destructive"
                      >
                      Clear Cart
                    </Button>
                      </div>

                  </div>
                </div>

                <div className="md:hidden fixed bottom-0 left-0 w-full bg-white">
                  <div className="bg-white p-4 rounded-lg border mx-4">
                    <div className="space-y-4">
                    <h2 className="text-[18px] text-center text-[#1D3178] font-bold mb-2">
                      Order Summary
                    </h2>
                      <div className="flex justify-between text-[16px] text-[#1D3178]">
                        <span>SubTotal:</span>
                        <PriceFormatter amount={getSubTotalPrice()} className="text-[16px]" />
                      </div>
                      <Separator className="bg-[#E8E6F1]" />
                      <div className="flex justify-between text-[#1D3178]">
                        <span>Discount:</span>
                        <PriceFormatter className="text-[16px]"
                          amount={getSubTotalPrice() - getTotalPrice()}
                        />
                      </div>

                      <Separator className="bg-[#E8E6F1]" />
                      <div className="flex justify-between text-[#1D3178] font-semibold text-[16px]">
                        <span>Total:</span>

                        <PriceFormatter
                          amount={useCartStore?.getState().getTotalPrice()}
                          className="text-lg font-bold text-[#1D3178]"
                        />
                      </div>
                      <div className="flex justify-start items-center gap-2">
                        <input type="checkbox" className="text-green-400" />
                        <p className="text-sm text-[#8A91AB]">Shipping & taxes calculated at checkout</p>
                      </div>
                      <Button
                        onClick={handleCheckout}
                        disabled={loading}
                        className="w-full bg-[#19D16F] hover:bg-[#219b5a] text-white text-[14px]"
                        size="lg"
                      >
                        {loading ? "Processing" : "Proceed to Checkout"}
                      </Button>
                    
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-1 py-20">
                    <h2 className="text-[20px] text-center  text-[#1D3178] font-bold mb-20">
                    Cart Totals
                    </h2>
                  <div className="hidden md:inline-block  text-[16px] w-full bg-[#F4F4FC] p-6 rounded-lg ">
                    <div className="space-y-6">
                      <div className="flex justify-between text-[16px] text-[#1D3178]">
                        <span>SubTotal:</span>
                        <PriceFormatter amount={getSubTotalPrice()} className="text-[16px]" />
                      </div>
                      <Separator className="bg-[#E8E6F1]" />
                      <div className="flex justify-between text-[#1D3178]">
                        <span>Discount:</span>
                        <PriceFormatter className="text-[16px]"
                          amount={getSubTotalPrice() - getTotalPrice()}
                        />
                      </div>

                      <Separator className="bg-[#E8E6F1]" />
                      <div className="flex justify-between text-[#1D3178] font-semibold text-[16px]">
                        <span>Total:</span>

                        <PriceFormatter
                          amount={useCartStore?.getState().getTotalPrice()}
                          className="text-lg font-bold text-[#1D3178]"
                        />
                      </div>
                      <div className="flex justify-start items-center gap-2">
                        <input type="checkbox" className="text-green-400" />
                        <p className="text-sm text-[#8A91AB]">Shipping & taxes calculated at checkout</p>
                      </div>
                      <Button
                        onClick={handleCheckout}
                        disabled={loading}
                        className="w-full bg-[#19D16F] hover:bg-[#219b5a] text-white text-[14px]"
                        size="lg"
                      >
                        {loading ? "Processing" : "Proceed to Checkout"}
                      </Button>
                    
                    </div>
                  </div>
                </div>
                {/* Product View end */}
              </div>
            </>
          ) : (
            <EmptyCart />
          )}
        </Container>
      ) : (
        <NoAccessToCart />
      )}
    </div>

    </div>
  );
};

export default CartPage;
