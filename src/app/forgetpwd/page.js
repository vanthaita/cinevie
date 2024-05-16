import Link from "next/link";

export default function Login() {
    return (
        <section className=" relative">
            <div className="relative bg-black flex justify-center items-center" style={{height: 'calc(100vh - 80px)'}}>
                <div className=" w-full h-full absolute" style={{height: 'calc(100vh - 96px)'}}>
                    <img src="https://cdn.galaxycine.vn/media/2023/11/22/1200_1700638319306.jpg" className=" w-full h-full"/>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-black/[.6]"></div>
                
                <div className=" h-[320px] w-[540px] rounded-[2rem] flex- flex-col justify-between items-center  bg-glass p-10 z-30">
                    <div className="  h-[15%] rounded-t-[2rem] flex flex-col items-center justify-center gap-2 mb-4">
                        <h1 className=" font-semibold text-2xl">Forget Password?</h1>
                        <p className=" text-gray-400">Please enter the email you use to sign in to cineVie</p>
                     </div>

                     <div className="  h-[45%] flex flex-col items-center justify-center w-full">
                        <div className=" flex flex-col justify-center items-center w-full">
                            <input type="email" placeholder="Enter email" className="w-full rounded-xl border shadow-md p-[0.7rem] bg-transparent placeholder-white" />
                        </div>
                     </div>

                     <div className="h-[40%] rounded-b-[2rem] flex flex-col items-center justify-center w-full">
                        <div className=" flex-col justify-between items-center w-full gap-y-4 text-black flex">
                            <div className="w-full">
                                <button className="text-white font-semibold py-3 rounded-full color-1 hover:to-pink-300 w-full">Request reset link</button>
                            </div>
                            <div className=" w-full justify-center items-center flex">
                                <p className=" text-white text-sm font-normal">Back to <Link href="/login"><span className=" cursor-pointer hover:underline text-color-1 font-bold">Log in</span></Link></p>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </section>
        
    )
}