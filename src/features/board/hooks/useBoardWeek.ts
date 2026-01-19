'use client'
import { useState } from "react";

export function useBoardWeek() {
    
    //fecha inicial
    const [startDate, setStartDate] = useState(
        new Date(2026,0,12)
    );

    const goNextWeek = () => {

        setStartDate((prev) => {
            console.log(prev);
            const next = new Date(prev);
            next.setDate(prev.getDate() + 7);
            return next;
        })
        
    }

    const goPrevWeek = () => {
        setStartDate((prev) => {
            const next = new Date(prev);
            next.setDate(prev.getDate() - 7);
            return next;
        })
    }

    return {
        startDate,
        goNextWeek,
        goPrevWeek
    }
}