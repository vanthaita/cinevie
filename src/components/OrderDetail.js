import { useOrderState } from "@/Hooks/useOrderState";
import { Armchair, CalendarDays, Clock, MapPin, Tag } from "lucide-react";

export default function OrderDetail() {
  const {
    promocode,
    discount,
    name,
    time,
    address,
    showTime,
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
    <div className="md:w-[45%] w-full md:absolute flex flex-col justify-between glass right-0 p-6 gap-y-6 rounded-lg shadow-lg">
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-row items-start gap-x-4">
          {/* <div className="w-[180px] h-[220px] rounded-lg overflow-hidden hidden md:block">
            <img src="https://image.tmdb.org/t/p/original/uo9YugJrnsa1v2aH2Ye7LcmaTbZ.jpg" alt="Movie Poster" className="w-full h-full object-cover" />
          </div> */}
          <div>
            <h1 className="font-bold text-2xl">{name}</h1>
            <div className="flex flex-row items-center gap-x-2 mt-2 text-gray-300">
              <Clock className="w-5 h-5" />
              <p className="text-lg">{time}</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-row items-center gap-x-2 text-gray-300">
          <MapPin className="w-5 h-5" />
          <p className="text-lg">{address}</p>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold">Selected Seats:</h4>
          <div className="grid grid-cols-4 gap-y-2 w-[80%]">
            {selectedSeats.map(seat => (
              <div key={seat} className="text-lg flex items-center gap-x-2">
                <Armchair className="text-[#8B5CF6]" />
                <span>{seat}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold">Showtime</h4>
          <div className="flex flex-row items-center gap-x-2 text-gray-300">
            <CalendarDays className="w-5 h-5" />
            <p className="text-lg">{showTime}</p>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold">Promo Code:</h4>
          <div className="flex flex-row items-center gap-x-2 text-gray-300">
            <Tag className="w-5 h-5" />
            <p className="text-lg">{promocode ? promocode : 'No promo code applied'}</p>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold">Food & Drink Selections:</h4>
          {foodDrinkSelections.length > 0 ? (
            <ul className="list-disc list-inside text-lg text-gray-300">
              {foodDrinkSelections.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-lg text-gray-500">No food or drink selections made</p>
          )}
        </div>
      </div>
      
      <div className="flex justify-between items-center pt-2 gap-x-2 border-t-2">
        <h4 className="text-lg font-semibold">Total:</h4>
        <p className="text-2xl font-bold">{formatCurrency(total)}</p>
      </div>
    </div>
  );
}
