'use client';

import { WeekGrid } from '@/features/board/components/WeekGrid/WeekGrid';
import { BoardHeader } from '@/features/board/index';

export default function BoardPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="px-4 md:px-8 pt-4 md:pt-8">
        <BoardHeader />
      </div>

      <div className="px-4 md:px-8 pt-6">
        <WeekGrid />
      </div>
    </main>
  );
}
