import { CalendarDaysIcon, Clock, MapPin } from "lucide-react";

export default function TicketMovie() {
    

    return (
        <div className="relative md:px-20 px-8">
            <div className="w-full h-full flex md:flex-row flex-col justify-start gap-x-8">
                <div className="md:h-[280px] md:w-[220px] w-full h-[380px] rounded-xl">
                    <img alt="" src="https://gcs.tripi.vn/public-tripi/tripi-feed/img/476319dPM/anh-mo-ta.png" className="w-full h-full rounded-xl" />
                </div>
                <div className="flex flex-col justify-start items-start gap-y-4">
                    <div className="flex md:flex-row flex-col justify-center md:items-end item-start gap-4 mt-4">
                        <h1 className="font-bold md:text-2xl text-2xl">Doraemon: Nobita and the Earth Symphony Orchestra</h1>
                        <div className=" flex flex-row space-x-4">
                            <p className="font-medium md:text-2xl text-xl"> | 6+ |</p>
                            <p className="font-medium md:text-2xl text-xl">2D</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center md:items-end md:gap-4 gap-2 mt-4 text-gray-300">
                        <div className="flex md:justify-center items-center flex-row md:gap-x-2 gap-x-1">
                            <MapPin className="w-6 h-6" />
                            <p>Aeon Mall</p>
                        </div>
                        <div className="flex justify-center items-center flex-row gap-x-2">
                            <CalendarDaysIcon className="w-6 h-6" />
                            <p>23 March 2024</p>
                        </div>
                        <div className="flex justify-center items-center flex-row gap-x-2">
                            <Clock className="w-6 h-6" />
                            <p>10:54-12:51</p>
                        </div>
                    </div>
                    <div className="md:flex flex-row justify-between items-center w-full mt-4 text-gray-300 hidden">
                        <div className="p-2 border rounded-lg">
                            <p className="font-medium text-xl">2D</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
