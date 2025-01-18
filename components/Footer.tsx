
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";


function Footer() {
  return (
    <footer className=" w-full bg-[#F2F0FF] ">   
     <div className=" wrapper py-20  flex justify-center flex-col text-lg bg-[#F2F0FF] text-[#ACABC3] ">
      <div>

        <ul className="flex flex-col md:flex-row justify-center items-center sm:items-start gap-12 sm:gap-20  p-4 ">
          {/* Logo and Description */}
          <li className="text-center sm:text-left">
          <div className="flex  flex-col items-start  space-y-4">
          <Link href="/" className="text-2xl mb-8 text-black md:text-4xl font-bold">
              Hekto
            </Link>
            <div className="flex h-[40px] md:w-[300px] w-[100px] justify-between items-center bg-white/50 rounded-md ">
              <input
                type="text"
                placeholder="Enter Email address"
                className="bg-transparent outline-none  px-4 "
              />
              <button className="h-[40px] w-[100px]  bg-[#FB2E86] text-white cursor-pointer  px-4" > Signup</button> 
            </div>
            <p className="text-base w-[150px]  text-center sm:text-left">
            Contact Info
            </p>
              <p className="text-base  text-center sm:text-left">
              17 Princess Road, London, Greater London NW1 8JR, UK
              </p>
          
            </div>
          </li>

          {/* Catagories Section */}
          <li>
            <ul className="gap-3 flex flex-col  text-center space-y-2 sm:text-left">
              <li>
                <h1 className="font-semibold mb-7 text-[#0D0E43] text-2xl">Catagories</h1>
              </li>
              <li>
                <p className="text-base">Laptops & Computers</p>
              </li>
              <li>
                <p className="text-base">Cameras & Photography</p>
              </li>
              <li>
                <p className="text-base">Smart Phones & Tablets</p>
              </li>
              <li>
                <p className="text-base">Video Games & Consoles</p>
              </li>
              <li>
                <p className="text-base">Waterproof Headphones</p>
              </li>
            </ul>
          </li>

          {/* Customer Care Section */}
          <li>
            <ul className="gap-3 flex flex-col   text-center space-y-2 sm:text-left">
              <li>
                <h1 className="font-semibold mb-7 text-[#0D0E43] text-2xl">Customer Care</h1>
              </li>
              <li>
                <p className="text-base">My Account</p>
              </li>
              <li>
                <p className="text-base">Discount</p>
              </li>
              <li>
                <p className="text-base">Returns</p>
              </li>
              <li>
                <p className="text-base">Orders History</p>
              </li>
              <li>
                <p className="text-base">Order Tracking</p>
              </li>
            </ul>
          </li>

          {/*Pages Section */}
          <li>
            <ul className="gap-3 flex flex-col  space-y-2 text-center sm:text-left">
              <li>
                <h1 className="font-semibold mb-7 text-[#0D0E43] text-2xl">Pages</h1>
              </li>
              <li>
                <p className="text-base">Blog</p>
              </li>
              <li>
                <p className="text-base">Browse the Shop</p>
              </li>
              <li>
                <p className="text-base">Category</p>
              </li>
              <li>
                <p className="text-base">Pre-Built Pages</p>
              </li>
              <li>
                <p className="text-base">Visual Composer Elements</p>
              </li>
              <li>
                <p className="text-base">WooCommerce Pages</p>
              </li>
            </ul>
          </li>

         
        </ul>
        
      </div>

    
        
      </div>
      {/* Footer Bottom */}
      <div className="  flex justify-between w-full items-center text-[#9DA0AE] p-4 px-36  bg-[#E7E4F8] ">
       <p className="">
&copy;Webecy - All Rights Reserved</p>
        
        <div className="flex gap-x-3 items-center justify-center sm:justify-start ">
          <FaFacebookF className="h-[20px] bg-[#0D0E43] rounded-full w-[20px] p-1 text-white " />
          <FaTwitter className="h-[20px] bg-[#0D0E43] rounded-full w-[20px] p-1 text-white " />
          <FaLinkedin className="h-[20px] bg-[#0D0E43] rounded-full mr-12 w-[20px] p-1 text-white " />
          <Link href="#"><FaArrowUp className="size-10 cursor-pointer text-[#0D0E43] " /></Link>
        </div>
      </div>
      </footer>
  );
}

export default Footer;

