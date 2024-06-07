'use client'
import { useState } from 'react';

export default function BookingTimeCinemas({ cinema, selectedCinema, selectedTime, setSelectedCinema, setSelectedTime }) {
    const times = [
        "09:20 EN",
        "10:10 EN",
        "11:30 EN",
        "11:40 EN",
        "12:30 EN",
        "17:30 EN",
        "19:30 EN"
    ];

    const handleClick = (time) => {
        if (selectedCinema === cinema && selectedTime === time) {
            setSelectedCinema(null);
            setSelectedTime(null);
        } else {
            setSelectedCinema(cinema);
            setSelectedTime(time);
        }
    };

    return (
        <div className="flex md:flex-row flex-col justify-between items-center w-full mt-8 md:h-full gap-y-4">
            <div className="w-[10%]">
                <p className="font-medium text-xl">{cinema}</p>
            </div>
            <div className="grid md:grid-cols-6 md:gap-4 gap-2 grid-cols-3 w-3/5">
                {times.map((time, index) => (
                    <div
                        key={index}
                        className={`border rounded-xl md:p-4 md:py-2 flex justify-center items-center cursor-pointer ${
                            selectedCinema === cinema && selectedTime === time ? 'bg-blue-500 text-white' : ''
                        }`}
                        onClick={() => handleClick(time)}
                    >
                        <p>{time}</p>
                    </div>
                ))}
            </div>
            <div className="p-2 border rounded-lg md:block hidden">
                <p className="font-medium text-xl">2D</p>
            </div>
        </div>
    );
}
