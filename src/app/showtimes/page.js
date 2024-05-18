import BoxMovie from "@/components/BoxMovie";
import movie from "@/constant/movie";
import DatePicker from "@/components/DatePicker";
import ShowTimeDropDown from "@/components/ShowtimeDropdown";

export default function ShowTimes() {
    return (
        <section>
            <div className=" md:px-20 px-10 md:mt-10 mt-4">
                <div className="md:flex flex-col md:flex-row gap-2 justify-center items-center w-full hidden">
                    {/* Drop down */}
                    <ShowTimeDropDown title={"Cinemas"} value={['Aeon Mail', 'Vincom']} />
                    <DatePicker />
                </div>
                <div className=" flex justify-center flex-col items-center w-full md:hidden gap-y-4">
                    <div class="flex w-full"  style={{ overflowX: "auto", scrollbarWidth: "none" }}>
                    <div class="flex space-x-4 flex-row justify-center items-center">
                        <p class=" text-sm font-bold whitespace-nowrap max-w-xs cursor-pointer">Aeon Mail</p>
                        <p class=" text-sm font-bold whitespace-nowrap max-w-xs cursor-pointer">Aeon Mail</p>
                        <p class=" text-sm font-bold whitespace-nowrap max-w-xs cursor-pointer">Aeon Mail</p>
                        <p class=" text-sm font-bold whitespace-nowrap max-w-xs cursor-pointer">Aeon Mail</p>
                        <p class=" text-sm font-bold whitespace-nowrap max-w-xs cursor-pointer">Aeon Mail</p>
                        <p class=" text-sm font-bold whitespace-nowrap max-w-xs cursor-pointer">Aeon Mail</p>
                        <p class=" text-sm font-bold whitespace-nowrap max-w-xs cursor-pointer">Aeon Mail</p>
                        </div>
                    </div>
                    <DatePicker />
                </div>
                <div className="w-full flex flex-col justify-between items-start mt-10 gap-y-4 mb-20">
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
