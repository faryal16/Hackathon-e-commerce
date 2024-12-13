'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import router from 'next/router';

import Title from '@/components/Title'
import React from 'react'

const login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 // app/(auth)/login/page.tsx
// Modify the handleSubmit function:

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Add your API call here to login
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
  
      if (response.ok) {
        // Redirect to account page or dashboard
        router.push('/account');
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      alert('Login failed');
    }
  };
  
  return (<main className=' '>
    <div><Title title={'My Account'} tag={'My Account'}/></div>
    <div className="wrapper mt-[120px] mb-[80px]
     flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-12 bg-white">
        <div className="sm:w-[444px] w-auto shadow-lg  shadow-[#C2C5E1] sm:h-[374px] h-auto  mx-auto px-12">
          <div className="text-center">
            <h2 className="mt-8 text-[36px] font-bold text-black">
            Login
            </h2>
            <p className="text-base text-[#9096B2]">
            Please login using account detail bellow.
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-[1px] px-3 text-[#9096B2]  border-gray-300 focus:border-black focus:ring-0 rounded-none "
                  required
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
     className="w-full border-[1px] px-3 text-[#9096B2] border-gray-300 focus:border-black focus:ring-0 rounded-none "
                  required
                />
              </div>
              <p className="text-[#9096B2] text-base">Forget Your Password?</p>
            </div>

            <div className="">
              
              <div className="flex items-center">
              
                <Button type="submit" className=" text-[16px] w-full text-white bg-[#FB2E86] px-8 py-6">
                Sign in
              </Button>
              </div>

              <div className="text-base mt-8 text-center">
                <Link
                  href="/forgot-password"
                  className="text-[#9096B2] "
                >
                 Don&#39;t have an Account?Create account
                </Link>
              </div>
            </div>

            
          </form>
        </div>
      </div>
    
    <div className="wrapper md:w-[904px] flex justify-center items-center mb-20 w-auto md:h-[93px] h-auto">
      <Image src="/images/4.png" alt='logo' width={500} height={300} />
    </div>
  </ main>
  )
}

export default login