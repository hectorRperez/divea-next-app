import { useEffect, useRef } from 'react';
import { ModalPortal } from '@/shared/ui/ModalPortal/index';

type Props = {
  value: string;
  onChange: (value: string) => void;
  onClose: () => void;
};

export function TaskModal({ onClose }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <ModalPortal>
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center" onClick={onClose}>
        <div className="rounded-2xl bg-[#E4E8FF] p-6 w-full max-w-xl">
          <input type="text" ref={inputRef} className="w-full bg-transparent text-2xl outline-none" />
        </div>
      </div>
    </ModalPortal>
  );
}
