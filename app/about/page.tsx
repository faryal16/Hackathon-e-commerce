import Title from "@/components/Title";
import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import Offer from "@/components/Offer";

const about = () => {
  return (
    <main className="">
      <div>
        <Title title={"About Us"} tag={"About Us"} />
      </div>
      <div className="wrapper mt-[120px]  grid sm:grid-cols-2 grid-cols-1 gap-12">
        <div className="">
          <Image
            src="/images/about.png"
            alt="about "
            width={500}
            height={500}
          />
        </div>
        <div className="">
          <h1 className="text-[22px] mb-8 sm:text-[36px] text-[#151875] font-bold">
            Know About Our Ecomerce Business, History
          </h1>
          <p className="text-base mb-20 text-[#8A8FB9]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
            tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </p>
          <button className=" bg-[#FB2E86] hover:bg-red-800  text-white px-8 py-3 rounded-md transition duration-300">
            <Link href="/contact"> Contact Us</Link>
          </button>
        </div>
      </div>
      <div className="mb-[100px]">
        <Offer />
      </div>
      <div className="flex justify-center  flex-col mb-[150px] p-36 items-center bg-[#FBFBFF]">
        <h1 className="text-black text-2xl mb-20 sm:text-[32px] font-bold">Our Client Say!</h1>
        <Image
          src="/images/about1.png"
          alt="clients"
          width={100}
          height={100}
        />
        <h2 className="text-[#151875] mt-8 text-xl font-bold">Selina Gomez</h2>
        <h6 className="text-[#8A8FB9] text-xs">Ceo At Webecy Digital</h6>
        <p className="text-[#8A8FB9] mt-8 sm:w-[500px] w-auto text-center text-sm">
          Selina Gomez Ceo At Webecy Digital Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Non duis ultrices quam vel dui
          sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien
          egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat
          praesent.
        </p>
        <div className="flex justify-center mt-12 items-center gap-2">
          <div className="bg-[#FB2E86] w-4 h-[2px] opacity-[.7]"></div>
          <div className="bg-[#FB2E86] w-5 h-[2px] opacity-[.5]"></div>
          <div className="bg-[#FB2E86] w-4 h-[2px] opacity-[.7]"></div>
        </div>
      </div>
    </main>
  );
};

export default about;
