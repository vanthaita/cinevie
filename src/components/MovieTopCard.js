import KidMovieCard from "./KidMovieCard";
import MovieCard from "./MovieCard";
import movie from '@/constant/movie'
import Link from "next/link"

function Card({title, image_url, genre, runtime, year}) {
    if(image_url === undefined) image_url = ''
    return (
        <div className="md:w-[290px] w-[220px] rounded-xl p-4">
        <Link href="/booking">
            <figure><img src={image_url} alt="" className=" rounded-2xl w-full h-full cursor-pointer"/></figure>
        </Link>
        <div className="flex justify-start flex-col gap-y-2 text-white mt-2">
            <p className=" text-gray-500 text-base">{`${year} / ${genre} / ${runtime}`}</p>
            <Link href="/booking">
                <h2 className="card-title font-bold mt-2 hover:underline text-xl">{title}</h2>
            </Link>
        </div>
        </div>
    )
}
export default function MovieTopCard() {
    return (
        <div className="flex" style={{ overflowX: "auto", scrollbarWidth: "none" }}>
            <div className="flex md:space-x-4 ">
            {movie.slice(0, 5).map((movie, index) => (
                <Card
                    key={index + 1}
                    title={movie?.Title}
                    image_url={movie?.Poster}
                    genre={movie?.Genre}
                    runtime={movie?.Runtime}
                    year={movie?.Year}
                />))}
                
            </div>
        </div>
    );
}
