import Link from "next/link"

export default function KidMovieCard({title, image_url, genre, runtime, year}) {
    if(image_url === undefined) image_url = ''
    return (
        <div className="md:w-[260px] w-[220px] rounded-xl bg-glass-card p-4 bg-white">
        <Link href="/booking">
            <figure><img src={image_url} alt="" className=" rounded-2xl w-full h-full cursor-pointer"/></figure>
        </Link>
        <div className="flex justify-start flex-col gap-y-2 text-white mt-2">
            <p className=" text-gray-500 md:text-base text-xs">{`${year} / ${genre} / ${runtime}`}</p>
            <Link href="/booking">
                <h2 className="card-title font-bold mt-2 hover:underline text-xl">{title}</h2>
            </Link>
        </div>
        </div>
    )
}