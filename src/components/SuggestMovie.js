
import movie from "@/constant/movie"
import MovieCard from "./MovieCard"


import Link from "next/link"

function Card({title, image_url, genre, runtime, year}) {
    if(image_url === undefined) image_url = ''
    return (
        <div className="md:w-[280px] w-[180px] rounded-xl md:mb-24 mb-10">
        <Link href="/booking">
            <figure><img src={image_url} alt="" className=" rounded-2xl w-full h-full cursor-pointer"/></figure>
        </Link>
        <div className="flex justify-start flex-col md:gap-y-2 text-white mt-2">
            <p className=" text-gray-500 md:text-base text-xs">{`${year} / ${genre} / ${runtime}`}</p>
            <Link href="/booking">
                <h2 className="card-title font-bold mt-2 hover:underline md:text-xl text-lg">{title}</h2>
            </Link>
        </div>
        </div>
    )
}


export default function SuggestMovie() {
    return (
        <div className="relative md:px-20 px-8 mt-20 h-[calc(70vh-80px)] md:h-[calc(110vh-80px)]">
        <div className=" w-full h-full flex flex-col justify-start items-start md:gap-x-4">
            <h1 className=" mt-10 font-bold text-3xl">You might also like</h1>
            <div className=" w-full h-full mt-10">
                <div div className="flex" style={{ overflowX: "auto", scrollbarWidth: "none" }}>
                    <div className="flex md:space-x-6 space-x-4">
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
            </div>
        </div>
    </div>
    )
}