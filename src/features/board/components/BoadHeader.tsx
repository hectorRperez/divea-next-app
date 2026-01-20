'use client';

import { BoardHeaderDesktop } from './BoardHeaderDesktop';
import { BoardHeaderMobile } from './BoardHeaderMobile';

type Props = {
  startDate: Date;
  onNext: () => void;
  onPrev: () => void;
};

function getMonthLabel(date: Date) {
  return date.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });
}

export function BoardHeader({ startDate, onNext, onPrev }: Props) {
  const monthLabel = getMonthLabel(startDate);
  return (
    <>
      <div className="block md:hidden">
        <BoardHeaderMobile monthLabel={monthLabel} onPrev={onPrev} onNext={onNext} />
      </div>
      <div className="hidden md:block">
        <BoardHeaderDesktop monthLabel={monthLabel} onPrev={onPrev} onNext={onNext} />
      </div>
    </>
  );
}
