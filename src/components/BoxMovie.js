

export default function BoxMovie({title, genre, image_url}) {
    return (
        <>
        <div className=" w-full flex flex-col gap-1">
        <div className=" w-full h-[20rem] flex flex-row justify-between items-center">
                <div className="w-[185px] rounded-xl h-[250px] justify-center items-center flex">
                    <img src={image_url} alt="" className=" rounded-2xl w-full h-full"/>
                </div>
                <div className="w-[62%] h-[250px] flex flex-col justify-start items-start gap-y-4">
                    <div className=" flex flex-col justify-start items-start">
                        <p className=" font-bold text-xl ">{title}</p>
                        <p className=" font-normal text-sm text-gray-500">{genre}</p>
                    </div>
                    <div class="flex flex-row justify-between items-start w-full mt-2">
                        <p class="font-bold text-xl ">Aeon Mail</p>
                        <div class="grid grid-cols-6 gap-2">
                            <div class="border rounded-xl  p-4 py-2 flex justify-center items-center cursor-pointer">
                                <p>09:20 EN</p>
                            </div>
                            <div class="border rounded-xl  p-4 py-2 flex justify-center items-center cursor-pointer">
                                <p>10:10 EN</p>
                            </div>
                            <div class="border rounded-xl  p-4 py-2 flex justify-center items-center cursor-pointer">
                                <p>11:30 EN</p>
                            </div>
                            <div class="border rounded-xl  p-4 py-2 flex justify-center items-center cursor-pointer">
                                <p>11:40 EN</p>
                            </div>
                            <div class="border rounded-xl  p-4 py-2 flex justify-center items-center cursor-pointer">
                                <p>12:30 EN</p>
                            </div>
                            <div class="border rounded-xl  p-4 py-2 flex justify-center items-center cursor-pointer">
                                <p>17:30 EN</p>
                            </div>
                            <div class="border rounded-xl  p-4 py-2 flex justify-center items-centercursor-pointer">
                                <p>19:30 EN</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center w-full">
                        <div className="p-2 border rounded-lg">
                            <p className=" font-medium text-xl ">2D</p>
                        </div>
                    </div>
                </div>
                <div className="h-[250px] w-[18%] flex justify-end items-center mb-[3.7rem]">
                    <button className="btn text-white font-medium  px-12 bg-gradient-to-b from-orange-300 to-pink-400 hover:to-pink-300 border-none rounded-full ">Book a session</button>
                </div>
            </div>
            </div>   
            <div className="border-b-2 border-gray-500 w-full" />
        </>
        
    )
}