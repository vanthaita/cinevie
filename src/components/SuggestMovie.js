
import movie from "@/constant/movie"
import MovieCard from "./MovieCard"
export default function SuggestMovie() {
    return (
        <div className="relative px-20 mt-20" style={{ height: 'calc(110vh - 80px)'}}>
        <div className=" w-full h-full flex flex-col justify-start items-start gap-x-4">
            <h1 className=" mt-10 font-bold text-3xl">You might also like</h1>
            <div className=" w-full h-full mt-10">
                <div div className="flex" style={{ overflowX: "auto", scrollbarWidth: "none" }}>
                    <div className="flex space-x-6">
                        {movie.slice(0, 5).map((movie, index) => (
                            <MovieCard
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