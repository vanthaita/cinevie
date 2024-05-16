import { CircleArrowOutUpRight } from 'lucide-react';
import Link from 'next/link';

export default function NewsCard({title, image_url, url}) {
    return (
        <div className="relative w-[35rem] h-[25rem] rounded-xl overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-black/[.4]"></div>
            <img src={image_url} alt="News image" className="w-full h-full object-cover rounded-xl" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white flex justify-between z-50">
                <div className=' w-[65%]'>
                    <Link href={url}>
                        <h3 className="text-xl font-medium mb-2 cursor-pointer hover:underline">{title}</h3>
                    </Link>
                </div>
                <button className="flex items-center text-sm text-white">
                    <CircleArrowOutUpRight className="ml-1 w-8 h-8" />
                </button>
            </div>
        </div>
    );
}
