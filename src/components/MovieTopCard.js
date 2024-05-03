import KidMovieCard from "./KidMovieCard";
import MovieCard from "./MovieCard";

export default function MovieTopCard() {
    return (
        <div className="flex" style={{ overflowX: "auto", scrollbarWidth: "none" }}>
            <div className="flex space-x-12">
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
        </div>
    );
}
