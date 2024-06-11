'use client'
import React, { useRef, useEffect } from 'react';

const ImageGallery = () => {
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
        const walk = (x - startX) * 1;
        scrollContainer.scrollLeft = scrollLeft - walk;
      };
  
      scrollContainer.addEventListener('wheel', handleWheelScroll);
      scrollContainer.addEventListener('mousedown', handleMouseDown);
      scrollContainer.addEventListener('mouseleave', handleMouseLeave);
      scrollContainer.addEventListener('mouseup', handleMouseUp);
      scrollContainer.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        scrollContainer.removeEventListener('wheel', handleWheelScroll);
        scrollContainer.removeEventListener('mousedown', handleMouseDown);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
        scrollContainer.removeEventListener('mouseup', handleMouseUp);
        scrollContainer.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);

  return (
      <div
        className="flex overflow-x-auto scrollbar-hide"
        ref={scrollContainerRef}
      >
        <div className="flex space-x-4">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="md:w-[380px] w-[360px] rounded-xl md:h-[290px] h-[270px]">
              <figure className="h-full">
                <img
                  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/4c/9a/6c/caption.jpg?w=1200&h=-1&s=1"
                  alt=""
                  className="rounded-2xl w-full h-full object-cover"
                />
              </figure>
            </div>
          ))}
        </div>
      </div>
  );
};

export default ImageGallery;
