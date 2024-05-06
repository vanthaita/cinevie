'use client'
import DropDownButton from "@/components/DropDownButton";
import Hero from "@/components/Hero";
import MovieCard from "@/components/MovieCard";
import MovieGrid from "@/components/MovieGrid";
import MovieTopCard from "@/components/MovieTopCard";
import News from "@/components/NewsDashboard";
import movie from '@/constant/movie'
import { useState } from "react";
import DropDownButtonCalender from "@/components/DropDownButtonCalender";
export default function Home() {
  const [selected, setSelected] = useState('Today');
  
  const handleSelect = (value) => {
      setSelected(value);
  };

  return (
    <main>
      <section>
        <Hero />
      </section>

      <section className="mx-[77px]">
        <div className=" flex justify-between items-center mt-8 mb-16 w-full">
        <div className="flex justify-between items-center gap-x-12 text-white">
      <p
        className={`text-xl font-medium cursor-pointer ${selected === 'Today' ? 'text-white' : 'text-gray-400'} `}
        onClick={() => handleSelect('Today')}
      >
        Today
      </p>
      <p
        className={`text-xl font-medium cursor-pointer ${selected === 'Tomorrow' ? 'text-white-500' : 'text-gray-400'}`}
        onClick={() => handleSelect('Tomorrow')}
      >
        Tomorrow
      </p>
      <p
        className={`text-xl font-medium cursor-pointer ${selected === 'Coming Soon' ? 'text-white' : 'text-gray-400'}`}
        onClick={() => handleSelect('Coming Soon')}
      >
        Coming Soon
      </p>
    </div>
          <div className=" flex justify-end flex-row gap-x-2">
            <DropDownButton title={"Cinema"} value={['Aeon Mail', 'Vincom']}/>
            <DropDownButton title={"Language"} value={['English', 'Vietnamese']}/>
            <DropDownButtonCalender/>
          </div>


        </div>

        <div className="grid grid-cols-4 gap-4">
            {movie.map((movie, index) => (
            <MovieCard
              key={index + 1}
              title={movie?.Title}
              image_url={movie?.Poster}
              genre={movie?.Genre}
              runtime={movie?.Runtime}
              year={movie?.Year}
            />
          ))}
        </div>
      </section>

      {/* For kids */}
      <section className=" h-[100vh] relative z-[1] bg-[#B16CEA]">
        {/* Background */}
        <div className=" w-full absolute h-full z-[-1]"> 
          <div className=" h-[130px] bg-gradient-to-b from-orange-300 to-pink-400 absolute w-full -skew-y-[10deg]" style={{top: 'calc(90vh -  50vh - 130px)'}}/>
          <div className=" h-[130px] bg-gradient-to-b from-orange-300 to-pink-400 absolute w-full skew-y-[10deg]" style={{top: 'calc(140vh -  50vh - 220px)'}}/>
        </div>
        {/* ----- */}
        <div className=" flex justify-start mx-20 flex-col z-[4]">
          <h1 className=" font-extrabold text-white text-2xl mt-8 mb-8">For kids</h1>
            <MovieGrid />
        </div>
      </section>

      {/*  */}
      <section>
        <div className=" w-full">
          <div className=" flex justify-start mx-20 flex-col mt-4">
            <h1 className=" font-extrabold text-white text-2xl mt-8 mb-8">Top 5 to this week</h1>
            <MovieTopCard />
          </div>
        </div>
      </section>


      <section>
        <div className="w-full mb-24">
          <div className=" flex justify-start mx-20 flex-col mt-4">
            <h1 className=" font-extrabold text-white text-2xl mt-8 mb-8">News</h1>
          </div>
          <News />
        </div>
      </section>


      <section>
      </section>
    </main>
  );
}
