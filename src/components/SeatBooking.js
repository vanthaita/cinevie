'use client';
import { useState } from 'react';
import { Armchair } from 'lucide-react';

const SeatBooking = ({ selectedSeats, setSelectedSeats }) => {
  const rows = 9;
  const cols = 8;

  const toggleSeat = (row, col) => {
    const seat = `${row}-${col}`;
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const isSeatSelected = (row, col) => selectedSeats.includes(`${row}-${col}`);

  const renderSeats = () => {
    let seatElements = [];

    for (let row = 0; row < rows; row++) {
      seatElements.push(
        <div key={`row-number-start-${row}`} className="w-8 h-8 flex items-center justify-center">
          {row + 1}
        </div>
      );

      for (let col = 0; col < cols; col++) {
        if (row === 8 && (col === 0 || col === 7)) {
          seatElements.push(
            <div key={`${row}-${col}`} className="w-8 h-8"></div>
          );
        } else {
          seatElements.push(
            <div
              key={`${row}-${col}`}
              className={`rounded cursor-pointer ${
                isSeatSelected(row, col)
                  ? 'bg-[#8B5CF6]'
                  : 'hover:text-[#8B5CF8]'
              }`}
              onClick={() => toggleSeat(row, col)}
            >
              <Armchair className="w-8 h-8" />
            </div>
          );
        }
      }

      seatElements.push(
        <div key={`row-number-end-${row}`} className="w-8 h-8 flex items-center justify-center">
          {row + 1}
        </div>
      );
    }

    return seatElements;
  };

  return (
    <div className=" flex flex-col items-start gap-y-4 ">
        <div className='rounded-lg w-[480px] px-6 '>
            <div className='w-full justify-between gap-x-4 px-6 flex-row flex text-sm glass rounded-lg'>
                <div className=' flex flex-row justify-center items-center gap-x-2'>
                    <Armchair className=' w-8 h-8 text-[#8B5CF6]'/>
                    <p>Selected</p>
                </div>
                <div className=' flex flex-row justify-center items-center gap-x-2'>
                    <Armchair className=' w-8 h-8 text-white'/>
                    <p>Availiable seats</p>
                </div>
                <div className=' flex flex-row justify-center items-center gap-x-2'>
                    <Armchair className=' w-8 h-8 text-gray-400'/>
                    <p>Busy seats</p>
                </div>
            </div>
        </div>
      <div className=" grid grid-cols-10 gap-x-4 gap-y-2">
        {renderSeats()}
      </div>
    </div>
  );
};

export default SeatBooking;
