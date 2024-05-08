export default function OrderHistory() {
    return (
        <div className=" w-full h-full flex justify-start items-center p-8 flex-col gap-y-8">
            <div className=" grid grid-cols-1 gap-8 w-full">
                <div className=" w-full flex-row flex justify-between items-center">
                    <h1 className=" font-bold text-xl">Film</h1>
                    <h1 className=" font-bold text-xl">Date</h1>
                    <h1 className=" font-bold text-xl">Price</h1>
                </div>
                <div className="border-b-2 gap-y-2 border-gray-500 flex flex-row justify-between pb-1 text-gray-300">
                    <p className=" font-normal text-lg w-[33%] flex justify-start">Avengers</p>
                    <p className=" font-normal text-lg w-[33%] flex justify-center">13 October 2023</p>
                    <p className=" font-normal text-lg w-[33%] flex justify-end">20$</p>
                </div>
                <div className="border-b-2 gap-y-2 border-gray-500 flex flex-row justify-between pb-1 text-gray-300">
                    <p className=" font-normal text-lg w-[33%] flex justify-start">The family plan</p>
                    <p className=" font-normal text-lg w-[33%] flex justify-center">02 September 2023</p>
                    <p className=" font-normal text-lg w-[33%] flex justify-end">15$</p>
                </div>
                <div className="border-b-2 gap-y-2 border-gray-500 flex flex-row justify-between pb-1 text-gray-300">
                    <p className=" font-normal text-lg w-[33%] flex justify-start">Nowhere</p>
                    <p className=" font-normal text-lg w-[33%] flex justify-center">30 July 2023</p>
                    <p className=" font-normal text-lg w-[33%] flex justify-end">30$</p>
                </div>

            </div>
        </div>
    )
}