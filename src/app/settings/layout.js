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
    <main  style={{height: 'calc(120vh - 80px)'}} className=" bg-black">
        <section className=" relative">
            <div className="relative flex justify-center items-start flex-col px-20 " style={{height: 'calc(100vh - 80px)'}}>
                <AvatarSettings />
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
