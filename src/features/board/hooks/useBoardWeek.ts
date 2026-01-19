'use client'
import { useState } from "react";

function getStartOfWeek(date: Date) {
    const d = new Date(date);
    const day = d.getDay();
    const diff = day === 0 ? -6 : 1 - day;

    d.setDate(d.getDate() + diff);
    d.setHours(0, 0, 0, 0);

    return d;
}

export function useBoardWeek() {

    //fecha inicial
    const [startDate, setStartDate] = useState(() => 
        getStartOfWeek(new Date())
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