import NewsCard from "./NewsCard";
import New from '@/constant/News';
export default function News() {
    return (
        <div className="flex" style={{ overflowX: "auto", scrollbarWidth: "none" }}>
            <div className="flex space-x-4">
                {New.map((news, index) => (
                    <NewsCard
                        key={index + 1}
                        title={news.title}
                        image_url={news.urlToImage}
                    />
                ))}
            </div>
        </div>
    );
}
