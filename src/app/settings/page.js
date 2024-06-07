'use client'

import useUserInfo from "../../Hooks/useUserInfo";
import { useState } from "react";

export default function Settings() {
    const userInfo = useUserInfo();

    const [username, setUsername] = useState(userInfo?.username || "Cinevie");
    const [surname, setSurname] = useState(userInfo?.surname || "Cinevie");
    const [email, setEmail] = useState(userInfo?.email || "default@gmail.com");
    const [phone, setPhone] = useState(userInfo?.phone || "123 456 789");
    const [birthday, setBirthday] = useState(userInfo?.birthday || "30/08/2004");
    const [location, setLocation] = useState(userInfo?.location || "US");

    const handleChange = (setter) => (event) => {
      setter(event.target.value);
    };

    return (
        <div className="w-full h-full flex justify-center items-center md:p-8 p-4 flex-col gap-y-8 md:mb-0  mb-8">
            <div className="md:grid md:grid-cols-2 gap-8 w-full flex flex-col justify-between items-start">
                <div className="flex flex-col gap-y-2 w-full">
                    <h1 className="font-bold text-xl">Name</h1>
                    <input
                        className="border rounded-lg p-2 border-gray-500"
                        value={username}
                        onChange={handleChange(setUsername)}
                    />
                </div>
                <div className="flex flex-col gap-y-2 w-full">
                    <h1 className="font-bold text-xl">Surname</h1>
                    <input
                        className="border rounded-lg p-2 border-gray-500"
                        value={surname}
                        onChange={handleChange(setSurname)}
                    />
                </div>
                <div className="flex flex-col gap-y-2 w-full">
                    <h1 className="font-bold text-xl">Email</h1>
                    <input
                        className="border rounded-lg p-2 border-gray-500"
                        value={email}
                        onChange={handleChange(setEmail)}
                    />
                </div>
                <div className="flex flex-col gap-y-2 w-full">
                    <h1 className="font-bold text-xl">Phone</h1>
                    <input
                        className="border rounded-lg p-2 border-gray-500"
                        value={phone}
                        onChange={handleChange(setPhone)}
                    />
                </div>
                <div className="flex flex-col gap-y-2 w-full">
                    <h1 className="font-bold text-xl">Birthday</h1>
                    <input
                        className="border rounded-lg p-2 border-gray-500"
                        value={birthday}
                        onChange={handleChange(setBirthday)}
                    />
                </div>
                <div className="flex flex-col gap-y-2 w-full">
                    <h1 className="font-bold text-xl">Location</h1>
                    <input
                        className="border rounded-lg p-2 border-gray-500"
                        value={location}
                        onChange={handleChange(setLocation)}
                    />
                </div>
            </div>
            <button className="text-white font-semibold py-3 rounded-full color-1 w-1/2">Save Changes</button>
        </div>
    );
}
