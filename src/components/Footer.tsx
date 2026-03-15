import React from 'react';
import { Linkedin, Twitter, MessageCircle, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white py-16 px-6 md:px-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <img src="/sclogo-removebg-preview.png" alt="R.E.A Logo" className="w-12 h-12 brightness-0 invert" />
            <h2 className="text-2xl font-bold tracking-tight">
              R.E.A <span className="text-orange-500">Public School</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
            At R.E.A Public School, we nurture curiosity, creativity, and confidence.
            Empowering students to achieve excellence and become responsible global citizens.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-200">
            Quick Links
          </h3>
          <ul className="space-y-3 text-slate-400 text-sm font-medium">
            <li><a href="/" className="hover:text-orange-400 transition-colors">Home</a></li>
            <li><a href="/#about" className="hover:text-orange-400 transition-colors">About Us</a></li>
            <li><a href="/#faculty" className="hover:text-orange-400 transition-colors">Our Faculty</a></li>
            <li><a href="/contact" className="hover:text-orange-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Connect Section */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-200">
            Connect
          </h3>
          <ul className="space-y-4">
            <li>
              <a 
                href="https://wa.me/917209667550?text=Hello%20I%20want%20more%20information" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-white text-sm font-medium transition-colors"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 text-slate-400 hover:text-white text-sm font-medium transition-colors">
                <Linkedin size={18} /> LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 text-slate-400 hover:text-white text-sm font-medium transition-colors">
                <Twitter size={18} /> Twitter
              </a>
            </li>
            <li>
              <a href="mailto:divyanshucmd@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-white text-sm font-medium transition-colors">
                <Mail size={18} /> divyanshucmd@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500">
        <p>© {currentYear} R.E.A Public School. All Rights Reserved.</p>
        <div className="flex items-center gap-2 text-slate-400 group">
          <span className="h-px w-8 bg-slate-700"></span>
          <span>Created By - <span className="text-orange-400 font-bold tracking-wide italic">Divyanshu Kumar</span></span>
          <span className="h-px w-8 bg-slate-700"></span>
        </div>
        <p className="flex items-center gap-2">
          Dhanushi, Sitamarhi, Bihar, India
        </p>
      </div>
    </footer>
  );
}
