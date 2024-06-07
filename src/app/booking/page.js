import BookingCastSection from "@/components/BookingCastSection";
import BookingHero from "@/components/BookingHero";
import BookingMovie from "@/components/BookingMovie";
import BookingSet from "@/components/BookingSet";
import SuggestMovie from "@/components/SuggestMovie";

export default function Booking() {
    return (
        <>
            <section>
                <BookingHero />
            </section>
            <section>
                <BookingMovie />
            </section>

            <section className=" md:mb-[8rem] mb-[2rem]">
                <BookingCastSection />
            </section>
            <section>
                <BookingSet />
            </section>
            <section>
                <SuggestMovie />
            </section>
        </>
    );
}