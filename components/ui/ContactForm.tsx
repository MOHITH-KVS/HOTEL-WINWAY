'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const subject = encodeURIComponent('Hotel Winway Enquiry');
    const body = encodeURIComponent(
      `Name: ${data.name}\n` +
      `Phone: ${data.phone}\n` +
      `Email: ${data.email}\n` +
      `Subject: ${data.subject}\n` +
      `Message: ${data.message || 'N/A'}`
    );
    window.location.href = `mailto:rdm@hotelwinway.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-6 bg-white/5 border border-white/10 p-8">
        <h3 className="text-lg text-[#C9A96E] mb-2 tracking-wide uppercase" style={{ fontFamily: 'var(--font-display)' }}>Thank You</h3>
        <p className="text-sm text-[#8B8A84] mb-6">Your enquiry has been prepared. Please send the email to complete the process.</p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a href="tel:+910731-661-1111" className="btn btn-outline-light btn-sm">
            <Phone size={14} /> Call Now
          </a>
          <button type="button" onClick={() => setSubmitted(false)} className="btn btn-primary btn-sm">New Enquiry</button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} suppressHydrationWarning style={{ background: 'transparent' }} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label style={{ fontSize: '10px', letterSpacing: '0.15em', color: '#AAAAAA', fontWeight: '600', marginBottom: '6px', display: 'block', textTransform: 'uppercase' }}>Name *</label>
          <input {...register('name', { required: true })} suppressHydrationWarning className="placeholder-[rgba(255,255,255,0.45)] w-full outline-none focus:border-[#C4A882]" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '0', color: '#FFFFFF', fontSize: '14px', padding: '14px 18px', fontFamily: 'Lato, sans-serif' }} placeholder="Your name" />
        </div>
        <div>
          <label style={{ fontSize: '10px', letterSpacing: '0.15em', color: '#AAAAAA', fontWeight: '600', marginBottom: '6px', display: 'block', textTransform: 'uppercase' }}>Phone *</label>
          <input {...register('phone', { required: true })} suppressHydrationWarning className="placeholder-[rgba(255,255,255,0.45)] w-full outline-none focus:border-[#C4A882]" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '0', color: '#FFFFFF', fontSize: '14px', padding: '14px 18px', fontFamily: 'Lato, sans-serif' }} placeholder="+91 XXXXX XXXXX" type="tel" />
        </div>
      </div>

      <div>
        <label style={{ fontSize: '10px', letterSpacing: '0.15em', color: '#AAAAAA', fontWeight: '600', marginBottom: '6px', display: 'block', textTransform: 'uppercase' }}>Email *</label>
        <input {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })} suppressHydrationWarning className="placeholder-[rgba(255,255,255,0.45)] w-full outline-none focus:border-[#C4A882]" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '0', color: '#FFFFFF', fontSize: '14px', padding: '14px 18px', fontFamily: 'Lato, sans-serif' }} placeholder="your@email.com" type="email" />
      </div>

      <div>
        <label style={{ fontSize: '10px', letterSpacing: '0.15em', color: '#AAAAAA', fontWeight: '600', marginBottom: '6px', display: 'block', textTransform: 'uppercase' }}>Subject *</label>
        <input {...register('subject', { required: true })} suppressHydrationWarning className="placeholder-[rgba(255,255,255,0.45)] w-full outline-none focus:border-[#C4A882]" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '0', color: '#FFFFFF', fontSize: '14px', padding: '14px 18px', fontFamily: 'Lato, sans-serif' }} placeholder="Subject" />
      </div>

      <div>
        <label style={{ fontSize: '10px', letterSpacing: '0.15em', color: '#AAAAAA', fontWeight: '600', marginBottom: '6px', display: 'block', textTransform: 'uppercase' }}>Message</label>
        <textarea {...register('message')} suppressHydrationWarning className="placeholder-[rgba(255,255,255,0.45)] w-full outline-none focus:border-[#C4A882] resize-none" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '0', color: '#FFFFFF', fontSize: '14px', padding: '14px 18px', fontFamily: 'Lato, sans-serif' }} rows={3} placeholder="Any special requests or questions..." />
      </div>

      <button type="submit" suppressHydrationWarning className="w-full flex justify-center py-4 bg-[#B8965A] text-white font-semibold text-[13px] tracking-[0.2em] uppercase hover:bg-[#9A7B3A] transition-colors" style={{ padding: '16px', border: 'none', borderRadius: '0', cursor: 'pointer' }}>
        SEND ENQUIRY
      </button>
    </form>
  );
}
