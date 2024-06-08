'use client'
import { useState } from 'react';
import ShowTimeDropDown from "./ShowtimeDropdown";
import DatePicker from "./DatePicker";
import ScheduleDrop from "./ScheduleDrop";
import BookingTimeCinemas from "./BookingTimeCinemas";
import { Armchair } from 'lucide-react';
import Link from "next/link";

export default function BookingSet() {
    const [selectedCinema, setSelectedCinema] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    return (
        <div className="relative md:px-20 px-8 w-full h-full">
            <div className="relative w-full h-full flex flex-col justify-center items-center gap-y-8">
                <div className="relative md:flex flex-row gap-x-4 justify-center items-center w-full hidden">
                    {/* Drop down */}
                    <ShowTimeDropDown title={"Location"} value={['location 1 ', 'location 2']} />
                    <DatePicker />
                    <ScheduleDrop title={"All schedule"} value={['', '']} />
                </div>
                
                <div className="w-full h-full flex flex-col md:gap-y-8 overflow-hidden"> {/* Adjusted */}
                    <BookingTimeCinemas 
                        cinema="Aeon Mall" 
                        selectedCinema={selectedCinema} 
                        selectedTime={selectedTime} 
                        setSelectedCinema={setSelectedCinema} 
                        setSelectedTime={setSelectedTime} 
                    />
                    <BookingTimeCinemas 
                        cinema="CineVie Plaza" 
                        selectedCinema={selectedCinema} 
                        selectedTime={selectedTime} 
                        setSelectedCinema={setSelectedCinema} 
                        setSelectedTime={setSelectedTime} 
                    />
                    <BookingTimeCinemas 
                        cinema="Sunshine 60" 
                        selectedCinema={selectedCinema} 
                        selectedTime={selectedTime} 
                        setSelectedCinema={setSelectedCinema} 
                        setSelectedTime={setSelectedTime} 
                    />
                </div>

                <div className="w-full flex justify-center items-center flex-row">
                    <Link href="/booking/ticket">
                        <button className="text-white flex flex-row justify-center items-center gap-x-4 font-semibold py-3 rounded-full color-1 w-[240px]">
                            <Armchair className="w-6 h-6" />
                            Select seat
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    );
}
