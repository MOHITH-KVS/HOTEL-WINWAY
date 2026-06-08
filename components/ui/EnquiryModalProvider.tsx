'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface EnquiryModalContextType {
  openModal: (roomType?: string) => void;
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
  roomType: string;
  message: string;
}

export default function EnquiryModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultRoom, setDefaultRoom] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const openModal = (roomType?: string) => {
    setDefaultRoom(roomType || '');
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
      `*Email:* ${data.email}\n` +
      `*Phone:* ${data.phone}\n` +
      `*Check-in:* ${data.checkin}\n` +
      `*Check-out:* ${data.checkout}\n` +
      `*Guests:* ${data.guests}\n` +
      `*Room Type:* ${data.roomType}\n` +
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
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 lightbox-backdrop"
              onClick={closeModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative bg-white w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              {/* Header */}
              <div className="bg-[#1A1A1A] px-8 py-6 flex items-start justify-between">
                <div>
                  <p className="text-[#C9A96E] text-xs tracking-[0.2em] uppercase mb-1">Hotel Winway</p>
                  <h2 className="font-serif text-2xl text-white font-light">Send Enquiry</h2>
                </div>
                <button
                  onClick={closeModal}
                  className="text-white/60 hover:text-white transition-colors mt-1"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-8">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-[#C9A96E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                    </div>
                    <h3 className="font-serif text-xl text-[#1A1A1A] mb-2">Thank You!</h3>
                    <p className="text-sm text-[#57585B] mb-6">
                      Your enquiry has been sent via WhatsApp. Our team will get back to you shortly.
                    </p>
                    <div className="flex gap-3 justify-center">
                      <a
                        href="tel:+910731-661-1111"
                        className="flex items-center gap-2 px-5 py-3 border border-[#C9A96E] text-[#C9A96E] text-sm hover:bg-[#C9A96E] hover:text-white transition-all"
                      >
                        <Phone size={14} /> Call Us
                      </a>
                      <button
                        onClick={closeModal}
                        className="px-5 py-3 bg-[#1A1A1A] text-white text-sm hover:bg-[#333] transition-colors"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Quick CTAs */}
                    <div className="flex gap-3 mb-6 pb-6 border-b border-gray-100">
                      <a
                        href="tel:+910731-661-1111"
                        className="flex-1 flex items-center justify-center gap-2 py-3 border border-[#C9A96E] text-[#C9A96E] text-sm font-medium hover:bg-[#C9A96E] hover:text-white transition-all"
                      >
                        <Phone size={14} /> Call Now
                      </a>
                      <a
                        href="https://wa.me/919752411015"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white text-sm font-medium hover:bg-[#1da851] transition-colors"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.03 18.99a9.955 9.955 0 01-4.766-1.21L2.93 19.07l1.323-4.228A9.987 9.987 0 012 11.97C2 6.477 6.477 2 11.97 2S22 6.477 22 11.97s-4.477 9.97-9.97 9.97z"/>
                        </svg>
                        WhatsApp
                      </a>
                    </div>

                    <p className="text-xs text-[#8B8A84] -mt-2 mb-4">Or fill the form below:</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-[#57585B] mb-1.5 font-medium">Full Name *</label>
                        <input
                          {...register('name', { required: true })}
                          className={`form-input ${errors.name ? 'border-red-400' : ''}`}
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[#57585B] mb-1.5 font-medium">Phone *</label>
                        <input
                          {...register('phone', { required: true })}
                          className={`form-input ${errors.phone ? 'border-red-400' : ''}`}
                          placeholder="+91 XXXXX XXXXX"
                          type="tel"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-[#57585B] mb-1.5 font-medium">Email *</label>
                      <input
                        {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })}
                        className={`form-input ${errors.email ? 'border-red-400' : ''}`}
                        placeholder="your@email.com"
                        type="email"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-[#57585B] mb-1.5 font-medium">Check-in Date</label>
                        <input
                          {...register('checkin')}
                          className="form-input"
                          type="date"
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[#57585B] mb-1.5 font-medium">Check-out Date</label>
                        <input
                          {...register('checkout')}
                          className="form-input"
                          type="date"
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-[#57585B] mb-1.5 font-medium">Guests</label>
                        <select {...register('guests')} className="form-input">
                          <option>1 Guest</option>
                          <option>2 Guests</option>
                          <option>3 Guests</option>
                          <option>4+ Guests</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs text-[#57585B] mb-1.5 font-medium">Room Type</label>
                        <select {...register('roomType')} className="form-input" defaultValue={defaultRoom}>
                          <option value="">Any Room</option>
                          <option value="Standard Room">Standard Room</option>
                          <option value="Deluxe Room">Deluxe Room</option>
                          <option value="Junior Suite">Junior Suite</option>
                          <option value="Presidential Suite">Presidential Suite</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-[#57585B] mb-1.5 font-medium">Message</label>
                      <textarea
                        {...register('message')}
                        className="form-input resize-none"
                        rows={3}
                        placeholder="Any special requests or questions..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#C9A96E] hover:bg-[#b8955a] text-white py-4 text-sm font-semibold tracking-[0.1em] uppercase transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Mail size={16} />
                      Send via WhatsApp
                    </button>

                    <p className="text-xs text-[#8B8A84] text-center">
                      No booking required. Our team will confirm availability and pricing.
                    </p>
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
