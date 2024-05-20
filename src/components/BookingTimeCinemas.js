export default function BookingTimeCinemas() {
    return (
        <>
        <div className="flex md:flex-row flex-col justify-between items-center md:w-full mt-8 md:h-full gap-y-4">
            <div className=" "><p className="font-medium text-2xl ">Aeon Mail</p></div>
            <div className="grid md:grid-cols-6 md:gap-4 gap-2 grid-cols-3">
                <div className="border rounded-xl  md:p-4 md:py-2 flex justify-center items-center cursor-pointer">
                    <p>09:20 EN</p>
                </div>
                <div className="border rounded-xl  p-4 py-2 flex justify-center items-center cursor-pointer">
                    <p>10:10 EN</p>
                </div>
                <div className="border rounded-xl  p-4 py-2 flex justify-center items-center cursor-pointer">
                    <p>11:30 EN</p>
                </div>
                <div className="border rounded-xl  p-4 py-2 flex justify-center items-center cursor-pointer">
                    <p>11:40 EN</p>
                </div>
                <div className="border rounded-xl  p-4 py-2 flex justify-center items-center cursor-pointer">
                    <p>12:30 EN</p>
                </div>
                <div className="border rounded-xl  p-4 py-2 flex justify-center items-center cursor-pointer">
                    <p>17:30 EN</p>
                </div>
                <div className="border rounded-xl  p-4 py-2 flex justify-center items-centercursor-pointer">
                    <p>19:30 EN</p>
                </div>
            </div>
            <div className="p-2 border rounded-lg md:block hidden">
                <p className=" font-medium text-xl ">2D</p>
            </div>
        </div>
        </>
    )
}