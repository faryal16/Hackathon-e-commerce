import { sanityFetch } from "@/sanity/lib/live";
import {  sixPro } from "@/sanity/lib/quires";
import { Product } from "@/sanity.types";
import Image from "next/legacy/image";
import Link from "next/link";
import { LuStar } from "react-icons/lu";
import PriceView from "./PriceView";
import AddToCartButton from "./AddToCartButton";
import { urlFor } from "@/sanity/lib/image";
import ProductCartBar from "./ProductCartBar";

// This is a Server Component that does not use any client-side hooks
export default async function FeaturedPage() {
  const result = await sanityFetch({ query: sixPro });
  
  // Assuming Featured returns an array of objects, type cast the response properly
  const products = (Array.isArray(result?.data) ? result.data : []) as Product[];

  if (products.length === 0) {
    return <div>No featured products available</div>;
  }


  return (
    <div className="wrapper flex justify-center items-center flex-col mx-auto px-4 py-8">
     <h1 className="text-3xl md:text-4xl lg:text-5xl mb-10 mt-20 text-[#0D0E43] font-semibold">
     Leatest Products
      </h1>

      {/* Links */}
      <div className="flex justify-center mb-20 space-x-4 md:space-x-12">
        <Link href="/" className="text-base md:text-lg text-[#0D0E43] hover:text-[#FB2E86] hover:underline font-semibold">New Arrival</Link>
        <Link href="/grid_default" className="text-base md:text-lg text-[#0D0E43]
        hover:text-[#FB2E86] hover:underline font-semibold">Best Seller</Link>
        <Link href="/featured" className="text-base md:text-lg text-[#0D0E43]
        hover:text-[#FB2E86] hover:underline font-semibold">Featured</Link>
        <Link href="/offers" className="text-base md:text-lg text-[#0D0E43]
        hover:text-[#FB2E86] hover:underline  font-semibold">Special Offer</Link>
      </div>
      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3  gap-6">
        {products.map((product) => (
          <div key={product._id} className="border border-gray-300 rounded-lg overflow-hidden group text-sm">
            <div className="border-b border-b-gray-300  overflow-hidden relative">
        {product?.image && (
          <Link href={`/product/${product.slug?.current }`}>
            <Image
              src={urlFor(product.image).url()}
              alt="productImage"
              width={500}
              height={500}
              loading="lazy"
              className={`w-full max-h-96 object-cover overflow-hidden  transition-transform duration-500 ${product?.stock !== 0 && "group-hover:scale-105"}`}
            />
          </Link>
        )}
        {product?.stock === 0 && (
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <p className="text-lg font-bold text-white">Out of Stock</p>
          </div>
        )}
        {product?.status && (
          <div className="absolute left-1 top-1 z-10 flex flex-col items-center space-y-1 text-gray-500 px-2 py-1 group-hover:opacity-0 transition-opacity duration-300">
            {product.status.split("").map((char:string,index:string|number) => (
              <span key={index} className="font-semibold uppercase">
                {char}
              </span>
            ))}
          </div>
        )}
        {product?.stock !== 0 && (
          <div className="absolute bottom-0 left-0 w-full translate-y-12 group-hover:-translate-y-4 hoverEffect">
            <ProductCartBar />
          </div>
        )}
      </div>
            <div className="p-5 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <p className="text-gray-500 font-medium">{product?.category || "Uncategorized"}</p>
                <div className="text-lightText flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => {
                    const isLastStar = index === 4;
                    return (
                      <LuStar
                        fill={!isLastStar ? "#fca99b" : "transparent"}
                        key={index}
                        className={`${isLastStar ? "text-gray-500" : "text-orange-200"}`}
                      />
                    );
                  })}
                </div>
              </div>
              <p className="text-base text-gray-600 tracking-wide font-semibold line-clamp-1 capitalize">
                {product?.name || "Product Name Not Available"}
              </p>
              <PriceView price={product?.price} discount={product?.discount || 0} />
              <AddToCartButton product={product} />
            </div>
          </div>
        ))}
      </div> 
        </div>
  );
}
