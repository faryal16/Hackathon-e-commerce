"use client";

import React, { useState } from 'react';
import Title from "@/components/Title";
import Image from "next/image";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [feedback, setFeedback] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setFeedback({ type: '', message: '' }); // Reset feedback before submission

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFeedback({ type: 'success', message: 'Your message has been sent successfully!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message. Please try again.');
      }
    } catch (error) {
      setFeedback({
        type: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div>
        <Title title={'Contact Us'} tag={'Contact Us'} />
      </div>
      <div className="w-full my-[80px]">
        <div className="wrapper mx-auto px-4 py-12 flex md:flex-row flex-col justify-center items-center gap-12">
          {/* Left Section */}
          <div className="md:w-1/2 w-full">

         
          <div className="flex-1">
            <h2 className="text-[36px] font-bold text-[#151875] mb-4">Information About Us</h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
            </p>
            <div className="flex gap-2 mb-8">
              <span className="w-3 h-3 rounded-full bg-[#5625DF]"></span>
              <span className="w-3 h-3 rounded-full bg-[#FF27B7]"></span>
              <span className="w-3 h-3 rounded-full bg-[#37DAF3]"></span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="sm:w-[500px] w-auto">
            <h1 className="text-[#151875] text-[20px] font-bold md:text-[36px]">Get In Touch</h1>
            <p className="text-[#8A8FB9] text-sm">
              We&#39;d love to hear from you! Please fill out the form below and we&#39;ll get back to you as soon as possible.
            </p>
            <form onSubmit={handleSubmit} className="space-y-8 bg-white">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border-[1px] border-[#8A8FB9] px-6 py-2 m-2 rounded-sm focus:border-black focus:ring-0"
                  required
                />
                <input
                  type="email"
                  placeholder="Your E-mail *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border-[1px] border-[#8A8FB9] px-6 py-2 m-2 rounded-sm focus:border-black focus:ring-0"
                  required
                />
                <input
                  type="text"
                  placeholder="Subject *"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="sm:w-[200%] w-full border-[1px] border-[#8A8FB9] px-6 py-2 m-2 rounded-sm focus:border-black focus:ring-0"
                  required
                />
              </div>
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full border-[1px] border-[#8A8FB9] px-6 py-2 m-2 rounded-sm focus:border-black focus:ring-0"
                required
              />
              <button
                type="submit"
                disabled={isLoading}
                className={`${
                  isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#FB2E86] hover:bg-red-800'
                } text-white px-8 py-3 rounded-md transition duration-300`}
              >
                {isLoading ? 'Sending...' : 'Send Mail'}
              </button>
            </form>
            {feedback.message && (
              <div
                className={`mt-4 text-sm px-4 py-2 rounded-md ${
                  feedback.type === 'success'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {feedback.message}
              </div>
            )}
          </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 mt-24">
            <h2 className="text-[36px] font-bold text-[#151875] mb-4">Contact Way</h2>
            <div className="space-y-6 grid grid-cols-2 mb-5">
              <div className="flex items-center gap-4">
                <span className="w-6 h-6 rounded-full bg-[#5726DF]"></span>
                <div className="text-gray-600">
                  <p>Tel: 877-67-88-99</p>
                  <p>E-Mail: shop@store.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-6 h-6 rounded-full bg-[#FB2E86]"></span>
                <div className="text-gray-600">
                  <p>Support Forum</p>
                  <p>For over 24hr</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-6 h-6 rounded-full bg-[#FFB265]"></span>
                <div className="text-gray-600">
                  <p>20 Margaret st, London</p>
                  <p>Great Britain, 3NM98-LK</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-6 h-6 rounded-full bg-[#1BE982]"></span>
                <div className="text-gray-600">
                  <p>Free standard shipping</p>
                  <p>on all orders</p>
                </div>
              </div>
            </div>
            <div>
              <Image src="/images/contact.png" alt="contact" width={500} height={500} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;