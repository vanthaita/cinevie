import TicketCheckout from "@/components/TicketCheckout";
export default function Checkout() {
    return (
        <main className="md:m-20 h-full md:h-[calc(110vh-80px)]">
            <section className="md:px-20 px-8">
                <TicketCheckout />
            </section>
        </main>
    );
}