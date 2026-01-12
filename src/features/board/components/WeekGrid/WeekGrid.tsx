'use client'

import { DayColumn } from "./DayColumn";

const MOCK_DAYS = [
    { id: 'mon', label: 'Mon', date: '29 Dec' },
    { id: 'tue', label: 'Tue', date: '30 Dec' },
    { id: 'wed', label: 'Wed', date: '31 Dec' },
    { id: 'thu', label: 'Thu', date: '1 Jan' },
    { id: 'fri', label: 'Fri', date: '2 Jan' },
    { id: 'sat', label: 'Sat', date: '3 Jan' },
    { id: 'sun', label: 'Sun', date: '4 Jan' },
];

export function WeekGrid() {
    return (
        <section className="w-full">
            <div className="flex flex-col gap-6 lg:hidden">
                {/* Mobile */}
                {MOCK_DAYS.map((day)=>(
                    <DayColumn key={day.id} day={day} />
                ))}
            </div>
            
            {/* Desktop - Kanban layout */}
            <div className="hidden lg:grid lg:grid-cols-7 lg:gap-4 lg:h-[calc(100vh-160px)]">
                {
                    MOCK_DAYS.map((day)=> (
                        <DayColumn key={day.id} day={day} />
                    ))
                }
            </div>
        </section>
    );
}