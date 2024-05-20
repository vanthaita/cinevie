import BookingCast from "./BookingCast";
export default function BookingCastSection() {
  return (
    <div className="relative md:px-20 px-8 md:h-[calc(90vh-80px)] h-[calc(60vh-80px)]">
        <div className=" w-full h-full flex flex-col justify-start items-start gap-x-4">
            <h1 className=" mt-10 font-bold text-3xl">Cast & Crew</h1>

            <div className=" w-full h-full mt-10">
                <div div className="flex" style={{ overflowX: "auto", scrollbarWidth: "none" }}>
                    <div className="flex space-x-6">
                        <BookingCast />
                        <BookingCast />
                        <BookingCast />
                        <BookingCast />
                        <BookingCast />
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

