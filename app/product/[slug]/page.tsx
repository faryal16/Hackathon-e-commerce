// ProductPage.tsx
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import AddToCartButton from "@/components/AddToCartButton";
import Container from "@/components/Container";
import PriceView from "@/components/PriceView";
import Image from "next/legacy/image";

import { FaRegQuestionCircle } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { LuStar } from "react-icons/lu";
import { RxBorderSplit } from "react-icons/rx";
import { TbTruckDelivery } from "react-icons/tb";
  // Client component for hover logic
import Title from "@/components/Title";
import {  getAllProducts } from "@/sanity/helpers";
import ProductThumbnail from "@/components/ProductThumbnail";

import ProductCard from "@/components/ProductCard";
import { PageProps } from "@/.next/types/app/success/page";







interface ProductDetailsProps extends PageProps {
  params: Promise<{
    slug: string;
  }>;
}


const ProductPage = async ({ params }: ProductDetailsProps) => {
  const products = await getAllProducts();
  // const categories = await getAllCategories();

  const { slug } = await params;

  let product = null;
  try {
    const productQuery = `*[_type == "product" && slug.current == $slug][0]`;
    product = await client.fetch(productQuery, { slug });
  } catch (error) {
    console.error("Error fetching product:", error);
    return (
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold">Error</h1>
        <p className="text-gray-600">There was an error fetching the product.</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
        <p className="text-gray-600">We couldn&#39;t find the product you&#39;re looking for.</p>
      </div>
    );
  }

  return (
    <div>
      <Title title={"Product Detail"} tag={"Product Detail"} />
      <Container className="flex flex-col md:flex-row gap-10 py-10">
  <div className="flex md:flex-col flex-row justify-center items-center  md:w-1/2">
    {/* Main Image */}
    <div className="border-[1px] hover:border-[2px] hover:border-black rounded-[15px] md:w-[320px] w-[300px] md:h-[320px] h-[300px] cursor-pointer">
      {product?.image && (
        <Image
          src={urlFor(product.image).url()}
          alt="productImage"
          width={320}
          height={320}
          layout="intrinsic"
          style={{
            height: "auto", // Maintain aspect ratio
          }}
          className="w-full h-full object-contain rounded-[15px]"
        />
      )}
    </div>

    {/* Small Images */}
    <div className="flex md:flex-col gap-2 md:mt-4 mt-2">
      <ProductThumbnail product={product} />
    </div>
  </div>

  {/* Product Information */}
  <div className="w-full md:w-1/2 flex flex-col gap-5">
          <div>
            <p className="text-4xl font-bold mb-2">{product?.name}</p>
            <div className="flex items-center gap-2">
              <div className="text-lightText flex items-center gap-.5 text-sm">
                {Array.from({ length: 5 }).map((_, index) => {
                  const isLastStar = index === 4;
                  return (
                    <LuStar
                      fill={!isLastStar ? "#fca99b" : "transparent"}
                      key={index}
                      className={`${isLastStar ? "text-gray-500" : "text-lightOrange"}`}
                    />
                  );
                })}
              </div>
              <p className="text-sm font-medium text-gray-500">{`(25 reviews)`}</p>
            </div>
          </div>
          <PriceView
            price={product?.price}
            discount={product?.discount}
          
            className="text-lg font-bold"
          />
          {product?.stock && (
            <p className="bg-green-100 w-24 text-center text-green-600 text-sm py-2.5 font-semibold rounded-lg">
              In Stock
            </p>
          )}

          <p className="text-base text-gray-800">
            <span className="bg-black text-white px-3 py-1 text-sm font-semibold rounded-md mr-2">
              20
            </span>{" "}
            People are viewing this right now
          </p>

          <p className="text-sm text-gray-600 tracking-wide">
            {product?.description}
          </p>
          <AddToCartButton product={product} />
          <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-b-gray-200 py-5 -mt-2">
            <div className="flex items-center gap-2 text-sm text-black hover:text-red-600 hoverEffect">
              <RxBorderSplit className="text-lg" />
              <p>Compare color</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-black hover:text-red-600 hoverEffect">
              <FaRegQuestionCircle className="text-lg" />
              <p>Ask a question</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-black hover:text-red-600 hoverEffect">
              <TbTruckDelivery className="text-lg" />
              <p>Delivery & Return</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-black hover:text-red-600 hoverEffect">
              <FiShare2 className="text-lg" />
              <p>Share</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <div className="border border-darkBlue/20 text-center p-3 hover:border-darkBlue hoverEffect rounded-md">
              <p className="text-base font-semibold text-black">
                Free Shipping
              </p>
              <p className="text-sm text-gray-500">
                Free shipping over order $120
              </p>
            </div>
            <div className="border border-darkBlue/20 text-center p-3 hover:border-darkBlue hoverEffect rounded-md">
              <p className="text-base font-semibold text-black">
                Flexible Payment
              </p>
              <p className="text-sm text-gray-500">
                Pay with Multiple Credit Cards
              </p>
            </div>
          </div>
        </div>
</Container>


      {/* Related Products */}
      <div className="mt-[120px]">
  <h2 className="text-center my-[50px] font-semibold text-black text-[30px]">
    You may also like
  </h2>

  {/* Ensure the grid is centered and the items are properly spaced */}
  <div className="relative  marquee space-x-12 h-auto overflow-x-auto">
    <div className=" flex flex-nowrap space-x-6   will-change-transform  hover:paused animate-marquee  w-auto">
    
    {products.map((product) => (
        <div className=" inline-block" key={product._id}>
          <ProductCard product={product} />
        </div>
      ))}
   
    </div>
  </div>
</div>
 



      <div className="wrapper md:w-[904px] flex justify-center items-center mb-20 w-auto md:h-[93px] h-auto">
        <Image src="/images/4.png" alt="logo" width={500} height={100} />
      </div>
    </div>
  );
};

export default ProductPage;
