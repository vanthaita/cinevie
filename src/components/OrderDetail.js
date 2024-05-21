import { useOrderState } from "@/Hooks/useOrderState";
import { Armchair } from "lucide-react";

export default function OrderDetail() {
  const {
    promocode,
    discount,
    ticketType,
    foodDrinkSelections,
    selectedSeats,
    total,
  } = useOrderState();

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <div className="md:w-[45%] w-full md:absolute flex flex-col justify-between glass right-0 p-6 gap-y-4  rounded-lg shadow-lg">
      <div className="flex flex-row justify-start items-start gap-x-4 ">
        {/* <div className="w-[180px] h-[220px] rounded-lg overflow-hidden">
          <img src="https://image.tmdb.org/t/p/original/uo9YugJrnsa1v2aH2Ye7LcmaTbZ.jpg" alt="Movie Poster" className="w-full h-full rounded-lg object-cover" />
        </div> */}
        <div>
            <h1 className="font-bold text-xl mt-4">The Gorila</h1>
            <p className="text-lg text-gray-300">1h 44m</p>
        </div>
      </div>
      <div>
        <p className="text-lg ">Aeon Mall</p>
        <p className="text-lg ">Address: [Insert Address Here]</p>
      </div>
      <div>
        <h4 className="text-lg font-semibold">Selected Seats:</h4>
        <div className="grid grid-cols-4 gap-y-2 w-[80%]">
          {selectedSeats.map(seat => (
            <div key={seat} className="text-lg flex items-center gap-x-2">
              <Armchair />
              <span>{seat}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold">Showtimes</h4>
        <p className="text-lg">W 12/5/2024</p>
      </div>

      <div>
        <h4 className="text-lg font-semibold">Promo Code:</h4>
        <p className="text-lg">{promocode ? promocode : 'No promo code applied'}</p>
      </div>
      <div>
        <h4 className="text-lg font-semibold">Food & Drink Selections:</h4>
        {foodDrinkSelections.length > 0 ? (
          <ul className="list-disc list-inside text-lg">
            {foodDrinkSelections.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-lg text-gray-500">No food or drink selections made</p>
        )}
      </div>
      <div className=" justify-center flex pt-2 gap-x-2 items-center border-t-2 flex-row">
        <h4 className="text-lg font-semibold">Total:</h4>
        <p className="text-xl font-bold">{formatCurrency(total)}</p>
      </div>
    </div>
  );
}
