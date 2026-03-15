"use client";

import React from 'react';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WhyUs from '@/components/WhyUs';
import FacultySection from '@/components/FacultySection';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee"

const testimonials = [
  {
    author: {
      name: "Ramesh Sharma",
      handle: "Parent of Grade 5 Student",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ramesh"
    },
    text: "The dedication of teachers at R.E.A is truly remarkable. My son has shown great improvement in both academics and discipline.",
  },
  {
    author: {
      name: "Suman Devi",
      handle: "Parent of Grade 2 Student",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Suman"
    },
    text: "Safety and modern learning environment were my top priorities, and R.E.A Public School excels in both. Highly recommended!",
  },
  {
    author: {
      name: "Anil Pathak",
      handle: "Parent of Grade 8 Student",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anil"
    },
    text: "Excellent facilities and focus on moral values. The best school in the Sitamarhi region for overall character development.",
  }
];

export function TestimonialsSectionDemo() {
  return (
    <TestimonialsSection
      title="Trusted by Parents worldwide"
      description="Join thousands of happy parents who are already building the future with our school"
      testimonials={testimonials}
    />
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-500 selection:text-white">
      <TopBar />
      <Navbar />
      <Hero />
      <About />
      <WhyUs />
      <Gallery />
      <FacultySection />
      <TestimonialsSectionDemo />
      <Footer />
    </main>
  );
}
