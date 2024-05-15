'use client'
import { useState, useEffect } from 'react';

export const useOrderState = () => {
    const [promocode, setPromocode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [ticketType, setTicketType] = useState('');
    const [foodDrinkSelections, setFoodDrinkSelections] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const storedPromocode = localStorage.getItem('promocode') || '';
        const storedDiscount = parseFloat(localStorage.getItem('discount')) || 0;
        const storedTicketType = localStorage.getItem('ticketType') || '';
        const storedFoodDrinkSelections = JSON.parse(localStorage.getItem('foodDrinkSelections')) || [];
        const storedSelectedSeats = JSON.parse(localStorage.getItem('selectedSeats')) || [];
        const storedTotal = parseFloat(localStorage.getItem('Total')) || 0;

        setPromocode(storedPromocode);
        setDiscount(storedDiscount);
        setTicketType(storedTicketType);
        setFoodDrinkSelections(storedFoodDrinkSelections);
        setSelectedSeats(storedSelectedSeats);
        setTotal(storedTotal);
    }, []);

    return {
        promocode, setPromocode,
        discount, setDiscount,
        ticketType, setTicketType,
        foodDrinkSelections, setFoodDrinkSelections,
        selectedSeats, setSelectedSeats,
        total, setTotal
    };
}
