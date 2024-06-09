/* eslint-disable jsx-a11y/alt-text */
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PromotionsAndOffers() {
    return (
        <main className="relative h-[270vh] md:h-[285vh]">
            <section className="relative">
                <div className="relative flex justify-start items-start h-[calc(70vh-80px)] md:h-[calc(100vh-80px)]">
                    <div className="w-full absolute md:px-20 mt-10 md:rounded-xl h-[calc(80vh-80px)]">
                        <img src="https://25174313.fs1.hubspotusercontent-eu1.net/hub/25174313/hubfs/assets_comparehero/featuredimage_movies.png?width=1020&name=featuredimage_movies.png" className="w-full md:h-full h-2/3 md:rounded-xl object-fill" />
                    </div>
                </div>
            </section>


            <section className="relative">
                <div className="relative flex justify-start items-start w-full h-[calc(80vh-80px)] md:h-[calc(75vh-80px)]">
                    <div className="w-full h-full absolute md:px-20 px-8 md:mt-10 mt-6 rounded-xl flex md:flex-row flex-col-reverse md:justify-between justify-center items-center" style={{ height: 'calc(65vh - 80px)' }}>
                        <div className="md:w-1/2 w-full h-full mb-4 md:mb-0 md:block hidden">
                            <img src="https://www.shutterstock.com/image-vector/online-cinema-art-movie-watching-600nw-700366096.jpg" className="w-full h-full rounded-xl object-cover" />
                        </div>
                        <div className="md:w-[45%] w-full h-full flex flex-col justify-start items-start gap-y-[15px] md:gap-y-[25px]">
                            <div className="flex flex-col gap-y-2">
                                <h1 className="font-bold text-xl md:text-2xl">C’STUDENT - 15$ FOR STUDENTS</h1>
                                <p className="font-normal text-xs md:text-sm">SAME PRICE 15$/2D FOR STUDENTS/TEACHERS/U22 ALL WEEKEND AT ALL CINESTAR THEATER.</p>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <p className="font-medium text-lg md:text-xl">Condition:</p>
                                <p className="font-normal text-xs md:text-sm">Students present their student ID card or ID card and are under 22 years old.</p>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <p className="font-medium text-lg md:text-xl">Note:</p>
                                <p className="font-normal text-xs md:text-sm">Each card can buy one ticket.</p>
                            </div>
                            <div className="w-full">
                                <Link href="/booking">
                                    <button className="color-1 px-12 py-4 rounded-lg md:w-1/2 w-full">Book tickets now</button>
                                </Link>
                            </div>
                        </div>
                        <div className="md:w-1/2 w-full h-full mb-4 md:mb-0 block md:hidden">
                            <img src="https://img.freepik.com/premium-vector/realistic-popcorn-cinema-movie-watching-concept-online-filmshow-entertainment-3d-cinematic-objects-two-tickets-snack-drink-promotion-flyer-vector-horizontal-isolated-poster_176411-4140.jpg" className="w-full h-full rounded-xl object-cover" />
                        </div>
                    </div>
                </div>
            </section>
            

            {/* Promotion 2 */}
            <section className="relative">
                <div className="relative flex justify-start items-start w-full h-[calc(80vh-80px)] md:h-[calc(75vh-80px)]">
                    <div className="w-full h-full absolute md:px-20 px-8 md:mt-10 mt-6 rounded-xl flex md:flex-row flex-col-reverse md:justify-between justify-center items-center" style={{ height: 'calc(65vh - 80px)' }}>
                        <div className="md:w-[45%] w-full h-full flex flex-col justify-start items-start gap-y-[15px] md:gap-y-[25px]">
                            <div className="flex flex-col gap-y-2">
                                <h1 className="font-bold text-xl md:text-2xl">Senior Citizen Special - 30% Off</h1>
                                <p className="font-normal text-xs md:text-sm">Enjoy a 30% discount on movie tickets for senior citizens all week at all CineStar theaters.</p>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <p className="font-medium text-lg md:text-xl">Condition:</p>
                                <p className="font-normal text-xs md:text-sm">Available for patrons aged 60 and above. Please present a valid ID.</p>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <p className="font-medium text-lg md:text-xl">Note:</p>
                                <p className="font-normal text-xs md:text-sm">Each ID can purchase one discounted ticket.</p>
                                <p className="font-normal text-xs md:text-sm">Not valid on holidays or screenings with surcharges from the film distributor.</p>
                            </div>
                            <div className="w-full">
                            <Link href="/booking">
                                <button className="color-1 px-12 py-4 rounded-lg md:w-1/2 w-full">Book tickets now</button>
                            </Link>
                            </div>
                        </div>
                        <div className="md:w-1/2 w-full h-full mb-4 md:mb-0 block">
                            <img src="https://img.freepik.com/premium-vector/vivid-poster-cinema-promotion_124507-7270.jpg" className="w-full h-full rounded-xl object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Promotion 3 */}
            <section className="relative">
                <div className="relative flex justify-start items-start w-full h-[calc(80vh-80px)] md:h-[calc(75vh-80px)]">
                    <div className="w-full h-full absolute md:px-20 px-8 md:mt-10 mt-6 rounded-xl flex md:flex-row flex-col-reverse md:justify-between justify-center items-center" style={{ height: 'calc(65vh - 80px)' }}>
                        <div className="md:w-1/2 w-full h-full mb-4 md:mb-0 md:block hidden">
                            <img src="https://img.freepik.com/premium-vector/realistic-popcorn-cinema-movie-watching-concept-online-filmshow-entertainment-3d-cinematic-objects-two-tickets-snack-drink-promotion-flyer-vector-horizontal-isolated-poster_176411-4140.jpg" className="w-full h-full rounded-xl object-cover" />
                        </div>
                        <div className="md:w-[45%] w-full h-full flex flex-col justify-start items-start gap-y-[15px] md:gap-y-[25px]">
                            <div className="flex flex-col gap-y-2">
                                <h1 className="font-bold text-xl md:text-2xl">Group Discount - 20% Off</h1>
                                <p className="font-normal text-xs md:text-sm">Get a 20% discount on movie tickets when you come with a group of 4 or more people at CineStar theaters.</p>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <p className="font-medium text-lg md:text-xl">Condition:</p>
                                <p className="font-normal text-xs md:text-sm">Applicable for groups of 4 or more. All tickets must be purchased together.</p>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <p className="font-medium text-lg md:text-xl">Note:</p>
                                <p className="font-normal text-xs md:text-sm">Discount applies only to regular screenings. Not valid on holidays or screenings with surcharges from the film distributor.</p>
                            </div>
                            <div className="w-full">
                            <Link href="/booking">
                                <button className="color-1 px-12 py-4 rounded-lg md:w-1/2 w-full">Book tickets now</button>
                            </Link>
                            </div>
                        </div>
                        <div className="md:w-1/2 w-full h-full mb-4 md:mb-0 block md:hidden">
                            <img src="https://img.freepik.com/premium-vector/realistic-popcorn-cinema-movie-watching-concept-online-filmshow-entertainment-3d-cinematic-objects-two-tickets-snack-drink-promotion-flyer-vector-horizontal-isolated-poster_176411-4140.jpg" className="w-full h-full rounded-xl object-cover" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
