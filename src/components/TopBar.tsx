import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-slate-900 text-slate-300 py-2 px-6 lg:px-8 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <MapPin size={14} className="text-orange-400" />
          <span>Dhanushi, Sitamarhi</span>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
          <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
            <Phone size={14} className="text-orange-400" />
            <span>+91 72096 67550</span>
          </div>
          <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
            <Mail size={14} className="text-orange-400" />
            <span>divyanshucmd@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
