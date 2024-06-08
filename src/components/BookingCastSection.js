'use client'
import React, { useRef, useEffect } from "react";
import BookingCast from "@/components/BookingCast";

export default function BookingCastSection() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleWheelScroll = (event) => {
      event.preventDefault();
      scrollContainer.scrollLeft += event.deltaY;
    };

    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (event) => {
      isDown = true;
      scrollContainer.classList.add('active');
      startX = event.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      scrollContainer.classList.remove('active');
    };

    const handleMouseUp = () => {
      isDown = false;
      scrollContainer.classList.remove('active');
    };

    const handleMouseMove = (event) => {
      if (!isDown) return;
      event.preventDefault();
      const x = event.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 3; // scroll-fast
      scrollContainer.scrollLeft = scrollLeft - walk;
    };

    let startTouchX;
    let startScrollLeft;

    const handleTouchStart = (event) => {
      startTouchX = event.touches[0].pageX;
      startScrollLeft = scrollContainer.scrollLeft;
    };

    const handleTouchMove = (event) => {
      const x = event.touches[0].pageX;
      const walk = (x - startTouchX) * 1; // scroll-fast
      scrollContainer.scrollLeft = startScrollLeft - walk;
    };

    scrollContainer.addEventListener('wheel', handleWheelScroll);
    scrollContainer.addEventListener('mousedown', handleMouseDown);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    scrollContainer.addEventListener('mouseup', handleMouseUp);
    scrollContainer.addEventListener('mousemove', handleMouseMove);

    scrollContainer.addEventListener('touchstart', handleTouchStart);
    scrollContainer.addEventListener('touchmove', handleTouchMove);

    return () => {
      scrollContainer.removeEventListener('wheel', handleWheelScroll);
      scrollContainer.removeEventListener('mousedown', handleMouseDown);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      scrollContainer.removeEventListener('mouseup', handleMouseUp);
      scrollContainer.removeEventListener('mousemove', handleMouseMove);

      scrollContainer.removeEventListener('touchstart', handleTouchStart);
      scrollContainer.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div className="relative md:px-20 px-8">
      <div className="w-full h-full flex flex-col justify-start items-start gap-x-4">
        <h1 className="mt-10 font-bold text-3xl">Cast & Crew</h1>

        <div className="w-full mt-10">
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto flex scrollbar-hide"
            style={{ maxHeight: "calc(90vh - 100px)" }}
          >
            <div className="flex flex-nowrap space-x-6">
              <BookingCast />
              <BookingCast />
              <BookingCast />
              <BookingCast />
              <BookingCast />
              <BookingCast />
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
  );
}
