'use client'
import React, { useState } from 'react';
import SeatBooking from '@/components/SeatBooking';
import Places from '@/components/Places';
import TicketMovie from '@/components/TicketMovive';
export default function Home() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  
  return (
    <>
      <section className="md:mt-10 mt-4">
        <TicketMovie />
      </section>
      <section className=" px-8 mt-10 flex md:flex-row flex-col justify-between items-center md:px-16 mb-20 md:gap-x-8 gap-y-8">
        <SeatBooking selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />
        <Places selectedSeats={selectedSeats} />
      </section>
    </>
  );
}
