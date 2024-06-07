'use client'
import { useState, useEffect } from 'react';

export const useOrderState = () => {
    const [promocode, setPromocode] = useState('');
    const [name, setName] = useState('Doraemon: Nobita and the Earth Symphony Orchestra');
    const [discount, setDiscount] = useState(0);
    const [ticketType, setTicketType] = useState('');
    const [foodDrinkSelections, setFoodDrinkSelections] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [total, setTotal] = useState(0);
    const [showTime, setShowTime] = useState('23 March 2024');
    const [time, setTime] = useState('1h47m');
    const [address, setAddress] = useState('4040 Saint Marys Avenue');
    useEffect(() => {
        const storedPromocode = localStorage.getItem('promocode') || '';
        const storedDiscount = parseFloat(localStorage.getItem('discount')) || 0;
        const storedTicketType = localStorage.getItem('ticketType') || '';
        const storedFoodDrinkSelections = JSON.parse(localStorage.getItem('foodDrinkSelections')) || [];
        const storedSelectedSeats = JSON.parse(localStorage.getItem('selectedSeats')) || [];
        const storedTotal = parseFloat(localStorage.getItem('Total')) || 0;
        // const movieName = parseFloat(localStorage.getItem('movieMame'));
        // const showTime = parseFloat(localStorage.getItem('showtime'));
        // setShowTime(showTime);
        // setName(movieName);
        setPromocode(storedPromocode);
        setDiscount(storedDiscount);
        setTicketType(storedTicketType);
        setFoodDrinkSelections(storedFoodDrinkSelections);
        setSelectedSeats(storedSelectedSeats);
        setTotal(storedTotal);
    }, []);

    return {
        showTime, setShowTime,
        time, setTime,
        address, setAddress,
        name, setName,
        promocode, setPromocode,
        discount, setDiscount,
        ticketType, setTicketType,
        foodDrinkSelections, setFoodDrinkSelections,
        selectedSeats, setSelectedSeats,
        total, setTotal
    };
}
