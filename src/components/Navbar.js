import Link from "next/link";
import { Search } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="h-24 w-full flex items-center justify-between px-20 mx-auto text-white z-[9999] shadow-md">
      <Link href="/" className="font-extrabold text-3xl">CineVie</Link>
      <ul className="hidden md:flex gap-x-8 cursor-pointe font-medium">
        <li className="hover:text-gray-600">Showtime</li>
        <li className="hover:text-gray-600">Cinemas</li>
        <li className="hover:text-gray-600">Promotions & Offers</li>
        <li className="hover:text-gray-600">News</li>
        <li className="hover:text-gray-600">About Us</li>
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
          <button className="btn text-white">Sign Up</button>
          <button className="btn text-white">Login</button>
        </div>

      </div>
    </nav>
  );
}
