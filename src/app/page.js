'use client'
import { useState } from "react";
import DropDownButton from "@/components/DropDownButton";
import Hero from "@/components/Hero";
import MovieCard from "@/components/MovieCard";
import MovieGrid from "@/components/MovieGrid";
import MovieTopCard from "@/components/MovieTopCard";
import News from "@/components/NewsDashboard";
import movie from '@/constant/movie';
import DropDownButtonCalender from "@/components/DropDownButtonCalender";

export default function Home() {
  const [selected, setSelected] = useState('Today');
  const handleSelect = (value) => {
    setSelected(value);
  };

  return (
    <main>
      <section className="h-[calc(60vh-80px)] md:h-[calc(100vh-80px)]">
        <Hero />
      </section>

      <section className="md:mx-[77px] md:px-0 px-8">
        <div className="flex justify-between items-center mt-8 mb-16 w-full">
          <div className="flex justify-between md:items-center md:gap-x-12 md:w-[30%] w-full">
            {['Today', 'Tomorrow', 'Coming Soon'].map((day) => (
              <p
                key={day}
                className={`text-xl font-medium cursor-pointer ${selected === day ? 'text-white' : 'text-gray-400'}`}
                onClick={() => handleSelect(day)}
              >
                {day}
              </p>
            ))}
          </div>
          <div className="hidden md:flex justify-end gap-x-2">
            <DropDownButton title="Cinema" value={['Aeon Mail', 'Vincom']} />
            <DropDownButton title="Language" value={['English', 'Vietnamese']} />
            <DropDownButtonCalender />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movie.map((movie, index) => (
            <MovieCard
              key={index}
              title={movie.Title}
              image_url={movie.Poster}
              genre={movie.Genre}
              runtime={movie.Runtime}
              year={movie.Year}
            />
          ))}
        </div>
      </section>

      <section className="relative z-[1] bg-[#B16CEA] md:h-[105vh] h-[65vh]">
        <div className="w-full absolute h-full z-[-1]">
          <div className="h-[130px] color-2 absolute w-full -skew-y-[10deg] md:top-[calc(90vh-50vh-130px)] top-[calc(75vh-50vh-130px)]" />
          <div className="h-[130px] color-2 absolute w-full skew-y-[10deg] md:top-[calc(130vh-50vh-130px)] top-[calc(100vh-50vh-130px)]" />
        </div>
        <div className="flex flex-col justify-center w-full h-full md:px-20 px-8 z-[4] md:gap-y-4">
          <h1 className="text-2xl font-extrabold text-white">For kids</h1>
          <MovieGrid />
        </div>
      </section>

      <section className="bg-black md:h-[100vh] h-[60vh]">
        <div className="w-full h-full">
          <div className="flex flex-col justify-center w-full h-full md:px-20 px-8">
            <h1 className="text-2xl font-extrabold text-white mt-8 mb-8">Top 5 this week</h1>
            <MovieTopCard />
          </div>
        </div>
      </section>

      <section className="relative bg-[#111111]">
        <div className="w-full px-8 md:px-0 md:mb-24 mb-10">
          <div className="flex flex-col justify-start md:px-20 mt-4">
            <h1 className="text-2xl font-extrabold text-white mt-8 mb-8">News</h1>
          </div>
          <News />
        </div>
      </section>
    </main>
  );
}
