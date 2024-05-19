'use client'
import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import New from '@/constant/News';
import PaginationNews from "./Pagination";

export default function News() {
    const [newsNumberedList, setNewsNumberedList] = useState(8);
    const [start, setStart] = useState(0);

    useEffect(() => {
        const updateNewsNumberedList = () => {
            setNewsNumberedList(window.innerWidth < 768 ? 4 : 8);
        };

        updateNewsNumberedList(); 
        window.addEventListener('resize', updateNewsNumberedList);

        return () => {
            window.removeEventListener('resize', updateNewsNumberedList);
        };
    }, []);

    return (
        <div className={`flex gap-y-8 ${newsNumberedList === 4 && 'flex-col'}`} style={{ overflowX: "auto", scrollbarWidth: "none" }}>
            <div className="flex md:space-x-4 md:flex-row flex-col space-y-4">
                {New.slice(start, start + newsNumberedList).map((news, index) => (
                    <NewsCard
                        key={index + 1}
                        title={news.title}
                        image_url={news.urlToImage}
                        url={news.url}
                    />
                ))}
            </div>
            
            {newsNumberedList === 4 && <PaginationNews start={start} setStart={setStart} totalPages={Math.ceil(New.length / 4)} endNum={4} />}
        </div>
    );
}
