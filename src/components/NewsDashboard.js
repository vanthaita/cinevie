import { useState, useEffect, useRef } from "react";
import NewsCard from "./NewsCard";
import New from '@/constant/News';
import PaginationNews from "./Pagination";

export default function News() {
    const [newsNumberedList, setNewsNumberedList] = useState(8);
    const [start, setStart] = useState(0);
    const scrollContainerRef = useRef(null);

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

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;

        const handleWheelScroll = (event) => {
            event.preventDefault();
            scrollContainer.scrollLeft += event.deltaY;
        };

        let isDown = false;
        let startX;
        let scrollLeft;

        const handleMouseDown = (event) => {
            isDown = true;
            startX = event.pageX - scrollContainer.offsetLeft;
            scrollLeft = scrollContainer.scrollLeft;
        };

        const handleMouseLeave = () => {
            isDown = false;
        };

        const handleMouseUp = () => {
            isDown = false;
        };

        const handleMouseMove = (event) => {
            if (!isDown) return;
            event.preventDefault();
            const x = event.pageX - scrollContainer.offsetLeft;
            const walk = (x - startX) * 1; 
            scrollContainer.scrollLeft = scrollLeft - walk;
        };

        let startTouchX;
        let startScrollLeft;

        const handleTouchStart = (event) => {
            startTouchX = event.touches[0].pageX;
            startScrollLeft = scrollContainer.scrollLeft;
        };

        const handleTouchMove = (event) => {
            const x = event.touches[0].pageX;
            const walk = (x - startTouchX) * 1 
            scrollContainer.scrollLeft = startScrollLeft - walk;
        };

        scrollContainer.addEventListener('wheel', handleWheelScroll);
        scrollContainer.addEventListener('mousedown', handleMouseDown);
        scrollContainer.addEventListener('mouseleave', handleMouseLeave);
        scrollContainer.addEventListener('mouseup', handleMouseUp);
        scrollContainer.addEventListener('mousemove', handleMouseMove);

        scrollContainer.addEventListener('touchstart', handleTouchStart);
        scrollContainer.addEventListener('touchmove', handleTouchMove);

        return () => {
            scrollContainer.removeEventListener('wheel', handleWheelScroll);
            scrollContainer.removeEventListener('mousedown', handleMouseDown);
            scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
            scrollContainer.removeEventListener('mouseup', handleMouseUp);
            scrollContainer.removeEventListener('mousemove', handleMouseMove);

            scrollContainer.removeEventListener('touchstart', handleTouchStart);
            scrollContainer.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);

    return (
        <div ref={scrollContainerRef} className={`flex ${newsNumberedList === 4 ? 'flex-col' : 'flex-row'} gap-y-8`} style={{ overflowX: "auto", scrollbarWidth: "none" }}>
            <div className={`flex ${newsNumberedList === 4 ? 'flex-col' : 'md:space-x-4'} space-y-4 items-end`}>
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
