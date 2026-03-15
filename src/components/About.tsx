import React from 'react';
import { BookOpen, Target, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-32 -mr-16 -mt-16 bg-white rounded-full blur-[100px] pointer-events-none mix-blend-multiply opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-sm font-bold tracking-widest uppercase text-orange-500 mb-2">
            About Us
          </h2>
          <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            Nurturing <span className="text-orange-500">Young Minds</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-6 text-slate-600 text-lg leading-relaxed relative">
            <div className="absolute -left-6 top-6 w-1 h-20 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full"></div>
            <p className="pl-6">
              <strong className="text-slate-900">At REA Public School, Dhanushi,</strong> we are dedicated to nurturing young minds and building a strong foundation for lifelong learning. Our institution focuses on providing quality education in a supportive and inspiring environment where students can develop academically, socially, and morally.
            </p>
            <p className="pl-6">
              Located in the heart of Dhanushi, our school is committed to delivering a balanced curriculum that combines academic excellence with extracurricular activities. With experienced educators, modern teaching methods, and a student-centered approach, we aim to encourage curiosity, creativity, and confidence in every learner.
            </p>
            <p className="pl-6">
              We believe that education is not only about knowledge but also about character building. Our mission is to cultivate responsible, disciplined, and compassionate individuals who are prepared to face future challenges and contribute positively to society.
            </p>
            <p className="pl-6 font-medium text-slate-800">
              At REA Public School, we strive to create a safe and motivating environment where students are encouraged to explore their talents, think independently, and achieve their full potential.
            </p>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center aspect-square gap-4 hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                    <BookOpen size={28} />
                  </div>
                  <h4 className="font-bold text-slate-900">Academic Excellence</h4>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800" 
                  alt="School Library" 
                  className="rounded-3xl shadow-lg border border-slate-100 h-64 object-cover w-full scale-95"
                />
              </div>
              
              <div className="space-y-4 mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800" 
                  alt="Students in classroom" 
                  className="rounded-3xl shadow-lg border border-slate-100 h-64 object-cover w-full scale-105"
                />
                <div className="bg-slate-900 p-6 rounded-3xl shadow-lg text-white flex flex-col items-center justify-center text-center aspect-square gap-4 hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center text-white">
                    <Target size={28} />
                  </div>
                  <h4 className="font-bold">Character Building</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
