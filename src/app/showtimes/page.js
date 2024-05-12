import BoxMovie from "@/components/BoxMovie";
import movie from "@/constant/movie";
import DatePicker from "@/components/DatePicker";
import ShowTimeDropDown from "@/components/ShowtimeDropdown";
export default function ShowTimes() {
    return (
        <section>
            <div className=" px-20 mt-10 flex flex-col w-full overflow-y-auto" style={{height: 'calc(370vh - 80px)'}}>
                <div className=" flex flex-row gap-x-2 justify-center items-center w-full">
                {/* Drop down */}
                <ShowTimeDropDown title={"Cinemas"} value={['Aeon Mail', 'Vincom']}/>
                <DatePicker/>
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