'use client'
import Bento from "@/components/Bento";
import NewsCard from "@/components/NewsCard";
import NewsCardBento from "@/components/NewsCardBento";
import PaginationNews from "@/components/Pagination";
import news from "@/constant/News";
import Link from "next/link";
import { useState, useEffect } from "react";
export default function NewsPage() {    
    const [start, setStart] = useState(0);
    const [dynamicHeight, setDynamicHeight] = useState('calc(100vh - 80px)');

    useEffect(() => {
        const handleResize = () => {
            const height = window.innerWidth < 768 ? 'calc(90vh - 80px)' : 'calc(100vh - 80px)';
            setDynamicHeight(height);
        };

        handleResize(); 

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <main>
            <section className=" bg-black">
                <div className="relative flex justify-start items-start" style={{height: dynamicHeight}}>
                    <div className=" w-full h-full absolute px-8 md:px-20 md:mt-16 mt-10 gap-y-8 flex flex-col rounded-xl" style={{height: 'calc(100vh - 80px)'}}>
                        <h1 className=" font-bold text-3xl">Today news</h1>
                        <Bento />
                    </div>
                </div>
            </section>

            {/*  */}
            <section>
                <div className="relative flex justify-start items-start">
                    <div className=" w-full px-8 sm:px-20 pb-12 mt-10 gap-y-8 flex flex-col rounded-xl h-auto" >
                        <h1 className=" font-bold text-3xl">Trending news</h1>
                        
                        <div className=" flex flex-col justify-start gap-y-12">
                        {/* 0 */}
                        {news.slice(0,3).map((item, index) => (
                            <div className=" w-full h-full" key={index}>
                                <div className=" w-full lg:h-[256px] flex flex-col md:flex-row justify-between gap-8">
                                    <div className="w-full md:w-[428px] h-full rounded-2xl" style={{ aspectRatio: 2 }}>
                                        <NewsCardBento image_url={item.urlToImage} />
                                    </div>
                                        <div className=" h-full w-full md:w-[65%] flex flex-col justify-start gap-y-4 ">
                                            <Link href={item.url}>
                                                <h2 className=" font-bold text-2xl line-clamp-2 cursor-pointer hover:underline">{item.title}</h2>
                                            </Link>
                                            <p className=" font-normal text-xl text-gray-500 line-clamp-3">
                                                {item.description}
                                            </p>
                                        </div>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="relative flex justify-start items-start bg-black">
                    <div className=" w-full px-8 sm:px-20 mt-10 gap-y-8 flex flex-col rounded-xl h-full justify-center">
                        <h1 className=" font-bold text-3xl">Latest news</h1>
                        <div className=" flex flex-col justify-start gap-y-12 h-full w-full">
                            <div className=" flex flex-col gap-x-[24px] w-full gap-y-14">
                                <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between gap-x-4 gap-y-16">
                                    {news.slice(start, start + 9).map((item, index) => (
                                        <div className=" flex flex-col justify-start gap-y-2" key={index}>
                                            <div className=" w-full rounded-2xl overflow-hidden" style={{ aspectRatio: 2/1 }}>
                                                <NewsCardBento image_url={item.urlToImage} url={item.url}/>
                                            </div>
                                            <div className=" flex flex-col justify-start">
                                                <p className=" text-sm text-gray-500">23hr ago</p>
                                                <Link href={item.url}>
                                                    <p className=" text-sm hover:underline cursor-pointer">{item.title}</p>
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <PaginationNews start={start} setStart={setStart} totalPages={3}/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
        
}