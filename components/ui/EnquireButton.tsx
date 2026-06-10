'use client';

import Link from 'next/link';
import { Mail } from 'lucide-react';

export default function EnquireButton() {
  return (
    <Link href="/contact" className="btn btn-accent w-full text-center flex items-center justify-center gap-2">
      <Mail size={16} />
      Send Enquiry
    </Link>
  );
}
