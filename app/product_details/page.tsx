import Title from "@/components/Title";
import React from "react";
import Image from "next/image";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa"

import { FaArrowRight } from "react-icons/fa6";

const product = () => {
  return (
    <div>
      {" "}
      <Title title={"Product Details"} tag={"Product Details"} />
      <div className="wrapper shadow-lg  my-[120px]">
        <div className="flex flex-col md:h-[400px] h-auto md:flex-row justify-start gap-20 items-center">
          {/* Image container */}
          <div className="flex  justify-start items-center">
            <div className="">
              <Image
                src="/products/1.png"
                alt="products1"
                width={110}
                height={110}
                className="my-3 mx-2"
              />
              <Image
                src="/products/2.png"
                alt="products2"
                width={110}
                height={110}
                className="my-3 mx-2"
              />
              <Image
                src="/products/3.png"
                alt="products3"
                width={110}
                height={110}
                className="my-3 mx-2"
              />
            </div>

            <Image
              src="/products/4.png"
              alt="products4"
              width={300}
              height={300}
              className="p-2 m-5"
            />
          </div>
          {/* content  */}
          <div className="space-y-5 mb-12 sm:mb-0">
            <h1 className="text-[#151875] sm:text-[30px] font-semibold text-[20px] underline mb-4">
              Playwood arm chair
            </h1>
            <h6 className="flex justify-start items-center gap-2 mb-2">
              <FaStar className="text-[#FFCC2E]" />{" "}
              <FaStar className="text-[#FFCC2E]" />{" "}
              <FaStar className="text-[#FFCC2E]" />
              <FaStar className="text-[#FFCC2E]" />
              <FaStar className="text-[#FFCC2E]" />
              (22)
            </h6>
            <div className="flex justify-start  items-center gap-4 mb-2">
              <p className="text-gray-500">$32.00</p>
              <p className="text-[#FB2E86]">$32.00</p>
            </div>
            <p className="text-[#151875] font-bold mb-4">Color</p>
            <p className="text-gray-500 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              tellus porttitor purus, et volutpat sit.
            </p>
            <div className="flex justify-center  items-center gap-16">
              <p className="text-[#151875]">Add To Cart</p>
              <p className="text-[#151875]">
                <FaRegHeart />
              </p>
            </div>
            <p className="text-[#151875]">Categories:</p>
            <p className="text-[#151875]">Tags</p>
            <div className="flex justify-start  items-center gap-4">
              <p className="text-[#151875] space-x-5 ">Share</p>
              <p className="text-[#151875]">
                <div className="flex gap-x-3 items-center justify-center sm:justify-start ">
                  <FaFacebookF className="h-[20px] bg-[#0D0E43] rounded-full w-[20px] p-1 text-white " />
                  <FaTwitter className="h-[20px] bg-[#FB2E86] rounded-full w-[20px] p-1 text-white " />
                  <FaLinkedin className="h-[20px] bg-[#0D0E43] rounded-full w-[20px] p-1 text-white " />
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* description section */}
      <div className="  p-6 md:p-10 my-20 lg:p-16 bg-[#F9F8FE]">
        <div className="wrapper">
        <div className="">
          <ul className="text-[#151875]  sm:text-xl text-base font-bold md:space-x-20 space-x-8 flex justify-start mb-12 items-center">
            <li className="hover:underline">Description</li>
            <li className="hover:underline">Additional Info</li>
            <li className="hover:underline">Reviews</li>
            <li className="hover:underline">Video</li>
          </ul>
        </div>
        <div className="">
          <h1 className="text-[#151875] sm:text-[30px] font-semibold text-[20px] underline mb-8">
            Varius tempor.
          </h1>
          <p className="text-gray-500 text-base">
            Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
            ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
            varius ac est bibendum. Scelerisque a, risus ac ante. Velit
            consectetur neque, elit, aliquet. Non varius proin sed urna, egestas
            consequat laoreet diam tincidunt. Magna eget faucibus cras justo,
            tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla
            lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui,
            massa viverr .
          </p>
        </div>
        <div className="space-y-4">
          <h1 className="text-[#151875] sm:text-[30px] font-semibold text-[20px] underline my-8">
            More details
          </h1>
          <p className="text-gray-500 text-base flex justify-start items-center gap-4">
          <FaArrowRight className="text-[#151875] hover:text-[#9497ee] size-[20px]"/>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
            arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
            nec. Dui, massa viverr .
          </p>
          <p className="text-gray-500 text-base flex justify-start items-center gap-4">
          <FaArrowRight className="text-[#151875] hover:text-[#9497ee] size-[20px]"/>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
            arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
            nec. Dui, massa viverr .
          </p>
          <p className="text-gray-500 text-base flex justify-start items-center gap-4">
          <FaArrowRight className="text-[#151875] hover:text-[#9497ee] size-[20px]"/>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
            arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
            nec. Dui, massa viverr .
          </p>
          <p className="text-gray-500 text-base flex justify-start items-center gap-4">
          <FaArrowRight className="text-[#151875] hover:text-[#9497ee] size-[20px]"/>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
            arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
            nec. Dui, massa viverr .
          </p>
        </div>
        </div>
      </div>
      {/* Realted Products */}
      <div className=" wrapper mb-[100px]">
      <div className="  py-8">
      <h2 className="text-[#151875] sm:text-[30px] font-semibold text-[20px]  my-4">Realted Products</h2>
      <div className="grid grid-cols-1 bg-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 lg:gap-32 w-full">
               {/* First Item */}
     
               <div className="w-[270px] h-[361px]   space-y-3 flex flex-col items-center">
                
               <div className="bg-[#F6F7FB]  w-[90%] flex flex-col justify-center items-center">
                  <Image
                   src="/products/5.png"
                   width={300}
                   height={300}
                   alt="Product 1"
             
                 />
                
                 
                 </div>
                 <div className="flex gap-20">

                 <div className="">

                 <h3 className="text-base  flex text-[#0D0E43] font-semibold">Mens Fashion Wear </h3>
                 <p className="text-gray-500 font-semibold items-start"> $67.00
                 </p>
                 </div>
                  <span className="flex text-yellow-400"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>
                 </div>
               </div>
               {/* second Item */}
     
               <div className="w-[270px] h-[361px]   space-y-3 flex flex-col items-center">
                
                <div className="bg-[#F6F7FB]  w-[90%] flex flex-col justify-center items-center">
                   <Image
                    src="/products/6.png"
                    width={300}
                    height={300}
                    alt="Product 1"
              
                  />
                 
                  
                  </div>
                  <div className="flex gap-20">
 
                  <div className="">
 
                  <h3 className="text-base  flex text-[#0D0E43] font-semibold">Women&#39;s Fashion</h3>
                  <p className="text-gray-500 font-semibold items-start"> $67.00
                  </p>
                  </div>
                   <span className="flex text-yellow-400"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>
                  </div>
                </div>
               {/* Third Item */}
     
               <div className="w-[270px] h-[361px]   space-y-3 flex flex-col items-center">
                
                <div className="bg-[#F6F7FB]  w-[90%] flex flex-col justify-center items-center">
                   <Image
                    src="/products/7.png"
                    width={300}
                    height={300}
                    alt="Product 1"
              
                  />
                 
                  
                  </div>
                  <div className="flex gap-20">
 
                  <div className="">
 
                  <h3 className="text-base  flex text-[#0D0E43] font-semibold">Wolx Dummy Fashion</h3>
                  <p className="text-gray-500 font-semibold items-start"> $67.00
                  </p>
                  </div>
                   <span className="flex text-yellow-400"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>
                  </div>
                </div>
               {/* Forth Item */}
     
               <div className="w-[270px] h-[361px]   space-y-3 flex flex-col items-center">
                
                <div className="bg-[#F6F7FB]  w-[90%] flex flex-col justify-center items-center">
                   <Image
                    src="/products/8.png"
                    width={300}
                    height={300}
                    alt="Product 1"
              
                  />
                 
                  
                  </div>
                  <div className="flex gap-20">
 
                  <div className="">
 
                  <h3 className="text-base  flex text-[#0D0E43] font-semibold">Top Wall Digital Clock </h3>
                  <p className="text-gray-500 font-semibold items-start"> $67.00
                  </p>
                  </div>
                   <span className="flex text-yellow-400"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>
                  </div>
                </div>
               </div>
    </div>
      </div>
      <div className=" wrapper md:w-[904px] flex justify-center items-center mb-20 w-auto md:h-[93px] h-auto">
        <Image src="/images/4.png" alt="logo" width={500} height={300} />
      </div>
    </div>
  );
};

export default product;
