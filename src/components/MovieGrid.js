import KidMovieCard from "./KidMovieCard";
import movie from "@/constant/movie";
import { useEffect, useRef } from "react";

export default function MovieGrid() {
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
      ref={scrollContainerRef} 
      className="flex overflow-x-auto scrollbar-hide"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="flex md:space-x-4 gap-x-2">
        {movie.slice(3, 12).map((movie, index) => (
          <KidMovieCard
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
