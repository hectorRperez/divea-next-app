type Props = {
  monthLabel: string;
  onPrev: () => void;
  onNext: () => void;
};

export function BoardHeaderMobile(props: Props) {
  return (
    <header className="flex items-center justify-between px-4 pt-4">
      <h1 className="text-lg font-semibold text-blue-500">{props.monthLabel}</h1>

      <div className="flex items-center gap-2">
        <button className="h-8 w-8 rounded-full bg-slate-900 text-white">‹</button>
        <button className="h-8 w-8 rounded-full bg-slate-900 text-white">›</button>
      </div>
    </header>
  );
}
