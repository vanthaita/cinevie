import Link from "next/link";
import { Search } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="h-20 w-full flex items-center justify-between px-20 mx-auto text-white z-[9999] shadow-md">
      <Link href="/" className="font-extrabold text-3xl">CineVie</Link>
      <ul className="hidden md:flex gap-x-8 cursor-pointe font-medium ">
        <Link href="/showtimes"><li className="hover:text-gray-600 cursor-pointer">Showtimes</li></Link>
        <Link href="/cinemas"><li className="hover:text-gray-600 cursor-pointer">Cinemas</li></Link>
        <Link href="/promotions-offers"><li className="hover:text-gray-600 cursor-pointer">Promotions & Offers</li></Link>
        <Link href="/news"><li className="hover:text-gray-600 cursor-pointer">News</li></Link>
        <Link href="/about-us"><li className="hover:text-gray-600 cursor-pointer">About Us</li></Link>
      </ul>

      <div className="flex items-center gap-4 md:gap-x-8">
        <Search className="w-8 h-8 text-gray-500 hover:text-gray-700" />

        <div className="border-none ">
          <select className="text-white p-2  font-bold bg-transparent border-none " >
              <option value="en" className=" text-black">EN</option>
              <option value="vi" className="text-black">VI</option>
          </select>
        </div>

        <div className="md:flex gap-x-2">
          <Link href="/login">
            <button className="text-white border font-semibold px-6 py-2 rounded-full hover:bg-gray-500">Log in</button>
          </Link>
          <Link href='/signup'>
            <button className="text-white font-semibold px-6 py-2 rounded-full bg-gradient-to-b from-orange-300 to-pink-400 hover:to-pink-300">Sign Up</button>
          </Link>

          
        </div>

      </div>
    </nav>
  );
}
