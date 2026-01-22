import { useState } from "react";

type Props = {
    placeholder?: string;
};


export function TaskItem({ placeholder = 'Write something...' }: Props) {

    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState('');

    if (!isEditing) {
        return (
            <div
                onClick={() => setIsEditing(true)}
                className="
                    h-6
                    w-full
                    cursor-text
                    border-b
                    border-slate-200
                    text-sm
                    text-slate-400
                "
            >
            </div>
        );
    }

    return (
        <textarea
            autoFocus
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={() => {
                if (value.trim() === '') {
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