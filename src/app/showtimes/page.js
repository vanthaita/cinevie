import BoxMovie from "@/components/BoxMovie";
import MovieCard from "@/components/MovieCard";
import { ChevronDown } from "lucide-react";
import { MapPin } from 'lucide-react';
import { CalendarClock } from 'lucide-react';
import movie from "@/constant/movie";
export default function ShowTimes() {
    return (
        <section>
            <div className=" px-20 mt-10 flex flex-col w-full" style={{height: 'calc(370vh - 80px)'}}>
                <div className=" flex flex-row gap-x-2 justify-center items-center w-full">
                <div className="dropdown dropdown-bottom ">
                    <div tabIndex={0} role="button" className="btn m-1 bg-[#8B5CF6] rounded-full gap-x-8 text-white">
                        <MapPin />
                        Ho Chi Minh
                        <ChevronDown />
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                    </ul>
                </div>

                <div className="dropdown dropdown-bottom ">
                    <div tabIndex={0} role="button" className="btn m-1 bg-[#8B5CF6] rounded-full gap-x-8 text-white">
                        <CalendarClock />
                        Today, 12.23.23
                        <ChevronDown />
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                    </ul>
                </div>



                </div>
                <div className="w-full flex flex-col justify-between items-start mt-10 gap-10">
                    {movie.slice(0, 6).map((movie, index) => (
                        <BoxMovie key={index} 
                            title={movie.Title}
                            genre={movie.Genre}
                            image_url={movie.Poster}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}