'use client'
import useUserInfo from "@/Hooks/useUserInfo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Pencil } from 'lucide-react';

export default function AvatarSettings() {
    const userInfo = useUserInfo();    
    return (<div className=" w-full md:h-[25%]  md:pt-0 pt-8 justify-center items-center flex flex-col">
    <div className="rounded-full w-[7rem] h-[7rem] flex justify-center items-center box">
        <div className=" w-1/2 h-1/2 bg-red-950 rounded-full">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
        <div className="w-8 h-8 absolute bottom-0 color-1 cursor-pointer -right-[12px] my-4 border-2 rounded-full flex justify-center items-center">
            <Pencil className=" w-4 h-4 object-cover "/>
        </div>
        
    </div>
    <div className=" w-full justify-center items-center flex">
            <p className=" font-bold text-2xl">{userInfo?.username || ''}</p>
    </div>
    
</div>)
}