'use client'
import Link from "next/link";
import { useEffect, useRef } from 'react';
import { ChevronRightIcon } from 'lucide-react';
export default function Hero() {
  const scrollRef = useRef(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollLeft += scrollRef.current.clientWidth;
            }
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

  return (
    <div className="relative h-[calc(60vh-80px)] md:h-[calc(100vh-80px)]" >
      <video className="absolute top-0 left-0 w-full h-full hidden md:block object-fill" src="/video.mp4" autoPlay muted loop />
        
      <div className="md:hidden w-full h-full overflow-x-auto scrollbar-hide" ref={scrollRef} style={{ whiteSpace: "nowrap" }}>
          <div className="inline-flex h-[calc(60vh-80px)] w-full">
                <img src="https://cdn.eventcinemas.com.au/cdn/resources/movies/548/images/largeposter.jpg" className="w-full h-full flex-shrink-0" />
                <img src="https://lumiere-a.akamaihd.net/v1/images/p_luca_21670_3c13c611.jpeg" className="w-full h-full flex-shrink-0" />
                <img src="https://ecdn.game4v.com/g4v-content/uploads/2023/07/07230438/Doraemon-43-1-game4v-1688745877-33.jpg" className="w-full h-full flex-shrink-0" />
          </div>
      </div>



     <div className="absolute top-0 left-0 w-full h-full bg-black/[.8] hidden md:block"></div>
    
    <div className="absolute hidden top-0 left-0 w-full h-full md:flex items-center justify-start px-20 text-white">
          <div className="flex flex-col justify-start items-start gap-5">
            <div className=" flex flex-row gap-2 ">
              <p className=" font-medium text-ms">March, 23</p>
              <p className=" font-medium text-ms">Adventure, Family, Animation</p> 
            </div>
            <div className=" flex flex-col justify-start items-start">
              <h1 className=" font-extrabold text-3xl">Doraemon: Nobita and the Earth Symphony Orchestra</h1>
             
            </div>
            <p className=" font-normal text-ms">
              Doraemon, Nobita, and their friends embark on a new adventure involving the Earth&apos; 
              <br/>mysterious symphony. Join them as they uncover secrets, face challenges, 
              <br/>and learn valuable lessons about friendship and harmony.
            </p>
            
            <div className=" flex flex-row justify-center items-center gap-5">
              <Link href="/booking">
                <button className="rounded-xl text-white font-medium  px-8 py-4 color-1">Book a session</button>
              </Link>
            </div>
            </div>
        </div>
          <div className="absolute top-[45%] right-2 transform -translate-y-1/2 p-2 rounded-full md:hidden fa fa-arrow-right">
                <ChevronRightIcon className="w-12 h-12 text-white font-bold" />
          </div>
      </div>
  );
}
