import CreditCard from "@/components/CreditCard";

export default function OrderHistory() {
    return (
        <div className=" w-full h-full flex justify-center items-start md:p-8 p-4 md:mb-0 mb-10 md:mt-0 mt-10">
            <div className="flex md:flex-row flex-col gap-y-8 w-full">
                <CreditCard />
                <CreditCard />
            </div>
        </div>
    )
}