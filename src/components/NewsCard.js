import { CircleArrowOutUpRight } from 'lucide-react';

export default function NewsCard() {
    return (
        <div className="relative w-[35rem] h-[25rem] rounded-xl overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-black/[.4]"></div>
            <img src="https://imagev3.vietnamplus.vn/w1000/Uploaded/2024/xpcwvovt/2023_08_07/oppenheimerposter.jpg.webp" alt="News image" className="w-full h-full object-cover rounded-xl" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white flex justify-between z-50">
                <div className=' w-[65%]'>
                    <h3 className="text-3xl font-medium mb-2">Oppenheimer Wins Golden Globe</h3>
                </div>
                <button className="flex items-center text-sm text-white">
                    <CircleArrowOutUpRight className="ml-1 w-8 h-8" />
                </button>
            </div>
        </div>
    );
}
