'use client'
import useUserInfo from '@/Hooks/useUserInfo';
import { useState } from 'react';

export default function ChangePassword() {
    const userInfo = useUserInfo();
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [error, setError] = useState('');

    const handleChangePassword = () => {
        const storedPassword = userInfo?.password;

        if (currentPassword === storedPassword) {
            localStorage.setItem('User-Info', newPassword);
            alert('Password changed successfully!');
        } else {
            setError('Incorrect current password. Please try again.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="p-10 rounded shadow-md w-1/2">
                <h2 className="text-2xl font-bold mb-10 text-center">Change Password</h2>
                <div className="space-y-5">
                    <div>
                        <label htmlFor="currentPassword" className="block text-lg font-medium text-gray-300">Current Password:</label>
                        <input
                            type="password"
                            id="currentPassword"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm border p-2"
                        />
                    </div>
                    <div>
                        <label htmlFor="newPassword" className="block text-lg  font-medium text-gray-300 ">New Password:</label>
                        <input
                            type="password"
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="mt-1 block w-full border-gray-300 border rounded-md shadow-sm p-2"
                        />
                    </div>
                    <div className=' w-full flex justify-center'>
                        <button onClick={handleChangePassword} className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white color-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Change Password</button>
                    </div>
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                </div>
            </div>
        </div>
    );
}
