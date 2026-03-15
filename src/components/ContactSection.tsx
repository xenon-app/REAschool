"use client";

import React, { useState } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear fields
        
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-white px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 min-h-[600px]">
        
        {/* Left Side: Visual / Testimonial */}
        <div className="relative w-full md:w-1/2 bg-gradient-to-br from-orange-400 via-red-500 to-orange-600 flex flex-col justify-center items-center p-8 md:p-12 min-h-[400px]">
          
          {/* Glassmorphism Card */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-md shadow-2xl">
            <span className="text-4xl text-white opacity-50 block mb-4">“</span>
            <p className="text-white text-lg font-medium leading-relaxed mb-8">
              R.E.A Public School has provided an exceptional foundation for my child. 
              The balance between academics and personal growth is truly impressive.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden ring-2 ring-white/20">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" 
                  alt="Parent Reviewer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-white font-bold leading-tight">Sarah Chen</p>
                <p className="text-white/70 text-sm">Parent of Grade 8 Student</p>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-8 flex gap-2">
            <div className="w-6 h-2 rounded-full bg-white opacity-100 transition-all"></div>
            <div className="w-2 h-2 rounded-full bg-white opacity-40"></div>
            <div className="w-2 h-2 rounded-full bg-white opacity-40"></div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 py-12 md:py-20">
          <h2 className="text-sm font-bold tracking-widest uppercase text-orange-500 mb-2">
            Have Questions?
          </h2>
          <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">Contact Us</h3>
          
          {status === 'success' ? (
            <div className="bg-green-50 border border-green-100 p-8 rounded-2xl text-center space-y-4 animate-in fade-in zoom-in duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-2">
                <CheckCircle2 size={32} />
              </div>
              <h4 className="text-xl font-bold text-green-900">Message Sent!</h4>
              <p className="text-green-700 font-medium">
                We will consult you very quickly. Thank you for reaching out!
              </p>
            </div>
          ) : (
            <>
              <p className="text-sm md:text-base text-slate-500 mb-8 leading-relaxed">
                Please reach out to us and we will get back to you at the speed of light.
              </p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700">Full Name</label>
                  <input 
                    id="name"
                    name="name"
                    type="text" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ex. John Doe" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-black"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700">Email Address</label>
                  <input 
                    id="email"
                    name="email"
                    type="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="hello@example.com" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-black"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-bold text-slate-700">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message here..." 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none placeholder:text-slate-400 text-black"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full bg-slate-900 text-white font-bold py-4 rounded-full hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="animate-spin" size={20} /> Sending...
                    </>
                  ) : 'Send Message'}
                </button>
                
                {status === 'error' && (
                  <p className="text-red-500 text-sm font-medium text-center">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}
              </form>
            </>
          )}
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
