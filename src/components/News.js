import KidMovieCard from "./KidMovieCard";
import MovieCard from "./MovieCard";
import NewsCard from "./NewsCard";

export default function News() {
    return (
        <div className="flex" style={{ overflowX: "auto", scrollbarWidth: "none" }}>
            <div className="flex space-x-4">
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </div>
        </div>
    );
}
