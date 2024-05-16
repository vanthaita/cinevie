import { Phone } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Youtube } from 'lucide-react';
import { Facebook } from 'lucide-react';
export default function Footer() {
  return (
    <footer className=' bg-black px-20 flex flex-col justify-center h-full w-full py-10'>
      <div className='flex flex-row flex-wrap justify-center sm:justify-start items-center gap-x-36 gap-y-12 w-full'>
        <div className='flex flex-col justify-center items-center sm:items-start flex-grow w-full md:w-auto md:flex-initial md:mr-8 gap-y-1'>
          <svg
            width='50'
            height='50'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            fillRule='evenodd'
            clipRule='evenodd'
            className='fill-current'
          >
            <path d='M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z'></path>
          </svg>
          <p className=' font-bold text-2xl text-white'>CineVie</p>
          <p className=' font-medium text-center sm:text-left text-xs text-white'>
            CineVie Ltd.
            <br />
            Providing reliable tech since 2004
          </p>
        </div>
        <div className=' flex flex-row flex-wrap gap-12 items-start justify-between sm:w-[70%]'>
          <div className='flex flex-col justify-center items-center sm:items-start flex-grow w-full gap-y-1 md:w-auto md:flex-initial md:mr-8 text-gray-500'>
            <p className='text-xl text-white font-semibold'>Meet at CineVie</p>
            <div className='flex flex-row items-center gap-2 mt-4'>
              <a className='link link-hover'>About us</a>
            </div>
            <div className='flex flex-row items-center gap-2 mt-4'>
              <a className='link link-hover'>Career</a>
            </div>
            <div className='flex flex-row items-center gap-2 mt-4'>
              <a className='link link-hover'>Concession</a>
            </div>
            <div className='flex flex-row items-center gap-2 mt-4'>
              <a className='link link-hover'>Privacy Policy</a>
            </div>
            <div className='flex flex-row items-center gap-2 mt-4'>
              <a className='link link-hover'>Terms & Condition</a>
            </div>
          </div>

          <div className='flex flex-col justify-center items-center sm:items-start gap-y-1 flex-grow w-full md:w-auto md:flex-initial md:mr-8 text-gray-500'>
            <p className='text-xl text-white font-semibold'>Contact</p>
            <div className='flex flex-row items-center gap-2 mt-4'>
              <div className='w-6 h-6 rounded-full bg-gray-500 flex justify-center items-center hover:bg-white cursor-pointer'>
                <Phone className='h-4 w-4 text-black' />
              </div>
              <a className='link link-hover whitespace-nowrap'>123 456 789</a>
            </div>
            <div className='flex flex-row items-center gap-2 mt-4'>
              <div className='w-6 h-6 rounded-full bg-gray-500 flex justify-center items-center hover:bg-white cursor-pointer'>
                <Mail className='h-4 w-4 text-black' />
              </div>
              <a className='link link-hover'>info@cinevie.com</a>
            </div>
            <div className='flex flex-row items-center gap-2 mt-4'>
              <div className='w-6 h-6 rounded-full bg-gray-500 flex justify-center items-center hover:bg-white cursor-pointer'>
                <MapPin className='h-4 w-4 text-black' />
              </div>
              <a className='link link-hover'>Ho Chi Minh </a>
            </div>
          </div>

          <div className='flex flex-col justify-center items-center sm:items-start gap-y-1 flex-grow w-full md:w-auto md:flex-initial text-gray-500'>
            <p className='text-xl text-white font-semibold'>Follow us</p>
            <div className=' flex flex-row justify-center items-center gap-4'>
              <div className='flex flex-row items-center gap-2 mt-4'>
                <div className='w-6 h-6 rounded-full bg-gray-500 flex justify-center items-center hover:bg-white cursor-pointer'>
                  <Instagram className='h-4 w-4 text-black' />
                </div>
              </div>
              <div className='flex flex-row items-center gap-2 mt-4'>
                <div className='w-6 h-6 rounded-full bg-gray-500 flex justify-center items-center hover:bg-white cursor-pointer'>
                  <Facebook className='h-4 w-4 text-black' />
                </div>
              </div>
              <div className='flex flex-row items-center gap-2 mt-4'>
                <div className='w-6 h-6 rounded-full bg-gray-500 flex justify-center items-center hover:bg-white cursor-pointer'>
                  <Youtube className='h-4 w-4 text-black' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-row flex-wrap justify-center sm:justify-between items-center gap-y-12 mt-10'>
        <div className=' lg:flex flex-row flex-wrap hidden gap-y-6 justify-center sm:justify-start items-center gap-x-10'>
          <p className='line-clamp-1 md:line-clamp-none'>@ 2024 CineVie. ALL rights reserved</p>
          <p className='cursor-pointer hover:underline'>Security</p>
          <p className='cursor-pointer hover:underline'>Sitemap</p>
        </div>
        <div className='flex flex-wrap gap-6 justify-center items-center '>
          <button className='bg-black inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-900 focus:outline-none border'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              className='w-6 h-6'
              viewBox='0 0 512 512'
            >
              <path d='M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z'></path>
            </svg>
            <span className='ml-4 flex items-start flex-col leading-none'>
              <span className='text-xs text-gray-300 mb-1'>GET IT ON</span>
              <span className='title-font font-medium'>Google Play</span>
            </span>
          </button>

          <button className='bg-black inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-900 focus:outline-none border'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              className='w-6 h-6'
              viewBox='0 0 305 305'
            >
              <path d='M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z'></path>
              <path d='M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z'></path>
            </svg>
            <span className='ml-4 flex items-start flex-col leading-none'>
              <span className='text-xs text-gray-300 mb-1'>
                Download on the
              </span>
              <span className='title-font font-medium'>App Store</span>
            </span>
          </button>
        </div>
        <p className=' text-sm md:hidden'>@2024 CineVie. ALL rights reserved</p>
      </div>
    </footer>
  );
}