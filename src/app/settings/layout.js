import { Inter } from "next/font/google";
import '../globals.css'
import NavbarSetting from "./NavbarSetting";
import Navbar from "@/components/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Pencil } from 'lucide-react';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CineVie",
};

export default function RootLayout({ children }) {
  return (
    <main  style={{height: 'calc(120vh - 80px)'}} className=" bg-black">
        <section className=" relative">
            <div className="relative flex justify-center items-start flex-col px-20 " style={{height: 'calc(100vh - 80px)'}}>
                <div className=" w-full h-[25%] justify-center items-center flex flex-col">
                    <div className="rounded-full w-[7rem] h-[7rem] flex justify-center items-center border-[3px] relative">
                        <div className=" w-1/2 h-1/2 bg-red-950 rounded-full">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="w-8 h-8 absolute bottom-0 -right-[12px] my-4 border-2 rounded-full flex justify-center items-center">
                            <Pencil className=" w-4 h-4 object-cover "/>
                        </div>
                        
                    </div>
                    <div className=" w-full justify-center items-center flex">
                            <p className=" font-bold text-2xl">Ta Thai</p>
                    </div>
                </div>
                <div className=" w-full h-[75%] flex justify-between items-start gap-x-4">
                    <NavbarSetting />
                    <div className="h-[85%] w-[80%] bg-[#111111] mt-8 rounded-xl">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    </main>
  );
}
