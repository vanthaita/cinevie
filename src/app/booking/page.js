'use client'
import useUserInfo from "@/Hooks/useUserInfo";
import BookingCastSection from "@/components/BookingCastSection";
import BookingHero from "@/components/BookingHero";
import BookingMovie from "@/components/BookingMovie";
import BookingSet from "@/components/BookingSet";
import SuggestMovie from "@/components/SuggestMovie";
import AuthContext from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";
export default function Booking() {
  const {authInfo} = useContext(AuthContext);
  const router = useRouter();
  if(!authInfo) {
    router.push("/login")
  }
  
  return (
    <main className="flex flex-col md:gap-y-8">
      <section className="md:h-[calc(100vh-80px)] h-[calc(60vh-80px)]">
        <BookingHero />
      </section>
      <section className="h-[calc(60vh - 80px)] md:h-[calc(100vh - 80px)] md:mt-10">
        <BookingMovie />
      </section>
      <section className="md:h-[calc(90vh - 100px)] h-[calc(60vh - 80px)] md:mt-10">
        <BookingCastSection />
      </section>
      <section className="h-[calc(80vh - 80px)] md:h-[calc(100vh - 80px)] md:mt-10">
        <BookingSet />
      </section>
      <section className="h-[calc(70vh - 80px)] md:h-[calc(100vh - 80px)] md:mt-10">
        <SuggestMovie />
      </section>
    </main>
  );
}
