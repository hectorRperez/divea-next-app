'use client';

import { WeekGrid } from '@/features/board/components/WeekGrid/WeekGrid';
import { useBoardWeek } from '@/features/board/hooks/useBoardWeek';
import { BoardHeader } from '@/features/board/index';

export default function BoardPage() {
  const { startDate, goNextWeek, goPrevWeek } = useBoardWeek();

  return (
    <main className="min-h-screen bg-white">
      <div className="px-4 md:px-8 pt-4 md:pt-8">
        <BoardHeader startDate={startDate} onNext={goNextWeek} onPrev={goPrevWeek} />
      </div>

      <div className="px-4 md:px-8 pt-6">
        <WeekGrid startDate={startDate} />
      </div>
    </main>
  );
}
