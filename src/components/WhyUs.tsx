"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

export default function WhyUs() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-slate-100 overflow-hidden px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-16 text-center"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">
            Why <span className="text-orange-500">R.E.A Public School?</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-slate-600 max-w-2xl mx-auto">
            Nurturing bright minds through quality education, discipline, and innovation.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Left Main CardContent */}
          <motion.div variants={itemVariants} className="lg:col-span-2 group bg-white rounded-2xl shadow-sm border border-slate-100 p-8 lg:p-12 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Quality Education</h3>
            <h4 className="text-lg font-medium text-orange-500 mb-6">Where Learning Builds the Future</h4>
            
            <div className="space-y-6 text-slate-600 leading-relaxed mb-12">
              <p>
                At R.E.A Public School, education goes beyond textbooks. We focus on nurturing young minds with knowledge, discipline, creativity, and strong moral values. Our goal is to build a strong academic foundation while encouraging curiosity, confidence, and leadership in every student.
              </p>
              
              <div>
                <h4 className="text-slate-900 font-bold mb-2">A Place for Growth & Inspiration</h4>
                <p>We provide a safe and supportive environment where students can explore their talents, build confidence, and develop essential life skills that prepare them for future success.</p>
              </div>

              <div>
                <h4 className="text-slate-900 font-bold mb-2">Our Commitment</h4>
                <p>With dedicated teachers, modern teaching methods, and value-based learning, R.E.A Public School ensures that every child receives personal attention and the opportunity to reach their full potential.</p>
              </div>
            </div>

            {/* Statistics Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-100">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl font-black text-orange-500 mb-1">300+</span>
                <span className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Students</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl font-black text-blue-500 mb-1">25+</span>
                <span className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Dedicated Teachers</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl font-black text-green-500 mb-1">95%</span>
                <span className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Parent Satisfaction</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side Cards */}
          <div className="flex flex-col gap-8 lg:col-span-1">
            {/* Right Card 1 */}
            <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop" 
                  alt="Teacher guiding students" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Supportive Learning Environment</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Our teachers provide personal attention and guidance, ensuring every student feels valued and confident. We encourage academic growth along with emotional and social development.
                </p>
              </div>
            </motion.div>

            {/* Right Card 2 */}
            <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=800&auto=format&fit=crop" 
                  alt="Cultural activity" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Creative & Inspiring Atmosphere</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  At R.E.A Public School, learning extends beyond the classroom. Students participate in arts, cultural programs, sports, and innovative activities that build creativity, teamwork, and leadership.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
