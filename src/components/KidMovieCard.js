export default function KidMovieCard() {
    return (
        <div className="w-[280px] rounded-xl glass p-4">
        <figure><img src="https://www.movieposters.com/cdn/shop/files/darkknight.building.24x36_20e90057-f673-4cc3-9ce7-7b0d3eeb7d83_480x.progressive.jpg?v=1707491191" alt="Shoes" className=" rounded-2xl"/></figure>
        <div className="flex justify-start flex-col gap-y-2 text-white mt-2">
            <p className="text-gray-500">2023 / Action / 1h40m</p>
            <h2 className="card-title font-bold">Batman</h2>
        </div>
        </div>
    )
}