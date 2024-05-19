import KidMovieCard from "./KidMovieCard";
import movie from "@/constant/movie";
export default function MovieGrid() {
    return (
        <div className="flex" style={{ overflowX: "auto", scrollbarWidth: "none" }}>
            <div className="flex md:space-x-8 space-x-2 ">
            {movie.slice(3, 12).map((movie, index) => (
                    <KidMovieCard
                    key={index + 1}
                    title={movie?.Title}
                    image_url={movie?.Poster}
                    genre={movie?.Genre}
                    runtime={movie?.Runtime}
                    year={movie?.Year}
                    />
                ))}
            </div>
        </div>
    );
}
