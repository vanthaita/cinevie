import TicketCheckout from "@/components/TicketCheckout";
export default function Checkout() {
    return (
        <main className=" m-20" style={{height: 'calc(110vh - 80px)'}}>
            <section className="px-20">
                <TicketCheckout />
            </section>
        </main>
    );
}