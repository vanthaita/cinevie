'use client'
import { ChevronRightIcon } from "lucide-react"
import ImageGallery from "@/components/cinemasbox"
export default function Cinemas() {
    
    return (
        <main>
            <section className="relative">
                <div className="relative bg-black flex justify-start items-start h-[calc(80vh-80px)] md:h-[calc(100vh-80px)]">
                    <div className="w-full h-full absolute md:h-[calc(100vh-80px)]">
                        <img src="https://cdn.galaxycine.vn/media/2023/11/22/1200_1700638319306.jpg" className="w-full h-full"/>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-black/[.6]"></div>
                    <div className="h-auto md:h-[310px] z-30 md:mx-20 mx-8 w-[90%] md:w-[75%] my-10 md:my-20 flex flex-col justify-start items-start gap-y-4">
                        <h1 className="font-bold text-3xl md:text-6xl">
                            Our Cinemas
                        </h1>
                        <p className="font-normal text-base md:text-lg lg:text-xl text-gray-400">
                            CineVie is an innovative cinema chain dedicated to providing diverse and unforgettable cinematic experiences. 
                            With cutting-edge facilities and a strong emphasis on showcasing a wide range of films, including mainstream blockbusters, independent gems, and international masterpieces, CineVie caters to all tastes and preferences. 
                            Beyond just screening movies, CineVie creates a vibrant community hub for film enthusiasts. Through special events, discussions, and screenings, CineVie fosters a sense of connection and engagement among its audience, encouraging exploration and appreciation of the art of cinema.
                            From plush seating to top-notch sound and projection systems, every aspect of the CineVie experience is designed to immerse audiences in the magic of storytelling on the silver screen.
                        </p>
                    </div>
                </div>
            </section>

            {/* 0 */}
            <section className="w-full md:px-20 px-8 flex flex-col justify-center items-center md:mb-32 h-[calc(90vh-80px)] md:h-[calc(100vh-80px)] md:mt-10">
                <div className="h-full z-30 w-full flex flex-col justify-start items-start gap-y-4 mt-20">
                    <h1 className="font-bold md:text-2xl text-xl mb-4">Aeon Mall Cinema</h1>
                    <p className="font-normal md:text-xl text-sm text-gray-400">
                        Aeon Mall Cinema is part of the Aeon Mall, a large shopping center chain in many countries, especially in Asia. Its a popular entertainment destination for both families and friends. Aeon Mall Cinema offers a modern movie-watching experience with the latest films from various genres. With standard or VIP theaters, Aeon Mall Cinema is committed to providing customers with comfort and an excellent movie-watching experience.
                    </p>
                    <div className="flex flex-col items-start gap-y-1">
                        <div className="flex flex-row justify-start items-start gap-x-2">
                            <h2 className="font-medium md:text-xl text-sm">Address: </h2>
                            <p className="font-normal md:text-xl text-sm text-gray-400"> 23 Main Street, Springfield, IL, USA</p>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-x-2">
                            <h2 className="font-medium md:text-xl text-sm">Phone: </h2>
                            <p className="font-normal md:text-xl text-sm text-gray-400"> 123 456 789 </p>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-x-2">
                            <h2 className="font-medium md:text-xl text-sm">Hours: </h2>
                            <p className="font-normal md:text-xl text-sm text-gray-400">10 AM - 10 PM</p>
                        </div>
                    </div>

                    <div className="flex justify-start flex-col md:mt-6 w-full relative">
                        <ImageGallery/>
                        <div className="absolute flex flex-row z-[9999px] top-[40%] right-2 transform -translate-y-1/2 p-2 rounded-full md:hidden fa fa-arrow-right">
                            <ChevronRightIcon className="w-12 h-12 text-white font-bold" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 1 */}
            <section className="w-full md:px-20 px-8 flex flex-col justify-center items-center md:mb-32 h-[calc(90vh-80px)] md:h-[calc(100vh-80px)]">
                <div className="h-full z-30 w-full flex flex-col justify-start items-start gap-y-4 mt-20">
                    <h1 className="font-bold md:text-2xl text-xl mb-4">Sunshine 60 Cinema</h1>
                    <p className="font-normal md:text-xl text-sm text-gray-400">
                        Sunrise 60 Cinema is known for its modern facilities and vibrant atmosphere. Located in the heart of the city, it attracts movie lovers with its diverse range of films, from the latest Hollywood blockbusters to indie films. The cinema offers various viewing options, including standard and VIP seats, ensuring a comfortable and memorable experience for all visitors.
                    </p>
                    <div className="flex flex-col items-start gap-y-1">
                        <div className="flex flex-row justify-start items-start gap-x-2">
                            <h2 className="font-medium md:text-xl text-sm">Address: </h2>
                            <p className="font-normal md:text-xl text-sm text-gray-400"> 123 Main Street, Springfield, IL, USA</p>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-x-2">
                            <h2 className="font-medium md:text-xl text-sm">Phone: </h2>
                            <p className="font-normal md:text-xl text-sm text-gray-400"> 123 456 789 </p>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-x-2">
                            <h2 className="font-medium md:text-xl text-sm">Hours: </h2>
                            <p className="font-normal md:text-xl text-sm text-gray-400">10 AM - 10 PM</p>
                        </div>
                    </div>

                    <div className="flex justify-start flex-col md:mt-6 w-full relative">
                        <ImageGallery/>
                        
                        <div className="absolute flex flex-row z-[9999px] top-[40%] right-2 transform -translate-y-1/2 p-2 rounded-full md:hidden fa fa-arrow-right">
                            <ChevronRightIcon className="w-12 h-12 text-white font-bold" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2 */}
            <section className="w-full md:px-20 px-8 flex flex-col justify-center items-center md:mb-32 h-[calc(90vh-80px)] md:h-[calc(100vh-80px)]">
                <div className="h-full z-30 w-full flex flex-col justify-start items-start gap-y-4 mt-20">
                    <h1 className="font-bold md:text-2xl text-xl mb-4">Sunshine 60 Cinema</h1>
                    <p className="font-normal md:text-xl text-sm text-gray-400">
                        Sunrise 60 Cinema is known for its modern facilities and vibrant atmosphere. Located in the heart of the city, it attracts movie lovers with its diverse range of films, from the latest Hollywood blockbusters to indie films. The cinema offers various viewing options, including standard and VIP seats, ensuring a comfortable and memorable experience for all visitors.
                    </p>
                    <div className="flex flex-col items-start gap-y-1">
                        <div className="flex flex-row justify-start items-start gap-x-2">
                            <h2 className="font-medium md:text-xl text-sm">Address: </h2>
                            <p className="font-normal md:text-xl text-sm text-gray-400"> 123 Main Street, Springfield, IL, USA</p>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-x-2">
                            <h2 className="font-medium md:text-xl text-sm">Phone: </h2>
                            <p className="font-normal md:text-xl text-sm text-gray-400"> 123 456 789 </p>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-x-2">
                            <h2 className="font-medium md:text-xl text-sm">Hours: </h2>
                            <p className="font-normal md:text-xl text-sm text-gray-400">10 AM - 10 PM</p>
                        </div>
                    </div>

                    <div className="flex justify-start flex-col md:mt-6 w-full relative">
                        <ImageGallery/>
                        
                        <div className="absolute flex flex-row z-[9999px] top-[40%] right-2 transform -translate-y-1/2 p-2 rounded-full md:hidden fa fa-arrow-right">
                            <ChevronRightIcon className="w-12 h-12 text-white font-bold" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3 */}
            <section className="w-full md:px-20 px-8 flex flex-col justify-center items-center md:mb-32 h-[calc(90vh-80px)] md:h-[calc(100vh-80px)]">
                <div className="h-full z-30 w-full flex flex-col justify-start items-start gap-y-4 mt-20">
                    <h1 className="font-bold md:text-2xl text-xl mb-4">Star City Cinema</h1>
                    <p className="font-normal md:text-xl text-sm text-gray-400">
                        Star City Cinema offers an immersive movie-watching experience with its state-of-the-art sound and projection systems. Conveniently located near public transportation, it provides easy access for visitors. The cinema features comfortable seating and a wide variety of snacks and beverages, making it a popular choice for both casual and dedicated moviegoers.
                    </p>
                    <div className="flex flex-col items-start gap-y-1">
                        <div className="flex flex-row justify-start items-start gap-x-2">
                            <h2 className="font-medium md:text-xl text-sm">Address: </h2>
                            <p className="font-normal md:text-xl text-sm text-gray-400"> 456 Elm Street, Springfield, IL, USA</p>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-x-2">
                            <h2 className="font-medium md:text-xl text-sm">Phone: </h2>
                            <p className="font-normal md:text-xl text-sm text-gray-400"> 987 654 321 </p>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-x-2">
                            <h2 className="font-medium md:text-xl text-sm">Hours: </h2>
                            <p className="font-normal md:text-xl text-sm text-gray-400">10 AM - 11 PM</p>
                        </div>
                    </div>

                    <div className="flex justify-start flex-col md:mt-6 w-full relative">
                        <ImageGallery />
                        <div className="absolute flex flex-row z-[9999px] top-[40%] right-2 transform -translate-y-1/2 p-2 rounded-full md:hidden fa fa-arrow-right">
                            <ChevronRightIcon className="w-12 h-12 text-white font-bold" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
