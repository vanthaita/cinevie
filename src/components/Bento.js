import NewsCardBento from "./NewsCardBento";
import NewsCard from "./NewsCard";

export default function Bento() {
    return (
        <div className=" flex flex-row justify-start items-start w-full gap-x-4" style={{height: 'calc(70vh - 80px)'}}>
            <div className=" w-[70%] h-full rounded-2xl">
                <NewsCardBento/>
            </div>
            <div className=" w-[30%] h-full rounded-2xl flex flex-col justify-between gap-y-2">
                <div className="  h-1/2 w-full rounded-2xl">
                    <NewsCardBento/>
                </div>
                <div className="  h-1/2 w-full rounded-2xl">
                    <NewsCardBento/>
                </div>
            </div>
        </div>
    )
}