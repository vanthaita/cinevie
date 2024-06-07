'use client'
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignUp() {
    const router = useRouter();
    const [checkTerms, setCheckTerms] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        // Basic validation

        if(checkTerms !== true) {
            toast.error("You must accept the terms and conditions.", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return
        }
        if (!formData.username || !formData.email || !formData.password) {
            toast.error("All fields are required.", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }

        const userInfo = {
            username: formData.username,
            email: formData.email,
            password: formData.password
        };

        await localStorage.setItem('User-Info', JSON.stringify(userInfo));
        router.push('/login');
    };
    

    return (
        <section>
            <ToastContainer />
            <div className="relative bg-black flex justify-center items-center" style={{height: 'calc(100vh - 80px)'}}>
                <div className=" w-full h-full absolute" style={{height: 'calc(100vh - 96px)'}}>
                    <img src="https://cdn.galaxycine.vn/media/2023/11/22/1200_1700638319306.jpg" className=" w-full h-full"/>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-black/[.6]"></div>
                <div className=" h-[580px] w-[540px] rounded-[2rem] flex- flex-col justify-between items-center  bg-glass p-10 ">
                    <div className="  h-[28%] rounded-t-[2rem] flex flex-col items-center justify-center">
                        <h1 className=" font-semibold text-2xl mb-4">Sign Up to CineVie</h1>
                        <div className="flex flex-row gap-x-8">
                            <div className=" w-14 h-14 rounded-full bg-white flex justify-center items-center cursor-pointer">
                                <img src="https://www.svgrepo.com/show/353817/google-icon.svg" alt="Google" className="w-8 h-8"/>
                            </div>
                            <div className=" w-14 h-14 rounded-full bg-white flex justify-center items-center cursor-pointer">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg" alt="Facebook" className="w-8 h-8"/>
                            </div>
                            <div className=" w-14 h-14 rounded-full bg-white flex justify-center items-center cursor-pointer">
                                <img src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/apple-512.png" alt="Google" className="w-8 h-8"/>
                            </div>

                            
                        </div>
                        <div className=" relative flex flex-row justify-center items-center mt-4 w-full">
                                <hr className=" absolute border w-[30%] left-0 "/>
                                <p>or sign up with email</p>
                                <hr className=" absolute border w-[30%] right-0 "/>
                        </div>
                     </div>
                     <div className="h-[43%] flex flex-col items-center justify-center w-full gap-y-2 mt-2">
                          <form className="flex flex-col justify-center items-center w-full gap-y-6">
                            <input name="username" type="email" placeholder="Enter username" className="w-full bg-transparent rounded-xl border shadow-md p-[0.7rem] placeholder-white" onChange={handleInputChange}/>
                            <input name="email" type="text" placeholder="Enter email" className="w-full bg-transparent rounded-xl border shadow-md p-[0.7rem] placeholder-white" onChange={handleInputChange}/>
                            <input name="password" type="password" placeholder="Enter password" className="w-full bg-transparent rounded-xl border shadow-md p-[0.7rem] placeholder-white" onChange={handleInputChange}/>
                          </form>
                     </div>
                     
                     
                     <div className="h-[32%] rounded-b-[2rem] flex flex-col items-center justify-center w-full mt-2">
                        <div className=" flex-col justify-between items-center w-full gap-y-4  flex">
                            <div className="w-full relative pb-[1.5em]">  
                                <div className="w-full absolute flex flex-row items-center justify-start gap-x-2 left-0">
                                    <input type="checkbox" className="checkbox rounded-full border-white w-4 h-4 " onClick={() => {
                                        setCheckTerms(!checkTerms);
                                    }}/>
                                    <p className=" font-normal text-md text-white"><span className=" text-gray-500">Accept</span> Terms & Conditions</p>
                                </div>
                            </div>

                            <div className="w-full">
                                <button className="text-white font-semibold py-3 rounded-full color-1 w-full" onClick={handleSignUp}>Sign Up</button>
                            </div>
                            <div className=" w-full justify-center items-center flex mt-2">
                                <p className=" text-white text-sm font-normal">Already have an account? <Link href="/login"><span className=" cursor-pointer hover:underline text-color-1 font-bold">Sign In</span></Link></p>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </section>
    )
}