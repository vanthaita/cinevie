'use client'
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { LogOutIcon, Search, SearchIcon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useUserInfo from "@/Hooks/useUserInfo";
import MovieSearch from './MovieSearch';
import { usePathname } from "next/navigation";

export default function Navbar() {
  const userInfo = useUserInfo(); 
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isCurrentPath = (path) => pathname === path;

  return (
    <nav className="h-20 sticky top-0 left-0  bg-[#111111] w-full flex items-center justify-between px-8 md:px-20 text-white z-[9999] shadow-md">
      <div className=' flex flex-row justify-start items-center gap-x-8  w-[65%] '>
        <div className=' '>
          <Link href="/" passHref className='flex flex-row gap-x-1'>
            <svg xmlns="http://www.w3.org/2000/svg" 
              viewBox='0 0 24 24'
              fillRule='evenodd'
              clipRule='evenodd'
              className='fill-current'
              width='30'
              height='30'
            ><g data-name="36-Ticket"><path d="M27 29H5a5.006 5.006 0 0 1-5-5 1.006 1.006 0 0 1 .168-.555L2 20.7v-6.464L.105 10.447A1 1 0 0 1 0 10a5.006 5.006 0 0 1 5-5h22a5.006 5.006 0 0 1 5 5 1 1 0 0 1-.105.447L30 14.236V20.7l1.832 2.748A1.006 1.006 0 0 1 32 24a5.006 5.006 0 0 1-5 5zM2.014 24.283A3 3 0 0 0 5 27h22a3 3 0 0 0 2.986-2.717l-1.818-2.728A1.006 1.006 0 0 1 28 21v-7a1 1 0 0 1 .105-.447l1.887-3.773A3 3 0 0 0 27 7H5a3 3 0 0 0-2.992 2.78L3.9 13.553A1 1 0 0 1 4 14v7a1.006 1.006 0 0 1-.168.555z"/><circle cx="22" cy="11" r="1"/><circle cx="22" cy="15" r="1"/><circle cx="22" cy="19" r="1"/><circle cx="22" cy="23" r="1"/><path d="M10 21a1 1 0 0 1-1-1v-6a1 1 0 0 1 1.447-.895l6 3a1 1 0 0 1 0 1.79l-6 3A1 1 0 0 1 10 21zm1-5.382v2.764L13.764 17zM29 15h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2zM29 22h-3a1 1 0 0 1 0-2z"/></g></svg>

            <p className="font-bold text-3xl">Cine<span className=' font-extrabold text-color-1'>Vie</span></p>
          </Link>
        </div>
        <div className='px-10'>
          <ul className="hidden md:flex md:navbar  gap-x-8 cursor-pointer font-medium text-[16.4px]">
            <Link href="/showtimes" passHref>
             <p className={` focus:text-white underline-custom cursor-pointer ${isCurrentPath('/showtimes') ? 'text-[#8B5CF6]' : ''}`}>Showtimes</p>
            </Link>
            <Link href="/cinemas" passHref>
              <p className={`focus:outline-none focus:text-white underline-custom cursor-pointer ${isCurrentPath('/cinemas') ? 'text-[#8B5CF6]' : ''}`}>Cinemas</p>
            </Link>
            <Link href="/promotions-offers" passHref>
              <p className={`focus:outline-none focus:text-white underline-custom cursor-pointer ${isCurrentPath('/promotions-offers') ? 'text-[#8B5CF6]' : ''}`}>Promotions & Offers</p>
            </Link>
            <Link href="/news" passHref>
              <p className={`focus:outline-none focus:text-white underline-custom cursor-pointer ${isCurrentPath('/news') ? 'text-[#8B5CF6]' : ''}`}>News</p>
            </Link>
            <Link href="/about-us" passHref>
              <p className={`focus:outline-none focus:text-white underline-custom cursor-pointer ${isCurrentPath('/about-us') ? 'text-[#8B5CF6]' : ''}`}>About Us</p>
            </Link>
          </ul>
        </div>  
      </div>

      <div className="md:hidden flex justify-end items-end w-full ">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          {isOpen ? (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div className='flex w-auto flex-col px-8 md:hidden z-[9999] gap-y-4 top-20 absolute left-0 right-0 bg-white text-black p-4 shadow-md'>
          <div className="items-start gap-y-4 flex-col justify-between flex md:hidden">
            <div className="relative w-full">
              <div className='flex items-center w-full border border-gray-300 rounded-lg'>
                <input
                  type="text"
                  placeholder="Search..."
                  className="flex-1 p-2 pl-10 rounded-xl bg-white text-gray-500 focus:outline-none"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon className="w-[1.2rem] h-[1.2rem] mr-2 text-gray-500" />
                </div>
              </div>
            </div>
          </div>

          <ul className="flex w-auto flex-col gap-y-4 top-20 left-0 right-0 text-black text-xl">
            <Link href="/showtimes" passHref>
              <p className={`hover:text-gray-600 cursor-pointer ${isCurrentPath('/showtimes') ? 'text-gray-600' : ''}`}>Showtimes</p>
            </Link>
            <Link href="/cinemas" passHref>
              <p className={`hover:text-gray-600 cursor-pointer ${isCurrentPath('/cinemas') ? 'text-gray-600' : ''}`}>Cinemas</p>
            </Link>
            <Link href="/promotions-offers" passHref>
              <p className={`hover:text-gray-600 cursor-pointer ${isCurrentPath('/promotions-offers') ? 'text-gray-600' : ''}`}>Promotions & Offers</p>
            </Link>
            <Link href="/news" passHref>
              <p className={`hover:text-gray-600 cursor-pointer ${isCurrentPath('/news') ? 'text-gray-600' : ''}`}>News</p>
            </Link>
            <Link href="/about-us" passHref>
              <p className={`hover:text-gray-600 cursor-pointer ${isCurrentPath('/about-us') ? 'text-gray-600' : ''}`}>About Us</p>
            </Link>
          </ul>

          <div className=' border-t-2' />

          <div className=' flex flex-row justify-between items-center'>
            {userInfo.username !== '' ? (
              <Link href="/settings" passHref>
                <div className="flex flex-row gap-x-4 items-center w-10 h-10 rounded-full">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <p className=' font-bold text-xl'>{userInfo?.username}</p>
                </div>
              </Link>
            ) : (
              <div className="flex gap-x-2">
                <Link href="/login" passHref>
                  <p className="text-black text-xl font-semibold rounded-xl hover:bg-gray-500">Sign in</p>
                </Link>
              </div>
            )}

            <div>
              <LogOutIcon className='w-6 h-6 cursor-pointer'/>
            </div>
          </div>
        </div>
      )}

      <div className="items-center gap-4 md:gap-x-8 md:flex hidden ">
        <MovieSearch />
        {userInfo ? (
          <Link href="/settings" passHref>
            <div className="flex gap-x-2 items-center w-10 h-10 rounded-full">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </Link>
        ) : (
          <div className="md:flex gap-x-2">
            <Link href='/login' passHref>
              <button className="text-white font-semibold px-6 py-2 rounded-full color-1">Sign in</button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
