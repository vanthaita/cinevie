'use client'
import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { SendHorizontal } from 'lucide-react';
export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send email to server
    console.log('Email submitted:', email);
    setSubmitted(true);
  };

  return (
    <section style={{ height: 'calc(100vh - 80px)' }}>
      <div className="py-2 px-4 md:mx-auto max-w-screen-xl lg:py-4 lg:px-6 h-full flex justify-center md:items-start items-center">
        <div className="md:w-2/3 w-full text-center lg:px-12 md:mt-10 mb-10 md:mb-0">
            <div className='w-full h-2/3 justify-center items-center flex'>
                <Image 
                    src="/mobile.svg" 
                    alt="Coding Illustration" 
                    width={320} 
                    height={250} 
                    className="mx-auto mb-6"
                />
            </div>
          <p className="mb-4 tracking-tight font-bold text-color-1 text-4xl">Our Mobile App is Coming Soon!</p>
          <p className="mb-4 w-full font-bold text-white md:text-xl text-2xl">Stay tuned for the launch on the App Store and Google Play. <br/> <span className=' md:text-xl text-base'>Enter your email to get notified:</span></p>
          <div className="mb-4">
            {submitted ? (
                <div className='w-full h-2/3 justify-center items-center flex md:flex-row flex-col gap-x-8'>
                    <p className="text-color-1 text-lg font-medium">Thank you! You will be notified.</p>
                    <Link href="/" className="inline-flex text-white color-1 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-12 py-4 text-center my-4">Done</Link>
                </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex md:flex-row flex-col gap-y-6  justify-center gap-x-4 items-center">
                <div className="relative md:w-1/2 w-[90%]">
                    <div className='flex items-center w-full'>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Enter your email'
                            className="flex-1 p-[0.785rem] pl-10 rounded-xl bg-gray-800 text-gray-300 focus:outline-none w-1/2"
                            required
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <SendHorizontal className="w-[1.2rem] h-[1.2rem] mr-2 text-gray-300" />
                        </div>
                    </div>
                </div>
                    <button
                    type="submit"
                    className="color-1 text-white font-medium rounded-lg text-sm p-[0.785rem] md:w-[15%] w-1/2"
                    >
                        Notify Me
                    </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
