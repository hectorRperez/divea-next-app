'use client';

import { BoardHeaderDesktop } from './BoardHeaderDesktop';
import { BoardHeaderMobile } from './BoardHeaderMobile';

export function BoardHeader() {
  return (
    <>
      <div className="block md:hidden">
        <BoardHeaderMobile monthLabel="Board header mobile" onPrev={() => {}} onNext={() => {}} />
      </div>
      <div className="hidden md:block">
        <BoardHeaderDesktop monthLabel="Board header desktop" onNext={() => {}} onPrev={() => {}} />
      </div>
    </>
  );
}
