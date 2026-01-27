import { useState } from "react";

type Props = {
    placeholder?: string;
};


export function TaskItem({ placeholder = 'Write something...' }: Props) {

    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false)

    const hasText = value.trim().length > 0;

    if (!hasText && !isEditing) {
        return (
            <div
                onClick={() => setIsEditing(true)}
                className="
                    h-6
                    w-full
                    cursor-text
                    border-b
                    border-slate-200
                "
            />
        );
    }

    if (isEditing) {
        return (
            <textarea
                autoFocus
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onBlur={() => {
                    if (value.trim() === '') {
                        setIsEditing(false);
                    } else {
                        setIsEditing(false);
                    }
                }}
                className="
                w-full
                resize-none
                rounded-md
                border
                border-slate-200
                bg-white
                px-2
                py-1.5
                text-sm
                leading-relaxed
                focus:border-blue-500
                focus:outline-none
                focus:ring-1
                focus:ring-blue-400
            "
                rows={4}
                placeholder={placeholder}
            />
        )
    }

    return (
        <>
            <div
                onClick={() => setIsModalOpen(true)}
                className="cursor-pointer rounded-md border px-2 py-1.5 text-sm"
            >
                {value}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                    <div className="w-full max-w-xl rounded-2xl bg-[#E4E8FF] p-6 opacity-85">
                        <input type="text" className="w-full bg-transparent text-[22px] font-medium text-slate-700 outline-none mb-4 focus:outline-none" />
                        <div className="h-px w-full bg-slate-500/70 mb-4" />
                        <textarea
                            placeholder="Add some extra notes here"
                            rows={6}
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            className="w-full resize-none bg-transparent text-[14px] text-slate-600 placeholder:text-slate-400 outline-none leading-relaxed"
                        />
                        <div className="mt-4 flex justify-self-end">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="rounded-md bg-slate-900 px-4 py-2 text-white"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}