
import ShowTimeDropDown from "./ShowtimeDropdown"
import DatePicker from "./DatePicker"
import ScheduleDrop from "./ScheduleDrop"
import BookingTimeCinemas from "./BookingTimeCinemas"
import { Armchair } from 'lucide-react';
import Link from "next/link";
export default function BookingSet() {
    return (
        <div className="relative px-20 mt-10" style={{ height: 'calc(100vh - 80px)' }}>
            <div className=" w-full h-full flex flex-col justify-center items-center gap-y-8">
                <div className=" flex flex-row gap-x-4 justify-center items-center w-full">
                    {/* Drop down */}
                    <ShowTimeDropDown title={"Cinemas"} value={['Aeon Mail', 'Vincom']}/>
                    <DatePicker/>
                    <ScheduleDrop title={"All schedule"} value={['', '']}/>
                </div>
                
                <div className="w-full h-full flex flex-col gap-y-8">
                    <div><BookingTimeCinemas /></div>
                    <div><BookingTimeCinemas /></div>
                    <div><BookingTimeCinemas /></div>
                </div>
                <div className=" w-full flex justify-center items-center flex-row">
                    <Link href="/booking/ticket">
                        <button className="text-white flex flex-row justify-center items-center  gap-x-4 font-semibold py-3 rounded-full color-1 w-[240px]">
                            <Armchair className=" w-6 h-6"/>
                            Select seat
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}