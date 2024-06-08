import Link from "next/link";

export default function BoxMovie({ title, genre, image_url, checkLast }) {
    return (
        <>
            <div className="w-full flex flex-col gap-2 md:gap-1 ">
                <div className="w-full md:h-[20rem]  flex flex-col md:flex-row justify-between items-center">
                    <div className="w-[350px] md:w-[185px] h-[450px] md:h-[250px] rounded-xl mb-4 md:mb-0 ">
                        <img src={image_url} alt="" className="rounded-2xl w-full h-full" />
                    </div>
                    <div className="w-full md:w-[62%] md:h-[250px] flex flex-col justify-start items-start md:gap-y-6 gap-y-2">
                        <div className="flex flex-col justify-start items-start">
                            <p className="font-bold text-xl">{title}</p>
                            <p className="font-normal text-sm  text-gray-500">{genre}</p>
                        </div>
                        <div className="flex flex-col md:flex-row justify-start items-start w-full mt-2 gap-y-4 gap-x-12">
                            <p className="font-bold text-xl">Aeon Mail</p>
                            <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                                <div className="border rounded-xl md:p-2 flex justify-center items-center cursor-pointer">
                                    <p className="text-xs md:text-sm">09:20 EN</p>
                                </div>
                                <div className="border rounded-xl p-2 flex justify-center items-center cursor-pointer">
                                    <p className="text-xs md:text-sm">10:10 EN</p>
                                </div>
                                <div className="border rounded-xl p-2 flex justify-center items-center cursor-pointer">
                                    <p className="text-xs md:text-sm">11:30 EN</p>
                                </div>
                                <div className="border rounded-xl p-2 flex justify-center items-center cursor-pointer">
                                    <p className="text-xs md:text-sm">11:40 EN</p>
                                </div>
                                <div className="border rounded-xl p-2 flex justify-center items-center cursor-pointer">
                                    <p className="text-xs md:text-sm">12:30 EN</p>
                                </div>
                                <div className="border rounded-xl p-2 flex justify-center items-center cursor-pointer">
                                    <p className="text-xs md:text-sm">17:30 EN</p>
                                </div>
                                <div className="border rounded-xl p-2 flex justify-center items-center cursor-pointer">
                                    <p className="text-xs md:text-sm">19:30 EN</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex flex-row justify-between items-center w-full hidden ">
                            <div className="p-2 border rounded-lg">
                                <p className=" font-medium text-xl ">2D</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-[18%] flex justify-center my-10 md:my-0 md:items-center h-full">
                        <Link href="/booking" className=" w-full flex justify-center">
                            <button className="btn text-white font-medium px-8 w-[80%] py-2 bg-gradient-to-b color-1 border-none rounded-full">Book a session</button>
                        </Link>

                    </div>
                </div>
                {!checkLast  && <div className="border-b-2 border-gray-500 w-full" />}
            </div>
        </>
    );
}
