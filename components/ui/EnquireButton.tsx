'use client';

import { useEnquiryModal } from '@/components/ui/EnquiryModalProvider';
import { Mail } from 'lucide-react';

export default function EnquireButton({ roomType }: { roomType?: string }) {
  const { openModal } = useEnquiryModal();
  return (
    <button
      onClick={() => openModal(roomType)}
      className="w-full flex items-center justify-center gap-2 bg-[#C9A96E] hover:bg-[#b8955a] text-white py-4 text-sm font-semibold tracking-[0.1em] uppercase transition-all duration-300"
    >
      <Mail size={16} />
      Send Enquiry
    </button>
  );
}
