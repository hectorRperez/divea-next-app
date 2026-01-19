'use client';

import { DayColumn } from './DayColumn';

type Props = {
  startDate: Date;
}

export function WeekGrid({startDate}: Props) {

  const days = Array.from({length: 7}).map((_, index) => {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + index);

    return {
      id: date.toISOString(),
      date,
      shortLabel: date.toLocaleDateString('en-US', { weekday: 'short' }),
      dayNumber: date.getDate(),
    }
  })

  return (
    <section className="w-full">
      <div className="flex flex-col gap-6 lg:hidden">
        {/* Mobile */}
        <h1>hola</h1>
      </div>

      {/* Desktop - Kanban layout */}
      <div className="hidden lg:grid lg:grid-cols-7 lg:gap-4 lg:h-[calc(100vh-160px)]">
        {days.map((day) => (
          <DayColumn key={day.id} day={day} />
        ))}
      </div>
    </section>
  );
}
