'use client';

import { useEnquiryModal } from '@/components/ui/EnquiryModalProvider';
import { Mail } from 'lucide-react';

export default function EnquireButton() {
  const { openModal } = useEnquiryModal();
  return (
    <button type="button" onClick={() => openModal()} className="btn btn-accent w-full">
      <Mail size={16} />
      Send Enquiry
    </button>
  );
}
