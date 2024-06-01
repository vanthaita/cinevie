import { Inter } from "next/font/google";
import '../globals.css'
import NavbarSetting from "./NavbarSetting";
import AvatarSettings from "@/components/AvatarSettings";
const inter = Inter({ subsets: ["latin"] });
import ChangeAvatar from "@/components/ChangeAvatar";
export const metadata = {
  title: "CineVie",
};

export default function RootLayout({ children }) {
    
  return (
    <main className="  bg-black md:h-[calc(120vh-80px)]">
        <section className=" relative">
            <div className="relative  flex md:justify-center items-start flex-col md:px-20 md:h-[calc(100vh-80px)] ">
                <AvatarSettings />
                <div className=" w-full  md:h-[75%]  flex flex-col md:flex-row justify-between items-start gap-x-4">
                    <NavbarSetting />
                    <div className="md:h-[85%] md:w-[80%] w-full bg-[#111111] md:mt-8 md:border-t-[0px] border-t-[1px]  border-gray-300 md:rounded-xl ">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    </main>
  );
}
