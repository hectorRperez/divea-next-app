type Props = {
  monthLabel: string;
  onPrev: () => void;
  onNext: () => void;
};

export function BoardHeaderDesktop(props: Props) {
  return (
    <header className="flex items-start justify-between pb-4">
      <h1 className="text-5xl font-bold">{props.monthLabel}</h1>

      <div className="flex items-center gap-3">
        <button 
        onClick={props.onPrev}
        className="h-10 w-10 rounded-full bg-slate-900 text-white"
        >‹
        </button>
        <button
          onClick={props.onNext}
          className="h-10 w-10 rounded-full bg-slate-900 text-white"
        >
          ›
        </button>
      </div>
    </header>
  );
}
