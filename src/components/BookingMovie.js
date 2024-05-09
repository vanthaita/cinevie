export default function BookingMovie() {
    return (
        <div className="relative px-20" style={{ height: 'calc(100vh - 80px)' }}>
            <div className=" w-full h-full flex flex-row justify-between items-center gap-x-4">
                <div className="h-[80%] w-[25%] rounded-xl">
                    <img alt="" src="https://play-lh.googleusercontent.com/VdKhlve-p7WMDvUv0QyHUj7nz3Pby826zTKDKf-4_YEL4qK_Tqk2fE0An4TlkNr6zYAi=w240-h480-rw" className=" w-full h-full object-cover rounded-xl"/>
                </div>
                <div className="h-[80%] w-[75%] px-4 py-8 flex flex-col gap-y-4 justify-start items-start">
                    <div className=" flex flex-row justify-center items-end gap-4">
                        <h1 className=" font-bold text-2xl">The Snowman</h1>
                        <p className="font-medium text-lg"> | 18+ |</p>
                        <p className=" font-medium text-lg">2D</p>
                    </div>
                    <div className=" flex flex-col items-start gap-y-2">
                        <p className=" text-gray-500">About</p>
                        <p className="text-gray-300">Based on the extraordinary character at the centre of Charlie and the Chocolate Factory, Roald Dahs most iconic children book and one of the best-selling childrens books of all time. Wonka tells the wondrous story of how the world greatest inventor, 
                            magician and chocolate-maker became the beloved Willy Wonka we know today.</p>
                    </div>
                    <div className=" flex flex-col items-start gap-y-4">
                        <p className=" font-bold">15 Dec 2023 | 1h57 m</p>
                        <p>Country: <span className="text-gray-300">USA, Canada. Ireland, UK, France</span></p>
                        <p>Director: <span className="text-gray-300">Paul King</span></p>
                        <p>Actors: <span className="text-gray-300">Timothee Chalemet, Olivia Colman, Hugh Grant</span></p>
                        <p>Genre: <span className="text-gray-300">Adventure, Fantastic, Comedy, Family</span></p>
                        <p>Formats: <span className="text-gray-300">En, Vi</span></p>
                        <div className=" flex flex-row justify-center items-center gap-x-2">
                            <div className=" px-2 text-black font-bold bg-yellow-400 rounded-sm">IMDB</div>
                            <p>7.5 / 10</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}