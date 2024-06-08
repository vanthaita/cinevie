export default function BookingMovie() {
    return (
        <div className="relative md:px-20 px-8 w-full h-full">
            <div className="w-full h-full flex md:flex-row flex-col md:justify-between md:items-center gap-x-4 mt-10 md:mt-0">
                <div className="md:h-[80%] md:w-[25%] rounded-xl hidden md:block">
                    <img alt="" src="https://animeanime.jp/imgs/p/jtKDOVlKAvjRrNw8SXAVejagI61Nrq_oqaqr/596878.jpg" className="w-full h-full object-cover rounded-xl"/>
                </div>
                <div className="h-[80%] w-[75%] px-4 py-8 md:flex flex-col gap-y-4 justify-start items-start hidden">
                    <div className="flex md:flex-row flex-col justify-center md:items-end md:gap-4">
                        <h1 className="font-bold text-2xl">Doraemon: Nobita and the Earth Symphony Orchestra</h1>
                        <p className="font-medium text-lg"> | 6+ |</p>
                        <p className="font-medium text-lg">2D</p>
                    </div>
                    <div className="flex flex-col items-start gap-y-2">
                        <p className="text-gray-500">About</p>
                        <p className="text-gray-300">Doraemon, Nobita, and their friends embark on a new adventure involving the Earth&apos; mysterious symphony. Join them as they uncover secrets, face challenges, and learn valuable lessons about friendship and harmony.</p>
                    </div>
                    <div className="flex flex-col items-start gap-y-4">
                        <p className="font-bold">23 March 2024 | 1h47m</p>
                        <p>Country: <span className="text-gray-300">Japan</span></p>
                        <p>Director: <span className="text-gray-300">Kazuaki Imai</span></p>
                        <p>Actors: <span className="text-gray-300">Wasabi Mizuta, Megumi Oohara, Yumi Kakazu</span></p>
                        <p>Genre: <span className="text-gray-300">Adventure, Family, Animation</span></p>
                        <p>Formats: <span className="text-gray-300">JP, Sub</span></p>
                        <div className="flex flex-row justify-center items-center gap-x-2">
                            <div className="px-2 text-black font-bold bg-yellow-400 rounded-sm">IMDB</div>
                            <p>8.3 / 10</p>
                        </div>
                    </div>
                </div>

                <div className="h-1/2 w-full md:hidden flex-col gap-y-4 justify-start items-start flex">
                    <div className="flex flex-row justify-center md:items-end items-center md:gap-4 gap-x-2 w-full">
                        <h1 className="font-bold text-2xl">Doraemon: Nobita and the Earth Symphony Orchestra</h1>
                        <p className="font-medium text-lg"> | 6+ </p>
                    </div>
                    <p className="font-bold">23 March 2024 | 1h47m</p>
                    <div className="flex flex-row justify-between items-center gap-x-4 w-full">
                        <p className="font-medium text-lg">2D</p>
                        <div className="flex flex-row justify-center items-center gap-x-2">
                            <div className="px-2 text-black font-bold bg-yellow-400 rounded-sm">IMDB</div>
                            <p>8.3 / 10</p>
                        </div>
                        <p><span className="text-gray-300">Japan (sub)</span></p>
                    </div>
                    <div className="flex flex-col items-start gap-y-2">
                        <p className="text-gray-500">About</p>
                        <p className="text-gray-300">Doraemon, Nobita, and their friends embark on a new adventure involving the Earth&apos; mysterious symphony. Join them as they uncover secrets, face challenges, and learn valuable lessons about friendship and harmony.</p>
                    </div>

                    <div className="flex flex-col justify-center items-start">
                        <p className="font-semibold">Country: <span className="text-gray-300">Japan</span></p>
                        <p className="font-semibold">Director: <span className="text-gray-300">Kazuaki Imai</span></p>
                        <p className="font-semibold">Actors: <span className="text-gray-300">Wasabi Mizuta, Megumi Oohara, Yumi Kakazu</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}


