'use client'

import useUserInfo from "../../Hooks/useUserInfo"

export default function Settings() {
    const userInfo = useUserInfo();
    return (
        <div className=" w-full h-full flex justify-center items-center p-8 flex-col gap-y-8">
            <div className=" grid grid-cols-2 gap-8 w-full">
                <div className=" flex flex-col border-b-2 gap-y-2 border-gray-500">
                    <h1 className=" font-bold text-xl">Name</h1>
                    <p className=" font-normal text-lg">{userInfo?.username}</p>
                </div>
                <div className=" flex flex-col border-b-2 gap-y-2 border-gray-500">
                    <h1 className=" font-bold text-xl">Surname</h1>
                    <p className=" font-normal text-lg"></p>
                </div>
                <div className=" flex flex-col border-b-2 gap-y-2 border-gray-500">
                    <h1 className=" font-bold text-xl">Email</h1>
                    <p className=" font-normal text-lg">{userInfo?.email}</p>
                </div>
                <div className=" flex flex-col border-b-2 gap-y-2 border-gray-500">
                    <h1 className=" font-bold text-xl">Phone</h1>
                    <p className=" font-normal text-lg">NULL</p>
                </div>
                <div className=" flex flex-col border-b-2 gap-y-2 border-gray-500">
                    <h1 className=" font-bold text-xl">Birtday</h1>
                    <p className=" font-normal text-lg">NULL</p>
                </div>
                <div className=" flex flex-col border-b-2 gap-y-2 border-gray-500">
                    <h1 className=" font-bold text-xl">Location</h1>
                    <p className=" font-normal text-lg">NULL</p>
                </div>
            </div>
            <button className="text-white font-semibold py-3 rounded-full color-1 w-1/2">Save Changes</button>
        </div>
    )
}