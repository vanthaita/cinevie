export default function BookingMovie() {
    return (
        <div className="relative md:px-20 px-8 h-[calc(60vh-80px)] md:h-[calc(100vh-80px)]">
                <div className=" w-full h-full flex md:flex-row flex-col md:justify-between md:items-center gap-x-4 mt-10 md:mt-0">
                <div className="md:h-[80%] md:w-[25%] rounded-xl hidden md:block">
                    <img alt="" src="https://animeanime.jp/imgs/p/jtKDOVlKAvjRrNw8SXAVejagI61Nrq_oqaqr/596878.jpg" className=" w-full h-full object-cover rounded-xl"/>
                </div>
                <div className="h-[80%] w-[75%] px-4 py-8 md:flex flex-col gap-y-4 justify-start items-start hidden ">
                    <div className=" flex md:flex-row flex-col justify-center md:items-end md:gap-4">
                        <h1 className=" font-bold text-2xl">Nobita and the Earth Symphony Orchestra</h1>
                        <p className="font-medium text-lg"> | 16+ |</p>
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

                <div className="h-1/2 w-full md:hidden flex-col gap-y-4 justify-start items-start flex">
                    <div className=" flex flex-row justify-center md:items-end items-center md:gap-4 gap-x-2w-full">
                        <h1 className=" font-bold text-2xl">Nobita and the Earth Symphony Orchestra</h1>
                        <p className="font-medium text-lg"> 12+ </p>

                    </div>
                    <p className=" font-bold">15 Dec 2023 | 1h57 m</p>
                    <div className=" flex flex-row justify-between items-center gap-x-4 w-full">
                        <p className=" font-medium text-lg">2D</p>
                        <div className=" flex flex-row justify-center items-center gap-x-2">
                                <div className=" px-2 text-black font-bold bg-yellow-400 rounded-sm">IMDB</div>
                                <p>9.5 / 10</p>
                        </div>
                        <p><span className="text-gray-300">USA, France (sub)</span></p>
                    </div>
                    <div className=" flex flex-col items-start gap-y-2">
                        <p className=" text-gray-500">About</p>
                        <p className="text-gray-300"> Based on the extraordinary character at the centre of Charlie and the Chocolate Factory, Roald Dahs most iconic children book and one of the best-selling childrens books of all time. Wonka tells the wondrous story of how the world greatest inventor, 
                            magician and chocolate-maker became the beloved Willy Wonka we know today.</p>
                    </div>

                    <div className="flex flex-col justify-center items-start" >
                        <p className="font-semibold">Country: <span className="text-gray-300">USA, Canada. Ireland, UK, France</span></p>
                        <p className="font-semibold">Director: <span className="text-gray-300">Paul King</span></p>
                        <p className="font-semibold">Actors: <span className="text-gray-300">Timothee Chalemet, Olivia Colman, Hugh Grant</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}