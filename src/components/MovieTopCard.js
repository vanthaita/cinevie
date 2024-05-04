import KidMovieCard from "./KidMovieCard";
import MovieCard from "./MovieCard";
import movie from '@/constant/movie'

export default function MovieTopCard() {
    return (
        <div className="flex" style={{ overflowX: "auto", scrollbarWidth: "none" }}>
            <div className="flex space-x-12">
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
    );
}
