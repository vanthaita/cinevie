import Link from "next/link"

export default function MovieCard({title, image_url, genre, runtime, year}) {
    
    if(image_url === undefined) image_url = ''
    return (
        <div className="md:w-[280px] rounded-xl md:mb-24 mb-10">
        <Link href="/booking">
            <figure><img src={image_url} alt="" className=" rounded-2xl w-full h-full cursor-pointer"/></figure>
        </Link>
        <div className="flex justify-start flex-col md:gap-y-2 text-white mt-2">
            <p className=" text-gray-500 md:text-base text-xs">{`${year} / ${genre} / ${runtime}`}</p>
            <Link href="/booking">
                <h2 className="card-title font-bold mt-2 hover:underline md:text-xl text-lg">{title}</h2>
            </Link>
        </div>
        </div>
    )
}

