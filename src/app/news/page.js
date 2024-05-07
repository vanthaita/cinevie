import Bento from "@/components/Bento";
import NewsCard from "@/components/NewsCard";
import NewsCardBento from "@/components/NewsCardBento";
import PaginationNews from "@/components/Pagination";

export default function NewsPage() {    
    return (
        <main>
            <section className=" bg-black">
                <div className="relative flex justify-start items-start" style={{height: 'calc(100vh - 80px)'}}>
                    <div className=" w-full h-full absolute px-20 mt-10 gap-y-8 flex flex-col rounded-xl" style={{height: 'calc(100vh - 80px)'}}>
                        <h1 className=" font-bold text-3xl">Today news</h1>
                        <Bento />
                    </div>
                </div>
            </section>

            {/*  */}
            <section>
                <div className="relative flex justify-start items-start" style={{height: 'calc(165vh - 80px)'}}>
                    <div className=" w-full absolute px-20 mt-10 gap-y-8 flex flex-col rounded-xl h-auto" >
                        <h1 className=" font-bold text-3xl">Trending news</h1>
                        
                        <div className=" flex flex-col justify-start gap-y-12">
                        {/* 0 */}
                        <div className=" w-full h-full">
                            <div className=" w-full h-[256px] flex flex-row justify-between gap-x-8">
                                <div className=" w-[428px] h-full rounded-2xl">
                                    <NewsCardBento />
                                </div>
                                <div className=" h-full w-[65%] flex flex-col justify-start gap-y-4 ">
                                    <h2 className=" font-bold text-2xl">Britney Spears Exits Chateau Marmont With Friends After Ambulance Called to Hotel - Entertainment Tonight</h2>
                                    <p className=" font-normal text-xl text-gray-500">
                                    An eyewitness tells ET, Britney came out with Paul Richard Soliz and some others. Someone gave her a blanket to throw over and she had a pillow covering her front. She took a few steps and turned around and went back, not getting into the stretcher they had brought out.
                                     While its not clear if the ambulance was called for Spears, the eyewitness adds that a woman in Spears entourage was seen speaking with paramedics.
                                    </p>
                                </div>

                                
                            </div>
                        </div>
                        {/* 1 */}
                        <div className=" w-full h-full">
                            <div className=" w-full h-[256px] flex flex-row justify-between gap-x-8">
                                <div className=" w-[428px] h-full rounded-2xl">
                                    <NewsCardBento />
                                </div>
                                <div className=" h-full w-[65%] flex flex-col justify-start gap-y-4 ">
                                    <h2 className=" font-bold text-2xl">Britney Spears Exits Chateau Marmont With Friends After Ambulance Called to Hotel - Entertainment Tonight</h2>
                                    <p className=" font-normal text-xl text-gray-500">
                                    An eyewitness tells ET, Britney came out with Paul Richard Soliz and some others. Someone gave her a blanket to throw over and she had a pillow covering her front. She took a few steps and turned around and went back, not getting into the stretcher they had brought out.
                                     While its not clear if the ambulance was called for Spears, the eyewitness adds that a woman in Spears entourage was seen speaking with paramedics.
                                    </p>
                                </div>

                                
                            </div>
                        </div>
                        {/* 2 */}
                        <div className=" w-full h-full">
                            <div className=" w-full h-[256px] flex flex-row justify-between">
                                <div className=" w-[428px] h-full rounded-2xl">
                                    <NewsCardBento />
                                </div>
                                <div className=" h-full w-[65%] flex flex-col justify-start gap-y-4 ">
                                    <h2 className=" font-bold text-2xl">Britney Spears Exits Chateau Marmont With Friends After Ambulance Called to Hotel - Entertainment Tonight</h2>
                                    <p className=" font-normal text-xl text-gray-500">
                                    An eyewitness tells ET, Britney came out with Paul Richard Soliz and some others. Someone gave her a blanket to throw over and she had a pillow covering her front. She took a few steps and turned around and went back, not getting into the stretcher they had brought out.
                                     While its not clear if the ambulance was called for Spears, the eyewitness adds that a woman in Spears entourage was seen speaking with paramedics.
                                    </p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>

                </div>
            </section>



            <section>
                <div className="relative flex justify-start items-start bg-black" style={{height: 'calc(210vh - 80px)'}}>
                    <div className=" w-full absolute px-20 mt-10 gap-y-8 flex flex-col rounded-xl h-full justify-center">
                        <h1 className=" font-bold text-3xl">Latest news</h1>
                        <div className=" flex flex-col justify-start gap-y-12 h-full w-full">
                            <div className=" flex flex-col gap-x-[24px] w-full gap-y-14">
                                <div className=" flex flex-row justify-between gap-x-4">
                                    <div className=" flex flex-col justify-start gap-y-2">
                                        <div className=" w-full h-64 bg-red-400 rounded-2xl">
                                            <NewsCardBento />
                                        </div>
                                        <div className=" flex flex-col justify-start">
                                            <p className=" text-sm text-gray-500">23hr ago</p>
                                            <p className=" text-sm ">An eyewitness tells ET, Britney came out with Paul Richard Soliz and some others. Someone gave her a blanket to throw over and she had a pillow covering her front.</p>
                                        </div>
                                    </div>

                                    <div className=" flex flex-col justify-start gap-y-2">
                                        <div className=" w-full h-64 bg-red-400 rounded-2xl">
                                            <NewsCardBento />
                                        </div>
                                        <div className=" flex flex-col justify-start">
                                            <p className=" text-sm text-gray-500">23hr ago</p>
                                            <p className=" text-sm ">An eyewitness tells ET, Britney came out with Paul Richard Soliz and some others. Someone gave her a blanket to throw over and she had a pillow covering her front.</p>
                                        </div>
                                    </div>

                                    <div className=" flex flex-col justify-start gap-y-2">
                                        <div className=" w-full h-64 bg-red-400 rounded-2xl">
                                            <NewsCardBento />
                                        </div>
                                        <div className=" flex flex-col justify-start">
                                            <p className=" text-sm text-gray-500">23hr ago</p>
                                            <p className=" text-sm ">An eyewitness tells ET, Britney came out with Paul Richard Soliz and some others. Someone gave her a blanket to throw over and she had a pillow covering her front.</p>
                                        </div>
                                    </div>

                                </div>


                                <div className=" flex flex-row justify-between gap-x-4">
                                    <div className=" flex flex-col justify-start gap-y-2">
                                        <div className=" w-full h-64 bg-red-400 rounded-2xl">
                                            <NewsCardBento />
                                        </div>
                                        <div className=" flex flex-col justify-start">
                                            <p className=" text-sm text-gray-500">23hr ago</p>
                                            <p className=" text-sm ">An eyewitness tells ET, Britney came out with Paul Richard Soliz and some others. Someone gave her a blanket to throw over and she had a pillow covering her front.</p>
                                        </div>
                                    </div>

                                    <div className=" flex flex-col justify-start gap-y-2">
                                        <div className=" w-full h-64 bg-red-400 rounded-2xl">
                                            <NewsCardBento />
                                        </div>
                                        <div className=" flex flex-col justify-start">
                                            <p className=" text-sm text-gray-500">23hr ago</p>
                                            <p className=" text-sm ">An eyewitness tells ET, Britney came out with Paul Richard Soliz and some others. Someone gave her a blanket to throw over and she had a pillow covering her front.</p>
                                        </div>
                                    </div>

                                    <div className=" flex flex-col justify-start gap-y-2">
                                        <div className=" w-full h-64 bg-red-400 rounded-2xl">
                                            <NewsCardBento />
                                        </div>
                                        <div className=" flex flex-col justify-start">
                                            <p className=" text-sm text-gray-500">23hr ago</p>
                                            <p className=" text-sm ">An eyewitness tells ET, Britney came out with Paul Richard Soliz and some others. Someone gave her a blanket to throw over and she had a pillow covering her front.</p>
                                        </div>
                                    </div>

                                </div>


                                <div className=" flex flex-row justify-between gap-x-4">
                                    <div className=" flex flex-col justify-start gap-y-2">
                                        <div className=" w-full h-64 bg-red-400 rounded-2xl">
                                            <NewsCardBento />
                                        </div>
                                        <div className=" flex flex-col justify-start">
                                            <p className=" text-sm text-gray-500">23hr ago</p>
                                            <p className=" text-sm ">An eyewitness tells ET, Britney came out with Paul Richard Soliz and some others. Someone gave her a blanket to throw over and she had a pillow covering her front.</p>
                                        </div>
                                    </div>

                                    <div className=" flex flex-col justify-start gap-y-2">
                                        <div className=" w-full h-64 bg-red-400 rounded-2xl">
                                            <NewsCardBento />
                                        </div>
                                        <div className=" flex flex-col justify-start">
                                            <p className=" text-sm text-gray-500">23hr ago</p>
                                            <p className=" text-sm ">An eyewitness tells ET, Britney came out with Paul Richard Soliz and some others. Someone gave her a blanket to throw over and she had a pillow covering her front.</p>
                                        </div>
                                    </div>

                                    <div className=" flex flex-col justify-start gap-y-2">
                                        <div className=" w-full h-64 bg-red-400 rounded-2xl">
                                            <NewsCardBento />
                                        </div>
                                        <div className=" flex flex-col justify-start">
                                            <p className=" text-sm text-gray-500">23hr ago</p>
                                            <p className=" text-sm ">An eyewitness tells ET, Britney came out with Paul Richard Soliz and some others. Someone gave her a blanket to throw over and she had a pillow covering her front.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <PaginationNews/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
        
}