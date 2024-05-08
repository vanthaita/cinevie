import CreditCard from "@/components/CreditCard";

export default function OrderHistory() {
    return (
        <div className=" w-full h-full flex justify-center items-start p-8 flex-col">
            <div className="flex flex-row w-full">
                <CreditCard />
                <CreditCard />
            </div>
        </div>
    )
}