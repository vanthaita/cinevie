export default function Settings() {
    return (
        <div className=" w-full h-full flex justify-center items-center p-8 flex-col gap-y-8">
            <div className=" grid grid-cols-2 gap-8 w-full">
                <div className=" flex flex-col border-b-2 gap-y-2 border-gray-500">
                    <h1 className=" font-bold text-xl">Name</h1>
                    <p className=" font-normal text-lg">Thai</p>
                </div>
                <div className=" flex flex-col border-b-2 gap-y-2 border-gray-500">
                    <h1 className=" font-bold text-xl">Surname</h1>
                    <p className=" font-normal text-lg">Ta</p>
                </div>
                <div className=" flex flex-col border-b-2 gap-y-2 border-gray-500">
                    <h1 className=" font-bold text-xl">Email</h1>
                    <p className=" font-normal text-lg">22521377@gm.uit.edu.vn</p>
                </div>
                <div className=" flex flex-col border-b-2 gap-y-2 border-gray-500">
                    <h1 className=" font-bold text-xl">Phone</h1>
                    <p className=" font-normal text-lg">+84 123 456 789</p>
                </div>
                <div className=" flex flex-col border-b-2 gap-y-2 border-gray-500">
                    <h1 className=" font-bold text-xl">Birtday</h1>
                    <p className=" font-normal text-lg">30.08.2004</p>
                </div>
                <div className=" flex flex-col border-b-2 gap-y-2 border-gray-500">
                    <h1 className=" font-bold text-xl">Location</h1>
                    <p className=" font-normal text-lg">Thu Duc, Vietnam</p>
                </div>
            </div>
            <button className="text-white font-semibold py-3 rounded-full bg-gradient-to-b from-orange-300 to-pink-400 hover:to-pink-300 w-1/2">Save Changes</button>
        </div>
    )
}