'use client';
import { Armchair, Ticket, Popcorn, Percent,CupSoda } from 'lucide-react'; 
import Link from 'next/link';
import React, { useState } from 'react';

export default function Places({ selectedSeats }) {
    
    const [promocode, setPromocode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [isPromocodeApplied, setIsPromocodeApplied] = useState(false);
    const [ticketType, setTicketType] = useState('Adult');
    const [foodDrinkSelections, setFoodDrinkSelections] = useState([]);

    const handlePromocodeChange = (event) => {
        setPromocode(event.target.value);
    };

    const handleApplyPromocode = () => {
        if (promocode === 'DISCOUNT10') {
            setDiscount(0.1); // 10% discount
            setIsPromocodeApplied(true);
            alert('Promocode applied! 10% discount');
        } else {
            setIsPromocodeApplied(false);
            alert('Invalid promocode');
        }
    };

    const handleTicketTypeChange = (event) => {
        setTicketType(event.target.value);
    };

    const handleFoodDrinkChange = (event) => {
        const { name, checked } = event.target;
        setFoodDrinkSelections(prevSelections => {
            if (checked) {
                return [...prevSelections, name];
            } else {
                return prevSelections.filter(item => item !== name);
            }
        });
    };

    const seatPrices = {
        'Adult': 20,
        'Kid': 10,
    };

    const foodDrinkPrices = {
        'Popcorn': 5,
        'Coca': 2,
    };

    const seatPrice = seatPrices[ticketType];
    const totalSeatPrice = selectedSeats.length * seatPrice;
    const totalFoodDrinkPrice = foodDrinkSelections.reduce((total, item) => total + foodDrinkPrices[item], 0);
    const totalPrice = totalSeatPrice + totalFoodDrinkPrice;
    const discountedPrice = totalPrice * (1 - discount);
    const CalculatorTotal = isPromocodeApplied ? `${discountedPrice.toFixed(2)}$` : `${totalPrice}$`;

    const handleApplyToCheckout = () => {
        localStorage.setItem('promocode', promocode);
        localStorage.setItem('discount', discount.toString());
        localStorage.setItem('ticketType', ticketType);
        localStorage.setItem('foodDrinkSelections', JSON.stringify(foodDrinkSelections));
        localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
        localStorage.setItem('Total', CalculatorTotal);
    };

    return (
        <div className="md:h-[400px] h-[800px] md:w-2/3 w-full md:p-8 flex rounded-lg shadow-md mx-auto glass flex-col md:flex-row">
            <div className="md:w-1/2 w-full h-2/3 p-4 md:border-r-2 border-gray-300 flex flex-col md:gap-y-2 ">
                <p className="font-bold text-2xl mb-4">Options</p>
                <div className="flex flex-col space-y-2 h-2/3">
                    <div className='flex flex-col'>
                        <label htmlFor="ticketType" className="block mb-2">Ticket Type:</label>
                        <div>
                            {Object.keys(seatPrices).map(type => (
                                <label key={type} className="flex items-center mb-2">
                                    <input 
                                        type="radio" 
                                        name="ticketType" 
                                        value={type}
                                        className="mr-2"
                                        checked={ticketType === type}
                                        onChange={handleTicketTypeChange}
                                    />
                                    <Ticket className="mr-2" /> {type}
                                </label>
                            ))}
                            <label className="block mb-2">Food & Drinks:</label>
                            {Object.keys(foodDrinkPrices).map(item => (
                                <label key={item} className="flex items-center mb-2">
                                    <input 
                                        type="checkbox" 
                                        name={item} 
                                        className="mr-2"
                                        onChange={handleFoodDrinkChange}
                                        checked={foodDrinkSelections.includes(item)}
                                    />
                                        {item === 'Popcorn' ? (
                                            <Popcorn className="mr-2" />
                                        ) : (
                                            <CupSoda className="mr-2" />
                                        )}
                                    
                                    {item} - {foodDrinkPrices[item]}$
                                </label>
                            ))}
                        </div>
                    </div>
                    
                    <div className="relative flex items-center">
                        <input 
                            type="text" 
                            placeholder="Enter promocode" 
                            className="p-3 w-full rounded-lg bg-transparent border" 
                            value={promocode}
                            onChange={handlePromocodeChange}
                        />
                        <Percent className="absolute right-3 text-gray-400" />
                    </div>
                   
                </div>
            </div>
            <div className="md:w-1/2 w-full h-full p-4 flex flex-col gap-y-2">
                <h2 className="font-bold text-2xl mb-4">Selected Seats</h2>
                <div className="space-y-4 overflow-y-auto max-h-60 h-[80%] ">
                    <div className="grid grid-cols-4 gap-y-2">
                        {selectedSeats.map(seat => (
                            <div key={seat} className="text-lg flex items-center gap-x-2">
                                <Armchair />
                                {seat}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-between items-center ">
                    <p className="font-bold text-xl">Total:</p>
                    <p className="text-xl">{CalculatorTotal}</p>
                </div>
                {/* Handle Login before buy ticket */}
                <Link href="/booking/ticket/order">
                    <button 
                        className="color-1 text-white p-3 rounded w-full transition duration-200 "
                        onClick={handleApplyToCheckout}
                    >
                        Apply to Checkout
                    </button>
                </Link>
            </div>
        </div>
    );
}
