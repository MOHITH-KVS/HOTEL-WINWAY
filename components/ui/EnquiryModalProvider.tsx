'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface EnquiryModalContextType {
  openModal: () => void;
  closeModal: () => void;
}

const EnquiryModalContext = createContext<EnquiryModalContextType>({
  openModal: () => {},
  closeModal: () => {},
});

export const useEnquiryModal = () => useContext(EnquiryModalContext);

interface FormData {
  name: string;
  email: string;
  phone: string;
  checkin: string;
  checkout: string;
  guests: string;
  message: string;
}

export default function EnquiryModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    defaultValues: { guests: '1 Guest' },
  });

  const openModal = () => {
    setIsOpen(true);
    setSubmitted(false);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => { reset(); setSubmitted(false); }, 300);
  };

  const onSubmit = (data: FormData) => {
    const msg = encodeURIComponent(
      `*Hotel Winway Enquiry*\n\n` +
      `*Name:* ${data.name}\n` +
      `*Phone:* ${data.phone}\n` +
      `*Email:* ${data.email}\n` +
      `*Check-in:* ${data.checkin || 'Not specified'}\n` +
      `*Check-out:* ${data.checkout || 'Not specified'}\n` +
      `*Guests:* ${data.guests}\n` +
      `*Message:* ${data.message || 'N/A'}`
    );
    window.open(`https://wa.me/919752411015?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <EnquiryModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          >
            <motion.div
              className="absolute inset-0 lightbox-backdrop"
              onClick={closeModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="relative bg-white w-full max-w-xl max-h-[90vh] overflow-y-auto"
              style={{ border: '1px solid var(--color-border)' }}
            >
              <div className="bg-[#45443f] px-8 py-5 flex items-start justify-between">
                <div>
                  <p className="section-label text-[#a67c5b] mb-1">Hotel Winway</p>
                  <h2 className="text-xl text-white font-normal tracking-[0.08em] uppercase" style={{ fontFamily: 'var(--font-display)' }}>
                    Send Enquiry
                  </h2>
                </div>
                <button onClick={closeModal} className="text-white/60 hover:text-white transition-colors mt-1" aria-label="Close">
                  <X size={20} />
                </button>
              </div>

              <div className="p-8">
                {submitted ? (
                  <div className="text-center py-6">
                    <h3 className="text-lg text-[#45443f] mb-2 tracking-wide uppercase" style={{ fontFamily: 'var(--font-display)' }}>Thank You</h3>
                    <p className="text-sm text-[#57585b] mb-6">Your enquiry has been sent. Our team will respond shortly.</p>
                    <div className="flex gap-3 justify-center flex-wrap">
                      <a href="tel:+910731-661-1111" className="btn btn-outline btn-sm">
                        <Phone size={14} /> Call Now
                      </a>
                      <button type="button" onClick={closeModal} className="btn btn-primary btn-sm">Close</button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="flex gap-3 mb-2 pb-5 border-b border-[#e6e6e6]">
                      <a href="tel:+910731-661-1111" className="btn btn-outline btn-sm flex-1">
                        <Phone size={14} /> Call Now
                      </a>
                      <a href="https://wa.me/919752411015" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-sm flex-1">
                        WhatsApp
                      </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] text-[#57585b] mb-1.5 font-semibold tracking-[0.12em] uppercase" style={{ fontFamily: 'var(--font-display)' }}>Name *</label>
                        <input {...register('name', { required: true })} className={`form-input ${errors.name ? 'border-red-400' : ''}`} placeholder="Your name" />
                      </div>
                      <div>
                        <label className="block text-[10px] text-[#57585b] mb-1.5 font-semibold tracking-[0.12em] uppercase" style={{ fontFamily: 'var(--font-display)' }}>Phone *</label>
                        <input {...register('phone', { required: true })} className={`form-input ${errors.phone ? 'border-red-400' : ''}`} placeholder="+91 XXXXX XXXXX" type="tel" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] text-[#57585b] mb-1.5 font-semibold tracking-[0.12em] uppercase" style={{ fontFamily: 'var(--font-display)' }}>Email *</label>
                      <input {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })} className={`form-input ${errors.email ? 'border-red-400' : ''}`} placeholder="your@email.com" type="email" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] text-[#57585b] mb-1.5 font-semibold tracking-[0.12em] uppercase" style={{ fontFamily: 'var(--font-display)' }}>Check-In Date</label>
                        <input {...register('checkin')} className="form-input" type="date" min={new Date().toISOString().split('T')[0]} />
                      </div>
                      <div>
                        <label className="block text-[10px] text-[#57585b] mb-1.5 font-semibold tracking-[0.12em] uppercase" style={{ fontFamily: 'var(--font-display)' }}>Check-Out Date</label>
                        <input {...register('checkout')} className="form-input" type="date" min={new Date().toISOString().split('T')[0]} />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] text-[#57585b] mb-1.5 font-semibold tracking-[0.12em] uppercase" style={{ fontFamily: 'var(--font-display)' }}>Number of Guests</label>
                      <select {...register('guests')} className="form-input">
                        <option>1 Guest</option>
                        <option>2 Guests</option>
                        <option>3 Guests</option>
                        <option>4+ Guests</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] text-[#57585b] mb-1.5 font-semibold tracking-[0.12em] uppercase" style={{ fontFamily: 'var(--font-display)' }}>Message</label>
                      <textarea {...register('message')} className="form-input resize-none" rows={3} placeholder="Any special requests or questions..." />
                    </div>

                    <button type="submit" className="btn btn-accent w-full">
                      <Mail size={16} />
                      Send Enquiry
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </EnquiryModalContext.Provider>
  );
}
