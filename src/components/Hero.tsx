"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-white pt-10 pb-20 lg:pt-20 lg:pb-32">
      {/* Background Decor */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      ></div>
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-orange-400/20 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-400/10 blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">

          {/* Left Column: Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-sm font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-coral-500 mb-6 drop-shadow-sm">
              R.E.A PUBLIC SCHOOL
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight mb-6">
              Shaping Bright Minds for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Better Tomorrow</span>
            </h2>
            <h3 className="text-xl md:text-2xl font-medium text-slate-700 leading-snug mb-6">
              Providing quality education, modern learning environments, and values that prepare students for success in academics and life.
            </h3>
            <p className="text-base text-slate-500 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed md:text-lg">
              At our school, we nurture curiosity, creativity, and confidence. Our dedicated teachers and innovative curriculum empower students to achieve excellence and become responsible global citizens.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#about" className="block w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
                About us
              </a>
              <a href="/contact" className="block w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-700 hover:text-orange-500 hover:border-orange-500 font-semibold rounded-full shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center">
                Contact us
              </a>
            </div>
          </motion.div>

          {/* Right Column: Visual */}
          <motion.div
            className="flex-1 w-full relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 group">
              <img
                src="rea school image.png"
                alt="REA Public School Campus"
                className="w-full h-[400px] lg:h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Visual Accents - Hidden on small mobile */}
            <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-2xl shadow-xl hidden sm:flex items-center gap-4 animate-bounce shrink-0" style={{ animationDuration: '3s' }}>
              <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                ⭐
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Excellence</p>
                <p className="text-xs text-slate-500">In Education</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
