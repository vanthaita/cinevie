import DropDownButton from "@/components/DropDownButton";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MovieCard from "@/components/MovieCard";
import MovieGrid from "@/components/MovieGrid";
import MovieTopCard from "@/components/MovieTopCard";
import News from "@/components/News";
import movie from '@/constant/movie'
export default function Home() {
  return (
    <main>
      <section>
        <Hero />
      </section>

      <section className="mx-20">
        <div className=" flex justify-between items-center mt-8 mb-16">
          <div className=" flex justify-between items-center gap-x-12 text-white">
            <p className=" text-xl font-semibold">Today</p>
            <p className=" text-xl font-semibold">Tomorrow</p>
            <p className=" text-xl font-semibold">Coming Soon</p>
          </div>

          <div className=" flex justify-between items-center gap-x-5">
            <DropDownButton title={"Cinema"}/>
            <DropDownButton title={"Language"}/>
            <DropDownButton title={"Date"}/>
          </div>


        </div>

        <div className="grid grid-cols-4 gap-2">
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
      <section>
        <div className=" w-full bg-[#B16CEA] h-[650px]">
          <div className=" flex  justify-start mx-20 flex-col">
            <h1 className=" font-extrabold text-white text-2xl mt-8 mb-8">For kids</h1>
              <MovieGrid />
            
          </div>
        </div>
      </section>


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
          <Footer />
      </section>
    </main>
  );
}
