export default function BookingTimeCinemas() {
    return (
        <>
        <div class="flex flex-row justify-between items-center w-full mt-8 h-full">
            <div className=" "><p class="font-medium text-2xl ">Aeon Mail</p></div>
            <div class="grid grid-cols-6 gap-4">
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
            <div className="p-2 border rounded-lg">
                <p className=" font-medium text-xl ">2D</p>
            </div>
        </div>
        
        </>
    )
}