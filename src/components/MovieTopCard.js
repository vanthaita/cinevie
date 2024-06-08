import { useEffect, useRef } from "react";
import Link from "next/link";
import movie from '@/constant/movie';

function Card({ title, image_url, genre, runtime, year }) {
  if (image_url === undefined) image_url = '';
  return (
    <div className="md:w-[290px] w-[220px] rounded-xl p-4">
      <Link href="/booking">
        <figure>
          <img src={image_url} alt="" className="rounded-2xl w-full h-full cursor-pointer" />
        </figure>
      </Link>
      <div className="flex flex-col justify-start gap-y-2 text-white mt-2">
        <p className="text-gray-500 text-base">{`${year} / ${genre} / ${runtime}`}</p>
        <Link href="/booking">
          <h2 className="card-title font-bold mt-2 hover:underline text-xl">{title}</h2>
        </Link>
      </div>
    </div>
  );
}

export default function MovieTopCard() {
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
    <div 
      ref={scrollContainerRef} 
      className="flex overflow-x-auto scrollbar-hide"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="flex md:space-x-2 gap-x-2">
        {movie.slice(0, 5).map((movie, index) => (
          <Card
            key={index}
            title={movie.Title}
            image_url={movie.Poster}
            genre={movie.Genre}
            runtime={movie.Runtime}
            year={movie.Year}
          />
        ))}
      </div>
    </div>
  );
}
