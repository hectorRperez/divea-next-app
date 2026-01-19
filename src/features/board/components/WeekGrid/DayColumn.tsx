type DayColumnProps = {
  day: {
    date: Date;
    shortLabel: string;
    dayNumber: number;
  };
};

export function DayColumn({ day }: DayColumnProps) {
  return (
    <div className="flex-1">
      {/* Header del día */}
      <div className="mb-4">
        <div className="flex items-baseline justify-between">
          <span className="text-sm font-medium text-slate-400">{day.shortLabel}</span>

          <span className="text-lg font-semibold text-black">{day.dayNumber}</span>
        </div>

        <div className="mt-2 h-px w-full bg-black" />
      </div>

      {/* Content placeholder */}
      <div className="space-y-3">
        <div className="h-4 w-full rounded bg-slate-100" />
        <div className="h-4 w-5/6 rounded bg-slate-100" />
        <div className="h-4 w-4/6 rounded bg-slate-100" />
      </div>
    </div>
  );
}
