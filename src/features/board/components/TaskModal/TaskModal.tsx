type Props = {
    value: string;
    onChange: (value: string) => void;
    onClose: () => void;
}

export function TaskModal({ value, onChange, onClose }: Props) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="w-full max-w-xl rounded-2xl bg-[#E4E8FF] p-6 shadow-2xl">
                <input type="text" className="mb-4 w-full bg-transparent text-[22px] font-medium text-slate-700 outline-none" value={value} onChange={(e) => onChange(e.target.value)} />
                <div className="mb-4 h-px w-full bg-slate-500/70" />
                <textarea 
                    rows={6}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full resize-none bg-transparent text-[14px] text-slate-600 outline-none"
                />
            </div>
        </div>
    );
}