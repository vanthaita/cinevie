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
import { ChevronRightIcon } from "lucide-react";
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

      <section className="md:mx-[77px] md:px-0 px-8">
        <div className=" flex justify-between items-center mt-8 mb-16 w-full">
          <div className="flex justify-between md:items-center md:gap-x-12 md:w-[30%] w-full">
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
          <div className=" md:flex justify-end flex-row gap-x-2  hidden ">
            <DropDownButton title={"Cinema"} value={['Aeon Mail', 'Vincom']}/>
            <DropDownButton title={"Language"} value={['English', 'Vietnamese']}/>
            <DropDownButtonCalender/>
          </div>


        </div>

        <div className="grid md:grid-cols-4 md:gap-4 grid-cols-2 gap-x-4">
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
      <section className=" md:h-[100vh] h-[60vh] relative z-[1] bg-[#8B5CF6]">
        {/* Background */}
        <div className=" w-full absolute h-full z-[-1]"> 
          <div className=" h-[130px] color-2 absolute w-full -skew-y-[10deg] md:top-[calc(90vh-50vh-130px)] top-[calc(75vh-50vh-130px)]"/>
          <div className=" h-[130px] color-2 absolute w-full skew-y-[10deg] md:top-[calc(90vh-50vh-130px)] top-[calc(100vh-50vh-130px)]" />
        </div>
        {/* ----- */}
        <div className=" flex justify-start md:px-20 flex-col z-[4] px-8 ">
          <h1 className=" font-extrabold text-white text-2xl mt-8 mb-8">For kids</h1>
            <MovieGrid />
        </div>
          <div className="absolute top-[45%] right-2 transform -translate-y-1/2 p-2 rounded-full fa fa-arrow-right">
                <ChevronRightIcon className="w-12 h-12 text-white font-bold" />
          </div>
      </section>

      {/*  */}
      <section className=" relative">
        <div className=" w-full md:h-[100vh] h-[60vh]">
        <div className=" flex justify-start md:px-20 flex-col z-[4] px-8 mt-4">
          <h1 className=" font-extrabold text-white text-2xl mt-8 mb-8">Top 5 to this week</h1>
              <MovieTopCard />
          </div>
         
          <div className="absolute flex flex-row z-[9999px] md:top-[37%] top-[45%] right-2 transform -translate-y-1/2 p-2 rounded-full fa fa-arrow-right">
            <ChevronRightIcon className="w-12 h-12 text-white font-bold" />
          </div>
        </div>
        
      </section>

          <section className=" relative">
              <div className="w-full md:mb-24 mb-10 px-8 md:px-0">
                  <div className=" flex justify-start md:px-20 flex-col mt-4">
                    <h1 className=" font-extrabold text-white text-2xl mt-8 mb-8">News</h1>
                  </div>
                  <News />
                  <div className="absolute top-[55%] right-2 transform -translate-y-1/2 p-2 rounded-full fa fa-arrow-right hidden md:block">
                    <ChevronRightIcon className="w-12 h-12 text-white font-bold" />
                  </div>
              </div>
          </section>
      <section>
      </section>
    </main>
  );
}
