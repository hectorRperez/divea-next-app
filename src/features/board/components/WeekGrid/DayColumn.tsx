import { TaskItem } from "../TaskItem/index";

type DayColumnProps = {
  day: {
    date: Date;
    shortLabel: string;
    dayNumber: number;
    isToday: boolean;
  };
};

export function DayColumn({ day }: DayColumnProps) {
  return (
    <div className="flex-1">
      {/* Header del día */}
      <div className="mb-4">
        <div className="flex items-baseline justify-between">
          <span className={`text-sm font-medium opacity-50 ${day.isToday ? 'text-blue-500' : 'text-black'}`}>
            {day.shortLabel}
          </span>
          <span className={`text-2xl font-medium ${day.isToday ? 'text-blue-500' : 'text-black'}`}>
            {day.dayNumber}
          </span>
        </div>

        <div className={`mt-2 h-px w-full ${day.isToday ? 'bg-blue-500' : 'bg-black'}`} />
      </div>

      {/* Content placeholder */}
      <div className="flex-1 space-y-3 overflow-auto pr-1">
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </div>
    </div>
  );
}
