import KidMovieCard from "./KidMovieCard";

export default function MovieGrid() {
    return (
        <div className="flex" style={{ overflowX: "auto", scrollbarWidth: "none" }}>
            <div className="flex space-x-12">
                <div className="w-64"> 
                    <KidMovieCard />
                </div> 
                <div className="w-64">
                    <KidMovieCard />
                </div> 
                <div className="w-64">
                    <KidMovieCard />
                </div> 
                <div className="w-64">
                    <KidMovieCard />
                </div>
                <div className="w-64"> 
                    <KidMovieCard />
                </div>
                <div className="w-64"> 
                    <KidMovieCard />
                </div>
                <div className="w-64"> 
                    <KidMovieCard />
                </div>
                <div className="w-64"> 
                    <KidMovieCard />
                </div>
                <div className="w-64"> 
                    <KidMovieCard />
                </div> 
            </div>
        </div>
    );
}
