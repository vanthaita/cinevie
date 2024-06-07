export default function BookingCast() {
    return (
        <div className="md:w-[280px] w-[180px] rounded-xl">
            <div className="w-full h-[280px] md:h-[380px] overflow-hidden rounded-2xl">
                <img src='https://cdn.myanimelist.net/images/voiceactors/1/53613.jpg' alt="" className="w-full h-full object-cover cursor-pointer"/>
            </div>
            <div className="flex justify-start flex-col text-white mt-2">
                <p className="font-bold text-xl">Kazuaki Imai</p>
                <p className="text-gray-500">Director</p>
            </div>
        </div>
    )
}
