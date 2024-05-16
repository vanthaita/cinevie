'use client'
import React, { useState } from 'react';

export default function PaymentMethod() {
  const [selectedMethod, setSelectedMethod] = useState('');

  const paymentMethods = [
    { name: 'Paypal', icon: 'https://www.svgrepo.com/show/328122/paypal.svg', color: 'blue-500' },
    { name: 'Mastercard', icon: 'https://www.svgrepo.com/show/328121/mastercard.svg', color: 'yellow-500' },
    { name: 'JCB', icon: 'https://www.svgrepo.com/show/328126/jcb.svg', color: 'blue-700' },
    { name: 'Credit Card', icon: 'https://www.svgrepo.com/show/514094/credit-card.svg', color: 'green-500' },
  ];

  const handlePaymentMethodClick = (name) => {
    setSelectedMethod(name);
  };

  return (
    <div className='grid grid-cols-1 gap-4 md:grid-rows-2 lg:grid-rows-4'>
      {paymentMethods.map((method) => (
        <div
          key={method.name}
          className={`flex items-center p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg 
            ${selectedMethod === method.name ? `color-1 text-white` : 'bg-gray-100 text-gray-700'}`}
          onClick={() => handlePaymentMethodClick(method.name)}
        >
          <img src={method.icon} alt={method.name} className='w-8 h-8' />
          <p className='ml-2 text-sm font-medium'>{method.name}</p>
        </div>
      ))}

      {selectedMethod === 'Credit Card' && (
        <div className='payment-details flex flex-col gap-4 p-4 rounded-lg shadow-md'>
          <h2 className='text-lg font-semibold'>Payment</h2>
          <div className=' w-full grid grid-cols-2 gap-4'>
            <div className="col-span-2 sm:col-span-1">
                <label for="full_name" className="mb-2 block text-sm font-medium text-gray-300"> Full name (as displayed on card)* </label>
                <input type="text" id="full_name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 " placeholder="Bonnie Green" required />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label for="card-number-input" className="mb-2 block text-sm font-medium text-gray-300"> Card number* </label>
              <input type="text" id="card-number-input" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pe-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="xxxx-xxxx-xxxx-xxxx" pattern="^4[0-9]{12}(?:[0-9]{3})?$" required />
            </div>
            
            <div>
              <label for="card-expiration-input" className="mb-2 block text-sm font-medium text-gray-300">Card expiration* </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                  <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fill-rule="evenodd"
                      d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <input datepicker datepicker-format="mm/yy" id="card-expiration-input" type="text" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-9 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="12/23" required />
              </div>
            </div>

            

            <div>
              <label for="cvv-input" className="mb-2 flex items-center gap-1 text-sm font-medium text-gray-300">
                CVV*
                <button data-tooltip-target="cvv-desc" data-tooltip-trigger="hover" className="text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white">
                  <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z" clip-rule="evenodd" />
                  </svg>
                </button>
                <div id="cvv-desc" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                  The last 3 digits on back of card
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
              </label>
              <input type="number" id="cvv-input" aria-describedby="helper-text-explanation" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="•••" required />
            </div>

          </div>
          <button type="submit" className="flex w-full items-center justify-center rounded-lg color-1 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Pay now</button>

        </div>
      )}
    </div>
  );
}
