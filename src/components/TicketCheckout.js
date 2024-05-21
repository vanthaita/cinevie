'use client'
import React, { useEffect, useState } from 'react';
import { Armchair } from 'lucide-react';
import PaymentMethod from './PaymentMethod';
import { useOrderState } from '@/Hooks/useOrderState';
import OrderDetail from './OrderDetail';
export default function Checkout() {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [showPaymentOptions, setShowPaymentOptions] = useState(false);

    

    const handlePayButtonClick = () => {
        setShowPaymentOptions(true);
    };

    return (
        <div className=' flex md:flex-row flex-col md:gap-x-12 gap-y-8 relative md:mt-0 mt-4'>
            <div className=' md:hidden block'>
                <OrderDetail />
            </div>
        <div className=" md:absolute left-0 glass p-8 md:w-1/2 w-full rounded-xl md:mb-0 mb-10">
            
            <h2 className="text-2xl font-bold mb-4 w-[60%]">Order</h2>
            <div className="flex space-x-10">
                <div className="flex-1">
                    {!showPaymentOptions ? (
                        <>
                            <div className="mb-4">
                                <label className="block font-bold mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full border px-4 py-2 bg-transparent rounded-lg"
                                    value={name}
                                    placeholder='Enter your Name'
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-bold mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full border px-4 py-2 bg-transparent rounded-lg"
                                    value={email}
                                    placeholder='Enter your email'
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-bold mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    className="w-full border px-4 py-2 bg-transparent rounded-lg"
                                    value={phone}
                                    placeholder='Enter your Phone'
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <button 
                                className='p-4 color-1 w-full rounded-lg text-xl font-bold'
                                onClick={handlePayButtonClick}
                            >
                                Pay
                            </button>
                        </>
                    ) : (
                      <div className="flex flex-col space-y-4 justify-center h-full">
                        <PaymentMethod/>
                      </div>
                    )}
                </div>
            </div>
        </div>
            <div className=' hidden md:block'>
                <OrderDetail />
            </div>
      </div>
    );
}

