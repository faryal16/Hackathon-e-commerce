'use client';

import { Phone, Mail } from 'lucide-react'; // Import required icons
import { useState } from 'react';
import Image from 'next/image';

import Title from "@/components/Title";
import React from "react";

const contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      alert('Failed to send message');
    }
  };
  return (<main className=' mb-[120px]'>
      <Title title={"Contact Us"} tag={"Contact Us"} />
    <div className="wrapper overflow-hidden">
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-36 gap-20 mt-[120px] ">
        <div className="space-y-6">
          <h1 className="text-[#151875]  text-[20px] font-bold md:text-[36px]">
            Information About us
          </h1>
          <p className="text-[#8A8FB9] text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
            tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </p>
          <div className="flex justify-start items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#5726DF]"></div>
            <div className="w-4 h-4 rounded-full bg-[#FF27B7]"></div>
            <div className="w-4 h-4 rounded-full bg-[#37DAF3]"></div>
          </div>
        </div>
        <div className="">
          <h1 className="text-[#151875]  text-[20px] font-bold md:text-[36px]">Contact Way</h1>
          <div className="grid grid-cols-2 gap-8 mt-4">
            <div className="flex justify-start items-center gap-6">
              <div className="w-6 h-6 rounded-full bg-[#5726DF]"></div>
              <div className="">
                <p className="text-[#8A8FB9] text-sm">Tel: 877-67-88-99</p>
                <p className="text-[#8A8FB9] text-sm">E-Mail: shop@store.com</p>
              </div>
            </div>
           
            <div className="flex justify-start items-center gap-6">
              <div className="w-6 h-6 rounded-full bg-[#FB2E86]"></div>
              <div className="">
                <p className="text-[#8A8FB9] text-sm">Support Forum</p>
                <p className="text-[#8A8FB9] text-sm">For over 24hr</p>
              </div>
            </div>
            <div className="flex justify-start items-center gap-6">
              <div className="w-6 h-6 rounded-full bg-[#FFB265]"></div>
              <div className="">
                <p className="text-[#8A8FB9] text-sm">T20 Margaret st, London</p>
                <p className="text-[#8A8FB9] text-sm">   Great britain, 3NM98-LK</p>
              </div>
           
            </div>
            <div className="flex justify-start items-center gap-6">
              <div className="w-6 h-6 rounded-full bg-[#1BE982]"></div>
              <div className="">
                <p className="text-[#8A8FB9] text-sm">Free standard shipping</p>
                <p className="text-[#8A8FB9] text-sm">on all orders.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-[#151875] text-[20px] font-bold md:text-[36px]">Get In Touch</h1>
          <p className="text-[#8A8FB9] text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices tristique amet erat vitae eget dolor los vitae
            lobortis quis bibendum quam.
          </p>
        </div>
      </div>
      <div className="  grid md:grid-cols-2 grid-cols-1 gap-10 items-center">
      <div className="sm:w-[500px] w-auto ">
        <form onSubmit={handleSubmit} className="space-y-8  bg-white ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4   ">
            <div>
            <input
  type="text"
  placeholder="Your Name*"  // Added asterisk here
  value={formData.name}
  onChange={(e) =>
    setFormData({ ...formData, name: e.target.value })
  }
  className="w-full  border-[1px] border-[#8A8FB9]  px-6 py-2 m-2 rounded-sm   focus:border-black focus:ring-0  " // Added placeholder:ml-4 for margin
  required
/>

            </div>
            <div>
              <input
                type="email"
                placeholder="Your E-mail *"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
               className="w-full border-[1px] border-[#8A8FB9] px-6 py-2 m-2 rounded-sm   focus:border-black focus:ring-0  "
                required
              />
            </div>
            <div className='grid grid-cols-1'>
              <input
                type="text"
                placeholder="Subject *"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                 className="w-[200%] border-[1px] border-[#8A8FB9] px-6 py-2 m-2 rounded-sm   focus:border-black focus:ring-0  "
                required
              />
            </div>
          </div>

          <div>
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              rows={6}
             className="w-full border-[1px] border-[#8A8FB9] px-6 py-2 m-2 rounded-sm   focus:border-black focus:ring-0  "
              required
            />
          </div>
<div className="text-start">

          <button
            type="submit"
            className=" bg-[#FB2E86] hover:bg-red-800  text-white px-8 py-3 rounded-md transition duration-300"
            >
            Send Mail
          </button>
            </div>
        </form>
      </div>
      <Image src="/images/contact.png" alt="contact" width={500} height={500} />
      </div>
    </div>
    </main>
  );
};

export default contact;
