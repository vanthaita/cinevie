import Link from "next/link";
import { Search } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="h-24 w-full flex items-center justify-between px-20 mx-auto text-white z-[9999] shadow-md">
      <Link href="/" className="font-extrabold text-3xl">CineVie</Link>
      <ul className="hidden md:flex gap-x-8 cursor-pointe font-medium ">
        <li className="hover:text-gray-600 cursor-pointer">Showtime</li>
        <li className="hover:text-gray-600 cursor-pointer">Cinemas</li>
        <li className="hover:text-gray-600 cursor-pointer">Promotions & Offers</li>
        <li className="hover:text-gray-600 cursor-pointer">News</li>
        <li className="hover:text-gray-600 cursor-pointer">About Us</li>
      </ul>

      <div className="flex items-center gap-4 md:gap-x-8">
        <Search className="w-8 h-8 text-gray-500 hover:text-gray-700" />

        <div>
        <select className="  text-white p-2  font-bold" >
            <option value="en" className=" text-white">EN</option>
            <option value="vi" className="text-white">VI</option>
        </select>
        </div>

        <div className="md:flex gap-x-2">
          <button className="text-white border font-semibold px-6 py-2 rounded-full hover:bg-gray-500">Log in</button>
          <button className="text-white font-semibold px-6 py-2 rounded-full bg-gradient-to-b from-orange-300 to-pink-400 hover:to-pink-300">Sign Up</button>
        </div>

      </div>
    </nav>
  );
}
