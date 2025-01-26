'use client';

import { useState } from 'react';
import Image from "next/legacy/image";
import Title from "@/components/Title";
import React from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [feedback, setFeedback] = useState({ type: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback({ type: '', message: '' }); // Reset feedback before new submission
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
    }catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);  // Handle error as an instance of Error
      } else {
        console.error("An unknown error occurred");
      }
    //  catch (error) {
    //   setFeedback({ type: 'error', message: error.message || 'Something went wrong.' });
    // }
    }
  };

  return (
    <main className='mb-[120px]'>
      <Title title={"Contact Us"} tag={"Contact Us"} />
      <div className="wrapper overflow-hidden">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-36 gap-20 mt-[120px]">
          <div className="space-y-6">
            <h1 className="text-[#151875] text-[20px] font-bold md:text-[36px]">
              Information About us
            </h1>
            <p className="text-[#8A8FB9] text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est.
            </p>
          </div>
          <div className="space-y-6">
            <h1 className="text-[#151875] text-[20px] font-bold md:text-[36px]">Get In Touch</h1>
            <p className="text-[#8A8FB9] text-sm">
              We’d love to hear from you! Please fill out the form below and we’ll get back to you as soon as possible.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 items-center">
          <div className="sm:w-[500px] w-auto">
            <form onSubmit={handleSubmit} className="space-y-8 bg-white">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border-[1px] border-[#8A8FB9] px-6 py-2 m-2 rounded-sm focus:border-black focus:ring-0"
                  required
                />
                <input
                  type="email"
                  placeholder="Your E-mail *"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full border-[1px] border-[#8A8FB9] px-6 py-2 m-2 rounded-sm focus:border-black focus:ring-0"
                  required
                />
                <input
                  type="text"
                  placeholder="Subject *"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full border-[1px] border-[#8A8FB9] px-6 py-2 m-2 rounded-sm focus:border-black focus:ring-0"
                  required
                />
              </div>
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={6}
                className="w-full border-[1px] border-[#8A8FB9] px-6 py-2 m-2 rounded-sm focus:border-black focus:ring-0"
                required
              />
              <button
                type="submit"
                className="bg-[#FB2E86] hover:bg-red-800 text-white px-8 py-3 rounded-md transition duration-300"
              >
                Send Mail
              </button>
            </form>
            {/* Feedback Message */}
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
          <Image src="/images/contact.png" alt="contact" width={500} height={500} />
        </div>
      </div>
    </main>
  );
};

export default Contact;
