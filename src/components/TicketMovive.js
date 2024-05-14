import { CalendarDaysIcon, Clock, MapPin } from "lucide-react";





export default function TicketMovie() {
    return (
        <div className="relative px-20">
            <div className=" w-full h-full flex flex-row justify-start gap-x-8">
                <div className="h-[280px] w-[220px] rounded-xl">
                    <img alt="" src="https://play-lh.googleusercontent.com/VdKhlve-p7WMDvUv0QyHUj7nz3Pby826zTKDKf-4_YEL4qK_Tqk2fE0An4TlkNr6zYAi=w240-h480-rw" className=" w-full h-full rounded-xl"/>
                </div>
                <div className="flex flex-col justify-start items-start gap-y-4">
                    <div className=" flex flex-row justify-center items-end gap-4 mt-4">
                        <h1 className=" font-bold text-6xl">The Snowman</h1>
                        <p className="font-medium text-4xl"> | 18+ |</p>
                        <p className=" font-medium text-4xl">2D</p>
                    </div>
                    <div className=" flex flex-row justify-center items-end gap-4 mt-4 text-gray-300">
                        <div className=" flex justify-center items-center flex-row gap-x-2">
                            <MapPin className=" w-6 h-6"/>
                            <p>Aoen Mail</p>
                        </div>

                        <div className=" flex justify-center items-center flex-row gap-x-2">
                            <CalendarDaysIcon className="w-6 h-6"/>
                            <p>Today. 13.5.2024</p>
                        </div>

                        <div className=" flex justify-center items-center flex-row gap-x-2">
                            <Clock className="w-6 h-6"/>
                            <p>10:54-12:51</p>
                        </div>
                   </div>
                   <div className="flex flex-row justify-between items-center w-full mt-4 text-gray-300">
                        <div className="p-2 border rounded-lg">
                            <p className=" font-medium text-xl ">2D</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}