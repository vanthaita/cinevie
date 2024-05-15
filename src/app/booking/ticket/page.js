'use client'
import React, { useState } from 'react';
import SeatBooking from '@/components/SeatBooking';
import Places from '@/components/Places';
import TicketMovie from '@/components/TicketMovive';
export default function Home() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  
  return (
    <>
      <section className="mt-10">
        <TicketMovie />
      </section>
      <section className="mt-10 flex flex-row justify-between items-center px-16 mb-20 gap-x-8">
        <SeatBooking selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />
        <Places selectedSeats={selectedSeats} />
      </section>
    </>
  );
}
