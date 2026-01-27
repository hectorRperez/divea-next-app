import { useState } from "react";
import { TaskModal } from "../TaskModal/index";

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

            {isModalOpen && <TaskModal value={value} onChange={setValue} onClose={()=> setIsModalOpen(false)} />}
        </>
    );
}