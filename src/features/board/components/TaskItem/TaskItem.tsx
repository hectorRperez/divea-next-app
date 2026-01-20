type Props = {
    placeholder?: string;
};


export function TaskItem({ placeholder = 'Write something...' }: Props) {
    return (
        <textarea 
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
                focus:ring-blue-500
            "
            rows={4}
            placeholder={placeholder}
        />
    )
}