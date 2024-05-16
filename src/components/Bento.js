import NewsCardBento from "./NewsCardBento";
import NewsCard from "./NewsCard";

export default function Bento() {
    return (
        <div className=" flex flex-row justify-start items-start w-full gap-x-4" style={{height: 'calc(70vh - 80px)'}}>
            <div className=" w-[70%] h-full rounded-2xl">
                <NewsCardBento title="MeTV Toons Brings Warner Bros. Classic Cartoons Together In National Weigel Broadcasting Network - Deadline" image_url="https://deadline.com/wp-content/uploads/2023/11/Wile-E.-Coyote-1-e1702010387762.jpg?w=1024" url="https://chicago.suntimes.com/movies-and-tv/2024/05/02/unfrosted-review-netflix-jerry-seinfeld-pop-tart-movie"/>
            </div>
            <div className=" w-[30%] h-full rounded-2xl flex flex-col justify-between gap-y-2">
                <div className="  h-1/2 w-full rounded-2xl">
                    <NewsCardBento title="The Rolling Stones..." image_url="https://bloximages.newyork1.vip.townnews.com/nola.com/content/tncms/assets/v3/editorial/3/0d/30d08df2-a106-5755-a571-c4c8b01ed231/663426c86f818.image.jpg?crop=1718%2C902%2C0%2C152&resize=1200%2C630&order=crop%2Cresize" url="https://chicago.suntimes.com/movies-and-tv/2024/05/02/unfrosted-review-netflix-jerry-seinfeld-pop-tart-movie"/>
                </div>
                <div className="  h-1/2 w-full rounded-2xl">
                    <NewsCardBento title="Yes, that's Jennifer..." image_url="https://ew.com/thmb/zot1sv4--mCUB0608CoeJV9-WDI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/JENNIFER-LOVE-HEWITT-911-050224-1-55f7766a04a4452980c7d6d04ad7d1c1.jpg" url="https://chicago.suntimes.com/movies-and-tv/2024/05/02/unfrosted-review-netflix-jerry-seinfeld-pop-tart-movie" />
                </div>
            </div>
        </div>
    )
}