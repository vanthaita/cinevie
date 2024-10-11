import React from 'react';
import Link from 'next/link';
export default function PurchaseConfirmation() {
  return (
    <section className='md:mt-4 mt-10 h-[calc(100vh-80px)] md:h-[calc(100vh-80px)]'>
    <div className="py-2 px-4 mx-auto max-w-screen-xl lg:py-4 lg:px-6 h-full flex justify-center items-start">
        <div className="md:w-2/3 w-full text-center lg:px-12 mt-10">
        <div className="mb-10">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            className="mx-auto md:w-64 md:h-64 w-72 h-72"
            xmlSpace="preserve"
          >
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#ffa84b', stopOpacity: 1 }} />
                  <stop offset="33%" style={{ stopColor: '#ff8a56', stopOpacity: 1 }} />
                  <stop offset="66%" style={{ stopColor: '#ff5e69', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#B16cea', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
            <g>
              <path
                fill="url(#grad1)"
                d="M430.337,231.065H81.674c-29.701,0-53.858,24.16-53.858,53.862v49.884v15.976l15.806,2.262
                c9.135,1.31,16.03,9.258,16.03,18.483c0,9.225-6.891,17.173-16.022,18.482l-15.814,2.262v15.978v49.892
                c0,29.693,24.157,53.854,53.858,53.854h348.663c29.701,0,53.862-24.161,53.862-53.854v-49.558V391l-17.571-0.822
                c-9.982-0.463-17.808-8.655-17.808-18.645c0-9.982,7.826-18.174,17.815-18.646l17.564-0.83v-17.58v-49.55
                C484.199,255.225,460.038,231.065,430.337,231.065z M465.765,334.477c-19.686,0.936-35.371,17.14-35.371,37.056
                c0,19.923,15.685,36.135,35.371,37.055v49.558c0,19.565-15.864,35.428-35.428,35.428H81.674c-19.569,0-35.432-15.863-35.432-35.428
                v-49.892c17.991-2.579,31.836-18.011,31.836-36.722c0-18.703-13.846-34.135-31.836-36.721v-49.884
                c0-19.573,15.863-35.436,35.432-35.436h348.663c19.564,0,35.428,15.863,35.428,35.436V334.477z"
              />
              <rect x="133.621" y="439.419" width="12.19" height="31.8" fill="url(#grad1)" />
              <rect x="133.621" y="383.564" width="12.19" height="31.792" fill="url(#grad1)" />
              <rect x="133.621" y="327.7" width="12.19" height="31.8" fill="url(#grad1)" />
              <rect x="133.621" y="271.846" width="12.19" height="31.799" fill="url(#grad1)" />
              <polygon fill="#FF5A5F" points="111.245,180.758 100.592,186.68 116.053,214.461 126.702,208.539" />
              <path
                fill="url(#grad1)"
                d="M497.524,179.025l-24.095-43.311l-8.558-15.36l-15.749,7.826c-8.948,4.442-19.768,1.09-24.617-7.639
                c-4.865-8.721-2.001-19.687,6.492-24.95l14.952-9.266l-8.558-15.368l-24.088-43.294C398.863,1.714,366.006-7.658,340.047,6.79
                L35.374,176.299c-25.955,14.44-35.318,47.305-20.878,73.256l0.875,1.578c3.27-6.394,7.43-12.243,12.324-17.409
                c-4.803-15.643,1.762-33.044,16.636-41.326l304.681-169.51c17.1-9.518,38.674-3.368,48.192,13.732l24.088,43.302
                c-16.751,10.38-22.575,32.182-12.895,49.582c9.681,17.401,31.271,23.942,48.925,15.172l24.095,43.312
                c7.273,13.056,5.337,28.692-3.571,39.601c4.776,3.961,8.989,8.558,12.65,13.569C505.4,224.524,508.979,199.615,497.524,179.025z"
              />
              <text
                x="55%"
                y="76.5%"
                textAnchor="middle"
                fontSize="48"
                fill="white"
                fontFamily="Arial, Helvetica, sans-serif"
                fontWeight="bold"
              >
                Cine<tspan fill="url(#grad1)">Vie</tspan>
              </text>
              <text
                x="55%"
                y="35%"
                textAnchor="middle"
                fontSize="32"
                fill="white"
                fontFamily="Arial, Helvetica, sans-serif"
                fontWeight="bold"
              >
                Cine <tspan fill="url(#grad1)">Vie</tspan>
              </text>
              </g>
          </svg>


          
        </div>
        <p className="mb-4 text-3xl tracking-tight font-bold text-white md:text-4xl">Your purchase <br/> <span className=' text-color-1'>completed successfully!</span></p>
        <p className=" mb-4 w-full font-bold text-gray-500 md:text-sm text-base ">Tickets have been sent to your email address</p>
          <Link href="/" className="inline-flex text-white color-1 focus:ring-4 focus:outline-none font-medium rounded-lg md:text-sm text-xl px-12 py-4 text-center my-4">Done</Link>
        </div>   
    </div>
    </section>
  );
};

      